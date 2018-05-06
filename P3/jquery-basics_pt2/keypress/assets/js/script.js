$(document).ready(function(){
	
	// store n variable
	n = 0;

	$('body').keypress(function( event ) {
	
		// add 1 to n every keypress
		n++;
		
		// store key pressed
		var code = (event.keyCode ? event.keyCode : event.which);
		

		// detect if first keypress
		if(n == 1){
			// if first keypress overwrite text
			$('h1').html(String.fromCharCode(event.which));	
		} else {
			// else add to it
			$('h1').append(String.fromCharCode(event.which));	
		}

		// detect if 'enter' is pressed
		if(code == 13) {
			var text = $('h1').text();
			$('body').append('<div class="break">'+text+'</div>');
    		$('h1').html(String.fromCharCode(event.which));	
		}

		//

	});

});