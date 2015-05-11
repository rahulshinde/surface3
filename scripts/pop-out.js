$(document).ready(function(){
  $(".about").colorbox({transition:"fade", width:"75%", height:"75%", fixed:true, onLoad: function() {
  		
      $('#cboxClose').remove();

    //   //insert hanatarash text
    // var hanatarashTxt = SITE.hanatarash;
    // document.getElementById('hanatarash-response').textContent=hanatarashTxt;
    // console.log(hanatarashTxt);

    // //insert youtube text
    // var youtubeTxt = SITE.video;
    // document.getElementById('youtube-response').textContent=youtubeTxt;

    // //insert imgur text
    // var imgurTxt = SITE.image;
    // document.getElementById('imgur-response').textContent=imgurTxt;
  }});        
});