import ReactDOM from "react-dom";
import { useContext } from "react";
import CartContext from "../Store/Context";
import classes from "./CartModal.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
  const ctx = useContext(CartContext);
  const addItemQuantity = (item) => {
    // ctx.addItems({ ...item, quantity: 1 });
  };
  const removeItemQuantity = (item) => {
    // ctx.removeItems({ ...item, quantity: 1 });
  };
  // need to calculate total amount of cartItems
  let totalAmount = 0;

  ctx.cartItems.forEach((item) => {
    if (item.quantity !== 0) {
      // const newPrice =  item.price.split("$")[1];
      totalAmount += item.quantity * item.price;
    }
  });
  return (
    <Card className={classes.modal}>
      {ctx.cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <div className={classes.amount}>
            <div className={classes.amount}>
              <p>Rs.{item.price}</p>
              <button>x{item.quantity}</button>
            </div>
            <div className={classes.modifiers}>
              <button onClick={() => removeItemQuantity(item)}>-</button>
              <button onClick={() => addItemQuantity(item)}>+</button>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
      <div className={classes.amount}>
        <p>Total Amount</p>
        <p>${totalAmount}</p>
      </div>
      <div className={classes.buttons}>
        <Button onClick={props.onConfirm}>Close</Button>
        {/* <Button onClick={()=>ctx.placeOrder()}>Order</Button> */}
      </div>
    </Card>
  );
};
const CartModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CartModal;
