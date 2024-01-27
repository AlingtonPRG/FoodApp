import { useContext } from "react";
import { FoodContext } from "../../context/context";

function FoodCard({ food }) {
  const { id, img, title, price, amount } = food;
  const { addToCart } = useContext(FoodContext);  

  return (
    <li
      className="w-[252px] h-[280px] bg-midnight rounded-xl cursor-pointer hover:shadow-card-shadow duration-150 p-6 relative flex items-end justify-center mb-7"
      onClick={() => addToCart(id)}
    >
      <img
        className="w-[160px] h-[160px] absolute -top-10"
        src={img}
        alt={title}
      />
      <div className="w-[144px] h-[88px] mb-5">
        <h3 className="leading-[18.2px] text-center">{title}</h3>
        <div className="pt-2">
          <p className="text-center font-normal leading-[19.6px]">$ {price}</p>
          <p className="text-center leading-[19.6px] font-normal text-lighter pt-1">
            {amount}
          </p>
        </div>
      </div>
    </li>
  );
}

export default FoodCard;
