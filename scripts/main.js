var SITE = SITE || {};


(function ($, SITE) {

  var Str1 = "Viewer as they exist in one dimensional space, Object existing in the second dimension, Time functioning as the container (imposed, never implied).";
  var Str2 = "Beginning from the entrance:";
  var Str3 = "An intervention is called for a man that we can assume to be sick. preparations are made to ensure he will feel safe. flowers placed in a porcelain vase. large sofas that will force him to sit back in his chair slouching, becoming comfortable, contributing to the degradation of his spine due to his family’s history of osteoporosis. pleasant wall decor. a photo of the dog he grew up with. subtly placed in the far corner of the room so that he will not notice it until halfway through his father’s lecture, approximately two minutes and forty three seconds before the majority of the room begins to sob.";
  var Str4 = "viewer as they exist in three dimensional space (defining the container), object existing in conjunction with time.";
  var Str5 = "alternate one, (predisposition) his aunt is immediately excluded from the conversation. initial sight lines disrupted physically. she attempts to reach for the man’s hand, to provide comfort, a solid object from which he can float. she notices a picture in the corner of the room, the man’s dog when he was a child. she imagines the relationship they had together, something whimsical, based on chance. perhaps the actualization of mutual understanding. the man will pass in two years, his death marking the second, and only other time in her life that she felt a complete lack of empathy. his tombstone, static, yet his face, no longer existing in her memory.";
  var Str6 = "alternate two, she steps into the room and recalls a song from a movie she had once watched with her father.";
  var Str7 = "everybody's talking at me i don't hear a word they're saying only the echoes of my mind people stopping, staring i can't see their faces only the shadows of their eyes i'm going where the sun keeps shining through the pouring rain going where the weather suits my clothes";
  var Str8 = "shortly after sitting down next to the man, the room now in tears, she noticed the flowers that sat on one of the side tables.lilacs, probably bought a couple of days before. prospects of a renewed future are symbolically placed thirty degrees to the right of where she sits. approximately three seconds of travel time would allow her to occupy the space directly beside the flowers. unfortunately for her, this type of behavior might possibly be deemed socially unacceptable.";
  var Str9 = "a candlelit dinner was arranged, table for one.";
  var Str10 = "her attention shifts to the glass of water that the man has been holding, untouched since the conversation   began. instead, he keeps the glass still, tilted slightly to the right, his fingers placed around the rim of  the glass, so that only the water is parallel to the ground. minor vibrations slightly displace the fluid that could have been misconstrued into a metaphor about stability. a view of the ocean could be similarly repackaged into a convincing argument. movement between the glass and the seat of the sofas is split between two paths, depth shifting to exist above or beneath an established ground plane. reflection as it relates to the self. symmetry as it relates to causality (to be understood as existing in a vacuum).";
  var searchString = Str1.concat(Str2, Str3, Str4, Str5, Str6, Str7, Str8, Str9, Str10);

  document.getElementById("script").innerHTML= Str1 + "<br><br>" + Str2 + "<br><br>" + Str3 + "<br><br>" + Str4 + "<br><br>" + Str5 + "<br><br>" + Str6 + "<br><br>" + Str7 + "<br><br>" + Str8 + "<br><br>" + Str9 + "<br><br>" + Str10;

  var searchArray = searchString.split(" ");
  SITE.searchArray = searchArray;
  console.log(SITE.searchArray);
  
  var searchNum = Math.floor(Math.random()* searchArray.length);
  SITE.searchNum = searchNum;
  var searchTerm = searchArray[searchNum];
  SITE.searchTerm = searchTerm;
  //insert input values
  // document.getElementById('variable-input').textContent=searchTerm;
  // document.getElementById('variable-num').textContent=searchNum;
  

  placeInfo = function placeInfoF () {
    
    // insert hanatarash
    var videoHanatarash = '<iframe id="ytplayer" type="text/html" width="150" height="115" src="http://www.youtube.com/embed/' + SITE.hanatarash + '?autoplay=1&rel=0&showinfo=0&controls=0&modestbranding=1&origin=http://example.com" frameborder="0"/></iframe>';
    document.getElementById('hanatarash').innerHTML=videoHanatarash;
  
    //insert video
    var videoRandom = '<iframe id="ytplayer" type="text/html" width="500" height="350" src="http://www.youtube.com/embed/' + SITE.video + '?autoplay=1&rel=0&showinfo=0&controls=0&modestbranding=1&origin=http://example.com" frameborder="0"/></iframe>';
    document.getElementById('video').innerHTML=videoRandom;
  
    //insert image
    var imgRandom = '<img id="imgur" src="' + SITE.image +'">';
    document.getElementById('img').innerHTML=imgRandom;
    
  }

  infoLoaded = function infoLoadedF (data, data2, data3) {
    // console.log(data, data2, data3);

    if (data) {
      // Imgur

      var item = data;
      var imageId = item[0].data[0].link;
      console.log(imageId);


      SITE.image = imageId;
    }

    if (data2) {
      // hantarash
      var item = data2;
      var hanatarashId = item[0].items[1].id.videoId;
      SITE.hanatarash = hanatarashId;       
      
    }

    if (data3) {
      // youtube
      var item = data3;
      var youtubeId = item[0].items[0].id.videoId;
      console.log(youtubeId);
      SITE.video = youtubeId;
           
      
    }
    // console.log(SITE.image);
    // console.log(SITE.hanatarash);
    // console.log(SITE.video);
    $.when(infoLoaded).then(placeInfo);

  }

  getInfo = function getInfoF () {
    var getHanatarash,
        getRandomVideo,
        getRandomImage;

    var getHanatarash = $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&q=hanatarash&maxResults=3&key=AIzaSyDmdYBSUbMtBe-YArhGfDR5d32RtKWwRwA",
      dataType: 'jsonp',
      type: 'GET'
    });


    var getRandomVideo = $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&q=" + searchTerm + "&maxResults=1&key=AIzaSyDmdYBSUbMtBe-YArhGfDR5d32RtKWwRwA",
      dataType: 'jsonp',
      type: 'GET'
    });

    

    var getRandomImage = $.ajax({
      url: 'https://api.imgur.com/3/gallery/search.json',
      data: {
        q: searchTerm
      },
      type: 'GET',
      headers: {
        Authorization: 'Client-ID 77fc4712c0786c7'
      }
    });

    $.when( getRandomImage, getHanatarash, getRandomVideo ).then(infoLoaded);

  }


  



  getInfo();

})(jQuery, SITE);