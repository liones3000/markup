$('#form_1').submit(function(event){
	event.preventDefault();
})

$('#join').on ('mouseover', function(){
	$(this).find('.arrow').css('color', '#000000');
})
$('#join').on ('mouseout', function(){
	$(this).find('.arrow').css('color', 'transparent');
})