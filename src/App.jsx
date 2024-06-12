import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { SignUp } from "./components/SignUp";
import { SearchForm } from "./components/SearchForm";
import { Footer } from "./components/Footer";
import { Weather } from "./components/Weather";
import { Login } from "./components/Login";
import { useEffect, useState } from "react";
import { FavouriteLocations } from "./components/FavouriteLocations";
import favouriteCitiesData from "../data/favouriteLocationsObject";

const App = () => {
  const [selectedCity, setSelectedCity] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [favouriteCities, setFavouriteCities] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setFavouriteCities(favouriteCitiesData);
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        favouriteCities={favouriteCities}
        user={user}
        handleLogout={handleLogout}
      />
      <main className="mt-5 mb-5 align-items-center d-flex" id="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <SearchForm
                setSelectedCity={setSelectedCity}
                searchTerm={searchTerm}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setUser={setUser} />} />{" "}
          {/* Ensure setUser is passed here */}
          <Route
            path="/weather/:id"
            element={<Weather selectedCity={selectedCity} />}
          />
          <Route
            path="/favouritelocations"
            element={<FavouriteLocations favouriteCities={favouriteCities} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
