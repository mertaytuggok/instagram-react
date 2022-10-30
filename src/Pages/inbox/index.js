import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

export default function InboxLayout() {
  return (
    <div className=" border border-gray-300 rounded flex bg-white h-[calc(100vh-97px)]  ">
      <Sidebar />
      <Outlet />
    </div>
  );
}