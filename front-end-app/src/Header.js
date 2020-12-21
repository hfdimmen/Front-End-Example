import cat from './assets/cat.svg';

function Header() {
    return(
    <div className="App">
            <header className="App-header">
              <img src={cat} className="App-cat" alt="logo" />
              <p>
                Welcome to this cat-fact frontend test
              </p>
            </header>
    </div>)
  }

export default Header;
