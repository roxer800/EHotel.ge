import styles from "../css/ActiveBookings.module.css";

function ActiveBookingHeader({ activeButton, activeBtn }) {
  return (
    <div className="container">
      <div className={`container ${styles.activeBookingsWrapper}`}>
        <button
          onClick={() => activeButton("1")}
          className={
            activeBtn === "1"
              ? styles.activeBookingsBtnActive
              : styles.activeBookingsBtn
          }
        >
          Active Bookings
        </button>
        <button
          onClick={() => activeButton("2")}
          className={
            activeBtn === "2"
              ? styles.activeBookingsBtnActive
              : styles.activeBookingsBtn
          }
        >
          Past Bookings
        </button>
      </div>
    </div>
  );
}

export default ActiveBookingHeader;
