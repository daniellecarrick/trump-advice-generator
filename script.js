var messages = [
"No deal. Sad!",
"I have the best words",
"It's gonna be terrific",
"Build a wall",
"I see bigly success in your future",
"Everyone love my advice. I have the best advice",
"Build a wall",
"Watch out for bad hombres",
"Beware of nasty women",
"Outlook is sad!",
"Outlook is terrific!",
"That's a terrible question. You're fired!"
]

var generateMessage = function() {
  $('#messages').empty();
  var upperLimit = messages.length - 1;
  var index = Math.round(Math.random() * upperLimit);
  console.log(messages[index]);
  $('#messages').append(messages[index]);
}


$('#donald').on('click', function() {
  $(this).effect('shake');
  generateMessage();
})

//generateMessage();