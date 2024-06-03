import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { SignUp } from "./components/SignUp";
import { SearchForm } from "./components/SearchForm";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-5 mb-5 align-items-center d-flex" id="main-container">
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
