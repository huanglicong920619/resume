(function($) {
	$.extend({
		navFixed : function(height, id) {
			$(document).scroll(function() {
				var scrollTop = $('html,body').scrollTop() || $(document).scrollTop();
				var navbar = $(id);
				if (scrollTop >= height) {	
					navbar.css({
						position : 'fixed',
						top : 0
					});
				} else {
					navbar.css({
						position : 'absolute',
						top : height
					});
				};
			});
		}
	});
})(jQuery);