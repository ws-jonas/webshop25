import logo from '../../testFiles/logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {productDetails} from "../details/productDetails";
import {Link} from "react-router-dom";
import gladbach from "../../testFiles/Gladbach.webp";
import bayern from "../../testFiles/Bayern.avif";

function App() {

    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const data = [];
        const test = "Heimtrikot Borussia Mönchengladbach";
        const test2 = "Bayerntrikot"
        data.push({productid: "1", name: test, description: test, image: gladbach});
        data.push({productid: "2", name: test2, description: test2, image: bayern});
        setProducts(data);
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

      <input placeholder={"Suche dein Trikot"} onChange={event => setSearchValue(event.target.value)}/>
      <div>
          {getProducts()}
      </div>

    </div>
    );
}

export default App;
