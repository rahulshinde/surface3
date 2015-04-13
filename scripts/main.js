
(function ($) {

  var getHanatarash,
      getRandom;

  getHanatarash = function getHanatarashF() {
    var hanatarash = $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&q=hanatarash+full+album&maxResults=1&key=AIzaSyDmdYBSUbMtBe-YArhGfDR5d32RtKWwRwA",
      dataType: 'jsonp',
      type: 'GET'
    });

    hanatarash.done(function (data) {
       for(var i in data.items) {
          var item = data.items[i];
          var videoId = item.id.videoId;

          console.log(videoId);
        }

    });

  };

  getRandom = function getRandomF() {
    var searchString = $('#script').text();
    var searchArray = searchString.split(" ");
    var searchNum = Math.floor(Math.random()* searchArray.length);
    var searchTerm = searchArray[searchNum];

    var randomVideo = $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&q=" + searchTerm + "&maxResults=1&key=AIzaSyDmdYBSUbMtBe-YArhGfDR5d32RtKWwRwA",
      dataType: 'jsonp',
      type: 'GET'
    });

    randomVideo.done(function (data) {
       for(var i in data.items) {
          var item = data.items[i];
          var videoId2 = item.id.videoId;

          console.log(videoId2);
        }   
    });


    console.log(searchNum);
    console.log(searchTerm);
  }

  getRandom();


})(jQuery);