$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).attr('data-heading'));
  });

  $('.skill_teller').on('click', function() {
    // console.log(document.URL.split('/').pop();
      var params = document.URL.split('/');
      var pLength = params.length;
      $('#skill_holder').text(params[pLength - 1]);
    });

  $('.meal_teller').on('click', function(event) {
    event.preventDefault();
    var random_meal = meals[Math.floor(Math.random()*meals.length)];
    $('#meal_holder').text(random_meal);
  });

  // What other events do you need to bind to make the other pages work?
});



