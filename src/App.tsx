import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
