import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTimer } from "./core";
import { Directory } from "./directory";
import { Home, About, Work, Contact, Blog } from "./pages";
import { Welcome } from "./welcome";

export const App = () => {
  const [shouldShowWelcome, setShouldShowWelcome] = useState(true);
  const showWelcome = !useTimer(9000) && shouldShowWelcome;

  useEffect(() => {
    if (window.location.pathname !== "/")
      setShouldShowWelcome(false);
  }, [])

  return (
    <Router>
      <div style={{ height: "100%", width: "100%" }}>
        <Directory />

        <Routes>
          <Route path="/" element={showWelcome ? <Welcome /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};
