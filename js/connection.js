$(document).ready(function() {
// Alert users when they've lost internet connectivity and show if their connection is secure (https, http)
	window.addEventListener('load', function(e) {
        if (navigator.onLine) {
	      	if (document.location.protocol === 'https:') {
		        $('.secure').html("Yout connection is secure. You are using https.");
						$('footer').addClass("indigo");
		    	} else {
		        $('.secure').html("Your connection is not secure. Switch to https or disable your internet connection.");
		    	}
      	$('.status').html("You appear to be online.");
        } else {
        	$('.status').html("You appear to be offline.");
          $('.secure').html("Your connection is secure.");
					$('footer').addClass("indigo");
        }
    }, false);

    window.addEventListener('online', function(e) {
    	if (document.location.protocol === 'https:') {
	      $('.secure').html("Your connection is secure. You are using https.");
				$('footer').addClass("indigo");
	    } else {
	      $('.secure').html("Your connection is not secure. Switch to https or disable your internet connection.");
				$('footer').removeClass("indigo");
	    }
      $('.status').html("You appear to be online.");
    }, false);

    window.addEventListener('offline', function(e) {
	    $('.status').html("You appear to be offline.");
	    $('.secure').html("Your connection is secure.");
			$('footer').addClass("indigo");
    }, false);
});
