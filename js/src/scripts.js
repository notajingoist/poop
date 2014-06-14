var POOPSCOOP = {
	init: function() {
		this.$document = $(window.document);
		this.setVars();
		this.$body = $('body');
		this.$test = $('.test');
		this.bindEvents();


		$('.slider').slider();
		$('#main').fadeIn();
		//console.log($('#slider').slider());

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

	setVars: function() {
		this.$imPooping = $('#im-pooping');
		this.$signInInstagram = $('#sign-in-instagram');
		this.$panelScreens = $('.panel-screen');
	},

	bindEvents: function() {
		this.$test.on('click', this.doSomething.bind(this));
		this.$imPooping.on('click', this.advancePageFromButton.bind(this));
		this.$signInInstagram.on('click', this.advancePageFromButton.bind(this));
		this.$panelScreens.on('click', this.advancePage.bind(this));
		//$($('.panel-screen').on('click' this.advancePage.bind(this));
	},

	advancePageFromButton: function(e) {
		this.$panelScreens.hide();
		var nextId = $(e.currentTarget).data('screen');
		setTimeout(function() {
			console.log(nextId);
			$(nextId).fadeIn();
		});
	},

	advancePage: function(e) {
		var $currentTarget = $(e.currentTarget);
		if (!$currentTarget.attr('id') === 'main' &&
			!$currentTarget.attr('id') === 'account') {
			this.$panelScreens.hide();
			var nextId = $currentTarget.data('screen');
			setTimeout(function() {
				$(nextId).fadeIn();
			});
		}
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