import { Link } from "react-router-dom";
import {
  BrandLogo,
  ReturnIcon,
  CookieIcon,
  ChartIcon,
  EmailIcon,
  NotificationIcon,
  SettingsIcon,
  LogOutIcon,
} from "../../Constants";
import { useState } from "react";

const SideBar = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className="w-[104px] h-full min-h-screen bg-midnight py-6 ps-3 fixed top-0 left-0 rounded-e-lg">
      <div className="flex items-center justify-center pr-4">
        <Link
          to="/"
          className=""
          onClick={() => setActivePage("home")}
        >
          <BrandLogo />
        </Link>
      </div>
      <ul>
        <li
          className={`duration-200 p-4 rounded-s-xl mt-2 mb-2 ${
            activePage === "home" ? "bg-body" : ""
          }`}
        >
          <Link
            to={"/"}
            className={`p-4 rounded-lg flex items-center justify-center ${
              activePage === "home" ? "bg-primary shadow-primary-shadow" : ""
            }`}
            onClick={() => setActivePage("home")}
          >
            <ReturnIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`duration-200 p-4 rounded-s-xl mt-2 mb-2 ${
            activePage === "tips" ? "bg-body" : ""
          }`}
        >
          <Link
            to={"/tips"}
            className={`p-4 rounded-lg flex items-center justify-center ${
              activePage === "tips" ? "bg-primary shadow-primary-shadow" : ""
            }`}
            onClick={() => setActivePage("tips")}
          >
            <CookieIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`duration-200 p-4 rounded-s-xl mt-2 mb-2 ${
            activePage === "chart" ? "bg-[#252836]" : ""
          }`}
        >
          <Link
            to={"/dashboard"}
            className={`p-4 rounded-lg flex items-center justify-center ${
              activePage === "chart" ? "bg-primary shadow-primary-shadow" : ""
            }`}
            onClick={() => setActivePage("chart")}
          >
            <ChartIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`duration-200 p-4 rounded-s-xl mt-2 mb-2 ${
            activePage === "email" ? "bg-body" : ""
          }`}
        >
          <Link
            to={"/email-contacts"}
            className={`p-4 rounded-lg flex items-center justify-center ${
              activePage === "email" ? "bg-primary shadow-primary-shadow" : ""
            }`}
            onClick={() => setActivePage("email")}
          >
            <EmailIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`duration-200 p-4 rounded-s-xl mt-2 mb-2 ${
            activePage === "notification" ? "bg-body" : ""
          }`}
        >
          <Link
            to={"/notifications"}
            className={`p-4 rounded-lg flex items-center justify-center ${
              activePage === "notification"
                ? "bg-primary shadow-primary-shadow"
                : ""
            }`}
            onClick={() => setActivePage("notification")}
          >
            <NotificationIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`duration-200 p-4 rounded-s-xl mt-2 mb-2 ${
            activePage === "settings" ? "bg-body" : ""
          }`}
        >
          <Link
            to={"/settings"}
            className={`p-4 rounded-lg flex items-center justify-center ${
              activePage === "settings"
                ? "bg-primary shadow-primary-shadow"
                : ""
            }`}
            onClick={() => setActivePage("settings")}
          >
            <SettingsIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`duration-200 p-4 rounded-s-xl mt-2 ${
            activePage === "logout" ? "bg-body" : ""
          }`}
        >
          <Link
            to={"/sign-up"}
            className={`p-4 rounded-lg flex items-center justify-center ${
              activePage === "logout" ? "bg-primary shadow-primary-shadow" : ""
            }`}
            onClick={() => setActivePage("logout")}
          >
            <LogOutIcon activePage={activePage} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
