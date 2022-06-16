import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

export function ShoppingCart(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = [];
        const test = "Heimtrikot Borussia Mönchengladbach";
        data.push({key: 1,  name: test, description: test});
        setProducts(data);
    }, []);

    const getProducts = () => (
        <div>
            {
                products && products.map(product=>{
                    return(
                        <div className="trikot">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <Link to="/productDetails" state={product}><button>Details</button></Link>
                            </div>
                        </div>
                    )})
            }
        </div>
    );

    return(
        <div>
            {getProducts()}

        </div>
    );
}