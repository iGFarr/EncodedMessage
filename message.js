// ======================================================================================================
/*oryh brx, qhugb eurwkhu ri plqh. l grxew l zrxog kdyh vwduwhg grzq wklv frglqj 
mrxuqhb li qrw iru brxu lqioxhfh. vrph gdb, pb gdxjkwhu zloo ehqhilw juhdwob iurp wkdw lqioxhqfh.*/
// ======================================================================================================

function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    
    if(encode === false){
      shift = shift * (-1);
    }

    let inputArray = [...input.toLowerCase()];
  
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];
    let result = [];

    inputArray.forEach((letter) => {

      for(let i = 0; i < alphabet.length; i++){
        if(letter === alphabet[i]){
          if((i+shift) >= 0 && (i+shift) <= 25){
          result.push(alphabet[i+shift])
          }
          else if((i+shift) < 0){
            result.push(alphabet[i+shift+26]);
          }
          else if((i+shift) > 25){
            result.push(alphabet[i+shift-26]);
          }
        }
      }
      if(!alphabet.includes(letter)){
        result.push(letter);
      }
    })
    
    return result.join("");
  }

  console.log(caesar(/*encodedMessage*/));