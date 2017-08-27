'use strict';

console.clear();

$('body').submit(function(event){
	event.preventDefault();
	console.log('stop')
})

$('#join').on ('mouseover', function(){
	$(this).find('.arrow').css('color', '#000000');
})
$('#join').on ('mouseout', function(){
	$(this).find('.arrow').css('color', 'transparent');
})
$('#btn-menu').on ('click', function(e){
	// debugger;
	e.preventDefault();

	if (e.pageY > 100) {
		$('#menu').css('opacity', .65);
	} else {
		$('#menu').css('opacity', 1);
	}
	$('#menu').slideToggle(500);
});

$(window).scroll(function(e){
	$('#menu').slideUp(500);
})

$('#menu').on ('click', 'a.mnu', function(event){
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;

	$('body,html').animate({scrollTop: top}, 1500);

	$('#menu').slideUp(500);
})