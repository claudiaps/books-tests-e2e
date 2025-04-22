import { BrowserRouter as Router, Routes, Route } from "react-router";
import BookSearch from "./pages/BookSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<BookSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
