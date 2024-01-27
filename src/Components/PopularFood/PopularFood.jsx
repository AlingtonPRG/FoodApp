import { useState } from "react";
import { HOT_FOOD_LIST } from "../../data";
import ChartImg from "../../assets/images/Circle.svg";

const PopularFood = () => {
  const [foodList, setFoodList] = useState(HOT_FOOD_LIST);
  return (
    <div className="absolute top-6 right-6 bottom-6 w-[450px] h-[700px] flex flex-wrap justify-end">
      <div className="w-[450px] h-[410px] bg-midnight rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between pb-5 mb-8 border-b border-b-base-dark-line">
          <h3 className="text-xl font-semibold leading-7">Most Ordered</h3>
          <div>
            <div className="w-full h-full flex items-center justify-between">
              <button className="bg-midnight w-10 h-full ps-1 border-t border-t-base-border-color border-s border-s-base-border-color border-b border-b-base-border-color py-[11px] rounded-s-lg">
                <i className="fa-solid fa-angle-down"></i>
              </button>
              <select className="bg-midnight cursor-pointer ps-0 pe-0 p-[14px] flex items-center gap-[10px] rounded-e-lg border-t border-t-base-border-color border-e border-e-base-border-color border-b border-b-base-border-color leading-[18.2px] appearance-none focus:outline-none">
                <option className="bg-midnight" value="dish in">
                  Today
                </option>
                <option className="bg-midnight" value="to go">
                  Tomorrow
                </option>
                <option className="bg-midnight" value="Delivery">
                  Yesterday
                </option>
              </select>
            </div>
          </div>
        </div>
        <ul className="w-full h-[190px] no-scrollbar overflow-auto mb-6">
          {foodList.map((food) => (
            <li className="flex items-center gap-4 mb-5" key={food.id}>
              <div>
                <img
                  className="w-[50px] h-[50px]"
                  src={food.img}
                  alt="Food Name"
                />
              </div>
              <div>
                <p className="font-normal text-lighter">{food.title}</p>
                <p className="text-sm font-normal text-lighter">{food.total}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="w-full py-[14px] border border-primary rounded-lg text-primary duration-75 hover:bg-primary hover:text-white">
          View All
        </button>
      </div>
      <div className="w-[450px] h-[265px] bg-midnight rounded-lg p-6">
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-base-dark-line">
          <h3 className="text-xl font-semibold leading-7">
            Most Type of Order
          </h3>
          <div>
            <div className="w-full h-full flex items-center justify-between">
              <button className="bg-midnight w-10 h-full ps-1 border-t border-t-base-border-color border-s border-s-base-border-color border-b border-b-base-border-color py-[11px] rounded-s-lg">
                <i className="fa-solid fa-angle-down"></i>
              </button>
              <select className="bg-midnight cursor-pointer ps-0 pe-0 p-[14px] flex items-center gap-[10px] rounded-e-lg border-t border-t-base-border-color border-e border-e-base-border-color border-b border-b-base-border-color leading-[18.2px] appearance-none focus:outline-none">
                <option className="bg-midnight" value="dish in">
                  Today
                </option>
                <option className="bg-midnight" value="to go">
                  Tomorrow
                </option>
                <option className="bg-midnight" value="Delivery">
                  Yesterday
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex">
          <img className="w-[130px] h-[130px] " src={ChartImg} alt="" />
          <ul className="ps-4">
            <li className="flex items-start justify-center">
              <span className="rounded-full w-5 h-5 mt-1 mr-1 bg-accent-red block"></span>
              <div>
                <p className="">Dine In</p>
                <p className="text-sm text-lighter leading-[18.4px]">200 customers</p>
              </div>
            </li>
            <li className="flex items-start justify-center">
              <span className="rounded-full w-5 h-5 mt-1 mr-1 bg-[#FFB572] block"></span>
              <div>
                <p className="">To Go</p>
                <p className="text-sm text-lighter leading-[18.4px]">122 customers</p>
              </div>
            </li>
            <li className="flex items-start justify-center">
              <span className="rounded-full w-5 h-5 mt-1 mr-1 bg-[#65B0F6] block"></span>
              <div>
                <p className="">Delivery</p>
                <p className="text-sm text-lighter leading-[18.4px]">264 customers</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularFood;
