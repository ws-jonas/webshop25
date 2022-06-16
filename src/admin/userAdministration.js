import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import gladbach from "../testFiles/Gladbach.webp";
import bayern from "../testFiles/Bayern.avif";

export function UserAdministration(){

    const [user, setUser] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const data = [];
        const test = "Herbert";
        const test2 = "Kevin"
        data.push({userid: "1", name: test, email: test});
        data.push({userid: "2", name: test2, email: test2});
        setUser(data);
    }, []);

    const getUser = () => (
        <div>
            {
                user && user.filter((val) => {
                    if (searchValue == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
                        return val
                    }
                }).map(user=>{
                    return(
                        <view className="trikot">
                            <h3 className="product-title">
                                {user.name}
                            </h3>
                            <view className="p-details">
                                <text className="text">{user.email}</text>
                            </view>
                            <button className="detailsButton">löschen</button>
                        </view>
                    )})
            }
        </div>
    );

    return (
        <div className="trikot25">

            <input className="search-bar" placeholder={"Suche nach einem Nutzer"} onChange={event => setSearchValue(event.target.value)}/>
            <div>
                {getUser()}
            </div>

        </div>
    );
}