var lastScrollTop = 0;
scrolled = 0, // amount window has scrolled

$(function(){
    transformProp = Modernizr.prefixed('transform'); // ie: WebkitTransform
    
    // cache some jQuery objects
    $window = $(window);
    $document = $(document);
    $content = $('#content');
    
        
    // Zoom when the window is scrolled
    if ( Modernizr.csstransforms ) {
        $(window).scroll(function(){
            zoom();
        });
    } else {
        // Provide a fallback for browsers that don't support transforms yet, likely through the CSS.
    }
});

function transformMarquee( scroll ) {
  var deg = scroll * -130;
  var rotateMarquee = 'rotate3d(-0.3, 0.9, -0.5,' + deg + "deg)";

  var translateX = scroll * -5;
  var translateY = scroll * -10;
  var translateZ = scroll * 20;
  var translateMarquee = 'translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px)';

  $('#marqueecontainer').css({'-moz-transform' : rotateMarquee, '-webkit-transform' : rotateMarquee});
  // $('#marqueecontainer').css({'-moz-transform' : translateMarquee, '-webkit-transform' : translateMarquee});
};

function transformVideo( scroll ) {
  var deg = scroll * -50;
  var rotateMarquee = 'rotate3d(-1, .2, .5,' + deg + "deg)";

  var translateX = scroll * -5;
  var translateY = scroll * -10;
  var translateZ = scroll * 20;
  var translateMarquee = 'translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px)';

  $('#video').css({'-moz-transform' : rotateMarquee, '-webkit-transform' : rotateMarquee});
  // $('#marqueecontainer').css({'-moz-transform' : translateMarquee, '-webkit-transform' : translateMarquee});
};

function transformImg( scroll ) {
  var deg = scroll * 100;
  var rotateMarquee = 'rotate3d(-.2, .2, .2,' + deg + "deg)";

  var translateX = scroll * -5;
  var translateY = scroll * -10;
  var translateZ = scroll * 20;
  var translateMarquee = 'translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px)';

  $('#img').css({'-moz-transform' : rotateMarquee, '-webkit-transform' : rotateMarquee});
  // $('#marqueecontainer').css({'-moz-transform' : translateMarquee, '-webkit-transform' : translateMarquee});
};


function zoom(){
     // normalize scroll value from 0 to 1
     /* Normally this would increase for each pixel (ie 1, 2,…,5400)
        but this turns it into a decimal (ie. 0.0016625103906899418, 0.003948462177888612,…,1)
    */
    scrolled = $window.scrollTop() / ( $document.height() - $window.height() );
    transformMarquee( scrolled );
    transformVideo( scrolled );
    transformImg( scrolled );
};
