import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <main>
        <Router>
          <MyNavbar />
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
          </Routes>
          {/* <Footer /> */}
        </Router>
      </main>
    </>
  );
};

export default App;
