import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
const Cart = ({setShowCart}) => {
    return (
//         <div className="cart-panel">
//             <div className="opac-layer" >
            
//             </div>
//             <div className="cart-content">
//             <div className="cart-header">
//                     <span className="heading">Shopping Cart</span>
//                     <span className="close-btn" 
//                     onClick={() => setShowCart(false)}>
//                      <MdClose  />
//                         <span className="text">close</span>
//                     </span>
//                 </div>
// {/* 
//                 <div className="empty-cart">
//                 <BsCartX />
//                     <span>No Products in cart</span>
//                     <button className="return">RETURN TO SHOP</button>

//                 </div> */}

//                 <>
//                 <CartItem />
//                 <div className="cart-footer">
                    
//                     <div className="subtotal">
//                     <span className="text">Subtotal:</span>
//                     <span className="text total">&#8377;1234</span>
//                      </div>
//                     <div className="button">
//                     <button className="checkout-cta">
//                     CheckOut
//                     </button>
                    
//                 </div>
                    
              
                
//                 </div>
//                 </>

//                 </div>
//                 </div>
              


<div className="cart-panel">
<div
    className="opac-layer"
    onClick={() => setShowCart(false)}
></div>
<div className="cart-content">
    <div className="cart-header">
        <span className="heading">Shopping Cart</span>
        <span
            className="close-btn"
            onClick={() => setShowCart(false)}
        >
            <MdClose className="close-btn" />
            <span className="text">close</span>
        </span>
    </div>

    
        {/* <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={() => {}}>
                RETURN TO SHOP
            </button>
        </div> */}
    


        <>
            <CartItem />
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">
                        &#8377;899
                    </span>
                </div>
                <div className="button">
                    <button
                        className="checkout-cta"
                       
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    
</div>
</div>
                

    )
};

export default Cart;


