import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../index";

export function MyReviews(){

    const navigate = useNavigate();
    const [deleted, setDeleted] = useState([]);
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
            });
    }, [deleted]);


    //Deletes comment from Database
    const deleteComment = (review) =>{
        axios.post('http://localhost/deleteComment.php', review)
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length).slice(1, -1));

            }).catch(e => {
            console.log(e);
        });
        setDeleted(review);
    }

    //displays Review
    const getReviews = () => (
        <div>
            {
                reviews && reviews.map(review=>{
                    return(
                        <div className="trikot">
                            <div className="card-body">
                                <h5 className="card-title">{review.title}</h5>
                                <p className="card-text">{review.comment}</p>
                                <p>{review.name}</p>
                                <button className="detailsButton" type="submit" onClick={()=>deleteComment(review)}>löschen</button>
                            </div>
                        </div>
                    )})
            }
        </div>
    );

    return(
        <div>
            {getReviews()}

        </div>
    );
}