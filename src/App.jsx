import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { SignUp } from "./components/SignUp";
import { SearchForm } from "./components/SearchForm";
import { Footer } from "./components/Footer";
import { Weather } from "./components/Weather";
import { Login } from "./components/Login";
import { useEffect, useState } from "react";
import { FavouriteLocations } from "./components/FavouriteLocations";

const App = () => {
  const [selectedCity, setSelectedCity] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [favouriteCities, setFavouriteCities] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);

      const savedFavouriteCities = sessionStorage.getItem("favouriteCities");
      if (savedFavouriteCities) {
        const parsedFavouriteCities = JSON.parse(savedFavouriteCities);
        setFavouriteCities(parsedFavouriteCities);
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("favouriteCities");
    setUser(null);
    setFavouriteCities([]);
  };

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        favouriteCities={favouriteCities}
        user={user}
        handleLogout={handleLogout}
        setSelectedCity={setSelectedCity}
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
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                setFavouriteCities={setFavouriteCities}
              />
            }
          />{" "}
          {/* Ensure setUser is passed here */}
          <Route
            path="/weather/:name/:country"
            element={
              <Weather
                selectedCity={selectedCity}
                user={user}
                favouriteCities={favouriteCities}
                setFavouriteCities={setFavouriteCities}
              />
            }
          />
          <Route
            path="/favouritelocations"
            element={
              <FavouriteLocations
                favouriteCities={favouriteCities}
                setSelectedCity={setSelectedCity}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
