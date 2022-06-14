import logo from './logo.svg';
import './App.css';
import './getProducts'

function App() {
  return (
    <div className="trikot25">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Online Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

          </div>
          <i className="fa-solid fa-basket-shopping warenkorb"></i>
          <button className="btn btn-outline-success loginButton" type="submit">Login</button>
        </div>
      </nav>

      <div className="products">

        <getProducts />

      </div>
    </div>
  );
}

export default App;
