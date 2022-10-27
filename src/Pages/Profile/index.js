import { getUserInfo } from "firebase.js";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { setUser } from "Store/auth";
import Header from "./Components/Header";
import Icon from "Components/Icon";
import classNames from "classnames";
import ProfileNotFound from "./Components/NotFound";
import { Helmet } from "react-helmet";

export const ProfileLayout = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);
  if (user === false) {
    return (
      <div>
        {" "}
        <ProfileNotFound />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        {user.fullname} (@{user.username}) • Instagram photos and videos
      </Helmet>
      <Header />
      <nav className=" border-t flex gap-x-16 justify-center items-center">
        <NavLink
          to={`/${username}`}
          end={true}
          className={({ isActive }) =>
            classNames({
              "text-xs flex py-5 -mt-px border-t tracking-widest items-center gap-x-1.5 font-semibold": true,
              "text-[8e8e8e] border-transparent": !isActive,
              "text-black border-black": isActive,
            })
          }
        >
          <Icon name="Post" size={12} />
          POSTS
        </NavLink>
        <NavLink
          to={`/${username}/tagged`}
          end={true}
          className={({ isActive }) =>
            classNames({
              "text-xs flex py-5 border-t -mt-px tracking-widest items-center gap-x-1.5 font-semibold": true,
              "text-[8e8e8e] border-transparent": !isActive,
              "text-black border-black": isActive,
            })
          }
        >
          <Icon name="tag" size={12} />
          TAGGED
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
