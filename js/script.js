'use strict';

console.clear();

$('body').on ('click', 'a', function(event){
	event.preventDefault();
})

$('#join').on ('mouseover', function(){
	$(this).find('.arrow').css('color', '#000000');
})
$('#join').on ('mouseout', function(){
	$(this).find('.arrow').css('color', 'transparent');
})

$('#btn-menu').on ('click', function(e){
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
});

$('body').on ('submit', function(e){
	e.preventDefault();
	$('#openModal').show();
})
$('#close').on ('click', function(e){
	e.preventDefault();
	$('#openModal').hide();
});

// Slider
$('#slideRight').on ('click', function(){

	// TOP
	$('.triangle-top .tr1, .triangle-top .tr3')
	.find('span')
	.html('Lorem ipsum dolor sit <br>amet, consectetur <br>adipisicing elit.<br> Tempore, doloribus!');
	
	$('.triangle-top .tr4 .tr-block')
	.find('span.col-left')
	.text('Annet,  27')
	$('.triangle-top .tr5 .tr-block')
	.find('span.col-left')
	.text('Doe,  17')

	// BOTTOM
	$('.triangle-bottom .tr4, .triangle-bottom .tr5')
	.find('span')
	.html('Lorem ipsum dolor sit <br>amet, consectetur <br>adipisicing elit.<br> Tempore, doloribus!');
	
	$('.triangle-bottom .tr1 .tr-block')
	.find('span.col-left')
	.text('Annet,  27');

	$('.triangle-bottom .tr3 .tr-block')
	.find('span.col-left')
	.text('Doe,  17');
})
$('#slideLeft').on ('click', function(){
	// TOP
	$('.triangle-top .tr1, .triangle-top .tr3')
	.find('span')
	.html('Сonsectetuer adipiscing <br>elit. Aenean commodo <br>ligula eget dolor. <br>Aenean massa.');

	$('.tr4 .tr-block')
	.find('span.col-left')
	.text('Alex,  35');

	$('.tr5 .tr-block')
	.find('span.col-left')
	.text('Denis,  28');

	// BOTTOM
	$('.triangle-bottom .tr4, .triangle-bottom .tr5')
	.find('span')
	.html('Сonsectetuer adipiscing <br>elit. Aenean commodo <br>ligula eget dolor. <br>Aenean massa.');

	$('.triangle-bottom .tr1 .tr-block')
	.find('span.col-left')
	.text('Anna, 23 ');

	$('.triangle-bottom .tr3 .tr-block')
	.find('span.col-left')
	.text('Jane, 27');
})