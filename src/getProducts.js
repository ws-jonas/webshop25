import React, { useState, useEffect } from 'react';

export function getProducts() {

    return (
        <div className="trikot">
            <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">Borussia Mönchengladbach Heim 22/23</h5>
                    <p className="card-text">Heimtrikot von Borussia Mönchengladbach der Bundesligasaison 22/23</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    );
}