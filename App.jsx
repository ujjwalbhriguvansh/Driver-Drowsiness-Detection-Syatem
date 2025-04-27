import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetectionPage from './pages/DetectionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detection" element={<DetectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
