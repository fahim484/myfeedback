import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";

const App = () => {
  return (
    <>
      <main>
        <Router>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/search-page" element={<SearchPage />} /> */}
            <Route path="/search/:id" element={<SearchPage />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
};

export default App;
