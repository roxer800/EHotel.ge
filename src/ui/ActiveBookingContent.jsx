import styles from "../css/Favorites.module.css";

function ActiveBookingContent({ db, toggleFavorite, handleHeartClick }) {
  return (
    <div>
      {db.map(
        (item) =>
          item.booked && (
            <>
              <div className={styles.favoritesCardBodyWrapper} key={item.id}>
                <div className={styles.favoritesCardBody}>
                  <img className={styles.favoritesCardImage} src={item.image} />
                  <div
                    className={
                      item.isFavorite
                        ? styles.cardHeart
                        : styles.cardHeartUnselected
                    }
                    onClick={() => {
                      toggleFavorite(item.id);
                      handleHeartClick();
                    }}
                  >
                    <i
                      className={`fa-xl fa-heart ${
                        item.isFavorite
                          ? `fa-solid ${styles.heartIcon}`
                          : `fa-regular ${styles.heartIconUnselected}`
                      }`}
                    ></i>
                  </div>
                  <button className={styles.onMap}>
                    <i className=" fa-lg fa-solid fa-location-dot"></i>
                    <span>on map</span>
                  </button>
                  {item.discount > 0 && (
                    <div className={styles.cardDiscount}>
                      <p>-{item.discount}%</p>
                    </div>
                  )}
                  <div className={styles.favoritesCardImage}>
                    <p className={styles.cardName}>{item.name}</p>
                    <div
                      className={
                        (styles.cardContentFirstSection, styles.checkInWrapper)
                      }
                    >
                      <div className="check-in-dates">
                        <p>Check In:&nbsp; </p>
                        <p> 22th May, 2022</p>
                      </div>
                      <div className="check-in-dates">
                        <p>Check Out:&nbsp; </p>
                        <p> 26th May, 2022</p>
                      </div>
                    </div>
                    <div className={styles.cardContentSecondSection}>
                      {item.cancelation && (
                        <div className={styles.freeCancelation}>
                          <div>
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <span>Free Cancelation</span>
                        </div>
                      )}
                      <div>
                        <span className={styles.night}> Total:</span>
                        <span className={styles.price}>${item.price}</span>
                      </div>
                    </div>
                    <hr className={styles.cardContentHr} />
                  </div>
                </div>
              </div>
            </>
          )
      )}
    </div>
  );
}

export default ActiveBookingContent;

//
