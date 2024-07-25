import { Descriptions } from "antd";
import "../css/SearchPage.css";
import SearchPageHeader from "./SearchPageHeader";
import SearchPageTags from "./SearchPageTags";

function SearchPage() {
  return (
    <>
      <SearchPageHeader />
      <SearchPageTags />
      <Descriptions />
    </>
  );
}

export default SearchPage;
