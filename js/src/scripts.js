var POOPSCOOP = {
	init: function() {
		this.$document = $(window.document);
		this.$body = $('body');
		this.$test = $('.test');
		this.bindEvents();


		$('.slider').slider();
		console.log($('#slider').slider());

		// $('.minicolors').minicolors({
		// 	show: function() {
		// 		console.log('Shooow');
		// 	}
		// });
		// 
		// var $box = $('#box');
	 //    var box  = $box.tinycolorpicker();

	 //    $box.bind("change", function()
	 //    {
	 //        console.log("do something on every change of color");
	 //    });

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

POOPSCOOP.init();