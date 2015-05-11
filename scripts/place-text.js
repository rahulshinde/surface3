$(function(){
	// document.getElementById('variable-input').textContent=searchTerm;
 //  	document.getElementById('variable-num').textContent=searchNum;

	//insert hanatarash text
   	var hanatarashTxt = SITE.hanatarash;
   	document.getElementById('hanatarash-response').textContent=hanatarashTxt;
   
	//insert youtube text
	var youtubeTxt = SITE.video;
	console.log(youtubeTxt);
	document.getElementById('youtube-response').textContent=youtubeTxt;
   
	//insert imgur text
	var imgurTxt = SITE.image;
	document.getElementById('imgur-response').textContent=imgurTxt; 
});

