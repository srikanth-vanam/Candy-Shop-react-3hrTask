import { useContext, useRef } from "react";
import CartContext from "./components/Store/Context";
// import Cart from "./Cart";

const AddCandy = (props) => {
  const ctx = useContext(CartContext);
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    const item = {
      id: Math.random().toString(),
      name: nameRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
    };
    ctx.addCandyItem(item);
  };
  let quantity = 0;
  ctx.cartItems.forEach((item) => {
    quantity += item.quantity;
  });
  const showHandler=()=>{
    ctx.getCartItemsFromCrud();
    props.onCartShow();
  }
  return (
    <div className="app">
      <form>
        <label>Name</label>
        <input type="text" ref={nameRef}></input>
        <label>Description</label>
        <input type="text" ref={descRef}></input>
        <label>Price</label>
        <input type="number" min={1} defaultValue={1} ref={priceRef}></input>
        <button onClick={clickHandler}>Add Product</button>
      </form>
      <div >
        <button onClick={showHandler}>Cart {quantity}</button>
      </div>
    </div>
  );
};

export default AddCandy;
