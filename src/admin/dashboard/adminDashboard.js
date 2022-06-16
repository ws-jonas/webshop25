import React, { useState, useEffect } from 'react';

export function AdminDashboard(){

    const [soldProducts, setSoldProducts] = useState([]);
    const sales = [{time: "1", name: "test"},{time: "1", name: "test"},{time: "2", name: "test"},{time: "3", name: "test"},{time: "3", name: "test"},{time: "3", name: "test"},]


    function createSoldProductsChart(){
        const canvas = document.getElementById("productSales");
        const context = canvas.getContext("2d");
        context.moveTo(0, 0);
        context.lineTo(100, sales.reduce((counter, obj) => obj.time === '1' ? counter += 1 : counter, 0)*100);
        context.lineTo(200, sales.reduce((counter, obj) => obj.time === '2' ? counter += 1 : counter, 0)*100);
        context.lineTo(300, sales.reduce((counter, obj) => obj.time === '3' ? counter += 1 : counter, 0)*100);
        context.stroke();
        return
    }

    return(
        <div>
            <canvas id="productSales" width={"300"} height={"500"} onClick={createSoldProductsChart}>
            </canvas>

        </div>
    );
}