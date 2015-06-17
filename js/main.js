$(document).ready(function(){

	$('.read_more a').click(function() {
		$(this).parent().parent().parent().addClass('open');
		$('.square').css('transition', 'width 0.5s','-moz-transition', 'width 0.5s','-webkit-transition', 'width 0.5s');
		$(this).parent().parent().parent().next().addClass('next');
		$('.hold').show();
	});
	
	$('.square-close').click(function() {
		$('.square').removeClass('open');
		$('.square').css('transition', 'width 0s','-moz-transition', 'width 0s','-webkit-transition', 'width 0s');
		$(this).parent().parent().parent().next().removeClass('next');
		$('.square .more_info').css('transition', 'all 0s','-moz-transition', 'all 0s','-webkit-transition', 'all 0s')
		$('.hold').hide();
	});

	$('.hold').click(function() {
		$('.hold').hide();
		$('.square').removeClass('open');
		$('.square').css('transition', 'width 0s','-moz-transition', 'width 0s','-webkit-transition', 'width 0s');
		$('.square-close').parent().parent().parent().next().removeClass('next');
		$('.square .more_info').css('transition', 'all 0s','-moz-transition', 'all 0s','-webkit-transition', 'all 0s')
	});

});