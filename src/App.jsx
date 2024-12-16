import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <main>
        <Router>
          {/* <HeaderNavbar /> */}
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
