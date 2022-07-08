import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="header__logo">
            <a href="/">Serendale</a>
          </div>
          <div className="header__navigation">
            <ul>
              <li>Smart Contracts</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Roadmap</li>
              <li>Whitepaper</li>
            </ul>
          </div>
          <div className="header__social-link">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="main__content">
            <h1>A Fast Blockchain.</h1>
            <h2>Scalable AI.</h2>
            <p>Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
          </div>
          <div className="main__button">
            <button>Get Started</button>
            <button>Ecosystems</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
