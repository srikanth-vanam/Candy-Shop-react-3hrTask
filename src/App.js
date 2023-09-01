import React, { useContext, useState } from "react";

import "./App.css";
import AddCandy from "./AddCandy";
import DisplayCandy from "./DisplayCandy";
import ContextProvider from "./components/Store/ContextProvider";
import CartModal from "./components/Cart/CartModal";
import CartContext from "./components/Store/Context";
function App() {
  const [cartShow, setCartShow] = useState(false);
  const cartShowHandler = () => {
    setCartShow(true);
  };
  const cartHideHandler = () => {
    setCartShow(false);
  };
  return (
    <>
      <ContextProvider>
      {cartShow && <CartModal onConfirm={cartHideHandler} />}
        <AddCandy onCartShow={cartShowHandler}/>
        <DisplayCandy />
      </ContextProvider>
    </>
  );
}

export default App;
