import '../CSS/header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="headlineDiv">
      <h1>Math Magicians</h1>
    </div>
    <nav>
      <Link exact className="navLink" to="/">Home</Link>
      <p className="navLink">|</p>
      <Link exact className="navLink" to="/Calculator">Calculator</Link>
      <p className="navLink">|</p>
      <Link exact className="navLink" to="/Quote">Quote</Link>
    </nav>
  </header>
);

export default Header;
