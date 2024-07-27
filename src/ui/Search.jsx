import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "../css/Search.module.css";
import GuestSelection from "./GuestSelection";

function Search() {
  const [open, setOpen] = useState(false);
  const [countAdults, setCountAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <form action="/">
        <div className="container">
          <div className={styles.formInput}>
            <span>
              <i className="fa-xl fa-solid fa-magnifying-glass"></i>
            </span>
            <NavLink to="Search">
              <input
                className={styles.input1}
                type="text"
                placeholder="Enter your destination"
                readOnly
              />
            </NavLink>
          </div>
          <div className={styles.formInput}>
            <span>
              <i className="fa-xl fa-regular fa-calendar"></i>
            </span>
            <input
              className={styles.input2}
              type="text"
              placeholder="Enter your Dates"
            />
          </div>
          <div className={styles.formInput}>
            <span>
              <i className="fa-xl fa-solid fa-user-group"></i>
            </span>
            <input
              onClick={showDrawer}
              className={styles.input3}
              type="text"
              placeholder={`${countAdults} Adults, ${countChildren} Children`}
              readOnly
            />
          </div>
          <button className={styles.formButton} type="submit">
            Search
          </button>
        </div>
      </form>
      <GuestSelection
        open={open}
        setOpen={setOpen}
        countAdults={countAdults}
        setCountAdults={setCountAdults}
        countChildren={countChildren}
        setCountChildren={setCountChildren}
      />
    </>
  );
}

export default Search;
