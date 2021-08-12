import '../CSS/header.css';

const Header = () => (
  <header>
    <div className="headlineDiv">
      <h1>Math Magicians</h1>
    </div>
    <nav>
      <a className="navLink" href="/">Home</a>
      <p className="navLink">|</p>
      <a className="navLink" href="/Calculator">Calculator</a>
      <p className="navLink">|</p>
      <a className="navLink" href="/Quote">Quote</a>
    </nav>
  </header>
);

export default Header;
