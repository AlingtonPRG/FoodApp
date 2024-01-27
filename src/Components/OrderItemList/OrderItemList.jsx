import { useContext } from "react";
import { FoodContext } from "../../context/context";
import { DeleteIcon } from "../../Constants";

const OrderItemList = ({ food }) => {
  const { foodItems, removeFromCart } = useContext(FoodContext);

  return (
    <li className="mb-4" key={food.id}>
      <div>
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-center w-[200px] h-10">
            <img className="w-10 h-10 mr-[5px]" src={food.img} alt="" />
            <div>
              <h5 className="w-[150px] text-sm font-medium leading-[18.2px] pt-1">
                {food.title}
              </h5>
              <p className="text-lighter text-xs font-medium">$ {food.price}</p>
            </div>
          </div>
          <div className="flex gap-[21px] items-center justify-between">
            <div className="w-12 h-12 flex items-center justify-center border border-base-dark-line rounded-lg p-[14px] bg-base-dark">
              {foodItems[food.id]}
            </div>
            <div className="text-right leading-[22.4px]">
              <p>$ {(foodItems[food.id] * food.price).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="mt-[10px] flex items-center justify-between">
          <input
            className="w-[297px] h-12 pl-[14px] rounded-lg bg-base-dark border border-base-dark-line focus:border-none focus:outline-primary"
            type="text"
            placeholder="Order Note..."
          />
          <button
            className="p-[14px] border border-accent-red flex items-center justify-between rounded-lg"
            onClick={() => removeFromCart(food.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default OrderItemList;
