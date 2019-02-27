#!/usr/bin/env node
const program = require ('commander');
const { prompt } = require('inquirer');
const {
	addCustomer,
	findCustomer,
	updateCustomer,
	removeCustomer,
	listCustomers
}   = require('./index');

//Question
 
const questions = [

	 {
	 	type : 'input',
	 	name : 'firstname',
	 	message : "Customer first name"
	 },
	 {
	 	type : 'input',
	 	name : 'lastname',
	 	message : "Customer last name"
	 },
	 {
	 	type : 'input',
	 	name: 'phone',
	 	message : "Customer phone number"
	 },
	 {
	 	type : 'input',
	 	name: 'email',
	 	message : "Customer email id"
	 }

];

program
    .version('1.0.0')
    .description('Client Management System')

program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    prompt(questions).then(answers => addCustomer(answers));
  });



program
  .command('find <name>')
  .alias("f")
  .description("Find a customer")
  .action(name => findCustomer(name) );


program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action(_id=> {
  	prompt(question).then( answers =>
  		updateCustomer(_id,answers));
  	
  });



program
 .command("remove <_id>")
 .alias("r")
 .description("Remove a Customer")
 .action(_id=>
 	removeCustomer(_id)
 );

program
  .command("list")
  .alias("l")
  .description("List all Customers")
  .action(()=>
  	listCustomers()
  );

  program.parse(process.argv);












