import "../css/PopularDestinations.css";
import { NavLink } from "react-router-dom";
function PopularDestinations({ db, setDb, toggleFavorite }) {
  return (
    <>
      <div className="divider"></div>
      <div className="container">
        <div className="popular-destinations-header">
          <h3>Popular destinations</h3>
          <NavLink to="location">
            <h4>See all</h4>
          </NavLink>
        </div>
        <div className="cards-wrapper">
          {db.map((item) => (
            <div className="card-body" key={item.id}>
              <img className="card-image" src={item.image} />
              <div className="card-content">
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
