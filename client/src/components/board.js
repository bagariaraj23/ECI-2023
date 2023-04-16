import React, { useState } from "react";
import Profiles from "./profiles";
import { Leaderboard } from "./database";

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <div
      className="board"
      style={{
        padding: "5vh",
        backgroundColor: "#085078",
        border: "1px solid #12D8FA",
        // background: "linear-gradient(atright,#085078,#85D8CE)",
        borderRadius: "10px",
      }}
    >
      <h1 className="leaderboard">Leaderboard</h1>

      {/* <div className="duration">
            <button onClick={handleClick} data-id='7'>7 Days</button>
            <button onClick={handleClick} data-id='30'>30 Days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div> */}

      <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
    </div>
  );
}
//background:linear-gradient(atright, , );

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
