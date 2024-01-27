import { Range } from "../Components/Range";

const SettingsPage = () => {
  return (
    <div className="ps-[133px] p-6 w-full h-full min-h-screen">
      <h1 className="w-full mb-6 text-[28px] font-semibold leading-[39.2px]">
        Settings
      </h1>
      <Range />
    </div>
  );
};

export default SettingsPage;
