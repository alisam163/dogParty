import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import NotFoundPage from './pages/NotFoundPage';
import { FaDog } from "react-icons/fa6";




function App() {
  return (
    <div className="App">

      <nav>
      <Link to="/">
        
        <div className='logo'>
            <FaDog size={70}/>
          </div>
        </Link>
        <ul className='menu'>
          <li className='menu_item'><Link to="/">Домашняя</Link></li>
          <li className='menu_item'><Link to="/favorites">Избранное</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
