import { useState } from "https://cdn.skypack.dev/react@17.0.1";

function App() {
  const [team, setTeam] = React.useState([]);
  const [showButton, setShowButton] = React.useState(false);

  const toggleButton = () => {
    setShowButton(!showButton);
  };
  const fetchData = () => {
    return fetch("https://darlingson.pythonanywhere.com/teams").
    then(response => response.json()).
    then(data => {
      setTeam(data);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return /*#__PURE__*/(
    React.createElement("main", { className: "hidenTeams" }, /*#__PURE__*/
    React.createElement("h1", null, "Team List"), /*#__PURE__*/
    React.createElement("button", { className: "btn", onClick: toggleButton }, "Show/Hide Teams"),


    showButton && /*#__PURE__*/
    React.createElement("div", null,
    team &&
    team.length > 0 && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("span", null, "Total Number of : ", team.length)) &&


    team.map((teamObj, index) => /*#__PURE__*/React.createElement(Team, { name: teamObj.Team })))));




}
function Team(props) {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col s12 m12" }, /*#__PURE__*/
    React.createElement("div", { className: "card-panel teal" }, /*#__PURE__*/
    React.createElement("span", { className: "white-text" }, props.name))))));





}
function Stat(prop) {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col s4" }, prop.statName), /*#__PURE__*/
    React.createElement("div", { className: "col s4" }, prop.statFig))));



}
function GoalsChart() {
  const [homegoalData, sethomegoalData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    return fetch("https://Darlingson.pythonanywhere.com/stats").
    then(response => response.json()).
    then(data => {
      const avgGoals = [];
      const homeGoals = [];
      const awayGoals = [];

      for (let i = 0; i < data.length; i++) {if (window.CP.shouldStopExecution(0)) break;
        homeGoals.push(data[i].Home_Goal);
        awayGoals.push(data[i].Away_Goal);
      }window.CP.exitedLoop(0);

      const TotalGoalsPerGame = data.map(
      (game, index) => game.Home_Goal + game.Away_Goal);

      const avgGPG =
      TotalGoalsPerGame.reduce((x, y) => x + y) / TotalGoalsPerGame.length;
      const avgHG = homeGoals.reduce((x, y) => x + y) / homeGoals.length;
      const avgAG = awayGoals.reduce((x, y) => x + y) / awayGoals.length;

      avgGoals.push(TotalGoalsPerGame.reduce((x, y) => x + y));
      avgGoals.push(avgGPG);
      avgGoals.push(avgHG);
      avgGoals.push(avgAG);
      sethomegoalData(avgGoals);
    });
  };
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h1", null, "Goal Stats"), ">",



    homegoalData && homegoalData.length > 0 && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Stat, { statName: "Total Goals Scored", statFig: homegoalData[0] }), /*#__PURE__*/
    React.createElement(Stat, { statName: "Average Goals Per Game", statFig: homegoalData[1] }), /*#__PURE__*/
    React.createElement(Stat, {
      statName: "Average Goals for Home Team",
      statFig: homegoalData[2] }), /*#__PURE__*/

    React.createElement(Stat, {
      statName: "Average Goals for Away Team",
      statFig: homegoalData[3] }))));





}
function RootApp() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(App, null), /*#__PURE__*/
    React.createElement(GoalsChart, null), /*#__PURE__*/
    React.createElement(RenderGoalsChart, null)));


}
function RenderGoalsChart() {
  const avgGoals = [];
  const homeGoals = [];
  const awayGoals = [];

  React.useEffect(() => {
    fetchData();
    //renderChart();
  }, []);
  const fetchData = () => {
    return fetch("https://Darlingson.pythonanywhere.com/stats").
    then(response => response.json()).

    then(data => {
      const avgGoals = [];

      const homeGoals = [];

      const awayGoals = [];

      for (let i = 0; i < data.length; i++) {if (window.CP.shouldStopExecution(1)) break;
        homeGoals.push(data[i].Home_Goal);

        awayGoals.push(data[i].Away_Goal);
      }window.CP.exitedLoop(1);

      const TotalGoalsPerGame = data.map(
      (game, index) => game.Home_Goal + game.Away_Goal);


      const avgGPG =
      TotalGoalsPerGame.reduce((x, y) => x + y) / TotalGoalsPerGame.length;

      const avgHG = homeGoals.reduce((x, y) => x + y) / homeGoals.length;

      const avgAG = awayGoals.reduce((x, y) => x + y) / awayGoals.length;

      //avgGoals.push(TotalGoalsPerGame.reduce((x, y) => x + y));

      avgGoals.push(avgGPG);

      avgGoals.push(avgHG);

      avgGoals.push(avgAG);

      //sethomegoalData(avgGoals);
      renderGoalStatChart(avgGoals);
    });
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", { id: "try" }), /*#__PURE__*/
    React.createElement("canvas", { id: "myChart" })));


}

function renderGoalStatChart(data) {
  var xValues = [
  "Average Goals Per Game",
  "Average Home Goals",
  "Average Away Goals"];
  //, "USA", "Argentina"];
  var yValues = data; //[55, 49, 44, 24, 15];
  var barColors = ["red", "green", "blue"]; //, "orange", "brown"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
      {
        backgroundColor: barColors,
        data: yValues }] },



    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Average Goal Stats 2023" } } });



}
const root = ReactDOM.createRoot(document.getElementById("root"));
let rootElement = /*#__PURE__*/React.createElement(RootApp, null);
root.render(rootElement);
