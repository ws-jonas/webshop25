import React, {useState} from "react";
import axios from "axios";

export function AddUser(){

    const [data, setData]=useState({
        firstname:"",
        lastname:"",
        mail:"",
        password:""
    })

    //handles Input Changes
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }

    //Submits User into Database
    const onSubmit=(e)=> {
        e.preventDefault();
        const obj = {
            firstname: data.firstname,
            lastname: data.lastname,
            mail: data.mail,
            password: data.password,
            passwordConform: data.passwordConform,
        };

        axios.post('http://localhost/register.php', obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });


        setData({
            firstname: '',
            lastname: '',
            mail: '',
            password: '',

        })
    }

    return(

        <div>
            <form onSubmit={onSubmit}>
                <h1>Nutzer hinzufügen</h1>
                <label>Vorname</label>
                <input type="text" id="firstname" name="firstname" placeholder="Vorname" onChange={handleChange} value={data.firstname}/>
                <label>Nachname</label>
                <input type="text" id="lastname" name="lastname" placeholder="Nachname" onChange={handleChange} value={data.lastname}/>
                <label>Email</label>
                <input type="email" id="mail" name="mail" placeholder="Email-Adresse" onChange={handleChange} value={data.mail}/>
                <br/>
                <label>Passwort</label>
                <input type="password" id="password" placeholder="Passwort" name="password" onChange={handleChange} value={data.password}/>
                <input type="submit" value="submit" name="submit"/>
            </form>
        </div>
    );
}