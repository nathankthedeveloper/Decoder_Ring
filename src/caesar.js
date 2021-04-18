// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabets = [...'abcdefghijklmnopqrstuvwxyz'];

  function caesar(input, shift, encode = true) {
    let resultStr = '';
    try {
      if (shift === 0 || shift > 25 || shift < -25 || !shift) {
        throw false
      } else {
           input.toLowerCase().split('').forEach((char) => {
              if (!alphabets.includes(char)) {
                  resultStr += char;
              } else {

                let foundLetter;
                let encodedIndex;
                let encodedLetter;
                  
                  //
                  foundLetter = alphabets.find((letter) => letter === char)
                    if (encode) {
                    encodedIndex = (alphabets.indexOf(foundLetter) + shift) % 26; 
                    } 
                    if (!encode) {
                        encodedIndex = (alphabets.indexOf(foundLetter) - shift) % 26;
                    }
                    if (encodedIndex < 0) {
                      encodedIndex += 26;
                    }
                    encodedLetter = alphabets[encodedIndex];
                    resultStr += encodedLetter
                  } 
              })
            return resultStr;
          }
      } catch (error) {
      return error;
      }
    }
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
