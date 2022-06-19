import React, { useState, useRef } from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

export function EditProduct(){

    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;


    const [data, setData]=useState({
        productID: product.productID,
        name: product.name,
        stock: product.stock,
        description: product.description,
        price: product.price,
        image: product.image,
    })

    //handles Input change
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }

    //Submits Changes into Database
    const onSubmit=(e)=> {
        e.preventDefault();
        const obj = {
            productID: product.productID,
            name: data.name,
            stock: data.stock,
            description: data.description,
            price: data.price,
            image: data.image,
        };

        axios.post('http://localhost/editProduct.php', obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });

        navigate("/");


    }

    return(
        <div className="registerForm">
            <form onSubmit={onSubmit}>
                <h1>Produkt bearbeiten</h1>
                <table className="subTr">
                    <tr>
                        <th><label>Name des Produkts:</label></th>
                        <th><input type="text" name="name" size="40" onChange={handleChange} value={data.name}/></th>
                    </tr>
                    <tr>
                        <th><label>Beschreibung:</label></th>
                        <th><input type="text" name="description" onChange={handleChange} value={data.description}/></th>
                    </tr>
                    <tr>
                        <th><label>Preis:</label></th>
                        <th><input type="number" step="0.01" name="price" onChange={handleChange} value={data.price}/></th>
                    </tr>
                    <tr>
                        <th><label>Anzahl:</label></th>
                        <th><input type="number" step="1" name="stock" onChange={handleChange} value={data.stock}/></th>
                    </tr>
                    <tr>
                        <th><label>Produktbild:</label></th>
                        <th><input type="text" name="image" onChange={handleChange} value={data.image}/></th>
                    </tr>
                    <tr>
                        <input type="submit" value="Speichern"  />
                    </tr>
                </table>
            </form>
        </div>
    );
}