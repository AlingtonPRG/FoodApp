const SelectedFood = ({ activeContent }) => {
  return (
    <div className="flex items-center justify-between mb-6 pr-2 pl-2">
      <h2 className="font-semibold text-xl leading-7 capitalize">
        {activeContent}
      </h2>
      <div>
        <div className="w-full h-full flex items-center justify-between">
          <button className="bg-midnight w-10 h-full ps-1 border-t border-t-base-border-color border-s border-s-base-border-color border-b border-b-base-border-color py-[11px] rounded-s-lg">
            <i className="fa-solid fa-angle-down"></i>
          </button>
          <select className="bg-midnight cursor-pointer ps-0 p-[14px] flex items-center gap-[10px] rounded-e-lg border-t border-t-base-border-color border-e border-e-base-border-color border-b border-b-base-border-color leading-[18.2px] appearance-none focus:outline-none">
            <option className="bg-midnight" value="dish in">
              Dish In
            </option>
            <option className="bg-midnight" value="to go">  
              To Go
            </option>
            <option className="bg-midnight" value="Delivery">
              Delivery
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectedFood;
