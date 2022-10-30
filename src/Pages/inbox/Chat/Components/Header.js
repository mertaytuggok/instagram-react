import Icon from "Components/Icon";

export default function Header({ user }) {
  return (
    <div className=" h-[60px] border-b border-gray-300 flex items-center justify-between px-5">
      <button className=" flex items-center gap-x-4">
        <img src={user.avatar} className="w-6 h-6 rounded-full" />
        <h6 className=" text-base font-semibold ">{user.name}</h6>
      </button>
      <div className=" flex gap-x-4 ">
        <button>
          {" "}
          <Icon name="audio-call" size={24} />
        </button>

        <button>
          <Icon name="video-call" size={24} />
        </button>
        <button>
          {" "}
          <Icon name="info" size={24} />
        </button>
      </div>
    </div>
  );
}
