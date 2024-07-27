import { Drawer } from "antd";
import styles from "../css/GuestsSelection.module.css";

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
      <button className={styles.clearBtn} onClick={Clear}>
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
        <div className={styles.guestsPickerWrapper}>
          <p>Adults</p>
          <div>
            <button
              onClick={() => decrement(setCountAdults, countAdults)}
              className={
                countAdults
                  ? styles.guestsPickerBtn
                  : styles.disabledGuestsPickerBtn
              }
            >
              -
            </button>
            <p>{countAdults}</p>
            <button
              onClick={() => increment(setCountAdults, countAdults)}
              className={styles.guestsPickerBtn}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.guestsPickerWrapper}>
          <p>Children</p>
          <div>
            <button
              onClick={() => decrement(setCountChildren, countChildren)}
              className={
                countChildren
                  ? styles.guestsPickerBtn
                  : styles.disabledGuestsPickerBtn
              }
            >
              -
            </button>
            <p>{countChildren}</p>
            <button
              onClick={() => increment(setCountChildren, countChildren)}
              className={styles.guestsPickerBtn}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.guestsPickerLastSection}>
          <button className={styles.guestsPickerSkip} onClick={onClose}>
            Skip
          </button>
          <button
            className={`${styles.guestsPickerNext} ${
              countAdults && styles.guestsPickerNextActive
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
