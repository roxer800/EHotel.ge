import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppLayout from "./ui/AppLayout";
import Content from "./ui/Content";
import Favorites from "./ui/Favorites";
import Location from "./ui/Location";
import Settings from "./ui/Settings";
import SearchPage from "./ui/SearchPage";
import PageNotFound from "./ui/PageNotFound";
function App() {
  const [db, setDb] = useState([
    {
      id: 1,
      image: "src/assets/1.jpeg",
      name: "Levan & Giorgi Palace",
      rating: 5.0,
      reviews: 16,
      price: 25,
      cancelation: true,
      isFavorite: false,
      discount: "0",
      booked: true,
      city: "Tbilisi",
      region: "Tbilisi",
      country: "Georgia",
      position: {
        lat: 41.716667,
        lng: 44.783333,
      },
    },
    {
      id: 2,
      image: "src/assets/2.jpeg",
      name: "sheraton",
      rating: 4,
      reviews: 12,
      price: 35,
      cancelation: false,
      isFavorite: false,
      discount: "40",
      booked: false,
      city: "Tbilisi",
      region: "Tbilisi",
      country: "Georgia",
      position: {
        lat: 41.716667,
        lng: 44.783333,
      },
    },
    {
      id: 3,
      image: "src/assets/3.jpeg",
      name: "hostel",
      rating: 3.0,
      reviews: 12,
      price: 13,
      cancelation: false,
      isFavorite: false,
      discount: "0",
      booked: false,
      city: "Batumi",
      region: "Adjara",
      country: "Georgia",
      position: {
        lat: 41.643414,
        lng: 41.6399,
      },
    },
  ]);

  const [previousState, setPreviousState] = useState(null);

  const handleHeartClick = () => {
    setPreviousState([...db]);
  };

  const undoChange = () => {
    if (previousState) {
      setDb(previousState);
      setPreviousState(null);
    }
  };

  const updateRating = (id, newRating) => {
    setDb((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, rating: newRating } : card
      )
    );
  };

  function toggleFavorite(id) {
    setDb((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
      )
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={
              <Content db={db} setDb={setDb} toggleFavorite={toggleFavorite} />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                db={db}
                setDb={setDb}
                toggleFavorite={toggleFavorite}
                updateRating={updateRating}
                undoChange={undoChange}
                handleHeartClick={handleHeartClick}
              />
            }
          />
          <Route
            path="location"
            element={
              <Location
                db={db}
                toggleFavorite={toggleFavorite}
                handleHeartClick={handleHeartClick}
              />
            }
          />

          <Route path="settings" element={<Settings />} />
          <Route path="Search" element={<SearchPage db={db} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
