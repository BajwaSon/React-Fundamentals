import { useState } from "react";
import SingleFoodItem from "./SingleFoodItem";

function FoodItems({ items }) {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (e, item) => {
    const newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group list-group-flush">
      {items.map((item) => (
        <SingleFoodItem
          key={item}
          foodItem={item}
          boughtItem={activeItems.includes(item)}
          buyFoodItem={(e) => onBuyButton(e, item)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;
