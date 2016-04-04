function setupMasonry() {
	$('.masonry-grid').masonry({
	  itemSelector: '.masonry-item'
	});	
	$('.masonry-grid-guttered').masonry({
	  itemSelector: '.masonry-item',
	  gutter: 6
	});
}

$(document).ready(setupMasonry);

Typekit.load({
	async: true,
	active: setupMasonry,
	inactive: setupMasonry
});

$('#boletin-trigger').click(function(e) {
	$('#search').hide();
	$('#boletin').toggle();

	$('#boletin input').focus();
	e.preventDefault();
	e.stopPropagation();
});

$('#search-trigger').click(function(e) {
	$('#boletin').hide();

	$('#search').toggle();
	$('#search input').focus();
	e.preventDefault();
	e.stopPropagation();
});

$('body').click(function(e) {
	$('#boletin').hide();
	$('#search').hide();
});

$('.sticky').sticky({ topSpacing: 0 });

$(document).ready(function() {
    $('.fb-share').click(function(e) {
        e.preventDefault();
        var pageUrl = window.location.toString();
        var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl);
        window.open(url, 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });

    $('.twitter-share').click(function(e) {
    	e.preventDefault();
    	window.open("https://twitter.com/share", 'twitterShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    	return false;
    });
});

$(document).ready(function () {
	if (!localStorage.cookiesAccepted) {
		$('.cookie-warning').show();
	}

	$('.cookie-warning').click(function() {
		localStorage.cookiesAccepted = true;
		$('.cookie-warning').slideToggle(200);	
	});
}); 
