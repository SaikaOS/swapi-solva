import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import './index.css';
import PlanetsPage from './pages/PlanetsPage';
import StarshipsPage from './pages/StartshipsPage';
import DetailPage from './pages/DetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import PeoplePage from './pages/PeoplePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
      <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/people/:id" element={<DetailPage entityType="people" />} />
        <Route path="/planets/:id" element={<DetailPage entityType="planets" />} />
        <Route path="/starships/:id" element={<DetailPage entityType="starships" />} />
      </Route>
    </Routes>
  );
}

export default App;
