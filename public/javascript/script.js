$(function(){

	$('.image').on('mouseover', function(){
		$(this).find('.preview').addClass('show');
	});

	$('.image').on('mouseleave', function(){
		$(this).find('.preview').removeClass('show');
	});
});