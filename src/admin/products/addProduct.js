import React, { useState, useRef } from 'react';
import axios from "axios";

export function AddProduct(){

    const navigate = useNavigate();

    const [data, setData]=useState({
        name:"",
        stock:0,
        description:"",
        price:0.0,
        image: "",
    })

    //handles Changes of Input
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }

    //Adds Product into Database
    const onSubmit=(e)=> {
        e.preventDefault();
        const obj = {
            name: data.name,
            stock: data.stock,
            description: data.description,
            price: data.price,
            image: data.image,
        };

        axios.post('http://localhost/setProduct.php', obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });

        setData({
            name:"",
            stock:0,
            description:"",
            price:0.0,
            image: "",
        })
        navigate("/")
    }

    return(

        <div className="registerForm">
            <form onSubmit={onSubmit}>
                <h1>Produkt hinzufügen</h1>
                <table className="subTr">
                    <tr>
                        <th><label>Name des Produkts:</label></th>
                        <th><input type="text" name="name" size="40" onChange={handleChange}/></th>
                    </tr>
                    <tr>
                        <th><label>Beschreibung:</label></th>
                        <th><input type="text" name="description" onChange={handleChange}/></th>
                    </tr>
                    <tr>
                        <th><label>Preis:</label></th>
                        <th><input type="number" step="0.01" name="price" onChange={handleChange}/></th>
                    </tr>
                    <tr>
                        <th><label>Anzahl:</label></th>
                        <th><input type="number" step="1" name="stock" onChange={handleChange}/></th>
                    </tr>
                    <tr>
                        <th><label>Produktbild:</label></th>
                        <th><input type="text" name="image" onChange={handleChange}/></th>
                    </tr>
                    <tr>
                        <input type="submit" value="Speichern"  />
                    </tr>
                </table>
            </form>
        </div>
    );
}