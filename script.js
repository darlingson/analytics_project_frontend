import { useState } from "https://cdn.skypack.dev/react@17.0.1";

function App() {
  const [team, setTeam] = React.useState([]);

  const fetchData = () => {
    return fetch("https://Darlingson.pythonanywhere.com/stats").
    then(response => response.json()).
    then(data => {
      setTeam(data);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return /*#__PURE__*/(
    React.createElement("main", null, /*#__PURE__*/
    React.createElement("h1", null, "Team List"), /*#__PURE__*/
    React.createElement("ul", null,






    team &&
    team.length > 0 &&
    team.map((teamObj, index) => /*#__PURE__*/
    React.createElement(Team, { name: teamObj.Home })
    //<li key={teamObj.match_id}>{teamObj.Home}</li>
    ))));



}
function Team(props) {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col s12 m7" }, /*#__PURE__*/
    React.createElement("div", { className: "card-panel teal" }, /*#__PURE__*/
    React.createElement("span", { className: "white-text" }, props.name))))));





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

      for (let i = 0; i < data.length; i++) {
        homeGoals.push(data[i].Home_Goal);
        awayGoals.push(data[i].Away_Goal);
      }

      const TotalGoalsPerGame = data.map(
      (game, index) => game.Home_Goal + game.Away_Goal);

      const avgGPG =
      TotalGoalsPerGame.reduce((x, y) => x + y) / TotalGoalsPerGame.length;
      const avgHG = homeGoals.reduce((x, y) => x + y) / homeGoals.length;
      const avgAG = awayGoals.reduce((x, y) => x + y) / awayGoals.length;
      avgGoals.push(avgGPG);
      avgGoals.push(avgHG);
      avgGoals.push(avgAG);
      sethomegoalData(avgGoals);
    });
  };
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", null, "hi"), /*#__PURE__*/
    React.createElement("div", null, homegoalData)));


}
function RootApp() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(App, null), /*#__PURE__*/
    React.createElement(GoalsChart, null)));


}

const root = ReactDOM.createRoot(document.getElementById("root"));
let rootElement = /*#__PURE__*/React.createElement(RootApp, null);
root.render(rootElement);