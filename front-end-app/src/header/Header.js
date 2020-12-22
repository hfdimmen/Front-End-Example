import cat from './cat.svg';
import './Header.css';

function Header() {
    return(
    <div className="Header">
            <header className="Header-body">
              <a href="/" className="Header-link">
                <img src={cat} className="Header-cat" alt="logo" />
              </a>
              <p>
                Welcome to this cat-fact frontend test
              </p>
            </header>
    </div>)
  }

export default Header;
