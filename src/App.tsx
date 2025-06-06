import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/notfound";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
