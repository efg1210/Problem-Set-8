var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function submit(){
  if()
}

function caesarEncrypt(message, key) {
    var message = document.getElementById('input-box')
    var encryptedResult = "";

    for(var i = 0; i < message.length; i++)
    {
        // Get the character in the original message
        var originalCharacter = message.charAt(i);

        // If it's an alphabetical character, we'll compute the new
        // shifted character and add it to the encrypted result
        var alphabeticIndex = ALPHABET.indexOf(originalCharacter);
        if(alphabeticIndex >= 0)
        {
            // Compute new index
            var newIndex = alphabeticIndex + key;
            newIndex = newIndex % ALPHABET.length;

            // Get the new character
            var newCharacter = ALPHABET.charAt(newIndex);

            // Add the new shifted character to the encrypted result
            encryptedResult += newCharacter
        }

        // Otherwise we'll keep the original character
        else
        {
            encryptedResult += originalCharacter;
        }
    }

    return encryptedResult;
}
