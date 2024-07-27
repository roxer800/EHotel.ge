import { NavLink } from "react-router-dom";
import styles from "../css/PopularDestinations.module.css";
function PopularDestinations({ db, setDb, toggleFavorite }) {
  return (
    <>
      <div className={styles.divider}></div>
      <div className="container">
        <div className={styles.popularDestinationsHeader}>
          <h3>Popular destinations</h3>
          <NavLink to="location">
            <h4>See all</h4>
          </NavLink>
        </div>
        <div className={styles.cardsWrapper}>
          {db.map((item) => (
            <div key={item.id}>
              <img className={styles.cardImage} src={item.image} />
              <div>
                <h4>{item.name}</h4>
                <button onClick={() => toggleFavorite(item.id)}>
                  {item.isFavorite ? "unfavorite" : "favorite"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularDestinations;
