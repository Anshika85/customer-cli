const mongoose=require('mongoose');
const key1=require('./keys');
mongoose.Promise=global.Promise;
const db = mongoose.connect(key1.key,{useNewUrlParser : true});
const Customer= require('./model/customer');



// Add a customer
const addCustomer=(customer) => {
	Customer.create(customer).then(customer =>{
       console.info("New Customer Added");
       //db.close();
	});
}

// To find customer
const findCustomer = (name) => {
   
   var search = new RegExp(name,'i');
   Customer.find({ $or : [{firstname : search},{ lastname : search}]}).then(customer => {
   	console.info(customer);
   	console.log(`${customer.length} matched`);
   	//db0.close();
   });
}

// Update a customer
const updateCustomer = (id,customer) => {

	Customer.update({id},customer).then(customer => {
		console.log("Customer Updated");
			//db.close();

	});
}

// Remove a customer

const removeCustomer = (id) => {
	Customer.remove({id}).then((customer) => {
		console.log("Customer removed");
	});
}

// List all Customers

const listCustomers = () => {

	Customer.find().then(customer => {
		console.log(customer);
		console.info(`${customer.length} founded`);
	});
}

module.exports = {
	addCustomer,
	findCustomer,
	updateCustomer,
	removeCustomer,
	listCustomers
}


