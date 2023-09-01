import { useContext } from "react";
import CartContext from "./components/Store/Context";

const Cart = () => {
    const ctx=useContext(CartContext)
    let quantity=0;
    ctx.cartItems.forEach((item)=>{
        quantity+=item.quantity;
    })
    return ( <>
    <span>Cart {quantity}</span>
    </> );
}
 
export default Cart;