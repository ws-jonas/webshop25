import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../index";

export function MyReviews(){

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();
    const [reviews, setReviews] = useState([])
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        axios.post('http://localhost/getReviewsByUser.php', user)
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length));
                const data = JSON.parse(res.data.substring("Connected successfully".length));
                if(res.data.substring("Connected successfully".length) !== "(NO ENTRY)"){

                    setReviews(data);

                }
                console.log(products);
            });
    }, []);

    const goToProduct = (review) =>{

        products.forEach((item)=>{
            if(item.productID === review.productID)
            {
                setProduct(item);
            }}
    );

        navigate("/productDetails", product);
    }

    const getProducts = () => (
        <div>
            {
                reviews && reviews.map(review=>{
                    return(
                        <div className="trikot">
                            <div className="card-body">
                                <h5 className="card-title">{review.title}</h5>
                                <p className="card-text">{review.comment}</p>
                                <p>{review.name}</p>
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