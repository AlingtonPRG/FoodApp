const SearchBar = () => {
  const currentDate = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()].substring(0, 3);
  const year = currentDate.getFullYear();

  return (
    <div className="w-full h-[65px] flex justify-between items-center mb-6">
      <div>
        <h2 className="text-[28px] font-semibold leading-[39.2px]">
          Jaegar Resto
        </h2>
        <p className="font-normal leading-[22.4px] text-[#E0E6E9]">{`${dayOfWeek}, ${dayOfMonth} ${month} ${year}`}</p>
      </div>
      <div className="w-[240px] flex items-center gap-2 p-[14px] border rounded-lg border-base bg-base-dark">
        <span className="">
          <i className="fa-solid fa-magnifying-glass px-1 text-[18px]"></i>
        </span>
        <input
          className="bg-transparent outline-none text-[14px] leading-[19.6px] font-normal w-full"
          type="text"
          placeholder="Search for food, coffee, etc..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
