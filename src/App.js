import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { CssBaseLine } from "@mui/material";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
