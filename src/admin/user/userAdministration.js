import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import gladbach from "../../testFiles/Gladbach.webp";
import bayern from "../../testFiles/Bayern.avif";
import {UserContext} from "../../index";
import axios from "axios";

export function UserAdministration(){


    const [user, setUser] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const {logUser, setLogUser} = useContext(UserContext);

    useEffect(() => {
        axios.post('http://localhost/displayUser.php')
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length).slice(1, -1));
                setUser(JSON.parse(res.data.substring("Connected successfully".length)));
                console.log(user);
            });
    }, []);

    const getUser = () => (
        <div>
            {
                user && user.filter((val) => {
                    if (searchValue === "") {
                        return val
                    } else if (val.firstname.toLowerCase().includes(searchValue.toLowerCase())) {
                        return val
                    }
                }).map(u=>{
                    return(
                        <view className="trikot">
                            <h3 className="product-title">
                                {u.firstname}
                            </h3>
                            <view className="p-details">
                                <text className="text">{u.mail}</text>
                            </view>
                            <button className="detailsButton">löschen</button>
                        </view>
                    )})
            }
        </div>
    );

    return (
        <div className="trikot25">
            <Link to={"/addU"}><button className="detailsButton">Nutzer hinzufügen</button></Link>
            <input className="search-bar" placeholder={"Suche nach einem Nutzer"} onChange={event => setSearchValue(event.target.value)}/>
            <div>
                {getUser()}
            </div>

        </div>
    );
}