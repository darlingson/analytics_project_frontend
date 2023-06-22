import { useState } from "https://cdn.skypack.dev/react@17.0.1";
function App() {
  const [team, setTeam] = React.useState([]);

  const fetchData = () => {
    return fetch("https://Darlingson.pythonanywhere.com/stats").
    then(response => response.json()).
    then(data => setTeam(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return /*#__PURE__*/(
    React.createElement("main", null, /*#__PURE__*/
    React.createElement("h1", null, "Team List"), /*#__PURE__*/
    React.createElement("ul", null,
    team && team.length > 0 && team.map((teamObj, index) => /*#__PURE__*/
    React.createElement("li", { key: teamObj.match_id }, teamObj.Home)))));




}

const root = ReactDOM.createRoot(document.getElementById("root"));
let rootElement = /*#__PURE__*/React.createElement(App, null);
root.render(rootElement);
