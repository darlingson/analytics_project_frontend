import { useState } from "https://cdn.skypack.dev/react@17.0.1";

function App() {
  const [team, setTeam] = React.useState([]);

  const fetchData = () => {
    return fetch("https://Darlingson.pythonanywhere.com/stats")
      .then((response) => response.json())
      .then((data) => {
        setTeam(data);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>Team List</h1>
      <ul>
        {/*team &&
          team.length > 0 &&
          team.map((teamObj, index) => (
            <li key={teamObj.match_id}>{teamObj.Home}</li>
          ))*/}

        {team &&
          team.length > 0 &&
          team.map((teamObj, index) => (
            <Team name={teamObj.Home} />
            //<li key={teamObj.match_id}>{teamObj.Home}</li>
          ))}
      </ul>
    </main>
  );
}
function Team(props) {
  return (
    <>
      <div className="row">
        <div className="col s12 m7">
          <div className="card-panel teal">
            <span className="white-text">{props.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}

function GoalsChart() {
  const [homegoalData, sethomegoalData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    return fetch("https://Darlingson.pythonanywhere.com/stats")
      .then((response) => response.json())
      .then((data) => {
        const avgGoals = [];
        const homeGoals = [];
        const awayGoals = [];

        for (let i = 0; i < data.length; i++) {
          homeGoals.push(data[i].Home_Goal);
          awayGoals.push(data[i].Away_Goal);
        }

        const TotalGoalsPerGame = data.map(
          (game, index) => game.Home_Goal + game.Away_Goal
        );
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
  return (
    <>
      <div>hi</div>
      <div>{homegoalData}</div>
    </>
  );
}
function RootApp() {
  return (
    <>
      <App />
      <GoalsChart />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
let rootElement = <RootApp />;
root.render(rootElement);
