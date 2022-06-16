import React, { useState, useEffect } from 'react';
import { useLocation} from "react-router-dom";

export function ProductDetails(){

    const location = useLocation();
    const product = location.state

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
                <div className="card-body">
                    <h5 className="card-title">Bewertungen</h5>
                    <p className="card-text">ist Mega 10/10!</p>
                </div>
            </div>

        </div>
    );
}