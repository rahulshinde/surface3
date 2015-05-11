$(document).ready(function(){
  $(".about").colorbox({transition:"fade", width:"75%", height:"75%", fixed:true, onLoad: function() {
  		
      $('#cboxClose').remove();
  }});        
});