var messages = [
  "No deal. Sad!",
  "I have the best words",
  "It's gonna be terrific",
  "Build a wall",
  "Make the deal",
  "I see bigly success in your future",
  "Everyone loves my advice. I have the best advice",
  "Build a wall",
  "Bad deal. I make the best deals",
  "Watch out for bad hombres",
  "Beware of nasty women",
  "Outlook is sad!",
  "Outlook is terrific!",
  "That's a terrible question. You're fired!"
];

// keep track of the state of what is currently being displayed
var currentMessage;

/**
 * Randomly selects a new message and updates the #messages node to display it
 */
function generateMessage() {
  var upperLimit = messages.length - 1;
  var index;
  var newMessage;

  // select random messages until we get one different from the current one
  do {
    index = Math.round(Math.random() * upperLimit);
    newMessage = messages[index];
  } while (newMessage === currentMessage);

  console.log('The new message is:', newMessage);

  // update the state to reflect the new message
  currentMessage = newMessage;

  // update the displayed message
  $('#messages').text(currentMessage);
}

// wait for the page to be loaded, then run this js
$(document).ready(function () {
  // attach click handler to the donald image to generate a new message
  $('#donald').on('click', function () {
    $(this).effect('shake');
    generateMessage();
  });
});
