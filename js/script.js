jQuery(function() {
	var h = jQuery(window).height();
	jQuery('.card').height(h - 248);
	
	
	jQuery('.selected button').attr("disabled", "disabled");
	
	
	jQuery('button').click(function() {
		jQuery('.selected button').removeAttr("disabled").parent().parent().removeClass('selected');
		jQuery(this).attr("disabled", "disabled").parent().parent().addClass('selected');
	});
});
