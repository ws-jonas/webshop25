import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../index";

//Screen that shows Orders for logged in User
export function ShoppingCart(){

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([])
    const {user, setUser} = useContext(UserContext);

    //Retrieve Orders from logged in User
    useEffect(() => {
        axios.post('http://localhost/getOrder.php', user)
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length));
                const data = JSON.parse(res.data.substring("Connected successfully".length));
                if(res.data.substring("Connected successfully".length) !== "(NO ENTRY)"){
                    //setOrders(JSON.parse(res.data.substring("Connected successfully".length)));
                    console.log(data);

                    setOrders(data)

                }
            });
    }, []);

    //Display Orders
    const getOrders = () => (
        <div>
            {
                orders && orders.map(order=>{
                    return(
                        <div className="trikot">
                            <div className="card-body">
                                <h5 className="card-title">{order.name}</h5>
                                <p className="card-text">{order.description}</p>
                                <p>{order.timestamp} {order.price}€</p>
                            </div>
                        </div>
                    )})
            }
        </div>
    );

    return(
        <div>
            {getOrders()}

        </div>
    );
}