let age = 20;

function displayAge() {
  console.log("Inside displayAge, age is:", age); 
}

function changeAge() {
  age = 25; 
  console.log("Inside changeAge, updated age is:", age);
}

displayAge();   
changeAge();  
console.log("After calling changeAge, global age is:", age); 
