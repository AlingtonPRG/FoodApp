import { useState } from "react";
import { HOT_FOOD_LIST } from "../../data";
import FoodCard from "../FoodCard/FoodCard";

const FoodList = () => {
  const [foodList, setFoodList] = useState(HOT_FOOD_LIST)
  return <ul className="h-[600px] ms-16 pt-11 pb-28 flex flex-wrap gap-10 relative overflow-auto no-scrollbar">
    {
      foodList.map(food => (
        <FoodCard key={food.id} food={food} />
      ))
    }
  </ul>;
};

export default FoodList;
