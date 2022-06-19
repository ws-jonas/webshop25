import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import gladbach from "../../testFiles/Gladbach.webp";
import bayern from "../../testFiles/Bayern.avif";
import "./productDetails..css";
import {UserContext} from "../../index";
import axios from "axios";

export function ProductDetails(){

    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state;
    const {user, setUser} = useContext(UserContext);

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [bought, setBought] = useState(0);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const obj = {
            productID: product.productID,
        };
        itemBought();
        axios.post('http://localhost/getComments.php', obj)
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length));
                setReviews(JSON.parse(res.data.substring("Connected successfully".length)));
            });
    }, []);

    const deleteComment = (review) =>{
        axios.post('http://localhost/deleteComment.php', review)
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length).slice(1, -1));
                setUser(JSON.parse(res.data.substring("Connected successfully".length)));
                console.log(user);
            }).catch(e => {
            console.log(e);
        });
    }

    const getReviews = () => (
        <div>
            {

                reviews && reviews.map(review=>{
                    return(
                        <div className="trikot">
                            <h5 className="product-title">{review.title}</h5>
                            <p className="card-text">{review.comment}</p>
                            <p>{parseInt(review.hasBought) ? ("Gekauft") : ("Nicht gekauft")}</p>
                            {CommentDeleteButton(review)}
                        </div>
                    )})
            }
        </div>
    );

    const itemBought=()=> {
        const obj = {
            userID: user.userID,
            productID: product.productID,
        };

        axios.post('http://localhost/getOrderByID.php', obj)
            .then((res) => {

                console.log(res.data);
                if(res.data !== "Connected successfully(NO ENTRY)"){

                    setBought(1);
                }

            });


    }

    const deleteProduct = () =>{
        axios.post('http://localhost/deleteProduct.php', product)
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length));

            });
        navigate("/");
    }

    const buyProduct = () =>{
        axios.post('http://localhost/setOrder.php', {userID: user.userID, productID: product.productID})
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length).slice(1, -1));
                console.log(user);
            });
        product.stock = parseInt(product.stock)-1;
        axios.post('http://localhost/editProduct.php', product)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });
        navigate("/shoppingCart");
    }

    function CommentDeleteButton(review){
        if(user.userID !== "0"){
            if(user.admin === "1"){
                return <button className="detailsButton" onClick={()=>deleteComment(review)}>löschen</button>
            } else{
                return
            }
        } else{
            return
        }

    }


    function UserButtons(){
        if(user.userID !== "0"){
            if(user.admin === "1"){
                return (
                    <div>
                        <Link to={"/editP"} state={product}><button className="user-button">Edit</button></Link>
                        <button className="user-button" onClick={deleteProduct}>Delete</button>
                    </div>
                );
            } else{
                return <button onClick={buyProduct}>Buy</button>
            }
        } else{
            return
        }

    }

    const commentSubmit=(e)=> {
        e.preventDefault();
        const obj = {
            userID: user.userID,
            productID: product.productID,
            comment: text,
            title: title,
            hasBought: bought,
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
                <p className="card-text">{product.stock} Produkte verfügbar</p>
                <UserButtons />
            </div>
        </div>
        <div className="add-comment">
            <form onSubmit={commentSubmit}>
                <input className="comment-input" placeholder="Titel" onChange={e => setTitle(e.target.value)}/>
                <input className="comment-input" placeholder="Kommentar hinzufügen" onChange={e => setText(e.target.value)}/>
                <input className="detailsButton" type="submit" value="Absenden"/>
            </form>
        </div>

        <div className="comments">
            {getReviews()}
        </div>

        </div>
    );
}