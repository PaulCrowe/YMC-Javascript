$(document).ready(function(){
	// custom jquery goes in here
	alert('jQuery is connected');

	$('.button').click(function(e){
		e.preventDefault();
		$('body').css({
			background: 'orange',
			color: 'white',
			fontFamily: "Arial"
		});

		// change the tezt in the heading
		$('h1').html('Cool!');

		$('h1').animate({
			left: '400px',
			top: '100px',
			fontSize: '72px'
		},1000, 'swing', function(){;
			$('h1').html('cooooooool');
			$('.button').animate({
				right: '500px',
				top: '50px'
			})
		})	
	});	

});