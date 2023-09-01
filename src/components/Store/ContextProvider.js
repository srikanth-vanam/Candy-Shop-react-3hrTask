import { useEffect, useState } from "react";
import CartContext from "./Context";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const candyItemHandler = (item) => {
    postDataToCrud(item);
    getDataFromCrud();
  };

  const postDataToCrud = (item) => {
    fetch(
      `https://crudcrud.com/api/1e709b75fe2c424b90671104c986e0c2/products`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Failed to postdata to crudcrud ";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        console.log("response from crud is", data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getDataFromCrud = () => {
    fetch(
      `https://crudcrud.com/api/1e709b75fe2c424b90671104c986e0c2/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Failed to getData from crudcrud ";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        setItems(() => {
          return [...data];
        });
        console.log("GET-response from crud is", data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getDataFromCrud();
  }, []);

  const addItemHandler = (item) => {
    // setCartItems((prevItem) => {
    //   const items = [...prevItem];
    //   items.push(item);
    //   return items;
    // });
    fetch(
        `https://crudcrud.com/api/1e709b75fe2c424b90671104c986e0c2/Items`,
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMsg = "Failed to postdata to crudcrud ";
              if (data && data.error && data.error.message) {
                errorMsg = data.error.message;
              }
              throw new Error(errorMsg);
            });
          }
        })
        .then((data) => {
          console.log("response from crud is", data);
        })
        .catch((err) => {
          alert(err.message);
        });
    // postCartItemToCrud(item);
  };

//   const postCartItemToCrud = (item) => {
//   };

  const getCartItemsFromCrudHandler = () => {
    fetch(
      `https://crudcrud.com/api/1e709b75fe2c424b90671104c986e0c2/Items`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Failed to getData from crudcrud ";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        setCartItems(() => {
          return [...data];
        });
        console.log("GET-response from crud is", data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const cartContext = {
    candyItems: items,
    cartItems: cartItems,
    addCandyItem: candyItemHandler,
    addCartItem: addItemHandler,
    getCartItemsFromCrud:getCartItemsFromCrudHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
