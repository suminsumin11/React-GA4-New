import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag &&
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
  }, [location]);
};

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  usePageTracking();
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
