// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  let polyAlpha = {
                  "a": "11",
                  "b": "21", 
                  "c": "31",
                  "d": "41", 
                  "e": "51", 
                  "f": "12", 
                  "g":"22" , 
                  "h": "32", 
                  "i/j": "42" , 
                  "k": "52", 
                  "l": "13" , 
                  "m": "23",
                  "n": "33", 
                  "o": "43",
                  "p": "53", 
                  "q": "14",
                  "r": "24",
                  "s":"34", 
                  "t": "44", 
                  "u": "54",
                  "v": "15", 
                  "w": "25", 
                  "x": "35",
                   "y":"45", 
                   "z": "55"}

  function polybius(input, encode = true) {
    // your solution code here
  let entries = Object.entries(polyAlpha)
   let lcaseInput = input.toLowerCase();
   

     let result = "";
     if(encode){

        for(let letter of lcaseInput){

          if(letter == " "){
             result += " ";
            
          }else if(letter == "j" || letter == "i"){
            result += '42';
          }
          else{

            for(let [prop, val] of entries){  
            if (letter == prop){
              prop = val;
              result += val;
            }
          }
        }
       }
     }else if(!encode){
        //create remainder vailable to evaluate odd/even number
         let remainder = (lcaseInput.replace(/\s+/, "").length)%2;

        // Should return false if the remainder or number is Odd.
        if(remainder != 0){
          return false
        }
       
       let decodeStr = "";
       // revert key with value from the original PolyAlpha array.
       let reversePolyAlpha = {};
       
       // Looping throught the polyAlpha array and assign value to its key.
       for(let key in polyAlpha){
         let val = polyAlpha[key];
         reversePolyAlpha[val] = key;                 
       }
      
       let numbers = [];

        for(let alphabet of input){
          numbers.push(alphabet);
        }

        //create stopAt variable to evaluate the number pair from the input.
        let stopAt = 1;

        numbers.map((number, index) => {
          if(index == stopAt){
          
            let code = `${numbers[index-1]}${numbers[index]}`;
          
            if((code.trim().length ==1)){

              stopAt += 1;
              decodeStr += " ";

            } else if((code.trim().length==0)){

              decodeStr +=  reversePolyAlpha[code.trim()]
              stopAt = stopAt + 2;

            } else {

              decodeStr += reversePolyAlpha[code.trim()]
              stopAt = stopAt + 2;
            }
            return decodeStr;
          }
        })
    return decodeStr;
  }
  return result;
}
  return {
    polybius,
  };
})();




module.exports = { polybius: polybiusModule.polybius };
