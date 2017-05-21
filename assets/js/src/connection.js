$(document).ready(function() {
    // Alert users when they've lost internet connectivity and show if their connection is secure (https, http)
    $(window).ready(function() {
        if (navigator.onLine) {
	    var protocol = "You appear to be online.";
	    if (document.location.protocol === 'https:') {
		$('.connection').html('<a class="teal-text text-accent-3"><i class="fa fa-lock teal-text text-accent-3" aria-hidden="true"></i> Secure connection</a>');
		protocol += " You are using https";
	    } else {
		$('.connection').html('<a class="red-text text-accent-3"><i class="fa fa-unlock-alt red-text text-accent-3" aria-hidden="true"></i> Unsecure connection</a>');
		protocol += " Switch to https.";
	    }
	    
        } else {
            $('.connection').html('<a class="grey-text"><i class="fa fa-lock grey-text" aria-hidden="true"></i> Offline</a>');
	    protocol = "You appear to be offline. Your connection is secure";
        }
	$('.tooltipped').tooltip({position: 'right',
				  delay: 50,
				  tooltip: protocol});
    }, false);

    window.addEventListener('online', function() {
	var protocol = "You appear to be online.";
    	if (document.location.protocol === 'https:') {
	    $('.connection').html('<a class="teal-text text-accent-3"><i class="fa fa-lock teal-text text-accent-3" aria-hidden="true"></i> Secure connection</a>');
	    protocol += " You are using https";
	} else {
	    $('.connection').html('<a class="red-text text-accent-3"><i class="fa fa-unlock-alt red-text text-accent-3" aria-hidden="true"></i> Unsecure connection</a>');
	    protocol += " Switch to https.";
	}
	$('.tooltipped').tooltip({position: 'right',
				  delay: 50,
				  tooltip: protocol});
    }, false);

    window.addEventListener('offline', function() {
	$('.connection').html('<a class="grey-text"><i class="fa fa-ban grey-text" aria-hidden="true"></i> Offline</a>');
	$('.tooltipped').tooltip({position: 'right',
				  delay: 50,
				  tooltip: 'You appear to be offline. Your connection is secure.'});
    }, false);
});
