import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BirthdayPage from './BirthdayPage';
import ValentinePage from './ValentinePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BirthdayPage />} />
        <Route path="/valentine" element={<ValentinePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
