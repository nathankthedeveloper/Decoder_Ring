// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

    let normalAlpha= [..."abcdefghijklmnopqrstuvwxyz"];
    let lcaseInput = input.toLowerCase();
    let finalString = "";

    let matchingLetter;
    let encodedLetter;
    let matchingIndex;
    
    //remove all the duplicate letter
    let uniqueLetter = [...new Set(alphabet)];
   
    // If there's no uniqueLetter or uniqueLetter less or more that 26, return false;
    if(!uniqueLetter || uniqueLetter.length !== 26){
      return false;
    }else{

      // Should leave the space as it is.
      for(let char of lcaseInput){

        if (char == " "){
         finalString += char;

        }else{
          if(encode){
             /*Iterate throught the normalAlpha array to map the letters between
               two arrays - normalAlpya and alphabet- uing their indexes.*/
              matchingLetter = normalAlpha.find((letter) => letter === char);
              matchingIndex = normalAlpha.indexOf(matchingLetter);
              encodedLetter = uniqueLetter[matchingIndex]; 
          }
          if(!encode){  
            matchingIndex = uniqueLetter.indexOf(char);
            encodedLetter = normalAlpha[matchingIndex];
          }
          finalString += encodedLetter;
        } 
      }
     return finalString;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
