import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import RecommentActivity from "./RecommentActivity";
import Game from "./Game";

export default function YourFanpage() {
  const { getUserId } = useSelector((root) => root.ProfileReducer);
  return (
    <div className="">
      <aside className="sidebar static right">
        {localStorage.getItem("userID") &&
        getUserId?.fanpage?.status === "Active" ? (
          <div className="widget">
            <h4 className="widget-title">Fanpage của bạn</h4>
            <ul className="ak-groups">
              <li>
                <figure>
                  <NavLink to={`/fanpage/${localStorage.getItem("userID")}`}>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectfit: "cover",
                      }}
                      src={getUserId?.fanpage?.avatar}
                      alt
                    />
                  </NavLink>
                </figure>
                <div className="your-grp">
                  <h5>
                    <NavLink
                      to={`/fanpage/${localStorage.getItem("userID")}`}
                      title
                      style={{
                        fontSize: "20px",
                        width: "200px",
                        wordWrap: "break-word",
                      }}
                    >
                      {getUserId?.fanpage?.fanpageName}
                    </NavLink>
                  </h5>
                  <NavLink
                    to={`/fanpage/${localStorage.getItem("userID")}`}
                    href="group-feed.html"
                    title
                    className="fanpage-y"
                    onClick={() => {}}
                  >
                    Chi tiết
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
        <RecommentActivity />
        <Game />
      </aside>
    </div>
  );
}
