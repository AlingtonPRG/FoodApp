import { useState } from "react";
import { LinearIcon } from "../../Constants";
import { USERS_AVATAR } from "../../data";

const UserList = () => {
  const [userList, setuserList] = useState(USERS_AVATAR);
  const [buttonStatus, setButtonStatus] = useState("completed");
  return (
    <div className="w-full h-[48%] bg-midnight rounded-lg">
      <div className="w-full h-[100px] pt-6 mb-4 px-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-[22px] leading-7">Order Report</h3>
          <div className="w-34 h-12 flex items-center rounded-lg border border-base-color p-[14px] cursor-pointer gap-2">
            <button className="pe-1">
              <LinearIcon />
            </button>
            <div className="">Filter Order</div>
          </div>
        </div>
        <ul className="flex items-center">
          <li className="font-semibold w-[229px]">Customer</li>
          <li className="font-semibold w-[209px]">Menu</li>
          <li className="font-semibold w-[229px]">Total Payment</li>
          <li className="font-semibold ">Status</li>
          <ul></ul>
        </ul>
      </div>
      <div className="border-b border-b-base-color w-full pt-2 mb-4"></div>
      <ul className="overflow-auto no-scrollbar w-full h-[220px]">
        {userList.map((user) => (
          <li
            className="flex items-center py-2.5 text-lighter px-5 cursor-pointer duration-75 hover:bg-hover-color mb-1"
            key={user.id}
          >
            <div className="flex items-center gap-4 w-[229px]">
              <img
                className="w-[35px] h-[35px]"
                src={user.img}
                alt="UserName"
              />
              <p>{user.title}</p>
            </div>
            <p className="w-[209px] pe-12">{user.food}</p>
            <p className="w-[229px]">${user.price}</p>
            <div
              className={`w-[130px] h-[35px] rounded-full font-semibold ${
                buttonStatus === "completed"
                  ? "text-accent-green bg-button-bg-green"
                  : "text-accent-purple bg-button-bg-purple"
              }`}
            >
              <button className={`w-full h-full capitalize leading-[18.2px]`}>
                {user.status}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
