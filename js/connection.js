$(document).ready(function() {
// Alert users when they've lost internet connectivity and show if their connection is secure (https, http)
	window.addEventListener('load', function(e) {
        if (navigator.onLine) {
        	if (document.location.protocol === 'https:') {
		        $('.secure').html("Secure");
		        $('.secure').attr('data-original-title', "You are using https");
		        $('.secure').css("background-color", "#3bbadc");
		    } else {
		        $('.secure').html("Not secure");
		        $('.secure').attr('data-original-title', "Switch to https");
		        $('.secure').css("background-color", "#d9534f");
		    }
            $('.status').html("Online");
            $('.status').css("background-color", "#009966");
        } else {
            $('.status').html("Offline");
            $('.status').css("background-color", "#d9534f");

            $('.secure').html("Secure");
	        $('.secure').attr('data-original-title', "You are using https");
	        $('.secure').css("background-color", "#3bbadc");
        }
    }, false);

    window.addEventListener('online', function(e) {
    	if (document.location.protocol === 'https:') {
	        $('.secure').html("Secure");
	        $('.secure').attr('data-original-title', "You are using https");
	        $('.secure').css("background-color", "#3bbadc");
	    } else {
	        $('.secure').html("Not secure");
	        $('.secure').attr('data-original-title', "Switch to https");
	        $('.secure').css("background-color", "#d9534f");
	    }
        $('.status').html("Online");
        $('.status').css("background-color", "#009966");
    }, false);

    window.addEventListener('offline', function(e) {
        $('.status').html("Offline");
        $('.status').css("background-color", "#d9534f");

        $('.secure').html("Secure");
        $('.secure').attr('data-original-title', "You are using https");
        $('.secure').css("background-color", "#3bbadc");
    }, false);
});