
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function submit1(e){
  e.preventDefault();
  //console.log(e.target.message.value);

  var message = String(e.target.message.value);
  if(message == ""){
    var oops = true;
    alert("Please enter at least one character into the textbox.");
  }
  var type = e.target.type.value;
  var direction = e.target.direction.value;
  var key;

if(!oops){
  do{
    key = prompt("Key:");
    //console.log(type);
    //console.log(isNaN(parseInt(key)));
    //console.log(!(type == "c" && !isNaN(parseInt(key))));
    //done until this is true
  }while((type == "c" && isNaN(parseInt(key))) || (type == "v" && !isNaN(parseInt(key)) && message.length >= key.length));
}



  if(type == "c" && direction == "encode"){
    key = parseInt(key);
    showResult(caesarEncrypt(message, key));
  }else if(type == "c" && direction == "decode"){
    key = parseInt(key);
    showResult(caesarDecrypt(message, key));
  }else if(type == "v" && direction == "encode"){
    showResult(vigEncrypt(message, key));
  }else if(type == "v" && direction == "decode"){
    showResult(vigDecrypt(message, key));
  }
}

function caesarEncrypt(message, key) {
    var encryptedResult = "";

    for(var i = 0; i < message.length; i++)
    {
        // Get the character in the original message
        var originalCharacter = message.charAt(i);

        // If it's an alphabetical character, we'll compute the new
        // shifted character and add it to the encrypted result
        if(ALPHABET.indexOf(originalCharacter) >= 0){
          var alphabeticIndex = ALPHABET.indexOf(originalCharacter);
          if(alphabeticIndex >= 0){
              // Compute new index
              var newIndex = alphabeticIndex + key;
              newIndex = newIndex % ALPHABET.length;

              // Get the new character
              var newCharacter = ALPHABET.charAt(newIndex);

              // Add the new shifted character to the encrypted result
              encryptedResult += newCharacter
          }
        }else if(alphabet.indexOf(originalCharacter) >= 0){
          var alphabeticIndex = alphabet.indexOf(originalCharacter);
          if(alphabeticIndex >= 0){
              // Compute new index
              var newIndex = alphabeticIndex + key;
              newIndex = newIndex % alphabet.length;

              // Get the new character
              var newCharacter = alphabet.charAt(newIndex);

              // Add the new shifted character to the encrypted result
              encryptedResult += newCharacter
          }
        }else{
          encryptedResult += originalCharacter;
        }
    }
    return encryptedResult;
}

function caesarDecrypt(message, key) {
    key *= -1;
    var encryptedResult = "";

    for(var i = 0; i < message.length; i++)
    {
        // Get the character in the original message
        var originalCharacter = message.charAt(i);

        // If it's an alphabetical character, we'll compute the new
        // shifted character and add it to the encrypted result
        if(ALPHABET.indexOf(originalCharacter) >= 0){
          var alphabeticIndex = ALPHABET.indexOf(originalCharacter);
          if(alphabeticIndex >= 0){
              // Compute new index
              var newIndex = alphabeticIndex + key;
              newIndex = newIndex % ALPHABET.length;

              // Get the new character
              var newCharacter = ALPHABET.charAt(newIndex);

              // Add the new shifted character to the encrypted result
              encryptedResult += newCharacter
          }
        }else if(alphabet.indexOf(originalCharacter) >= 0){
          var alphabeticIndex = alphabet.indexOf(originalCharacter);
          if(alphabeticIndex >= 0){
              // Compute new index
              var newIndex = alphabeticIndex + key;
              /*
              if(newIndex < 0){
                newIndex += 26;
              }
              */
              newIndex = newIndex % alphabet.length;

              // Get the new character
              var newCharacter = alphabet.charAt(newIndex);

              // Add the new shifted character to the encrypted result
              encryptedResult += newCharacter
          }
        }else{
          encryptedResult += originalCharacter;
        }
    }
    return encryptedResult;
}

function findKey(key){
  var newKeyArray = [];
  for(var i = 0; i < key.length; i++){
    var currentChar = key.charAt(i);

    if(ALPHABET.indexOf(currentChar) >= 0){

      var index = ALPHABET.indexOf(currentChar);
      newKeyArray.push(index);

    }else if(alphabet.indexOf(currentChar) >= 0){

      var index = alphabet.indexOf(currentChar);
      newKeyArray.push(index);
    }
  }
  ////console.log(newKeyArray);
  return newKeyArray;
}

function vigEncrypt(message, key){
  var newKey = findKey(key);
  var encryptedResult = "";
  for(var i = 0; i < message.length; i++)
  {
      var keyIndex = i % newKey.length
      // Get the character in the original message
      var originalCharacter = message.charAt(i);

      // If it's an alphabetical character, we'll compute the new
      // shifted character and add it to the encrypted result
      if(ALPHABET.indexOf(originalCharacter) >= 0){
        var alphabeticIndex = ALPHABET.indexOf(originalCharacter);
        if(alphabeticIndex >= 0){
            // Compute new index
            var newIndex = alphabeticIndex + newKey[keyIndex];
            newIndex = newIndex % ALPHABET.length;

            // Get the new character
            var newCharacter = ALPHABET.charAt(newIndex);

            // Add the new shifted character to the encrypted result
            encryptedResult += newCharacter
        }
      }else if(alphabet.indexOf(originalCharacter) >= 0){
        var alphabeticIndex = alphabet.indexOf(originalCharacter);
        if(alphabeticIndex >= 0){
            // Compute new index
            var newIndex = alphabeticIndex + newKey[keyIndex];
            newIndex = newIndex % alphabet.length;

            // Get the new character
            var newCharacter = alphabet.charAt(newIndex);

            // Add the new shifted character to the encrypted result
            encryptedResult += newCharacter
        }
      }else{
        encryptedResult += originalCharacter;
      }
  }
  return encryptedResult;
}

function vigDecrypt(message, key){
  var newKey = findKey(key);
  var encryptedResult = "";
  for(var i = 0; i < message.length; i++)
  {
      var keyIndex = i % newKey.length
      // Get the character in the original message
      var originalCharacter = message.charAt(i);

      // If it's an alphabetical character, we'll compute the new
      // shifted character and add it to the encrypted result
      if(ALPHABET.indexOf(originalCharacter) >= 0){
        var alphabeticIndex = ALPHABET.indexOf(originalCharacter);
        if(alphabeticIndex >= 0){
            // Compute new index
            var newIndex = alphabeticIndex - newKey[keyIndex];
            newIndex = newIndex % ALPHABET.length;

            // Get the new character
            var newCharacter = ALPHABET.charAt(newIndex);

            // Add the new shifted character to the encrypted result
            encryptedResult += newCharacter
        }
      }else if(alphabet.indexOf(originalCharacter) >= 0){
        var alphabeticIndex = alphabet.indexOf(originalCharacter);
        if(alphabeticIndex >= 0){
            // Compute new index
            var newIndex = alphabeticIndex - newKey[keyIndex];
            newIndex = newIndex % alphabet.length;

            // Get the new character
            var newCharacter = alphabet.charAt(newIndex);

            // Add the new shifted character to the encrypted result
            encryptedResult += newCharacter
        }
      }else{
        encryptedResult += originalCharacter;
      }
  }
  return encryptedResult;
}

function showResult(result){
  document.getElementById("result").innerHTML = result;
}

function nameSubmit(e){
  //var direction4 = e.target.direction.value;
  ////console.log(direction4);
  var direction4 = document.getElementById("direction").value;
  //console.log(direction4);
  if(direction4 == "encode"){
    document.getElementById("submit").value = "Encode!";
  }else if(direction4 == "decode"){
    document.getElementById("submit").value = "Decode!";
  }
}
/*
function reset1(){
  document.getElementById("type").value = "Select Type";
  document.getElementById("direction").value = "Select Direction";
  document.getElementById("submit").value = "Encoder/Decoder";
  document.getElementById("result").value = "";
}
*/
