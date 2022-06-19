import logo from '../../testFiles/logo.svg';
import './App.css';
import React, {useState, useEffect, useContext} from 'react';
import {productDetails} from "../details/productDetails";
import {Link, useLocation} from "react-router-dom";
import gladbach from "../../testFiles/Gladbach.webp";
import bayern from "../../testFiles/Bayern.avif";
import {UserContext} from "../../index";
import axios from "axios";



function App() {

    const location = useLocation();
    const {user, setUser} = useContext(UserContext);

    const [products, setProducts] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        axios.post('http://localhost/getProduct.php')
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length));
                setProducts(JSON.parse(res.data.substring("Connected successfully".length)));
            });
    }, []);

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
                    <view className="trikot">
                        <h3 className="product-title">
                            {product.name}
                        </h3>
                        <view className="p-details">
                            <text className="text">{product.description}</text>
                            <img className="product-image" src={product.image} alt={product.name} height="100"/>

                        </view>
                        <Link to="/productDetails" state={product}><button className="detailsButton">Details</button></Link>
                    </view>
                )})
        }
        </div>
    );

    return (
    <div className="trikot25">

      <input className="search-bar" placeholder={"Suche dein Trikot"} onChange={event => setSearchValue(event.target.value)}/>
      <div>
          {getProducts()}
      </div>

    </div>
    );
}

export default App;
