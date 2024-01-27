import PopularFood from "../Components/PopularFood/PopularFood";
import UserList from "../Components/UserList/UserList";
import {
  CoinIcon,
  BookMarkIcon,
  CommunityIcon,
  TopArrowIcon,
  DownArrowIcon,
} from "../Constants";

const DashBoard = () => {
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
    <div className="ps-[133px] p-6 w-full h-full min-h-screen ">
      <div className="w-[896px] h-[786px]">
        <div className="w-full h-[89px] mb-6 border-b border-b-base-dark-line">
          <div className="w-[180px] h-[65px]">
            <h2 className="text-[30px] font-semibold leading-[39.2px]">
              Dashboard
            </h2>
            <p className="font-normal leading-[22.4px] text-lighter text-lg">{`${dayOfWeek} ${dayOfMonth} ${month}, ${year}`}</p>
          </div>
        </div>
        <ul className="flex gap-[40px] w-full h-[183px] mb-6">
          <li className="bg-midnight w-[270px] h-full p-4 rounded-lg cursor-pointer hover:shadow-card-shadow duration-100">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] bg-dark flex items-center justify-center rounded-lg">
                <CoinIcon />
              </div>
              <div className="flex justify-center items-center">
                <p className="font-medium text-accent-green pe-[6px] ps-3">
                  +32.40%
                </p>
              </div>
              <div>
                <TopArrowIcon />
              </div>
            </div>
            <div>
              <h3 className="pb-2 font-semibold text-3xl leading-[39.2px]">
                $10,243.00
              </h3>
              <p className="text-lighter text-lg">Total Revenue</p>
            </div>
          </li>
          <li className="bg-midnight w-[270px] h-full p-4 rounded-lg cursor-pointer hover:shadow-card-shadow duration-100">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] bg-dark flex items-center justify-center rounded-lg">
                <BookMarkIcon />
              </div>
              <div className="flex justify-center items-center">
                <p className="font-medium text-accent-red pe-[6px] ps-3">
                  -12.40%
                </p>
              </div>
              <div>
                <DownArrowIcon />
              </div>
            </div>
            <div>
              <h3 className="pb-2 font-semibold text-3xl leading-[39.2px]">
                23,456
              </h3>
              <p className="text-lighter text-lg">Total Dish Ordered</p>
            </div>
          </li>
          <li className="bg-midnight w-[270px] h-full p-4 rounded-lg cursor-pointer hover:shadow-card-shadow duration-100">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] bg-dark flex items-center justify-center rounded-lg">
                <CommunityIcon />
              </div>
              <div className="flex justify-center items-center">
                <p className="font-medium text-accent-green pe-[6px] ps-3">
                  +2.40%
                </p>
              </div>
              <div>
                <TopArrowIcon />
              </div>
            </div>
            <div>
              <h3 className="pb-2 font-semibold text-3xl leading-[39.2px]">
                1,234
              </h3>
              <p className="text-lighter text-lg">Total Customer</p>
            </div>
          </li>
        </ul>
        <UserList />
        <PopularFood />
      </div>
    </div>
  );
};

export default DashBoard;
