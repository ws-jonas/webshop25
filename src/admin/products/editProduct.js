import React, { useState, useRef } from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";

export function EditProduct(){

    const location = useLocation();
    const product = location.state;

    const selectedFile = useRef('');
    const [image, setImage] = useState({
        selectedImage: "",
    });

    const [data, setData]=useState({
        productID: product.productID,
        name: product.name,
        stock: product.stock,
        description: product.description,
        price: product.price,
        image: product.image,
    })

    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }

    const onFileChange= (e) => {
        const files = e.target.files;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            setImage({
                selectedImage: event.target.result,
            })
        }
        console.log(image.selectedImage);
    }

    const onSubmit=(e)=> {
        e.preventDefault();
        const obj = {
            productID: product.productID,
            name: data.name,
            stock: data.stock,
            description: data.description,
            price: data.price,
            image: image.selectedImage,
        };

        axios.post('http://localhost/editProduct.php', obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });


    }

    return(
        <div className="productEditPage">
            <form onSubmit={onSubmit}>
                <h1>Produkt bearbeiten</h1>
                <label>Name des Produkts:</label>
                <input type="text" name="name" size="40" onChange={handleChange} value={data.name}/>
                <label>Beschreibung:</label>
                <input type="text" name="description" onChange={handleChange} value={data.description}/>
                <label>Preis:</label>
                <input type="number" step="0.01" name="price" onChange={handleChange} value={data.price}/>
                <label>Anzahl:</label>
                <input type="number" step="1" name="stock" onChange={handleChange} value={data.stock}/>
                <label>Produktbild:</label>
                <input type="file" name="image" onChange={onFileChange} value={data.image}/>
                <input type="submit" value="Speichern"  />
            </form>
        </div>
    );
}