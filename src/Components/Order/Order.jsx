import { useContext } from "react";
import { HOT_FOOD_LIST } from "../../data";
import { FoodContext } from "../../context/context";
import { OrderItemList } from "../OrderItemList";

const Order = ({ setActivePayment }) => {
  const { foodItems, getTotalPrice } = useContext(FoodContext);

  let totalPrice = getTotalPrice();

  return (
    <div className="bg-midnight w-[409px] h-full min-h-screen fixed top-0 right-0 p-6">
      <h3 className="w-full font-semibold text-[20px] leading-7 h-7 mb-6">
        Orders #34562
      </h3>
      <ul className="flex gap-2 mb-6">
        <li>
          <button className="border border-base-dark-line text-primary py-[7px] px-3 rounded-lg">
            Dine In
          </button>
        </li>
        <li>
          <button className="border border-base-dark-line text-primary py-[7px] px-3 rounded-lg">
            To Go
          </button>
        </li>
        <li>
          <button className="border border-base-dark-line text-primary py-[7px] px-3 rounded-lg">
            Delivery
          </button>
        </li>
      </ul>
      <div className="flex justify-between items-center pb-6 border-b border-b-base-dark-line ">
        <h3 className="font-semibold leading-[22.4px] w-8 h-[22px]">Item</h3>
        <div className="flex gap-[43px]">
          <h3 className="font-semibold leading-[22.4px] w-6 h-[22px]">Qty</h3>
          <h3 className="font-semibold leading-[22.4px] w-[37px] h-[22px]">
            Price
          </h3>
        </div>
      </div>
      <ul className="mt-6 h-[360px] overflow-auto no-scrollbar mb-6">
        {HOT_FOOD_LIST.map((food) => {
          return (
            foodItems[food.id] !== 0 && (
              <OrderItemList key={food.id} food={food} />
            )
          );
        })}
      </ul>
      <div className="flex flex-wrap mb-3">
        <div className="flex justify-between w-full mb-[19px]">
          <p className="text-sm font-normal leading-[19.6px] text-lighter">
            Discount
          </p>
          <p className="leading-[22.4px] text-right">$ 0.00</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-sm font-normal leading-[19.6px] text-lighter">
            Sub Total
          </p>
          <p className="leading-[22.4px] text-right">
            $ {totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <div>
        <button
          className="w-full p-4 text-center border border-primary duration-75 bg-primary shadow-primary-shadow rounded-lg font-semibold text-sm leading-[19.6px] hover:border hover:border-primary hover:bg-transparent hover:text-primary hover:shadow-none"
          onClick={() => setActivePayment(true)}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Order;
