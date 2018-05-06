$(document).ready(function(){


	$('#print').click(function() {

		var value = $('input[name=yes]:checked').val();

		if (value == 'No') {
			$('body').append('<div class="break">y</div><div class="break">e</div><div class="break">s</div>');
		} else {
			$('body').append('<div class="break">No</div><div class="break">Thanks</div>');
		}

		window.print();
	    return false;

	});


});
