import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (
      <>
        {data.map((value, index) => (
          <div className="flex" key={index}>
            <div className="item">
              <img src={value.img} alt="" />

              <div className="info">
                <h3 className="name" style={{ color: "#bfa181" }}>
                  {value.name}
                </h3>
                <span>{value.location}</span>
              </div>
            </div>
            <div className="item">
              <span>{value.score}</span>
            </div>
          </div>
        ))}
      </>
    );
}
