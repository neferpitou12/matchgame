var MatchGame = {};
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
  var cardValues = MatchGame.generateCardValues();
  var $game = $('#game');
  MatchGame.renderCards(cardValues, $game);
});

/*
  Generates and returns an array of matching card values.
 */
MatchGame.generateCardValues = function () {
  var values = [];

  for (i=1; i<9; i++) {
    values.push(i);
    values.push(i);
  }

  var cardValues = [];

  while (0 < values.length) {
    var index = Math.floor(Math.random() * (values.length));
    cardValues.push(values[index]);
    var random = values.splice(index, 1);
  }

  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)',
  'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)','hsl(310, 85%, 65%)','hsl(360, 85%, 65%)','hsl(25, 85%, 65%)'];

  $game.empty();
  $game.data('flippedCards', []);

  for (var index = 0; index < cardValues.length; index++) {
    var value = cardValues[index];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      flip: false
    };

  var $card = $('<div class="col-xs-3 card"></div>');
  $card.data(data);
  $game.append($card);

};

  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if ($card.data('flipped')) {
    return;
  }

  $card.css("background-color", $card.data('color'))
  $card.text($card.data('value'))
  $card.data('flipped', true);

  var flippedCards = $game.data('flippedCards');
  flippedCards.push($card);

  if (flippedCards.length === 2) {
    if (flippedCards[0].data('value') === flippedCards[1].data('value')) {
      var matchedLook = {
        backgroundColor: 'rgb(153, 153, 153)',
        color: 'rgb(204, 204, 204)'
      }
      flippedCards[0].css(matchedLook);
      flippedCards[1].css(matchedLook);

    } else {
      var card1 = flippedCards[0];
      var card2 = flippedCards[1];

      window.setTimeout(function() {

      card1.css("background-color", 'rgb(32, 64, 86)')
      card1.text('')
      card1.data('flipped', false);

      card2.css("background-color", 'rgb(32, 64, 86)')
      card2.text('')
      card2.data('flipped', false);
    }, 450);
  }

    $game.data('flippedCards', []);
  }
};
