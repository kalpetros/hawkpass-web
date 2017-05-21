$(document).ready(function() {
    /* Alert users when they've lost internet connectivity
       and show if their connection is secure (https, http) */
    $(window).ready(function() {
        if (navigator.onLine) {
	    var protocol = "You appear to be online.";
	    if (document.location.protocol === 'https:') {
		$('.connection a').removeClass().addClass('teal-text text-accent-3');
		$('.connection i').removeClass().addClass('fa fa-lock teal-text text-accent-3');
		$('.connection span').text('Secure connection');
		protocol += " You are using https.";
	    } else {
		$('.connection a').removeClass().addClass('red-text text-accent-3');
		$('.connection i').removeClass().addClass('fa fa-unlock-alt red-text text-accent-3');
		$('.connection span').text('Unsecure connection');
		protocol += " Switch to https.";
	    }
	    
        } else {
	    $('.connection a').removeClass().addClass('grey-text');
	    $('.connection i').removeClass().addClass('fa fa-ban grey-text');
	    $('.connection span').text('Offline');
	    protocol = "You appear to be offline.";
        }
	$('.tooltipped').tooltip({position: 'right',
				  delay: 50,
				  tooltip: protocol});
    }, false);

    window.addEventListener('online', function() {
	var protocol = "You appear to be online.";
    	if (document.location.protocol === 'https:') {
	    $('.connection a').removeClass().addClass('teal-text text-accent-3');
	    $('.connection i').removeClass().addClass('fa fa-lock teal-text text-accent-3');
	    $('.connection span').text('Secure connection');
	    protocol += " You are using https.";
	} else {
	    $('.connection a').removeClass().addClass('red-text text-accent-3');
	    $('.connection i').removeClass().addClass('fa fa-unlock-alt red-text text-accent-3');
	    $('.connection span').text('Unsecure connection');
	    protocol += " Switch to https.";
	}
	$('.tooltipped').tooltip({position: 'right',
				  delay: 50,
				  tooltip: protocol});
    }, false);

    window.addEventListener('offline', function() {
	$('.connection a').removeClass().addClass('grey-text');
	$('.connection i').removeClass().addClass('fa fa-ban grey-text');
	$('.connection span').text('Offline');
	$('.tooltipped').tooltip({position: 'right',
				  delay: 50,
				  tooltip: 'You appear to be offline.'});
    }, false);
});
