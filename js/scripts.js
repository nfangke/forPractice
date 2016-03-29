var arrayOfCharacters = [];
// var newArrayOfCharacters = [];
var resultPhrase = "";
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userPhraseInput = $("#userPhraseInput").val();


    arrayOfCharacters = userPhraseInput.split("");
    alert(arrayOfCharacters);
    arrayOfCharacters.forEach(function(character){
      if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
        character = "-";
      }
      resultPhrase = resultPhrase.concat(character);
    });
    alert(resultPhrase);
  });
});
