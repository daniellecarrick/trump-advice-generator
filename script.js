var messages = [
"No deal. Sad!",
"I have the best words",
"Terrific",
"Build a wall",
"I see bigly success in your future",
"I have the best advice",
"Build a wall"
]

var generateMessage = function() {
  $('#messages').empty();
  var upperLimit = messages.length - 1;
  var index = Math.round(Math.random() * upperLimit);
  console.log(messages[index]);
  $('#messages').append(messages[index]);
}


$('#eight-ball').on('click', function() {
  $(this).effect('shake');
  generateMessage();
})

//generateMessage();