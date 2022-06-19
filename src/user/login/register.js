import React, {useState} from "react";
import axios from "axios";
import "./form.css";


export function Register(){

    const [data, setData]=useState({
        firstname:"",
        lastname:"",
        mail:"",
        password:""
    })

    //handles Changes of Input
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }

    //Adds User to Database
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

        <div className="registerForm">
            <form onSubmit={onSubmit}>
                <h1>Registrieren</h1>
                <table className="subTr">
                    <tr>
                        <th><label>Vorname:</label></th>
                        <th><input type="text" id="firstname" name="firstname" placeholder="Vorname" onChange={handleChange} value={data.firstname}/></th>
                    </tr>
                    <tr>
                        <th><label>Nachname:</label></th>
                        <th><input type="text" id="lastname" name="lastname" placeholder="Nachname" onChange={handleChange} value={data.lastname}/></th>
                    </tr>
                    <tr>
                        <th><label>Email:</label></th>
                        <th><input type="email" id="mail" name="mail" placeholder="Email-Adresse" onChange={handleChange} value={data.mail}/></th>
                    </tr>
                    <tr>
                        <th><label>Passwort:</label></th>
                        <th><input type="password" id="password" placeholder="Passwort" name="password" onChange={handleChange} value={data.password}/></th>
                    </tr>
                    <tr>
                        <input type="submit" value="Registrieren" name="submit" className="subTr"/>
                    </tr>
                </table>
            </form>
        </div>
    );
}