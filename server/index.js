const express = require("express");
const app = express();
const mongoose = require('mongoose');
const CustomerModel = require("./models/Customers");

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ryantarry:9$4Q9qT8sjsEHEc@addressbookcluster.2fcjqbq.mongodb.net/adresses?retryWrites=true&w=majority");

app.get("/getCustomers", (req, res) => {
	CustomerModel.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

app.post("/createCustomer", async (req, res) => {
	const customer = req.body;
	const newCustomer = new CustomerModel(customer);
	await newCustomer.save();

	res.json(customer);
});


app.listen(3001, () => {
	console.log("server runs ok");
});
