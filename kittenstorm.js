var div = $("<div class='kittenstorm-alert'>");

$(document).keydown(function(e) {
	if (e.keyCode === 27) {
		div.html("Kittens ahoy!");
		div.css({
		    width: '100%',
		    position: 'absolute',
		    top: '0',
		    left: '0',
		    display: 'none',
		    background: '#ffc',
		    padding: '20px 0',
		    fontSize: '40px',
		    textAlign: 'center',
		    color: '#000',
		});
		$("body").prepend(div);
		div.fadeIn(500);
	} 
});

$(document).keyup(function(e) {
	if (e.keyCode === 27) {

		

		var images = $('img');
		images.each(function() {
			var kitten = $(this);  
			var imgsrc = kitten.src;
			var h = kitten.height();
			var w = kitten.width();
			console.log(imgsrc);
			var newsrc = 'http://placekitten.com/g/' + w + '/' + h;
			kitten.attr("src",newsrc);
		}).promise().done( setTimeout(function(){ 
			div.fadeOut(2000);
		}), 9000);  

		
	} 
});