import "./App.css";
// import { HealthyBasic } from "./component/HealthyBasic";
// import ClockHending from "./component/ClockHending";
// import ClockMotive from "./component/ClockMotive";
// import CurrentTime from "./component/CurrentTime";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegi",
    "Roti",
    "Egg",
    "Milk",
    "Chiken",
    "Meat",
  ];

  return (
    <div>
      <h1>Healthy Food </h1>
      <ul className="list-group">
        {foodItems.map((elements) => (
          <li className="list-1">{elements} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
