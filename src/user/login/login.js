import React, {useContext, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../index";

export function Login(){

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const [data, setData]=useState({
        mail:"",
        password:""
    })

    //handles changes of input
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }

    //Handles User loggin / Databasae communication
    const onSubmit=(e)=> {
        e.preventDefault();
        const obj = {
            mail: data.mail,
            password: data.password,
        };

        {
            axios.post('http://localhost/login.php', obj)
                .then((res) => {

                    console.log(res.data.substring("Connected successfully".length).slice(1, -1))
                    setUser(JSON.parse(res.data.substring("Connected successfully".length).slice(1, -1)));
                });
            navigate("/");
        }
    }


    return(

        <div>

            <form onSubmit={onSubmit}>
                <h1>Login</h1>
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