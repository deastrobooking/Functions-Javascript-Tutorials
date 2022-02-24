
// Function Declaration
//Hoisting what this means is that naturally
// Javascript moves function declaration to the top of the file. 
// It does not do the same for Function Expressions

const mySon = function(name){
  console.log('good day ${name}');
};

console.log(name)
mySon

function greet(){
  console.log('jello there')
}
//Function Expression
const speak = function(){
  console.log('good day!');
}

//Function Call
greet();
greet();
greet();

speak();