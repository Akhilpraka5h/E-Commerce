// import React, { createContext, useEffect, useState } from "react";
// // import ALL_Product from "../Components/Assets/all_product";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < 300 + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };
// const ShopContextProvider = (props) => {
//   const [ALL_Product, setAll_Product] = useState([]);
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   useEffect(() => {
//     fetch("http://localhost:4000/allproducts")
//       .then((response) => response.json())
//       .then((data) => setAll_Product(data));
//       if (localStorage.getItem('autho-token')) {
//         fetch('http://localhost:4000/getcart',{
//           method: 'POST',
//           headers: {
//             Accept:'application/form-data',
//             'auth-token':`${localStorage.getItem('auth-token')}`,
//             'Content-Type':'application/json'
//             },
//             body:'',
//         })
//         .then((response)=>response.json())
//         .then((data)=>setCartItems(data))
//       }
//   }, []);

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     if (localStorage.getItem("auth-token")) {
//       fetch("http://localhost:4000/addtocart", {
//         // Fixed URL scheme
//         method: "POST",
//         headers: {
//           Accept: "application/json", // Fixed header value
//           "auth-token": `${localStorage.getItem("auth-token")}`,
//           "Content-Type": "application/json", // Fixed header value
//         },
//         body: JSON.stringify({ itemId: itemId }),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.error("Error:", error)); // Added error handling
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if (localStorage.getItem("auth-token")) {
//       fetch("http://localhost:4000/removefromcart", {
//         method: "POST",
//         headers: {
//           Accept: "application/json", // Fixed header value
//           "auth-token": `${localStorage.getItem("auth-token")}`,
//           "Content-Type": "application/json", // Fixed header value
//         },
//         body: JSON.stringify({ itemId: itemId }),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.error("Error:", error)); // Added error handling
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = ALL_Product.find(
//           (product) => product.id === Number(item)
//         );
//         totalAmount += itemInfo.new_price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const contextValue = {
//     ALL_Product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
import React, { createContext, useEffect, useState } from "react";
// Create a context for the shop
export const ShopContext = createContext(null);

// Function to initialize the cart with 300 items, all set to 0
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0; // Set the quantity of each item to 0
  }
  return cart; // Return the initialized cart object
};

const ShopContextProvider = (props) => {
  // State to store all products
  const [ALL_Product, setAll_Product] = useState([]);
  // State to store cart items with default values
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Effect to fetch products and cart items when component mounts
  useEffect(() => {
    // Fetch all products from the API
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setAll_Product(data)); // Set products to state

    // Fetch cart items if authentication token exists
    if (localStorage.getItem("autho-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data", // Fixed header value
          "auth-token": `${localStorage.getItem("auth-token")}`, // Include auth token
          "Content-Type": "application/json", // Fixed header value
        },
        body: "", // Empty body as no data is sent
      })
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => setCartItems(data)); // Set cart items to state
    }
  }, []); // Empty dependency array means this effect runs once when component mounts

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // Update cart items state
    if (localStorage.getItem("auth-token")) {
      // Post request to add item to cart on server
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json", // Fixed header value
          "auth-token": `${localStorage.getItem("auth-token")}`, // Include auth token
          "Content-Type": "application/json", // Fixed header value
        },
        body: JSON.stringify({ itemId: itemId }), // Send item ID in the request body
      })
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => console.log(data)) // Log response data
        .catch((error) => console.error("Error:", error)); // Handle any errors
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // Update cart items state
    if (localStorage.getItem("auth-token")) {
      // Post request to remove item from cart on server
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json", // Fixed header value
          "auth-token": `${localStorage.getItem("auth-token")}`, // Include auth token
          "Content-Type": "application/json", // Fixed header value
        },
        body: JSON.stringify({ itemId: itemId }), // Send item ID in the request body
      })
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => console.log(data)) // Log response data
        .catch((error) => console.error("Error:", error)); // Handle any errors
    }
  };

  // Function to calculate the total amount in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ALL_Product.find(
          (product) => product.id === Number(item) // Find product by ID
        );
        totalAmount += itemInfo.new_price * cartItems[item]; // Calculate total amount
      }
    }
    return totalAmount; // Return the total amount
  };

  // Function to calculate the total number of items in the cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]; // Sum up the quantities
      }
    }
    return totalItem; // Return the total number of items
  };

  // Value to be provided by the context
  const contextValue = {
    ALL_Product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  // Provide the context value to children components
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children} // Render children components
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; // Export the provider component
