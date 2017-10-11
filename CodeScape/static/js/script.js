
$(document).ready(function() {
    console.log("loaded");
    $.material.init();

    $(document).on("submit", "#registration", function(e) {
    	e.preventDefault();
        var form = $('#registration').serialize();
        $.ajax({
        	url: '/postregistration',
        	type: 'POST',
        	data: form,
        	success: function(response) {
        		console.log(response)
        		window.location.href = "/login";
        	}
        });
    });
    
    $(document).on('submit', '#login-form', function(e) {
    	e.preventDefault();
    	var form = $(this).serialize();
    	$.ajax({
    		url: '/check-login',
    		type: 'POST',
    		data: form,
    		success: function(response) {
    			if (response == "error") {
    				alert("Incorrect username or password.");
    			} else {
    				console.log("Logged in as ", response);
    				window.location.href= "/";
    			}
    		}
    	})
    });
    
    $(document).on('click', '#logout-link', function(e) {
    	e.preventDefault();
    	$.ajax({
    		url: '/logout',
    		type: 'GET',
    		success: function(response) {
    			if (response == "success") {
    				window.location.href = "/login";
    			} else {
    				alert("DIDNT WORK!");
    			}
    		}
    	})
    });
    
    $(document).on('submit', '#post-activity', function(e) {
    	e.preventDefault();
    	form = $(this).serialize();
    	$.ajax({
    		url: '/post-activity',
    		type: 'POST',
    		data: form,
    		success: function(response) {
    			console.log(response);
    		}
    	});
    });
    
    $(document).on('submit', '#settings-form', function(e) {
    	e.preventDefault()
    	var form = $(this).serialize();
    	$.ajax({
    		url: '/update-settings',
    		type: 'POST',
    		data: form,
    		success: function(response) {
    			if (response == "success") {
    				window.location.href = window.location.href;
    			} else {
    				alert(response);
    			}
    		}
    	})
    });
    
    $(document).on('submit', '.comment-form', function(e) {
    	e.preventDefault();
    	var form = $(this).serialize();
    	$.ajax({
    		url: "/submit-comment",
    		type: "POST",
    		data: form,
    		dataType: "json",
    		success: function(response) {
    			console.log(response);
    		}
    	})
    });
});
