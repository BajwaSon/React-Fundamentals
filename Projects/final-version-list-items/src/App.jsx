import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import TitleHeader from "./components/TitleHeader";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // const foodItems = [
  //   "Oatmeal",
  //   "Grilled Chicken",
  //   "Quinoa Salad",
  //   "Avocado Toast",
  //   "Smoothie Bowl",
  //   "Fruit Salad",
  //   "Veggie Wrap",
  //   "Yogurt Parfait",
  //   "Boiled Eggs",
  //   "Green Salad",
  // ];

  const [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const getFoodItem = e.target.value;
      e.target.value = "";
      console.log(getFoodItem);
      const newfoodItems = [...foodItems, getFoodItem];
      setFoodItems(newfoodItems);
    }
  };

  // if (foodItems.length === 0) {
  //   return <h3>No food items available right now.</h3>;
  // }

  // const emptyMessage =
  // foodItems.length === 0 ? <h3>No food items available right now.</h3> : null;

  return (
    <Container>
      <TitleHeader />
      <FoodInput getKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
