/**
 * @file This file is the code for express router
 * @description handles routing for the main server
 * @author Carson Fujita
 * @version 1.0.0
 * @license GPL-3.0-or-later
 */

// Import express
const express = require("express");

// Create router
const router = express.Router();

// My name 
const NAME = `<h1>Carson Fujita</h1>`;

// Create your endpoints/route handlers
// GET request
router.get("/", function(req, res) {
	res.send("<h1>CPAN212 - Lab 2</h1>");
}).post("/", function(req, res) {
	console.log(req.body);
	res.send();
});

// Test
router.get("/name", function(req, res) {
	res.send("<h1>Carson Fujita</h1>")
})


router.get("/greeting", function(req, res) {
	res.send(NAME);
})

router.get('/add/:x-:y', (req, res) => {
	let result = parseInt(req.params.x) + parseInt(req.params.y);
	res.send(`<h1>The sum of ${req.params.x} and ${req.params.y} equals ${result}</h1>`);

})

router.get("/calculate/:a-:op-:b", function(req, res) {
	let a = parseInt(req.params.a);
	let b = parseInt(req.params.b);
	switch (req.params.op) {
		case "add":
			res.redirect(`/add/${req.params.a}-${req.params.b}`);
			break;
		case "sub":
			res.send(`<h1>The difference from ${b} to ${a} is ${a - b}</h1>`);
			break;
		case "mult":
			res.send(`<h1>The product of ${a} and ${b} is ${a * b}</h1>`);
			break;
		case "div":
			res.send(`<h1>The qoutient of ${a} and ${b} is ${a / b}</h1>`);
			break;
		case "pow":
			res.send(`<h1>The product of ${a} and ${b} is ${a ** b}</h1>`);
			break;
		default:
			res.send("<h1>operations: add, sub, mult, div, pow</h1>");
	}

})

module.exports = router;
