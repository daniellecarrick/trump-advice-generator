'use strict';
// note: we add in "use strict" to ensure we are not breaking common
// js rules and unexpectedly doing things like creating global variables.

// Configuration
// -------------
// configure the list of messages to show
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

// configure the list of sound files to use
var soundFiles = [
  'sounds/trump1.mp3',
  'sounds/trump2.mp3',
  'sounds/trump3.mp3',
  'sounds/trump4.mp3',
  'sounds/trump5.mp3',
  'sounds/trump6.mp3',
  'sounds/trump7.mp3',
  'sounds/trump8.mp3',
  'sounds/trump9.mp3',
  'sounds/trump10.mp3',
  'sounds/trump11.mp3',
  'sounds/trump12.mp3'
];

// State global variables
// -----------------------
// the state of what is currently being displayed
var currentMessage;

// the preloaded audio will be stored here
var sounds;

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

/**
 * Preload all the sounds
 */
function preloadSounds() {
  sounds = soundFiles.map(function (soundFile) {
    return new Audio(soundFile);
  });
}


/**
 * Randomly play a sound
 */
function playRandomSound() {
  var upperLimit = sounds.length - 1;
  var index = Math.round(Math.random() * upperLimit);

  sounds[index].play();
}


// Run the application
// -------------------
preloadSounds();

// wait for the page to be loaded, then run this js
$(document).ready(function () {
  // attach click handler to the donald image to generate a new message
  $('#donald').on('click', function () {
    $(this).effect('shake');
    generateMessage();
    playRandomSound();
  });
});
