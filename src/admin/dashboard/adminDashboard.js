import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import "./dashboard.css";


export function AdminDashboard(){

    const [orders, setOrders] = useState([]);
    const sales = [{time: "1", name: "test"},{time: "1", name: "test"},{time: "2", name: "test"},{time: "3", name: "test"},{time: "3", name: "test"},{time: "3", name: "test"},]

//Retrieves Orders from Database
    useEffect(() => {
        axios.post('http://localhost/getAllOrders.php')
            .then((res) => {

                console.log(res.data.substring("Connected successfully".length));
                const data = JSON.parse(res.data.substring("Connected successfully".length));
                if(res.data.substring("Connected successfully".length) !== "(NO ENTRY)"){
                    //setOrders(JSON.parse(res.data.substring("Connected successfully".length)));
                    console.log(data);
                    createSoldProductsChart(data);



                }
        });

    }, []);



//Creation of Chart on Canvas
    function createSoldProductsChart(soldProducts){
        setOrders(soldProducts);
        const canvas = document.getElementById("productSales");
        const context = canvas.getContext("2d");
        const today = new Date();
        const baseX = 10;
        const baseY = 100;
        const leftY = 0;
        const rightX = 700;

        if(parseInt(today.getMonth()+1) < 10){
            const todayDate=today.getFullYear() + "-0"+ parseInt(today.getMonth()+1) +"-"+today.getDate();
            const oneDate=today.getFullYear() + "-0"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -1;
            const twoDate=today.getFullYear() + "-0"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -2;
            const threeDate=today.getFullYear() + "-0"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -3;
            const fourDate=today.getFullYear() + "-0"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -4;
            const fiveDate=today.getFullYear() + "-0"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -5;
            const sixDate=today.getFullYear() + "-0"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -6;

            context.moveTo(10, 100);
            context.lineTo(100, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === todayDate ? counter += 1 : counter, 0));
            context.lineTo(200, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === oneDate ? counter += 1 : counter, 0));
            context.lineTo(300, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === twoDate ? counter += 1 : counter, 0));
            context.lineTo(400, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === threeDate ? counter += 1 : counter, 0));
            context.lineTo(500, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === fourDate ? counter += 1 : counter, 0));
            context.lineTo(600, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === fiveDate ? counter += 1 : counter, 0));
            context.lineTo(700, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === sixDate ? counter += 1 : counter, 0));
            context.stroke();


        } else {
            const todayDate=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getDate();
            const oneDate=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -1;
            const twoDate=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -2;
            const threeDate=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -3;
            const fourDate=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -4;
            const fiveDate=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -5;
            const sixDate=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getDate() -6;

            context.moveTo(0, 100);
            context.lineTo(100, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === todayDate ? counter += 1 : counter, 0));
            context.lineTo(200, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === oneDate ? counter += 1 : counter, 0));
            context.lineTo(300, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === twoDate ? counter += 1 : counter, 0));
            context.lineTo(400, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === threeDate ? counter += 1 : counter, 0));
            context.lineTo(500, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === fourDate ? counter += 1 : counter, 0));
            context.lineTo(600, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === fiveDate ? counter += 1 : counter, 0));
            context.lineTo(700, 100-soldProducts.reduce((counter, obj) => obj.timestamp.slice(0, -9) === sixDate ? counter += 1 : counter, 0));
            context.stroke();
        }

        context.moveTo(baseX, leftY);
        context.lineTo(baseX, baseY);
        // Draw arrow for y axis.
        context.moveTo(baseX, leftY);
        context.lineTo(baseX + 5, leftY + 5);
        context.moveTo(baseX, leftY);
        context.lineTo(baseX - 5, leftY + 5);
        // Draw x axis.
        context.moveTo(baseX, baseY);
        context.lineTo(rightX, baseY);
        // Draw arrow for x axis.
        context.moveTo(rightX, baseY);
        context.lineTo(rightX - 5, baseY + 5);
        context.moveTo(rightX, baseY);
        context.lineTo(rightX - 5, baseY - 5);
        // Define style and stroke lines.
        context.strokeStyle = "#000";
        context.stroke();


    }



    return(
        <div>

            <table>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table>

            <div className="myChart">
                <canvas  id="productSales" width={"700"} height={"110"} >
                </canvas>
            </div>
            <p className="headline">Heute --------> vor einer Woche</p>


            <div className="headline">
                <h4>Menü:</h4>
            </div>
            <div className="dashboardFeatures">
                <Link to={"/user"}><button className="user-button">Nutzerübersicht</button></Link>
            </div>

            <div className="headline">
            </div>
            <div className="dashboardFeatures">
                <Link to={"/addP"}><button className="user-button">Produkt hinzufügen</button></Link>
            </div>

        </div>
    );
}