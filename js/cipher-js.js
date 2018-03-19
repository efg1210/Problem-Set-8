
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function submit1(e){
  e.preventDefault();
  console.log(e.target.message.value);

  var message = String(e.target.message.value);
  var type = e.target.type.value;
  var direction = e.target.direction.value;
  var key = parseInt(prompt("Key:"));

  if(type == "c" && direction == "encode"){
    showResult(caesarEncrypt(message, key));
  }else if(type == "c" && direction =="decode"){
    showResult()
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
        if(ALPHABET.indexOf(originalCharacter) > 0){
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
        }else if(alphabet.indexOf(originalCharacter) > 0){
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

function showResult(result){
  document.getElementById("result").innerHTML = result;
}
