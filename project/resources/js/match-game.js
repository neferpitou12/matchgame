$(document).ready(function() {


var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */
MatchGame.generateCardValues = function () {
var values = [];
for (i=1; i<9; i++) {
  values.push(i),
  values.push(i)
};

var cardValues = [];
while (0 < values.length) {
  var index = Math.floor(Math.random() * (values.length));
  cardValues.push(values[index])
  values.splice(index, 1)
}

return cardValues
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
var colors = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)',
'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)','hsl(310, 85%, 65%)','hsl(360, 85%, 65%)','hsl(25, 85%, 65%)']
$game.empty();
for (index in random) {
  var $card = $('<div class="col-xs-3 card"></div>')
  $card.data('value', cardValues[index])
  $card.data('flip', false)
  $card.data('color', colors[(cardValues[index] - 1)])
  $card.append($game)
}
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
});
