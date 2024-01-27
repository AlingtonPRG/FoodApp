import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import { DashBoard, HomaPage, SettingsPage } from "./Page";

const App = () => {
  return (
    <div className="font-barlow">
      <SideBar />
      <Routes>
        <Route path="/" element={<HomaPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
