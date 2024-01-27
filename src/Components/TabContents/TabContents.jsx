const TabContents = ({ activeContent, setActiveContent }) => {
  return (
    <ul className="flex items-center gap-8 border-b border-b-base-dark-line mb-6">
      <li
        className={`duration-75 pb-[13px] leading-[19.6px] font-semibold pr-1 pl-1  ${
          activeContent === "hot dishes"
            ? "text-primary border-b-primary border-b-[3px]"
            : "text-white border-b-transparent border-b-[3px]"
        }`}
      >
        <button onClick={() => setActiveContent("hot dishes")}>
          Hot Dishes
        </button>
      </li>
      <li
        className={`duration-75 pb-[13px] leading-[19.6px] font-semibold  ${
          activeContent === "cold dishes"
            ? "text-primary border-b-primary border-b-[3px]"
            : "text-white border-b-transparent border-b-[3px]"
        }`}
      >
        <button onClick={() => setActiveContent("cold dishes")}>
          Cold Dishes
        </button>
      </li>
      <li
        className={`duration-75 pb-[13px] leading-[19.6px] font-semibold  ${
          activeContent === "soup"
            ? "text-primary border-b-primary border-b-[3px]"
            : "text-white border-b-transparent border-b-[3px]"
        }`}
      >
        <button onClick={() => setActiveContent("soup")}>Soup</button>
      </li>
      <li
        className={`duration-75 pb-[13px] leading-[19.6px] font-semibold  ${
          activeContent === "grill"
            ? "text-primary border-b-primary border-b-[3px]"
            : "text-white border-b-transparent border-b-[3px]"
        }`}
      >
        <button onClick={() => setActiveContent("grill")}>Grill</button>
      </li>
      <li
        className={`duration-75 pb-[13px] leading-[19.6px] font-semibold  ${
          activeContent === "appetizer"
            ? "text-primary border-b-primary border-b-[3px]"
            : "text-white border-b-transparent border-b-[3px]"
        }`}
      >
        <button onClick={() => setActiveContent("appetizer")}>Appetizer</button>
      </li>
      <li
        className={`duration-75 pb-[13px] leading-[19.6px] font-semibold  ${
          activeContent === "dessert"
            ? "text-primary border-b-primary border-b-[3px]"
            : "text-white border-b-transparent border-b-[3px]"
        }`}
      >
        <button onClick={() => setActiveContent("dessert")}>Dessert</button>
      </li>
    </ul>
  );
};

export default TabContents;
