import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateNote from './pages/CreateNote.jsx';
import ListNotes from './pages/ListNotes.jsx';
import FavoriteNotes from './pages/FavoriteNotes.jsx';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListNotes />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/favorites" element={<FavoriteNotes />} />
      </Routes>
    </Router>
  );
}

export default App;