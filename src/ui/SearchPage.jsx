import { Descriptions } from "antd";
import { useState } from "react";
import styles from "../css/SearchPage.module.css";
import SearchPageHeader from "./SearchPageHeader";
import SearchPageTags from "./SearchPageTags";
import Destinations from "./Destinations";
import Map from "./Map";

function SearchPage({ db }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="container">
      <SearchPageHeader searchText={searchText} setSearchText={setSearchText} />
      <SearchPageTags />
      <Destinations db={db} searchText={searchText} />
      <Map />
    </div>
  );
}

export default SearchPage;
