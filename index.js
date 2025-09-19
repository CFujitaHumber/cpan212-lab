/**
 * @file This file is the main application
 * @description This files runs the server
 * @author Carson Fujita
 * @version 1.0.0
 * @license GPL-3.0-or-later
 */

// Import express
const express = require("express");

// Import routes
const routes = require("./routes");

// Initialize express app
const app = express();

// Set constant for port
const PORT = process.env.PORT || 8000;

// Initialize build-in middleware for urlencoding and json

/*
 * Express is a routing and middleware web framework.
 * Middleware functions are functions that have acess to the request and response objects
 * An Express application is essnetially a series of middleware calls.
 * The next middleware funcction is commonly denoted as next
 * Middleware can make changes to request and response object, end the request cycle
 * and call the next Middleware
 */
/*
 * Whevener you submit form data the url you submit typically includes url parameters
 * this data is a name-value pair. urlencoded middleware handles this allowing for
 * the client to comunicate to the server.
 */
app.use(express.urlencoded({ extended: true }));
//app.use(express.json()); // this handles json

// Attach routes to app
app.use("/", routes);

//Listen on the PORT
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
