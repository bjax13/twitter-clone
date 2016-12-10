var charCount = $('#char-count');

function tweetCountTracker(){
  var charTotal = 140 - $(this).val().length;
  charCount.text(charTotal);
}


$(document).ready(function () {


  //button tag for tweet button
  var tweetSubmit = $("#tweet-submit");
  //tag for char-count
  var charCount = $('#char-count');
  //
  var textArea = $('.tweet-compose');


  //hides the char-count #s and tweetSubmit button.
  charCount.hide();
  tweetSubmit.hide();

  //When the user clicks on the textarea, the textarea should double in size and
  //the character count and Tweet buttons should be revealed.

  textArea.on("click", function () {
    charCount.show();
    tweetSubmit.show();
    textArea.height('200%');
  })

  //key press tracker for tweet counter
  textArea.keyup(tweetCountTracker);
  textArea.keydown(tweetCountTracker);

  function addTweet(element, task , itemID) {
    $(element).append(
                      '<a href="#finish" class="" id="'+ itemID +'">' +
                      '<li class="list-group-item">' +
                      '<h3>' + task.task + '</h3>' +
                      '<span class="arrow pull-right">' +
                      '<i class="glyphicon glyphicon-arrow-right">' +
                      '</span>' +
                      '</li>' +
                      '</a>'
                );
}









});
