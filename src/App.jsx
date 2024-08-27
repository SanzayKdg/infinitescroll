import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InfiniteScroll from "./pages/InfiniteScroll";
import Observer from "./pages/Observer";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/observer" element={<Observer />} />
      </Routes>
    </Router>
  );
};

export default App;
