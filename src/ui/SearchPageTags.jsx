function SearchPageTags() {
  return (
    <div className=" tags-wrapper">
      <hr />
      <div className=" container tags">
        <button className="tags-btn-active">Recent</button>
        <button className="tags-btn">Popular</button>
        <button className="tags-btn">Nearby</button>
      </div>
    </div>
  );
}

export default SearchPageTags;
