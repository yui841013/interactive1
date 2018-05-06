$(document).ready(function(){

	n = 1;

	setInterval(function(){
		$('body').append('<img src="https://media.giphy.com/media/CkBzt6qXCCXw4/giphy.gif"/>');

		if (n%10 == 0) {
			$('body').append('<div class="break"></div>');
		}

		n++;

	},1000);


});
