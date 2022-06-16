import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

export function UserAdministration(){

    const [user, setUser] = useState([]);

    useEffect(() => {
        const data = [];
        const test = "Heimtrikot Borussia Mönchengladbach";
        data.push({key: 1,  name: test, description: test});
        setUser(data);
    }, []);

    const getUser = () => (
        <div>
            {
                user && user.map(user=>{
                    return(
                        <div className="trikot">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.description}</p>
                                <button>Löschen</button>
                            </div>
                        </div>
                    )})
            }
        </div>
    );

    return(
        <div>
            {getUser()}

        </div>
    );
}