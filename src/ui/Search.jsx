import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../css/Search.css";
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
          <div className="form-input">
            <span>
              <i className="fa-xl fa-solid fa-magnifying-glass"></i>
            </span>
            <NavLink to="Search">
              <input
                className="input-1"
                type="text"
                placeholder="Enter your destination"
                readOnly
              />
            </NavLink>
          </div>
          <div className="form-input">
            <span>
              <i className="fa-xl fa-regular fa-calendar"></i>
            </span>
            <input
              className="input-2"
              type="text"
              placeholder="Enter your Dates"
            />
          </div>
          <div className="form-input">
            <span>
              <i className="fa-xl fa-solid fa-user-group"></i>
            </span>
            <input
              onClick={showDrawer}
              className="input-3"
              type="text"
              placeholder={`${countAdults} Adults, ${countChildren} Children`}
              readOnly
            />
          </div>
          <button className="form-button" type="submit">
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
