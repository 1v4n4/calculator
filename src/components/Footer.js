import '../CSS/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <p className="foot">
      Made by
      <Link id="gitLink" to={{ pathname: 'https://github.com/1v4n4' }} target="_blank" rel="noreferrer"> 1v4n4 </Link>
      © 2021
    </p>

  </footer>
);

export default Footer;
