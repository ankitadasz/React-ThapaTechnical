import { useState } from "react";
import "./ButtonToggle.css";

const ButtonToggle = () => {
  const [Mode, setMode] = useState(true);

  return (
    <div className="body">
      <div className="box">
        <button
          className="button"
          onClick={() => {
            setMode(!Mode);
          }}
          style={{
            backgroundColor: Mode == false ? "#ff5c5c" : "#22c55e",
          }}
        >
          <div
            className="circle"
            style={{
              backgroundColor: Mode == false ? "#ff4d4d" : "#16a34a",
              border: Mode == false ? "3px solid #ffb3b3" : "3px solid #facc15",
              transform :Mode == false ? "translateX(0)" : "translateX(85px)",
              transition: "all 0.3s ease"
            }}
          >
            {Mode == true ? "ON" : "OFF"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ButtonToggle;
