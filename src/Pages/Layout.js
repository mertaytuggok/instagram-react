import { Header } from "Components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex ">
      <div className=" fixed h-full row-left row-span-2">
        <Header />
      </div>

      <div className="  items-center row-span-2 row-left  mx-auto pt-4">
        <Outlet />
      </div>
    </div>
  );
}
