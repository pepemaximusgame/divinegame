
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  </Router>
  );
}

export default App
