import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import gladbach from "../../testFiles/Gladbach.webp";
import bayern from "../../testFiles/Bayern.avif";
import "./productDetails..css";
import {UserContext} from "../../index";
import axios from "axios";

export function ProductDetails(){

    const location = useLocation();
    const product = location.state;
    const {user, setUser} = useContext(UserContext);

    const {text, setText} = useState("");
    const {title, setTitle} = useState("");

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.post('http://localhost/getComments.php')
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length).slice(1, -1));
                setReviews(JSON.parse(res.data.substring("Connected successfully".length).slice(1, -1)));
            });
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

    const itemBought=(e)=> {
        e.preventDefault();
        const obj = {
            userID: user.userID,
            productID: product.productID,
        };

        axios.post('http://localhost/setOrdert.php', obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });


    }


    function UserButtons(){
        if(user.userID !== 0){
            if(user.admin){
                return <Link to={"/editP"}><button className="user-button">Edit</button></Link>
            } else{
                return <Link to={"/shoppingCart"}><button>Buy</button></Link>
            }
        } else{
            return
        }

    }const commentSubmit=(e)=> {
        e.preventDefault();
        const obj = {
            userID: user.userID,
            productID: product.productID,
            comment: text,
            title: title,
            hasBought: 0,
        };

        axios.post('http://localhost/setComment.php', obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });

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
                <UserButtons />
            </div>
        </div>
        <div className="add-comment">
            <form onSubmit={commentSubmit}>
                <input name="title" className="comment-input" placeholder="Titel" onChange={(e) => {setTitle(e.target.value)}}/>
                <input name="text" className="comment-input" placeholder="Kommentar hinzufügen" onChange={(e) => {setText(e.target.value)}}/>
                <input className="detailsButton" type="submit" value="Absenden"/>
            </form>
        </div>

        <div className="comments">
            {getReviews()}
        </div>

        </div>
    );
}