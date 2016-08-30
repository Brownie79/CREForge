jQuery(function() {
	var h = jQuery(window).height();
	jQuery('.card').height(h - 248);
	
	
	//jQuery('.selected button:first-of-type').attr("disabled", "disabled");
	
	
	jQuery('button:first-of-type').click(function() {			//FIXME
		//jQuery('button').removeAttr("disabled");//.parent().parent().removeClass('selected');
		jQuery(this)/*.attr("disabled", "disabled").next().removeAttr("disabled")*/.parent().parent().addClass('selected');
	});	
	jQuery('button:nth-of-type(2)').click(function() {
		//jQuery('.selected button')/*.removeAttr("disabled")*/.parent().parent().removeClass('selected');
		jQuery(this)/*.attr("disabled", "disabled")*/.parent().parent().removeClass('selected');
	});
});



var deadline = 'August 31 2016 23:59:59 GMT+1800';

function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {
		'total': t,
		'days': days,
		'hours': hours.toLocaleString('en-IN', { minimumIntegerDigits: 2 }),
		'minutes': minutes.toLocaleString('en-IN', { minimumIntegerDigits: 2 }),
		'seconds': seconds.toLocaleString('en-IN', { minimumIntegerDigits: 2 })
	};
}

function initializeClock(id, endtime){
	var clock = document.getElementById(id);
	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		clock.innerHTML = 	t.days + ':' +
							t.hours + ':' +
							t.minutes + ':' +
							t.seconds;
		if (t.total<=0){
			clearInterval(timeinterval);
	    }
	}, 1000);
}