import { Drawer } from "antd";

import "../css/GuestsSelection.css";

function GuestSelection({
  open,
  setOpen,
  countAdults,
  setCountAdults,
  countChildren,
  setCountChildren,
}) {
  function increment(state, count) {
    state(count + 1);
  }
  function decrement(state, count) {
    if (count <= 0) {
      state = 0;
    }
    state(count - 1);
  }
  function Clear() {
    setCountAdults(0);
    setCountChildren(0);
  }

  const onClose = () => {
    setOpen(false);
  };
  const drawerTitle = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <span>Select rooms and guests</span>
      <button className="clear-btn" onClick={Clear}>
        Clear
      </button>
    </div>
  );
  return (
    <Drawer
      title={drawerTitle}
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      key="bottom"
      style={{ borderRadius: "10px" }}
    >
      <div className="">
        <div className="guests-picker-wrapper">
          <p>Adults</p>
          <div>
            <button
              onClick={() => decrement(setCountAdults, countAdults)}
              className={
                countAdults ? "guests-picker-btn" : "disabled-guests-picker-btn"
              }
            >
              -
            </button>
            <p>{countAdults}</p>
            <button
              onClick={() => increment(setCountAdults, countAdults)}
              className="guests-picker-btn"
            >
              +
            </button>
          </div>
        </div>
        <div className="guests-picker-wrapper">
          <p>Children</p>
          <div>
            <button
              onClick={() => decrement(setCountChildren, countChildren)}
              className={
                countChildren
                  ? "guests-picker-btn"
                  : "disabled-guests-picker-btn"
              }
            >
              -
            </button>
            <p>{countChildren}</p>
            <button
              onClick={() => increment(setCountChildren, countChildren)}
              className="guests-picker-btn"
            >
              +
            </button>
          </div>
        </div>
        <div className="guests-picker-last-section">
          <button className="guests-picker-skip" onClick={onClose}>
            Skip
          </button>
          <button
            className={`guests-picker-next ${
              countAdults && "guests-picker-next-active "
            }`}
            onClick={countAdults && onClose}
          >
            Next
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default GuestSelection;
