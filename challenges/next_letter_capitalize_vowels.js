function LetterChanges(str) { 

  // code goes here  
  return str.split("").map(function(letter) {
      if(/[a-zA-Z]/.test(letter)) {
          
          letter = letter.toLowerCase();
          
          if(letter === 'z') letter = 'a';
          
          var nextLetter =  String.fromCharCode(letter.charCodeAt(0) + 1);
          
          if('aeiouAEIOU'.indexOf(nextLetter) > 0) nextLetter = nextLetter.toUpperCase();
          
          return nextLetter;
      } else {
        return letter;    
      }
      
      
      
  }).join("");
         
}
   
// keep this function call here 
LetterChanges("Your imput goes here");