var POOPSCOOP = {
	init: function() {
		this.$document = $(window.document);
		this.setVars();
		this.$body = $('body');
		this.$test = $('.test');
		this.bindEvents();
		


		$('.slider').slider();
		$('#main').fadeIn();		//console.log($('#slider').slider());
		this.loadPhotos();
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

	loadPhotos: function() {
		var context = this;
		var userFeed = new Instafeed({
		    get: 'user',
		    userId: 1388629745,
		    filter: function(image) {
		        return image.tags.indexOf('food') >= 0;
		    },
		    accessToken: '1388629745.467ede5.b060b8511f114e89b49f07397a9e72eb',
		    after: function() {
		    	console.log('success');
		    	context.$instafeed.find('img').addClass('food-img');
		    	$($('.food-img')[0]).show();
		    	//context.$instafeed.find('img')[0].show();
		    }
		});
		userFeed.run();

		
	},

	setVars: function() {
		this.$imPooping = $('#im-pooping');
		this.$signInInstagram = $('#sign-in-instagram');
		this.$panelScreens = $('.panel-screen');
		this.$currentPanel = $('#main');
		this.$instafeed = $('#instafeed');
	},

	bindEvents: function() {
		this.$test.on('click', this.doSomething.bind(this));
		this.$imPooping.on('click', this.advancePageFromButton.bind(this));
		this.$signInInstagram.on('click', this.advancePageFromButton.bind(this));


		this.$document.on('click', this.advancePage.bind(this));
		//$($('.panel-screen').on('click' this.advancePage.bind(this));
	},

	advancePageFromButton: function(e) {
		this.$panelScreens.hide();
		var nextId = $(e.currentTarget).data('screen');
		var context = this;
		setTimeout(function() {
			//console.log(nextId);
			context.$currentPanel = $(nextId);
			context.$currentPanel.fadeIn();
			context.checkPanel();
		});

	},

	advancePage: function(e) {
		//var $currentTarget = $(e.currentTarget);
		
		//console.log(this.$currentPanel.attr('id'));
		console.log(this.$currentPanel.attr('id'));
		if ((this.$currentPanel.attr('id') !== 'main') &&
			(this.$currentPanel.attr('id') !== 'account') &&
			(this.$currentPanel.attr('id') !== 'name')) {
			console.log('hi');
			var context = this;
			this.$panelScreens.hide();
			var nextId = this.$currentPanel.data('screen');
			setTimeout(function() {
				$(nextId).fadeIn();
				context.$currentPanel = $(nextId);
				context.checkPanel();
			});
		}
	},

	checkPanel: function() {
		if (this.$currentPanel.attr('id') === 'name') {
			console.log($('.food-img')[0]);
			
			//this.$instafeed.find('img').addClass('food-img');
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