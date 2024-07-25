import { useState } from "react";
import "../css/ActiveBookings.css";

function Location() {
  const [activeBtn, setActiveBtn] = useState("1");

  function activeButton(number) {
    setActiveBtn(number);
    console.log(activeBtn);
  }

  return (
    <>
      <div className="container">
        <div className="container active-bookings-wrapper">
          <button
            onClick={() => activeButton("1")}
            className={
              activeBtn === "1"
                ? "active-bookings-btn-active"
                : "active-bookings-btn"
            }
          >
            Active Bookings
          </button>
          <button
            onClick={() => activeButton("2")}
            className={
              activeBtn === "2"
                ? "active-bookings-btn-active"
                : "active-bookings-btn"
            }
          >
            Past Bookings
          </button>
        </div>
      </div>
    </>
  );
}

export default Location;
