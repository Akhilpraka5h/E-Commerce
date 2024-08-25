// // const port = 4000; // Set the port number for the server to listen on
// // const express = require("express"); // Import the Express framework to create a web server
// // const app = express(); // Initialize the Express application
// // const mongoose = require("mongoose"); // Import Mongoose for interacting with MongoDB databases
// // const jwt = require("jsonwebtoken"); // Import JSON Web Token (JWT) for handling user authentication via tokens
// // const multer = require("multer"); // Import Multer for handling file uploads
// // const path = require("path"); // Import Path module for working with file and directory paths
// // const cors = require("cors"); // Import CORS to allow cross-origin requests
// // const { log } = require("console");
// // const { type } = require("os");

// // app.use(express.json()); // Middleware to parse JSON request bodies
// // app.use(cors()); // Middleware to enable CORS, allowing cross-origin requests

// // //Database COnnection with mongodb
// // mongoose.connect(
// //   "mongodb+srv://akhilamigoz63:greatstack-e-com@cluster0.nsef8.mongodb.net/e-commerce"
// // );
// // //API creation
// // app.get("/", (req, res) => {
// //   res.send("Express App is running");
// // });

// // //Image storage Engine
// // const storage = multer.diskStorage({
// //   destination: "./upload/images",
// //   filename: (req, file, cb) => {
// //     return cb(
// //       null,
// //       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
// //     );
// //   },
// // });

// // const upload = multer({ storage: storage });

// // app.use("/images", express.static("./upload/images"));

// // //Creating endpoint to upload images
// // app.post("/upload", upload.single("product"), (req, res) => {
// //   res.json({
// //     success: 1,
// //     image_url: `http://localhost:${port}/images/${req.file.filename}`,
// //   });
// // });

// // //Schema for creating products
// // const Product = mongoose.model("Product", {
// //   id: {
// //     type: Number,
// //     required: true,
// //   },
// //   name: {
// //     type: String,
// //     required: true,
// //   },
// //   image: {
// //     type: String,
// //     required: true,
// //   },
// //   category: {
// //     type: String,
// //     required: true,
// //   },
// //   new_price: {
// //     type: Number,
// //     required: true,
// //   },
// //   old_price: {
// //     type: Number,
// //     required: true,
// //   },
// //   date: {
// //     type: Date,
// //     default: Date.now,
// //   },
// //   available: {
// //     type: Boolean,
// //     default: true,
// //   },
// // });
// // app.post("/addproduct", async (req, res) => {
// //   let products = await Product.find({});
// //   let id;
// //   if (products.length > 0) {
// //     let last_product_array = products.slice(-1);
// //     let last_product = last_product_array[0];
// //     id = last_product.id + 1;
// //   } else {
// //     id = 1;
// //   }
// //   const product = new Product({
// //     id: id,
// //     name: req.body.name,
// //     image: req.body.image,
// //     category: req.body.category,
// //     new_price: req.body.new_price,
// //     old_price: req.body.old_price,
// //   });
// //   console.log(product);
// //   await product.save();
// //   console.log("Saved");
// //   res.json({ success: true, name: req.body.name });
// // });

// // //Creating API for deleting products
// // app.post("/removeproduct", async (req, res) => {
// //   await Product.findOneAndDelete({
// //     id: req.body.id,
// //   });
// //   console.log("Removed");
// //   res.json({
// //     success: true,
// //     name: req.body.name,
// //   });
// // });

// // app.listen(port, (error) => {
// //   if (!error) {
// //     console.log("Server Running on Port " + port);
// //   } else {
// //     console.log("Error :co" + error);
// //   }
// // });

// //*************************** */
// const port = 4000; // Set the port number for the server to listen on
// const express = require("express"); // Import the Express framework to create a web server
// const app = express(); // Initialize the Express application
// const mongoose = require("mongoose"); // Import Mongoose for interacting with MongoDB databases
// const jwt = require("jsonwebtoken"); // Import JSON Web Token (JWT) for handling user authentication via tokens
// const multer = require("multer"); // Import Multer for handling file uploads
// const path = require("path"); // Import Path module for working with file and directory paths
// const cors = require("cors"); // Import CORS to allow cross-origin requests
// const { log } = require("console"); // Destructure 'log' from 'console' for logging
// const { type } = require("os"); // Destructure 'type' from 'os' module (not used in this code)

// app.use(express.json()); // Middleware to parse JSON request bodies
// app.use(cors()); // Middleware to enable CORS, allowing cross-origin requests

// // Database connection with MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://akhilamigoz63:greatstack-e-com@cluster0.nsef8.mongodb.net/e-commerce",
//     { useNewUrlParser: true, useUnifiedTopology: true } // Add options for better connection handling
//   )
//   .then(() => console.log("Connected to MongoDB")) // Log success message on successful connection
//   .catch((err) => console.log("Failed to connect to MongoDB", err)); // Log error message on failed connection

// // API creation - root route
// app.get("/", (req, res) => {
//   res.send("Express App is running"); // Respond with a message when root URL is accessed
// });

// // Image storage engine configuration for Multer
// const storage = multer.diskStorage({
//   destination: "./upload/images", // Set the destination directory for uploaded images
//   filename: (req, file, cb) => {
//     // Configure the filename for uploaded images
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}` // Filename format: fieldname_timestamp.extension
//     );
//   },
// });

// const upload = multer({ storage: storage }); // Initialize Multer with the storage engine

// app.use("/images", express.static("./upload/images")); // Serve static files from the '/upload/images' directory

// // Creating endpoint to upload images
// app.post("/upload", upload.single("product"), (req, res) => {
//   res.json({
//     success: 1, // Indicate success in the response
//     image_url: `http://localhost:${port}/images/${req.file.filename}`, // Return the image URL in the response
//   });
// });

// // Schema for creating products
// const Product = mongoose.model("Product", {
//   id: {
//     type: Number,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   new_price: {
//     type: Number,
//     required: true,
//   },
//   old_price: {
//     type: Number,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now, // Set the default value to the current date and time
//   },
//   available: {
//     type: Boolean,
//     default: true, // Set the default availability to true
//   },
// });

// // Creating API endpoint to add products
// app.post("/addproduct", async (req, res) => {
//   let products = await Product.find({}); // Fetch all products from the database
//   let id;
//   if (products.length > 0) {
//     // If there are existing products
//     let last_product_array = products.slice(-1); // Get the last product in the array
//     let last_product = last_product_array[0]; // Extract the last product
//     id = last_product.id + 1; // Set the new product ID to the last product ID + 1
//   } else {
//     id = 1; // If no products exist, start with ID 1
//   }
//   const product = new Product({
//     id: id, // Assign the computed ID
//     name: req.body.name, // Set the product name from the request body
//     image: req.body.image, // Set the product image URL from the request body
//     category: req.body.category, // Set the product category from the request body
//     new_price: req.body.new_price, // Set the new price from the request body
//     old_price: req.body.old_price, // Set the old price from the request body
//   });
//   console.log(product); // Log the product object to the console
//   await product.save(); // Save the product to the database
//   console.log("Saved"); // Log 'Saved' after successful save
//   res.json({ success: true, name: req.body.name }); // Respond with success and the product name
// });

// // Creating API endpoint to delete products
// app.post("/removeproduct", async (req, res) => {
//   await Product.findOneAndDelete({
//     id: req.body.id, // Find and delete the product by ID
//   });
//   console.log("Removed"); // Log 'Removed' after successful deletion
//   res.json({
//     success: true, // Indicate success in the response
//     name: req.body.name, // Return the product name in the response
//   });
// });

// //Creating API for getting all Products

// app.get("/allproducts", async (req, res) => {
//   let products = await Product.find({});
//   console.log("All Products Fetched");
//   res.send(products);
// });
// // Shema creating for user Model

// const Users = mongoose.model("Users", {
//   name: { type: String, required: true },
//   email: { type: String, unique: true },
//   password: { type: String, required: true },
//   cartData: { type: Object },
//   date: { type: Date, default: Date.now },
// });
// //Creating endpoint for registering the user
// app.post("/signup", async (req, res) => {
//   let check = await Users.findOne({ email: req.body.email });
//   if (check) {
//     return res
//       .status(400)
//       .json({ success: false, error: "Existing User Found with same email" });
//   }
//   let cart = {};
//   for (let i = 0; i < 300; i++) {
//     cart[i] = 0;
//   }
//   const user = new Users({
//     name: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//     cartData: cart,
//   });
//   await user.save();

//   const data = {
//     user: { id: user.id },
//   };
//   const token = jwt.sign(data, "secret_ecom");
//   res.json({ success: true, token });
// });
// //Creating endpoint to user login
// app.post("/login", async (req, res) => {
//   let user = await Users.findOne({ email: req.body.email });
//   if (user) {
//     const passCompare = req.body.password === user.password;
//     if (passCompare) {
//       const data = {
//         user: { id: user.id },
//       };
//       const token = jwt.sign(data, "secret_ecom");
//       res.json({ success: true, token });
//     } else {
//       res.json({ success: false, error: "Invalid Password" });
//     }
//   } else {
//     res.json({ success: false, error: "User Not Found" });
//   }
// });

// //Creating endpoint for new collection data
// app.get("/newcollections", async (req, res) => {
//   let products = await Product.find({});
//   let newcollection = products.slice(1).slice(-8);
//   console.log("New Collection fetched");
//   res.send(newcollection);
// });

// //creating endpoint for popular in women section
// app.get("/popularinwomen", async (req, res) => {
//   let products = await Product.find({ category: "women" });
//   let popular_in_women = products.slice(0, 4);
//   console.log("Popular in Women Fetched");
//   res.send(popular_in_women);
// });
// //creating middleware to fetch user
// const fetchUser = async (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) {
//     res.status(401).send({ errors: "Please authenticate using valid token" });
//   } else {
//     try {
//       const data = jwt.verify(token, "secret_ecom");
//       req.user = data.user;
//       next();
//     } catch (error) {
//       res.status(401).send({ errors: "Please authenticate using valid token" });
//     }
//   }
// };

// //creating endpoints for adding products in cartdata
// app.post("/addtocart", fetchUser, async (req, res) => {
//   console.log("Added", req.body.itemId);
//   let userData = await Users.findOne({ _id: req.user.id });
//   userData.cartData[req.body.itemId] += 1;
//   await Users.findOneAndUpdate(
//     { _id: req.user.id },
//     { cartData: userData.cartData }
//   );
//   res.send("Added");
// });
// //creating endpoints to remove products from cartdata
// app.post("/removefromcart", fetchUser, async (req, res) => {
//   console.log("Removed", req.body.itemId);

//   let userData = await Users.findOne({ _id: req.user.id });
//   if (userData.cartData[req.body.itemId] > 0) {
//     userData.cartData[req.body.itemId] -= 1;
//     await Users.findOneAndUpdate(
//       { _id: req.user.id },
//       { cartData: userData.cartData }
//     );
//     res.send("Removed");
//   }
// });
// //Creating endpoint to load cartdata when logedin
// app.post("/getcart", fetchUser, async (req, res) => {
//   console.log("Getcart");
//   let userData = await Users.findOne({ _id: req.user.id });
//   res.json(userData.cartData);
// });

// // Start the server and listen on the specified port
// app.listen(port, (error) => {
//   if (!error) {
//     // If no error occurs
//     console.log("Server Running on Port " + port); // Log the server is running with the port number
//   } else {
//     console.log("Error: " + error); // Log the error if one occurs
//   }
// });

require("dotenv").config(); // Load environment variables from .env file

const port = 4000; // Set the port number for the server to listen on
const express = require("express"); // Import the Express framework to create a web server
const app = express(); // Initialize the Express application
const mongoose = require("mongoose"); // Import Mongoose for interacting with MongoDB databases
const jwt = require("jsonwebtoken"); // Import JSON Web Token (JWT) for handling user authentication via tokens
const multer = require("multer"); // Import Multer for handling file uploads
const path = require("path"); // Import Path module for working with file and directory paths
const cors = require("cors"); // Import CORS to allow cross-origin requests
const { log } = require("console"); // Destructure 'log' from 'console' for logging
const { type } = require("os"); // Destructure 'type' from 'os' module (not used in this code)

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable CORS, allowing cross-origin requests

// Database connection with MongoDB using URI from .env file
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Use the connection string from .env
  .then(() => console.log("Connected to MongoDB")) // Log success message on successful connection
  .catch((err) => console.log("Failed to connect to MongoDB", err)); // Log error message on failed connection

// API creation - root route
app.get("/", (req, res) => {
  res.send("Express App is running"); // Respond with a message when root URL is accessed
});

// Image storage engine configuration for Multer
const storage = multer.diskStorage({
  destination: "./upload/images", // Set the destination directory for uploaded images
  filename: (req, file, cb) => {
    // Configure the filename for uploaded images
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}` // Filename format: fieldname_timestamp.extension
    );
  },
});

const upload = multer({ storage: storage }); // Initialize Multer with the storage engine

app.use("/images", express.static("./upload/images")); // Serve static files from the '/upload/images' directory

// Creating endpoint to upload images
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1, // Indicate success in the response
    image_url: `http://localhost:${port}/images/${req.file.filename}`, // Return the image URL in the response
  });
});

// Schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
  available: {
    type: Boolean,
    default: true, // Set the default availability to true
  },
});

// Creating API endpoint to add products
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({}); // Fetch all products from the database
  let id;
  if (products.length > 0) {
    // If there are existing products
    let last_product_array = products.slice(-1); // Get the last product in the array
    let last_product = last_product_array[0]; // Extract the last product
    id = last_product.id + 1; // Set the new product ID to the last product ID + 1
  } else {
    id = 1; // If no products exist, start with ID 1
  }
  const product = new Product({
    id: id, // Assign the computed ID
    name: req.body.name, // Set the product name from the request body
    image: req.body.image, // Set the product image URL from the request body
    category: req.body.category, // Set the product category from the request body
    new_price: req.body.new_price, // Set the new price from the request body
    old_price: req.body.old_price, // Set the old price from the request body
  });
  console.log(product); // Log the product object to the console
  await product.save(); // Save the product to the database
  console.log("Saved"); // Log 'Saved' after successful save
  res.json({ success: true, name: req.body.name }); // Respond with success and the product name
});

// Creating API endpoint to delete products
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({
    id: req.body.id, // Find and delete the product by ID
  });
  console.log("Removed"); // Log 'Removed' after successful deletion
  res.json({
    success: true, // Indicate success in the response
    name: req.body.name, // Return the product name in the response
  });
});

// Creating API for getting all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({}); // Fetch all products from the database
  console.log("All Products Fetched"); // Log the fetch operation
  res.send(products); // Send the products as response
});

// Schema for creating users
const Users = mongoose.model("Users", {
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

// Creating endpoint for registering a user
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email }); // Check if user with the same email exists
  if (check) {
    return res
      .status(400)
      .json({ success: false, error: "Existing User Found with same email" }); // Respond with error if user exists
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0; // Initialize cart data with 300 items, all set to 0
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save(); // Save the new user to the database

  const data = {
    user: { id: user.id },
  };
  const token = jwt.sign(data, "secret_ecom"); // Generate a JWT token for the user
  res.json({ success: true, token }); // Respond with success and the token
});

// Creating endpoint for user login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email }); // Find user by email
  if (user) {
    const passCompare = req.body.password === user.password; // Compare passwords
    if (passCompare) {
      const data = {
        user: { id: user.id },
      };
      const token = jwt.sign(data, "secret_ecom"); // Generate a JWT token for the user
      res.json({ success: true, token }); // Respond with success and the token
    } else {
      res.json({ success: false, error: "Invalid Password" }); // Respond with error if passwords don't match
    }
  } else {
    res.json({ success: false, error: "User Not Found" }); // Respond with error if user is not found
  }
});

// Creating endpoint for new collection data
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({}); // Fetch all products from the database
  let newcollection = products.slice(1).slice(-8); // Get the latest 8 products, excluding the first one
  console.log("New Collection fetched"); // Log the fetch operation
  res.send(newcollection); // Send the new collection as response
});

// Creating endpoint for popular items in women's section
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" }); // Fetch products in the 'women' category
  let popular_in_women = products.slice(0, 4); // Get the first 4 popular products
  console.log("Popular in Women Fetched"); // Log the fetch operation
  res.send(popular_in_women); // Send the popular products as response
});

// Creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token"); // Get the token from the request header
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using valid token" }); // Respond with error if no token is provided
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom"); // Verify the token
      req.user = data.user; // Attach user data to the request object
      next(); // Continue to the next middleware/handler
    } catch (error) {
      res.status(401).send({ errors: "Invalid Token" }); // Respond with error if token is invalid
    }
  }
};

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
