$('.masonry-grid').masonry({
  itemSelector: '.masonry-item'
});

$('.masonry-grid-guttered').masonry({
  itemSelector: '.masonry-item',
  gutter: 6
});

$('#search-trigger').click(function(e) {
	$('#search').toggle();
	e.preventDefault();
});

$('.sticky').sticky({ topSpacing: 0 });
