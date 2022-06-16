import React, { useState, useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import gladbach from "../../testFiles/Gladbach.webp";
import bayern from "../../testFiles/Bayern.avif";

export function ProductDetails(){

    const location = useLocation();
    const product = location.state

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const data = [];
        const test = "Diese Gut!";
        const test2 = "10/10!";
        const test3 = "Heimtrikot Borussia Mönchengladbach";
        data.push({productid: "1", name: test3, description: test, image: gladbach});
        data.push({productid: "1", name: test3, description: test2, image: bayern});
        const filteredData = data.filter(obj => {return obj.productid.includes(product.productid)})
        setReviews(filteredData);
    }, []);

    const getReviews = () => (
        <div>
            {
                reviews && reviews.map(review=>{
                    return(
                        <div className="trikot">
                            <div className="card-body">
                                <h5 className="card-title">{review.name}</h5>
                                <p className="card-text">{review.description}</p>
                                <Link to="/productDetails" state={product}><button>Details</button></Link>
                            </div>
                        </div>
                    )})
            }
        </div>
    );

    return(
        <div className="productDetailsPage">
            <div className="productDetails">
                <div className="productImages">
                    <img src={product.image} alt="Gladbach" />
                        <div className="otherImages">

                        </div>
                </div>
                <div className="productInformation">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">89,99€</p>
                        <p className="card-text">X Produkte verfügbar</p>
                    </div>
                </div>
            </div>

            <div className="comments">
                {getReviews()}
            </div>

        </div>
    );
}