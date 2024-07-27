import { useNavigate } from "react-router-dom";

import styles from "../css/SearchPage.module.css";

function SearchPageHeader({ searchText, setSearchText }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back one page in the history stack
  };

  function clearSearchText() {
    setSearchText("");
  }

  return (
    <div className={styles.searchPageHeader}>
      <div className={styles.searchPageBackBtn} onClick={goBack}>
        <i className="fa-xl fa-solid fa-arrow-left"></i>
      </div>
      <div className={styles.searchPageInputWrapper}>
        <span>
          <i className="fa-xl fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Enter your destination"
        />
        <span
          onClick={clearSearchText}
          className={styles.searchPageInputCloseBtn}
        >
          <i className=" fa-xl fa-solid fa-x"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchPageHeader;
