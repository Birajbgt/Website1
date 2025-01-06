import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import { AboutMe } from './pages/AboutMe';
import AboutMe from './pages/AboutMe';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/' element={<Homepage />} />
          <Route path='/' element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
