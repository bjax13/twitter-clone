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

  $('#tweet-submit').on('click',function () {
    addTweet();
  })

  function addTweet() {
    $('#stream').prepend(

      "<div class='tweet'>"+
        "<div class='content'>"+
          "<img class='avatar' src='img/damenleeturks.jpg' />"+
          "<strong class='fullname'>My BFF</strong>"+
          "<span class='username'>@mybff</span>"+


          "<p class='tweet-text'>Today is an amazing day.</p>"+


          "<div class='tweet-actions'>"+
            "<ul>"+
              "<li><span class='icon action-reply'></span> Reply</li>"+
              "<li><span class='icon action-retweet'></span> Retweet</li>"+
              "<li><span class='icon action-favorite'></span> Favorite</li>"+
              "<li><span class='icon action-more'></span> More</li>"+
            "</ul>"+
          "</div>"+


          "<div class='stats'>"+
            "<div class='retweets'>"+
              "<p class='num-retweets'>30</p>"+
              "<p>RETWEETS</p>"+
            "</div>"+
            "<div class='favorites'>"+
              "<p class='num-favorites'>6</p>"+
              "<p>FAVORITES</p>"+
            "</div>"+
            "<div class='users-interact'>"+
              "<div>"+


                "<img src='img/alagoon.jpg' />"+
                "<img src='img/vklimenko.jpg' />"+
              "</div>"+
            "</div>"+


            "<div class='time'>"+
              "1:04 PM - 19 Sep 13"+
            "</div>"+
          "</div>"+
          "<div class='reply'>"+
            "<img class='avatar' src='img/alagoon.jpg' />"+
            "<textarea class='tweet-compose' placeholder='Reply to @mybff'/></textarea>" +
          "</div>"+
        "</div>"+
      "</div>"

                );
      }









});
