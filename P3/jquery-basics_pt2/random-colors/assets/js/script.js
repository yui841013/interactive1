$(document).ready(function(){

	n = 0;

	$('body').click(function(){

		$redValue = Math.floor(Math.random()*255);
		$greenValue = Math.floor(Math.random()*255);
		$blueValue = Math.floor(Math.random()*2255);


		$('body').append('<div class="page-'+n+'">rgb('+$redValue+','+$blueValue+')</div><div class="break"></div>');

		$('.page-'+n).css(
			'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
		);

		n++;

	});


});
