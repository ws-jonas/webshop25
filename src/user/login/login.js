import React, { useState, useEffect } from 'react';

export function Login(){

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