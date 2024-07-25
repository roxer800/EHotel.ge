import { useNavigate } from "react-router-dom";

function SearchPageHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back one page in the history stack
  };

  return (
    <div className="search-page-header">
      <div className="search-page-back-btn" onClick={goBack}>
        <i className="fa-xl fa-solid fa-arrow-left"></i>
      </div>
      <div className="search-page-input-wrapper">
        <span>
          <i className="fa-xl fa-solid fa-magnifying-glass"></i>
        </span>
        <input className="" type="text" placeholder="Enter your destination" />
        <span className="search-page-input-close-btn">
          <i className=" fa-xl fa-solid fa-x"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchPageHeader;
