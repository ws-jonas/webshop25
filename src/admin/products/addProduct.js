import React, { useState, useEffect } from 'react';

export function AddProduct(){

    return(
        <div className="productEditPage">
            <form action="#">
                <input type="text" name="productname" size="40" value="#" />
                <input type="text" name="description" value="#" />
                <input type="number" step="0.01" name="price" value="#" />
                <input type="number" step="1" name="count" value="#" />
                <input type="image" name="images" value="#" />
                <input type="submit" value="Speichern" />
            </form>
        </div>
    );
}