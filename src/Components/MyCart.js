import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import CartCard from "./CartCard";
import Bill from "./Biil";


 const MyCart = () =>{
    let [products, setProducts] = useState([]);
    let cart = useSelector((state) => state.cart.items);
    let data = useSelector((state) => state.data.data);

    useEffect(() => {
        let items = [];

        for(let i=0;i<data.length; i++){
            console.log(data[i].id)
            if(cart.includes(data[i].id.toString())){
                items.push(data[i]);
            }
        }
        
        console.log(items);
        setProducts(items);
    }, [cart, data])
    

    return(
        
            <div className="cart">
                <h1>My Cart</h1>
                <div className="main-cart">
                    {
                        cart.length > 0 ? 
                            <div className="items">
                                {
                                    products.map((item) => (
                                        <CartCard product={item} /> 
                                    ))
                                }                    
                            </div> :
                        <div className="empty">Is Empty...</div>
                    }

                    <div className="bill-out">
                        <div className="bill">
                                <h4>Checkout List</h4>
                                {
                                    cart.length > 0 &&
                                    <div className="bill-item">
                                        {
                                            products.map((item) => (
                                                <Bill item={item} />
                                            ))
                                        }
                                    </div>
                                }
                        </div>
                        </div>
                </div>
                
            </div>
        
    )
}

export default MyCart;