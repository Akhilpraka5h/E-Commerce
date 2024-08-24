import React, { useState } from "react"; // Import React and the useState hook for managing state
import "./AddProduct.css"; // Import the CSS file for styling the AddProduct component
import uploadArea from "../../assets/upload_area.svg"; // Import an SVG image for the upload area

const AddProduct = () => {
  const [image, setImage] = useState(false); // State for storing the selected image file, initially set to false
  const [productDetails, setProductDetails] = useState({
    name: "", // Product name, initially an empty string
    image: "", // Image URL, initially an empty string
    category: "women", // Category, defaulting to "women"
    new_price: "", // New (offer) price, initially an empty string
    old_price: "", // Old (original) price, initially an empty string
  });

  // Handler function for when an image is selected
  const imageHandler = (e) => {
    setImage(e.target.files[0]); // Set the selected image file to the `image` state
  };

  // Handler function for input changes in the form
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value }); // Update the specific field in `productDetails` state
  };

  // Function to handle the product addition process
  const Add_Product = async () => {
    console.log(productDetails); // Log the current product details to the console
    let responseData; // Variable to store the response data from the image upload
    let product = productDetails; // Copy the current product details

    let formData = new FormData(); // Create a new FormData object for file upload
    formData.append("product", image); // Append the selected image file to the form data

    // Upload the image to the server
    await fetch("http://localhost:4000/upload", {
      method: "POST", // HTTP method set to POST
      headers: {
        Accept: "application/json", // Indicate that JSON responses are accepted
      },
      body: formData, // Send the form data containing the image
    })
      .then((resp) => resp.json()) // Parse the response as JSON
      .then((data) => {
        responseData = data; // Store the response data
      });

    // If the image upload is successful
    if (responseData.success) {
      product.image = responseData.image_url; // Set the image URL in the product details
      console.log(product); // Log the updated product details

      // Add the product to the server's product list
      await fetch("http://localhost:4000/addproduct", {
        method: "POST", // HTTP method set to POST
        headers: {
          Accept: "application/json", // Indicate that JSON responses are accepted
          "Content-Type": "application/json", // Content type set to JSON
        },
        body: JSON.stringify(product), // Send the product details as a JSON string
      })
        .then((resp) => resp.json()) // Parse the response as JSON
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed"); // Show an alert based on the success of the operation
        });
    }
  };

  // JSX for rendering the AddProduct component
  return (
    <div className="addproduct">
      {" "}
      {/* Container for the AddProduct form */}
      <div className="addproduct-itemfield">
        <p>Product Title</p> {/* Label for the product title input */}
        <input
          value={productDetails.name} // Bind the value to the `name` field in state
          onChange={changeHandler} // Call changeHandler on input change
          type="text"
          name="name" // Set the name attribute for the input
          id=""
          placeholder="Type Here" // Placeholder text for the input
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p> {/* Label for the old price input */}
          <input
            value={productDetails.old_price} // Bind the value to the `old_price` field in state
            onChange={changeHandler} // Call changeHandler on input change
            type="number"
            name="old_price" // Set the name attribute for the input
            id=""
            placeholder="Type Here" // Placeholder text for the input
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p> {/* Label for the new price input */}
          <input
            value={productDetails.new_price} // Bind the value to the `new_price` field in state
            onChange={changeHandler} // Call changeHandler on input change
            type="number"
            name="new_price" // Set the name attribute for the input
            id=""
            placeholder="Type Here" // Placeholder text for the input
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p> {/* Label for the category selector */}
        <select
          value={productDetails.category} // Bind the value to the `category` field in state
          onChange={changeHandler} // Call changeHandler on selection change
          name="category" // Set the name attribute for the selector
          id=""
          className="addproduct-selector"
        >
          <option value="women">Women</option> {/* Option for women category */}
          <option value="men">Men</option> {/* Option for men category */}
          <option value="kid">Kid</option> {/* Option for kid category */}
        </select>
      </div>
      <div className="product-itemfield">
        <label htmlFor="file_input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea} // Show the selected image or the default upload area image
            alt=""
            className="addproduct-thumnailImg"
          />
        </label>
        <input
          onChange={imageHandler} // Call imageHandler when an image is selected
          type="file"
          name="image" // Set the name attribute for the file input
          id="file_input"
          hidden // Hide the file input (it will be triggered by the label click)
        />
      </div>
      <button
        onClick={() => {
          Add_Product(); // Call the Add_Product function when the button is clicked
        }}
        className="addproduct-btn"
      >
        Add {/* Button text */}
      </button>
    </div>
  );
};

export default AddProduct; // Export the AddProduct component as the default export
