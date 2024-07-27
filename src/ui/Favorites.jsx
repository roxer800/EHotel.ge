import { useState } from "react";
import { Button, message } from "antd";
import styles from "../css/Favorites.module.css";
import StarRating from "./StarRating";

function Favorites({
  db,
  setDb,
  toggleFavorite,
  updateRating,
  undoChange,
  handleHeartClick,
}) {
  const [userRating, setUserRating] = useState(db.rating);
  const [messageApi, contextHolder] = message.useMessage();

  const countFavorites = db.filter((favorites) => favorites.isFavorite).length;

  const success = () => {
    messageApi.open({
      content: (
        <div>
          <div className={styles.alertWrapper}>
            <div className={styles.alert}>
              <p>Hotel removed</p>
              <button onClick={() => undoChange()}>Undo</button>
            </div>
          </div>
        </div>
      ),
      duration: 5,
      className: "custom-message",
    });
  };

  return (
    <>
      <div className={styles.favoritesHeader}>
        <h3>Your favorite picks</h3>
        <p>{countFavorites} hotels</p>
      </div>
      <div>
        {db.map(
          (item) =>
            item.isFavorite && (
              <>
                <div className={styles.favoritesCardBodyWrapper} key={item.id}>
                  <div className={styles.favoritesCardBody}>
                    <img
                      className={styles.favoritesCardImage}
                      src={item.image}
                    />
                    <div
                      className={styles.cardHeart}
                      onClick={() => {
                        toggleFavorite(item.id);
                        handleHeartClick();
                        success();
                      }}
                    >
                      <i
                        className={`${styles.heartIcon} fa-xl fa-solid fa-heart`}
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
                      <div className={styles.cardContentFirstSection}>
                        <div>
                          <i
                            className={`fa-solid fa-star-half-stroke fa-lg ${styles.singleStar}`}
                          ></i>
                          <span> {item.rating} </span>
                          <span className={styles.cardReviews}>
                            ({item.reviews} reviews)
                          </span>
                        </div>
                        <div
                          className={styles.starRating}
                          onClick={() => updateRating(item.id, userRating)}
                        >
                          <StarRating size={24} onSetRating={setUserRating} />
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
                          <span className={styles.price}>${item.price}</span>
                          <span className={styles.night}> / night</span>
                        </div>
                      </div>
                      <hr className={styles.cardContentHr} />
                    </div>
                  </div>
                </div>
              </>
            )
        )}
        {contextHolder}
      </div>
    </>
  );
}

export default Favorites;
