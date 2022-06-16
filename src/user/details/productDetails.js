import React, { useState, useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import gladbach from "../../testFiles/Gladbach.webp";
import bayern from "../../testFiles/Bayern.avif";
import "./productDetails..css";

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
                            <h5 className="product-title">{review.name}</h5>
                            <p className="card-text">{review.description}</p>
                            <text>Test</text>
                        </div>
                    )})
            }
        </div>
    );

    function editButton(){
        if(true){
            return <Link to={"/editP"}><button className="user-button">Edit</button></Link>
        } else{
            return
        }
    }

    return(
        <div>
        <div className="productDetailsPage">

            <div className="productImages">
                <img className="product-image" src={product.image} alt="Shirt" height="400"/>
                    <div className="otherImages">

                    </div>
            </div>
            <div className="productInformation">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">89,99€</p>
                <p className="card-text">X Produkte verfügbar</p>
                {editButton()}
            </div>
        </div>
        <div className="add-comment">
            <form>
                <input className="comment-input" placeholder="Kommentar hinzufügen"/>
                <input className="detailsButton" type="submit" value="Absenden"/>
            </form>
        </div>

        <div className="comments">
            {getReviews()}
        </div>

        </div>
    );
}