const port = 4000; // Set the port number for the server to listen on
const express = require("express"); // Import the Express framework to create a web server
const app = express(); // Initialize the Express application
const mongoose = require("mongoose"); // Import Mongoose for interacting with MongoDB databases
const jwt = require("jsonwebtoken"); // Import JSON Web Token (JWT) for handling user authentication via tokens
const multer = require("multer"); // Import Multer for handling file uploads
const path = require("path"); // Import Path module for working with file and directory paths
const cors = require("cors"); // Import CORS to allow cross-origin requests

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable CORS, allowing cross-origin requests
