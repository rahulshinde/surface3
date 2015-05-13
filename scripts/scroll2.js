var lastScrollTop = 0;

var marqueeXFactor = (Math.random()*1-1).toFixed(1);
var marqueeYFactor = (Math.random()*1-1).toFixed(1);
var marqueeZFactor = (Math.random()*1-1).toFixed(1);

var videoXFactor = (Math.random()*1-1).toFixed(1);
var videoYFactor = (Math.random()*1-1).toFixed(1);
var videoZFactor = (Math.random()*1-1).toFixed(1);

var imgXFactor = (Math.random()*1-1).toFixed(1);
var imgYFactor = (Math.random()*1-1).toFixed(1);
var imgZFactor = (Math.random()*1-1).toFixed(1);

var marqueeDeg = (Math.random()*100-100);
var marqueeXPosition = (Math.random()*180-180);

var videoDeg = (Math.random()*100-100);
var videoXPosition = (Math.random()*180-180);

var imgDeg = (Math.random()*100-100);
var imgXPosition = (Math.random()*180-180);

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
  var deg = scroll * marqueeDeg;
  var rotateMarquee = 'rotate3d(' + marqueeXFactor + ',' + marqueeYFactor + ',' + marqueeZFactor + ',' + deg +'deg)';

  var translateX = scroll * marqueeXPosition;
  var translateY = scroll * -70;
  var translateZ = scroll * 230;
  var translateMarquee = 'translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px)';
  var transformMarquee = rotateMarquee + ' ' + translateMarquee;
  $('#marqueecontainer').css({'-moz-transform' : transformMarquee, '-webkit-transform' : transformMarquee});
  console.log(transformMarquee);
  // $('#marqueecontainer').css({'-moz-transform' : translateMarquee, '-webkit-transform' : translateMarquee});
};

function transformVideo( scroll ) {
  var deg = scroll * videoDeg;
  var rotateMarquee = 'rotate3d(' + videoXFactor + ',' + videoYFactor + ',' + videoZFactor + ',' + deg +'deg)';

  var translateX = scroll * videoXPosition;
  var translateY = scroll * -30;
  var translateZ = scroll * -50;
  var translateMarquee = 'translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px)';
  var transformMarquee = rotateMarquee + ' ' + translateMarquee;
  $('#video').css({'-moz-transform' : transformMarquee, '-webkit-transform' : transformMarquee});
  // $('#marqueecontainer').css({'-moz-transform' : translateMarquee, '-webkit-transform' : translateMarquee});
};

function transformImg( scroll ) {
  var deg = scroll * imgDeg;
  var rotateMarquee = 'rotate3d(' + imgXFactor + ',' + imgYFactor + ',' + imgZFactor + ',' + deg +'deg)';

  var translateX = scroll * imgXPosition;
  var translateY = scroll * 20;
  var translateZ = scroll * 20;
  var translateMarquee = 'translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px)';
  var transformMarquee = rotateMarquee + ' ' + translateMarquee;
  $('#img').css({'-moz-transform' : transformMarquee, '-webkit-transform' : transformMarquee});
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
