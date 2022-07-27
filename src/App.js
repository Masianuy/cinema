import './App.css';
import Layout from './Layout';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import Studio from './components/Studio/Studio';
import Directors from './components/Directors/Directors';
import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies/*" element={<Movies />} />
            <Route path="actors/*" element={<Actors />} />
            <Route path="directors/*" element={<Directors />} />
            <Route path="studios/*" element={<Studio />} />
            <Route path="page404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/page404" replace={true} />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
