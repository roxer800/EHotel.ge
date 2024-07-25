import Search from "./Search";
import Header from "./Header";
import PopularDestinations from "./PopularDestinations";
function Content({ db, setDb, toggleFavorite }) {
  return (
    <>
      <Header />
      <Search db={db} setDb={setDb} />
      <PopularDestinations
        db={db}
        setDb={setDb}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default Content;
