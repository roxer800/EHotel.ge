import styles from "../css/Destinations.module.css";

function Destinations({ db, searchText }) {
  const filteredResults = db
    .filter((item) =>
      item.city.toLowerCase().includes(searchText.toLowerCase())
    )
    .reduce((acc, current) => {
      const x = acc.find((item) => item.city === current.city);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

  return (
    <div className={`container`}>
      {!searchText ? (
        <div>
          {filteredResults.map(
            (item) =>
              item.city.toLowerCase().includes(searchText.toLowerCase()) && (
                <>
                  <div className={styles.destinationsWrapper}>
                    <div className={styles.destinationsIcon}>
                      <i className=" fa-xl fa-solid fa-location-dot"></i>
                    </div>
                    <div className={styles.destinationsContent}>
                      <p className={styles.destinationsCity}>{item.city}</p>
                      <p className={styles.destinationsRegion}>
                        City in {item.region}, {item.country}
                      </p>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      ) : (
        <div>
          {filteredResults.map(
            (item) =>
              item.city.toLowerCase().includes(searchText.toLowerCase()) && (
                <>
                  <div className={styles.destinationsWrapper}>
                    <div className={styles.destinationsIcon}>
                      <i className=" fa-xl fa-solid fa-location-dot"></i>
                    </div>
                    <div className={styles.destinationsContent}>
                      <p className={styles.destinationsHotelname}>
                        {item.city}, {item.region} Region, {item.country}
                      </p>
                    </div>
                  </div>
                </>
              )
          )}
          {db.map(
            (item) =>
              item.city.toLowerCase().includes(searchText.toLowerCase()) && (
                <>
                  <div className={styles.destinationsWrapper}>
                    <div className={styles.destinationsIcon}>
                      <i className="fa-xl fa-solid fa-bed"></i>
                    </div>
                    <div className={styles.destinationsContent}>
                      <p className={styles.destinationsHotelname}>
                        {item.name}
                      </p>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Destinations;
