import React from "react";
import Card from "./Card";

const HomePage = ({products}) =>{
    console.log("Home", products);
    return (
        products.length > 0 &&
        <div>
            <div className="main-section">
                <h1>All Items</h1>
                <div className="items">
                    {
                        products.map((product) =>(
                            <Card product={product} />
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}

export default HomePage;