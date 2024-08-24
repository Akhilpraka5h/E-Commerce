import React, { useEffect, useState } from "react"; // Import React and the hooks for managing state and side effects
import "./ListProduct.css"; // Import the CSS file for styling the ListProduct component
import crossIcon from "../../assets/cross_icon.png"; // Import an image icon for removing products

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]); // State to store the list of all products, initially an empty array

  // Function to fetch all products from the server
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts") // Send a GET request to the server to fetch all products
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setAllProducts(data); // Update the allproducts state with the fetched data
      });
  };

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    fetchInfo(); // Call fetchInfo to load all products when the component is first rendered
  }, []); // Empty dependency array ensures this runs only once

  // Function to remove a product by its ID
  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST", // HTTP method set to POST
      headers: {
        Accept: "application/json", // Indicate that JSON responses are accepted
        "Content-Type": "application/json", // Content type set to JSON
      },
      body: JSON.stringify({ id: id }), // Send the product ID as a JSON string in the request body
    });
    // .then((resp) => resp.json()) // Parse the response as JSON
    // .then((data) => {
    //   data.success ? alert("Product Removed") : alert("Failed"); // Show an alert based on the success of the operation
    // });
    await fetchInfo(); // Refresh the product list after a product is removed
  };

  // JSX for rendering the ListProduct component
  return (
    <div className="listproduct">
      {" "}
      {/* Container for the product list */}
      <h1>All Products List</h1> {/* Header for the product list section */}
      <div className="listproduct-format-main">
        {" "}
        {/* Container for the header row of the product list */}
        <p>Product</p> {/* Header for the product image column */}
        <p>Title</p> {/* Header for the product title column */}
        <p>Old Price</p> {/* Header for the old price column */}
        <p>New Price</p> {/* Header for the new price column */}
        <p>Category</p> {/* Header for the category column */}
        <p>Remove</p> {/* Header for the remove column */}
      </div>
      <div className="listproduct-allproducts">
        {" "}
        {/* Container for all product rows */}
        <hr />{" "}
        {/* Horizontal rule to separate the header from the product rows */}
        {allproducts.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <div className="listproduct-format-main listproduct-format">
                {" "}
                {/* Container for a single product row */}
                <img
                  src={product.image} // Set the source of the image to the product's image URL
                  alt="" // Empty alt text for the product image
                  className="listproduct-product-icon" // Apply styles for the product image
                />
                <p>{product.name}</p> {/* Display the product name */}
                <p>{product.old_price}</p> {/* Display the old price */}
                <p>{product.new_price}</p> {/* Display the new price */}
                <p>{product.category}</p> {/* Display the category */}
                <img
                  src={crossIcon} // Set the source of the image to the cross icon for removing a product
                  alt="" // Empty alt text for the cross icon
                  className="listproduct-remove-icon" // Apply styles for the remove icon
                  onClick={() => {
                    removeProduct(product.id); // Call removeProduct with the product ID when the icon is clicked
                  }}
                />
              </div>
              <hr /> {/* Horizontal rule to separate products */}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct; // Export the ListProduct component as the default export
