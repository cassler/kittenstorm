$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$("img").each(function() {
			kitten = $(this);  
			imgsrc = kitten.src;
			h = kitten.height();
			w = kitten.width();
			console.log(imgsrc);
			newsrc = 'http://placekitten.com/g/' + w + '/' + h;
			kitten.attr("src",newsrc);
		});  
	} 
});