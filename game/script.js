(function ($) {
  $(function () {

    var agTimerId, agBubblesDopClass = false,
  agSpeed = 1000 * agRandom(15, 20);

function agRandom (argMin, argMax) {
  return (argMin + Math.random() * (argMax + 1 - argMin));
}

function afterReflowWindow () {

  $('.js-bubble_list').empty();

  for (var agStyle = [], agPos = agRandom(95, 5), i = 0; i <= agRandom(50, 20); i++) {
    var agWidth = agRandom(18, 5),
      agTransform = agRandom(50, -50),
      agAnimDuration = agRandom(900, 400),
      agAnimDelay = agRandom(0, -900),
      agTransitionDuration = agRandom(12000, 8000),
      agTransitionDelay = i * agRandom(150, 30);

    agStyle.push({
      left: agPos + "%",
      transform: "translateX(" + agTransform + "px)",
      width: agWidth + "px",
      height: .66 * agWidth + "px",
      "-webkit-animation-duration": agAnimDuration + "ms",
      "-moz-animation-duration": agAnimDuration + "ms",
      "animation-duration": agAnimDuration + "ms",
      "-webkit-animation-delay": agAnimDelay + "ms",
      "-moz-animation-delay": agAnimDelay + "ms",
      "animation-delay": agAnimDelay + "ms",
      "-webkit-transition-duration": agTransitionDuration + "ms",
      "-moz-transition-duration": agTransitionDuration + "ms",
      "transition-duration": agTransitionDuration + "ms",
      "-webkit-transition-delay": agTransitionDelay + "ms",
      "-moz-transition-delay": agTransitionDelay + "ms",
      "transition-delay": agTransitionDelay + "ms"
    });

    //$('.js-bubble_list').append('<li class="js-bubble_item-' + i + ' js-ag-bubble_item"></li>');
    $('.js-bubble_list').append('<li class="js-bubble_item js-ag-bubble_item"></li>');

    //$('.js-bubble_item-' + i).css(agStyle[i]);
    $('.js-bubble_item:eq(' + i + ')').css(agStyle[i]);

  }

  if(agBubblesDopClass == false) {
    agTimerId = setInterval(function () {
      $('.js-ag-bubble_item').addClass('js-ag-bubble_item__dop');

      agBubblesDopClass = true;
    }, 500);
  }

//console.log(agBubblesDopClass);
}


function createBubbles () {
  afterReflowWindow();
}

function agStart() {
  agTimerId = setInterval(function () {
    console.log(agBubblesDopClass);

    createBubbles();
  }, agSpeed);
}

agStart();

  });
})(jQuery);