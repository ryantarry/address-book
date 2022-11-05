const { default: mongoose } = require("mongoose");


const CustomerSchema = new mongoose.Schema({
	companyName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: false,
	},
});

const CustomerModel = mongoose.model("customers", CustomerSchema);
module.exports = CustomerModel
