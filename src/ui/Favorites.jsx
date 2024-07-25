import { useState } from "react";
import { Button, message } from "antd";
import "../css/Favorites.css";
import StarRating from "./StarRating";

function Favorites({
  db,
  setDb,
  toggleFavorite,
  updateRating,
  removeFavorite,
  undoChange,
  handleHeartClick,
}) {
  const [userRating, setUserRating] = useState(db.rating);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      content: (
        <div>
          <div className="alert-wrapper">
            <div className="alert">
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
      <div className="favorites-header">
        <h3>Your favorite picks</h3>
        <p>{db.length} hotels</p>
      </div>
      <div>
        {db.map(
          (item) =>
            item.isFavorite && (
              <>
                <div className="favorites-card-body-wrapper" key={item.id}>
                  <div className="favorites-card-body">
                    <img className="favorites-card-image" src={item.image} />
                    <div
                      className="card-heart"
                      onClick={() => {
                        removeFavorite(item.id);
                        handleHeartClick();
                        success();
                      }}
                    >
                      <i className=" fa-xl fa-solid fa-heart"></i>
                    </div>
                    <button className="on-map">
                      <i className=" fa-lg fa-solid fa-location-dot"></i>
                      <span>on map</span>
                    </button>
                    {item.discount > 0 && (
                      <div className="card-discount">
                        <p>-{item.discount}%</p>
                      </div>
                    )}
                    <div className="favorites-card-content">
                      <p className="card-name">{item.name}</p>
                      <div className="card-content-first-section">
                        <div>
                          <i className=" fa-solid fa-star-half-stroke fa-lg  single-star"></i>
                          <span> {item.rating} </span>
                          <span className="card-reviews">
                            ({item.reviews} reviews)
                          </span>
                        </div>
                        <div
                          className="star-rating "
                          onClick={() => updateRating(item.id, userRating)}
                        >
                          <StarRating size={24} onSetRating={setUserRating} />
                        </div>
                      </div>
                      <div className="card-content-second-section">
                        {item.cancelation && (
                          <div className="free-cancelation">
                            <div>
                              <i className="fa-solid fa-check"></i>
                            </div>
                            <span>Free Cancelation</span>
                          </div>
                        )}
                        <div>
                          <span className="price">${item.price}</span>
                          <span className="night"> / night</span>
                        </div>
                      </div>
                      <hr className="card-content-hr" />
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
