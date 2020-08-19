import React from 'react'
import { useStateValue } from "./StateProvider";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import CurrencyFormat from "react-currency-format"


function Checkout() {
     const [{ basket }] = useStateValue();

    return (
        <div className="checkoutcheck">
        <div className="checkout">
            <img className="checkout-ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg">

            </img>
            {basket?.length === 0 ? (
                
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket.
                            "Add to basket" next to the item.
                        </p>
                    </div>
            ) : (
                 <div>
                     <h2 className="checkout-title">Your Shopping Basket</h2>

                 {/* List out all of the Checkout Products */}
                   {basket?.map((item) => (
                       <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                       />
                   ))}

                 </div>
                 
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout-right">
                <Subtotal />
                </div>
        )}
        </div>
        
    );
}

export default Checkout
