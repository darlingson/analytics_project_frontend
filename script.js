function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`https://dummyjson.com/products`).
    then(response => response.json()).
    then(actualData => {
      setData(actualData.products);
      console.log(data);
    }).
    catch(err => {
      console.log(err.message);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("tbody", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("th", null, "Name"), /*#__PURE__*/
    React.createElement("th", null, "Brand"), /*#__PURE__*/
    React.createElement("th", null, "Image"), /*#__PURE__*/
    React.createElement("th", null, "Price"), /*#__PURE__*/
    React.createElement("th", null, "Rating")),

    data.map((item, index) => /*#__PURE__*/
    React.createElement("tr", { key: index }, /*#__PURE__*/
    React.createElement("td", null, item.title), /*#__PURE__*/
    React.createElement("td", null, item.brand), /*#__PURE__*/
    React.createElement("td", null, /*#__PURE__*/
    React.createElement("img", { src: item.thumbnail, alt: "", height: 100 })), /*#__PURE__*/

    React.createElement("td", null, item.price), /*#__PURE__*/
    React.createElement("td", null, item.rating))))));





}

/*function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())

      .then((actualData) => {
        setData(actualData.products);

        console.log(data);
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="App">{data.stringfy()}</div>;
}*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));