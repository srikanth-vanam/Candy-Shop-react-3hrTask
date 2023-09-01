import { useContext } from "react";
import CartContext from "./components/Store/Context";

const DisplayCandy = () => {
  const ctx = useContext(CartContext);
  return (
    <div className="app">
      {ctx.candyItems.map((item) => (
        <div>
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>{item.price}</p>
          </div>
          <div>
            {ctx.candyItems.length === 0 ? (
              ""
            ) : (
              <div>
                <button onClick={()=>ctx.addCartItem({...item,quantity:1})}>Add One</button> 
                <button onClick={()=>ctx.addCartItem({...item,quantity:2})} >Add Two</button>
                <button onClick={()=>ctx.addCartItem({...item,quantity:3})} >Add Three</button>
              </div>
            )}
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default DisplayCandy;
