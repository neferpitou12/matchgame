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

  return values;

  var cardValues = [];

  while (0 < values.length) {
    var index = Math.floor(Math.random() * (values.length));
    var random = values.splice(index, 1);
    cardValues.push(values[index]);
  }

  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game.data('flippedCards', []);

  var colors = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)',
  'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)','hsl(310, 85%, 65%)','hsl(360, 85%, 65%)','hsl(25, 85%, 65%)'];

  $game.empty();

  for (var index = 0; index < cardValues.length; index++) {
    var value = cardValues[index]
    var color = colors[(cardValues[index] - 1)]
    var data = {
      value: value,
      color: color,
      flip: false
    };

  var $card = $('<div class="col-xs-3 card"></div>');
  $card.data(data);
  $game.append($card);
}
};


/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if ($game.data('flipped')) {
    return;
  }

  $('.card').css("background-color", $card.data('color'))
  $('.card').text($card.data('value'))
  $('.card').data('flipped', true);

  var flippedCards = $game.data('flippedCards')
  flippedCards.push($card)

  if (flippedCards.length === 2) {
    if (flippedCards[0].data('value') === flippedCards[1].data('value')) {
      $card.css("background-color", rgb(153, 153, 153))
      $card.css("color", rgb(204, 204, 204))
    }

    else {
      $('.card').css("background-color", $card.data('color'))
      $('.card').text($card.data([]))
      $('.card').data('flipped', false)
    }

    $game.data('flippedCards', []);
  }
};
