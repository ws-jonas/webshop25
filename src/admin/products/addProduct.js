import React, { useState, useRef } from 'react';
import axios from "axios";

export function AddProduct(){

    const selectedFile = useRef('');
    const [image, setImage] = useState({
        selectedImage: "",
    });

    const [data, setData]=useState({
        name:"",
        stock:0,
        description:"",
        price:0.0,
        image: "",
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
            name: data.name,
            stock: data.stock,
            description: data.description,
            price: data.price,
            image: image.selectedImage,
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
    }

    return(
        <div className="productEditPage">
            <form onSubmit={onSubmit}>
                <h1>Produkt hinzufügen</h1>
                <label>Name des Produkts:</label>
                <input type="text" name="name" size="40" onChange={handleChange}/>
                <label>Beschreibung:</label>
                <input type="text" name="description" onChange={handleChange}/>
                <label>Preis:</label>
                <input type="number" step="0.01" name="price" onChange={handleChange}/>
                <label>Anzahl:</label>
                <input type="number" step="1" name="stock" onChange={handleChange}/>
                <label>Produktbild:</label>
                <input type="file" name="image" onChange={onFileChange} />
                <input type="submit" value="Speichern"  />
            </form>
        </div>
    );
}