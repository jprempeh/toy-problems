$(function(){
	$('p').each(function(index, element) {
		var $el = $(element);
		var words = $el.text().split(' ');
		$el.html('');
		for (var i = 0; i < words.length; i++) {
			var newSpan = $('<span>').text(words[i] + ' ');
			$el.append(newSpan);
		}
	});

	setInterval(function() {
		$('span').each(function(){
			var red   = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			var blue  = Math.floor(Math.random() * 256);
			$(this).css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
		});
	}, 1000);
});