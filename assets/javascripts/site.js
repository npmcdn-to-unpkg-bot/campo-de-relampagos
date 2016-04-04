//***** masonry *****//
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



//***** typekit *****//
Typekit.load({
	async: true,
	active: setupMasonry,
	inactive: setupMasonry
});


var boletin = {
  open: function() {
    $('#boletin').show();
    boletin.setState('form');
    $('#boletin input').focus();
  },

  close: function() {
    $('#boletin').hide();
  },

  toggle: function() {
  	if (boletin.isOpen()) {
  		boletin.close();
  	}
  	else {
  		boletin.open();
  	}
  },

  isOpen: function() {
  	return $('#boletin').is(":visible");
  },

  setState: function(state) {
    $('#boletin [data-state]').hide();
    $('#boletin [data-state="' + state + '"]').show();
  }
};

var search = {
  open: function() {
    $('#search').show();
    $('#search input').focus();
  },

  close: function() {
    $('#search').hide();
  },

  toggle: function() {
  	if (search.isOpen()) {
  		search.close();
  	}
  	else {
  		search.open();
  	}
  },

  isOpen: function() {
  	return $('#search').is(":visible");
  }
}

//***** boletin popover *****//
$('#boletin-trigger').click(function(e) {
  search.close();
  boletin.toggle();

	e.preventDefault();
	e.stopPropagation();
});

$('#boletin-close').click(function(e) {
	boletin.close();
	e.preventDefault();
	e.stopPropagation();
});

$('#boletin').click(function(e) {
  e.stopPropagation();
});

//***** search popover *****//
$('#search-trigger').click(function(e) {
	boletin.close();
  search.toggle();

	e.preventDefault();
	e.stopPropagation();
});

$('#search').click(function(e) {
  e.stopPropagation();
});

$('#search-close').click(function(e) {
	e.stopPropagation();
	search.close();
});

//***** popovers *****//
$('body').click(function(e) {
	boletin.close();
	search.close();
});


//***** boletin form *****//
$(document).ready(function() {
  $('#boletin form').on('submit', function(event) {
    event.preventDefault();
    var url = $('#boletin form').attr('action');

    var email = $('.boletin form[name="email"]').val();
    var formData = {
      email: email,
      list: '1763SI3gyCVbsXBUVLnOLIxA',
      boolean: true
    };

    $.post(url, formData).then(function(data) {
      switch (data) {
        case '0': return boletin.setState('error');
        case '1': return boletin.setState('success');
        case 'Already subscribed.': boletin.setState('already-subscribed');
      }
    });
  });
});



//***** sticky nav *****//
$('.sticky').sticky({ topSpacing: 0 });



$(document).ready(function() {
  //***** facebook *****//
  $('.fb-share').click(function(e) {
      e.preventDefault();
      var pageUrl = window.location.toString();
      var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl);
      window.open(url, 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
      return false;
  });

  //***** twitter *****//
  $('.twitter-share').click(function(e) {
  	e.preventDefault();
  	window.open("https://twitter.com/share", 'twitterShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  	return false;
  });
});



//***** cookie warning *****//
$(document).ready(function () {
	if (!localStorage.cookiesAccepted) {
		$('.cookie-warning').show();
	}

	$('.cookie-warning').click(function() {
		localStorage.cookiesAccepted = true;
		$('.cookie-warning').slideToggle(200);
	});
});
