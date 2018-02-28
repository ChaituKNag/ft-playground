function LetterCapitalize(str) { 

  // code goes here  
  return str.match(/\b[a-zA-Z]+\b/g)
    .map(function (word) {
        return word.split("").map(function (letter, index) {
            if(index === 0) return letter.toUpperCase();
            else return letter;
        }).join("");
    }).join(" "); 
         
}
   
// keep this function call here 
LetterCapitalize(readline());                            















                            
                            
                            
  