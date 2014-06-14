var SITE = {
	init: function() {
		this.$document = $(window.document);
		this.$body = $('body');
		this.$test = $('.test');
		this.bindEvents();
	},

	bindEvents: function() {
		this.$test.on('click', this.doSomething.bind(this));
	},

	doSomething: function(e) {
		var $blah = $(e.currentTarget);
		var context = this;

		this.$blah.each(function(index, element) {
			if (element === $('whatever')[0]) {
				$(this).addClass('hello');
			}
		});
		setTimeout(function() {
			context.$blah.removeClass('goodbye');
		});

		e.preventDefault();	
	}
}

SITE.init();