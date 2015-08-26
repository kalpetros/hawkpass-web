$(document).ready(function() {
	// Detect https/http
	if (window.location.protocol != "https:") {
    	var connection = 'http';
	}

    // Alert users when they've lost internet connectivity and show if their connection is secure (https, http)
    window.addEventListener('load', function(e) {
        if (navigator.onLine) {
        	if (connection === 'https') {
		        $('.secure').html("Secure");
		        $('.secure').attr('data-original-title', "You are using https");
		        $('.secure').css("background-color", "#3bbadc");
		        $('.secure').css("color", "white");  
		    } else {
		        $('.secure').html("Not secure");
		        $('.secure').attr('data-original-title', "Switch to https");
		        $('.secure').css("background-color", "#d9534f");
		        $('.secure').css("color", "white"); 
		    }
            $('.status').html("Online");
            $('.status').css("background-color", "#009966");
            $('.status').css("color", "white");
        } else {
            $('.status').html("Offline");
            $('.status').css("background-color", "#d9534f");
            $('.status').css("color", "white");

            $('.secure').html("Secure");
	        $('.secure').attr('data-original-title', "You are using https");
	        $('.secure').css("background-color", "#3bbadc");
	        $('.secure').css("color", "white");
        }
    }, false);

    window.addEventListener('online', function(e) {
    	if (connection === 'https') {
	        $('.secure').html("Secure");
	        $('.secure').attr('data-original-title', "You are using https");
	        $('.secure').css("background-color", "#3bbadc");
	        $('.secure').css("color", "white");  
	    } else {
	        $('.secure').html("Not secure");
	        $('.secure').attr('data-original-title', "Switch to https");
	        $('.secure').css("background-color", "#d9534f");
	        $('.secure').css("color", "white"); 
	    }
        $('.status').html("Online");
        $('.status').css("background-color", "#009966");
        $('.status').css("color", "white");
    }, false);

    window.addEventListener('offline', function(e) {
        $('.status').html("Offline");
        $('.status').css("background-color", "#d9534f");
        $('.status').css("color", "white");

        $('.secure').html("Secure");
        $('.secure').attr('data-original-title', "You are using https");
        $('.secure').css("background-color", "#3bbadc");
        $('.secure').css("color", "white"); 
    }, false);
});