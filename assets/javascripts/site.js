$('.masonry-grid').masonry({
  itemSelector: '.masonry-item'
});

$('.masonry-grid-guttered').masonry({
  itemSelector: '.masonry-item',
  gutter: 6
});

$('#search-trigger').click(function(e) {
	$('#search').toggle();
	$('#search input').focus();
	e.preventDefault();
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
});