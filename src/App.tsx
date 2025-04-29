import { BrowserRouter as Router, Routes, Route } from "react-router";
import BookSearch from "./pages/BookSearch";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<BookSearch />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
