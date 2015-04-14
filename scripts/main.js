
(function ($) {

  var getHanatarash,
      getRandomVideo,
      getRandomImage;

  var searchString = $('#script').text();
  var searchArray = searchString.split(" ");
  var searchNum = Math.floor(Math.random()* searchArray.length);
  var searchTerm = searchArray[searchNum];

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

          // console.log(videoId);
        }

    });

  };

  getRandomVideo = function getRandomF() {
    var randomVideo = $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&q=" + searchTerm + "&maxResults=1&key=AIzaSyDmdYBSUbMtBe-YArhGfDR5d32RtKWwRwA",
      dataType: 'jsonp',
      type: 'GET'
    });

    randomVideo.done(function (data) {
       for(var i in data.items) {
          var item = data.items[i];
          var videoId2 = item.id.videoId;

          // console.log(videoId2);
        }   
    });




    console.log(searchNum);
    console.log(searchTerm);
  }

  getImgurAuth = function getImgurAuthF() {
    var randomImage = $.ajax({
      url: 'https://api.imgur.com/3/gallery/search.json',
      data: {
        q: 'hello'
      },
      type: 'GET',
      headers: {
        Authorization: 'Client-ID 77fc4712c0786c7'
      }
    });

    randomImage.done(function (response) {
      var item = response.data[0];
      var imageId = item.link;

      console.log(imageId);
      
    });
  }

  // getHanatarash();
  // getRandomVideo();
  getImgurAuth();


})(jQuery);