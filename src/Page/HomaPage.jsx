import { useState, useContext } from "react";
import { FoodContext } from "../context/context";
import { Order } from "../Components/Order";
import { SearchBar } from "../Components/SearchBar";
import { SelectedFood } from "../Components/SelectedFood";
import { TabContents } from "../Components/TabContents";
import { FoodList } from "../Components/FoodList";
import { Payment } from "../Components/Payment";

const HomePage = () => {
  const [activeContent, setActiveContent] = useState("hot dishes");
  const [activePayment, setActivePayment] = useState(false);
  
  const { getTotalPrice } = useContext(FoodContext);
  const totalPrice = getTotalPrice();

  return (
    <div className="ms-[114px] mr-[448px] pt-6 overflow-y-hidden">
      <SearchBar />
      <TabContents
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <SelectedFood activeContent={activeContent} />
      <FoodList />
      <Order setActivePayment={setActivePayment} />
      {totalPrice > 0 && activePayment && <Payment setActivePayment={setActivePayment} />}
    </div>
  );
};

export default HomePage;
