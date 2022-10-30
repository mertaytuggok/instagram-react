import Icon from "Components/Icon";
import { useSelector } from "react-redux";
import Chatlist from "./Chatlist";

export default function Sidebar() {
  const user = useSelector((state) => state.auth.user);

  return (
    <aside className=" w-[349px] flex-shrink-0 border-r border-gray-300 ">
      <header className=" h-[60px] border-b border-gray-300 flex justify-between items-center px-4  ">
        <button className=" flex items-center mx-auto gap-x-3 text-base font-semibold">
          {user.fullName}
          <Icon name="chevdron-down" className="rotate-180" size={20} />
        </button>
        <Icon name="new-message" size={24} />
      </header>
      <Chatlist />
    </aside>
  );
}
