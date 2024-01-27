import { createContext, useState } from "react";
import { HOT_FOOD_LIST } from "../data";

export const FoodContext = createContext(null);

function getDefaultCart() {
  let cart = {};

  for (let i = 0; i < HOT_FOOD_LIST.length; i++) {
    cart[i] = 0;
  }
  return cart;
}

const FoodContextProvider = ({ children }) => {
  const [foodItems, setFoodItem] = useState(getDefaultCart());

  const getTotalPrice = () => {
    let totalAmount = 0;
    for (const itemId in foodItems) {
      if (foodItems[itemId] > 0) {
        const itemInfo = HOT_FOOD_LIST.find(
          (cloth) => cloth.id === Number(itemId)
        );
        totalAmount += itemInfo.price * foodItems[itemId];
      }
    }
    return totalAmount;
  };

  getTotalPrice()

  const addToCart = (itemId) => {
    setFoodItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setFoodItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { foodItems, addToCart, removeFromCart, getTotalPrice };

  return (
    <FoodContext.Provider value={contextValue}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
