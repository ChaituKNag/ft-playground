function SimpleAdding(num) { 

  // code goes here  
  return num === 1 ? 1 : (num + SimpleAdding(num-1)); 
         
}
   
// keep this function call here 
console.log(SimpleAdding(8)); // 36