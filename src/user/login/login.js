import React, { useState, useEffect } from 'react';

export function Login(){

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const [data, setData]=useState({
        mail:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }

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

    const login = () =>{
        axios.post('http://localhost/login.php', data)
            .then((res) => {
                console.log(res.data[0])
                setUser(res.data);
            });
    }


    return(

        <div>
            <p>Login</p>
            <form action="../../scripts/login.php">
                <label>Username/ Email</label>
                <input type="email" id="username" name="username" placeholder="Email-Adresse"/>
                <br/>
                <label>Passwort</label>
                <input type="text" id="passwort" placeholder="Passwort" name="passwort" />
                <input type="submit" value="submit"/>
            </form>

        </div>
    );
}