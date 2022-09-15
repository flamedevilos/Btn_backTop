
jQuery("#back-btn").click(function(){
	jQuery("body,html").animate({
		scrollTop:0
	},600);
});

jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() > 150)
	{
		jQuery("#back-btn").addClass("comeback");
	}
	else
	{
		jQuery("#back-btn").removeClass("comeback");
	}
});