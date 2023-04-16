import React from "react";
import Board from "../components/board";
import "./style.css";
const Leaderboard = () => {
  return (
    <div>
      <div style={{ alignItems:"center", justifyContent:"center",justifyItems:"center",alignContent:"center",display:"flex",color:"white"}}>
        <Board></Board>
      </div>
    </div>
  );
};

export default Leaderboard;
