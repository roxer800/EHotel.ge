import { useState } from "react";

import ActiveBookingHeader from "./ActiveBookingHeader";
import ActiveBookingContent from "./ActiveBookingContent";
import PastBookings from "./PastBookings";

function Location({ db, toggleFavorite, handleHeartClick }) {
  const [activeBtn, setActiveBtn] = useState("1");

  function activeButton(number) {
    setActiveBtn(number);
  }

  return (
    <>
      <ActiveBookingHeader activeButton={activeButton} activeBtn={activeBtn} />

      {activeBtn == "1" && (
        <ActiveBookingContent
          db={db}
          toggleFavorite={toggleFavorite}
          handleHeartClick={handleHeartClick}
        />
      )}
      {activeBtn == "2" && <PastBookings />}
    </>
  );
}

export default Location;
