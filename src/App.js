import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {productDetails} from "./productDetails";
import {Link} from "react-router-dom";
import gladbach from "./Gladbach.webp";
import bayern from "./Bayern.avif";

function App() {

    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const data = [];
        const test = "Heimtrikot Borussia Mönchengladbach";
        const test2 = "Bayerntrikot"
        data.push({name: test, description: test, image: gladbach});
        data.push({name: test2, description: test2, image: bayern});
        const filteredData = data.filter(obj => {return obj.name.includes(searchValue)})
        setProducts(filteredData);
    }, []);

    function changeSearch(value){
        setSearchValue(value);
    }

    const getProducts = () => (
        <div>
        {
            products && products.filter((val) => {
                if (searchValue == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return val
                }
                }).map(product=>{
                return(
                    <div className="trikot">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <img src={product.image} alt={product.name} height="100"/>
                            <p className="card-text">{product.description}</p>
                            <Link to="/productDetails" state={product}><button>Details</button></Link>
                        </div>
                    </div>
                )})
        }
        </div>
    );

    return (
    <div className="trikot25">

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">

          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <input placeholder={"Suche dein Trikot"} onChange={event => setSearchValue(event.target.value)}/>



          </div>
          <button className="btn btn-outline-success loginButton" type="submit">Login</button>

        </div>

      </nav>

      <div>
          {getProducts()}
      </div>

    </div>
    );
}

export default App;
