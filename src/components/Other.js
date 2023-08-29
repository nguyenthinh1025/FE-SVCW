import React from "react";
import YourFanpage from "./YourFanpage";
import RecommentActivity from "./RecommentActivity";
import Game from "./Game";

export default function Other() {
  return (
    <div className="col-lg-4">
      <aside className="sidebar static right">
        <RecommentActivity />
        <Game />
      </aside>
    </div>
  );
}
