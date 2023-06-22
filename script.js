import { createRoot } from "https://cdn.skypack.dev/react-dom@17.0.1";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render( /*#__PURE__*/
React.createElement(StrictMode, null, /*#__PURE__*/
React.createElement(App, null)));



import "./styles.css";
import React, { useEffect, useState } from "https://cdn.skypack.dev/react@17.0.1";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://Darlingson.pythonanywhere.com/stats").
    then(response => response.json()).
    then(data => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return /*#__PURE__*/(
    React.createElement("main", null, /*#__PURE__*/
    React.createElement("h1", null, "User List"), /*#__PURE__*/
    React.createElement("ul", null,
    user && user.length > 0 && user.map((userObj, index) => /*#__PURE__*/
    React.createElement("li", { key: userObj.id }, userObj.name)))));


}
