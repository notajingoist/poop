var POOPSCOOP = {
	init: function() {
		this.$document = $(window.document);
		this.setVars();
		this.$body = $('body');
		this.$test = $('.test');
		this.bindEvents();

		this.userData = {
			username: '',
			food: '',
			color: '',
			consistency: '',
			odor: '',
			satisfaction: '',
			effort: ''
		};

		this.url = 'localhost:5000'
		this.currentFoodNum = 0;
		


		$('.slider').slider();
		$('#main').fadeIn();		//console.log($('#slider').slider());
		this.loadPhotos();


		$('.slider').labeledslider({ min: 0, max: 4, tickInterval: 1});

		this.consistencyLabels = ['liquid', 'smooth', 'fluffy', 'firm', 'solid'];
		
		$('#consistency-slider').labeledslider('option', 'tickLabels', this.consistencyLabels);

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
		    	//console.log(image.created_time);
		        return (image.tags.indexOf('food') >= 0);
		    },
		    accessToken: '1388629745.467ede5.b060b8511f114e89b49f07397a9e72eb',
		    template: '<div class="hide"><img class="food-img" src="{{image}}"><div class="food-input"><input type="text" class="food-field" id="{{id}}"><div class="button button-next" data-food-id="{{id}}" data-screen="#colors" data-food-url="{{image}}">Next</div></div></div>',
		    after: function() {
		    	

		    	//console.log('success');
		    	context.$foodImages = context.$instafeed.find('img');
		    	context.$foodImages.addClass('food-img');
		    	$(context.$foodImages[0]).parent().show();


		    	context.numFood = context.$foodImages.length;

		    	$('.button-next').on('click', context.advancePageFromButton.bind(context));//context.advanceImage.bind(context));

		    	// for (var i = 0; i < context.$foodImages.length; i++) {
		    	// 	context.userData.food[context.$foodImages[i].attr('src')] = 
		    	// }


		    	//context.$instafeed.find('img')[0].show();
		    }
		});
		userFeed.run();

		
	},

	setVars: function() {
		this.$odorDropdown = $('.odor-dropdown');
		this.$imgCircles = $('.img-circle');
		this.$colors = $('.color');
		this.$imPooping = $('#im-pooping');
		this.$signInInstagram = $('#sign-in-instagram');
		this.$panelScreens = $('.panel-screen');
		this.$currentPanel = $('#main');
		this.$instafeed = $('#instafeed');
		this.$nextBtns = $('.button-next');
		this.colors = {
			yellow: '#f9d70d',
			olive: '#627530',
			taupe: '#b6b0ad',
			chocolate: '#b64926',
			darkChocolate: '#4f2502',
			black: '#3d3d3d',
			burgundy: '#a12727',
			beige: '#b68c7c'
		};

		this.odors = {
			rotten: '',
			sulfurous: '',
			musky: '',
			grassy: '',
			strangelyPleasing: '',
			none: ''
		};

		this.satisfaction = {
			dissatisfied: '/images/satisfaction-1.png',
			somewhatDissatisfied: '/images/satisfaction-2.png',
			indifferent: '/images/satisfaction-3.png',
			somewhatSatisfied: '/images/satisfaction-4.png',
			verySatisfied: '/images/satisfaction-5.png'
		};

		this.consistency = {
			liquid: '',
			smooth: '',
			fluffy: '',
			firm: '',
			solid: ''
		};

		this.effort = {
			impossible: '',
			challenging: '',
			average: '', 
			easy: '',
			effortless: ''
		}




	},



	bindEvents: function() {
		this.$test.on('click', this.doSomething.bind(this));
		//this.$document.on('click', this.advancePage.bind(this));
		this.$imPooping.on('click', this.advancePageFromButton.bind(this));
		this.$signInInstagram.on('click', this.advancePageFromButton.bind(this));
		this.$colors.on('click', this.advancePageFromButton.bind(this));

		this.$imgCircles.on('click', this.advancePageFromButton.bind(this));
		this.$odorDropdown.change(function(e) {

		});
		//console.log(this.$nextBtns[0].);

		
		//$($('.panel-screen').on('click' this.advancePage.bind(this));
	},

	advanceImage: function(e) {
		if (this.currentFoodNum < 1) { //(this.numFood - 1)) {
			var foodId = $(e.currentTarget).data('foodId');
			var foodValue = $('#'+foodId).val();
			var foodImageURL = $(e.currentTarget).data('foodUrl'); 
			var context = this;
			

			this.userData.food[foodImageURL] = foodValue;
			this.currentFoodNum++;

			//console.log($('.instafeed').eq(this.currentFoodNum));

			$('#'+foodId).parent().fadeOut(); //next btn
			$('#'+foodId).parent().prev().fadeOut(); //image


			//console.log("LOOOKALSSKLJDKAS");
			var context = this;
			this.$panelScreens.hide();
			var nextId = this.$currentPanel.data('screen');
			setTimeout(function() {
				$(nextId).fadeIn();
				context.$currentPanel = $(nextId);
				//context.checkPanel();
			});

			//alert('hey');

			setTimeout(function() {



				// console.log(
				// 	context.$foodImages[this.currentFoodNum + 1].parent().next());

				//$('#'+foodId).parent().next().fadeIn();
				//console.log($('#'+foodId).parent().next());
			});




			this.currentoodNum++;

			//console.log($('#'+foodId).parent());
			//console.log($(e.currentTarget).parent());
		}

		if (this.currentFoodNum === (this.numFood - 1)) {


			//on last food item
			console.log("LOOOKALSSKLJDKAS");
			var context = this;
			this.$panelScreens.hide();
			var nextId = this.$currentPanel.data('screen');
			setTimeout(function() {
				$(nextId).fadeIn();
				context.$currentPanel = $(nextId);
				//context.checkPanel();
			});
		}
		

		// var postReq = $.ajax({
		//                 url: 'http://'+context.url+'/'+poop,
		//                 type: 'POST',
		//                 data: {[url: foodImageURL,
		//                 		url: ]},
		//                 success: function(data) {
		//                     // console.log(data[0].desc);
		//                     console.log("successfully posted new issue with given description");
		//                     console.log(data.hasLoc);
		//                     return data;
		//                 }
		// });
		// return postReq;
	},

	advancePageFromButton: function(e) {
		this.$panelScreens.hide();
		var nextId = $(e.currentTarget).data('screen');

		if (this.$currentPanel.attr('id') === 'account') {
			//if ($('#username').val() > 0) {
				this.userData.username = $('#username').val();
			// } else {
			// 	alert('enter username');
			// }
		}

		else if (this.$currentPanel.attr('id') === 'colors') {
			this.userData.color = $('e.currentTarget').attr('id');

		}

		else if (this.$currentPanel.attr('id') === 'name') {
			var foodId = $(e.currentTarget).data('foodId');
			var foodValue = $('#'+foodId).val();
			var foodImageURL = $(e.currentTarget).data('foodUrl'); 
			var context = this;
			

			this.userData.food[foodImageURL] = foodValue;
			this.currentFoodNum++;

			//console.log($('.instafeed').eq(this.currentFoodNum));

			$('#'+foodId).parent().fadeOut(); //next btn
			$('#'+foodId).parent().prev().fadeOut(); //image
		}

		else if (this.$currentPanel.attr('id') === 'odor') {
			this.userData.odor = $('.odor-dropdown').val();
			console.log(this.userData.odor);
		}

		else if (this.$currentPanel.attr('id') === 'consistency') {
			//this.userData.consistency = $('#consistency-slider').slider('option', 'value');

			this.userData.consistency = 'fluffy';// $('#consistency-slider').val();
			console.log(this.userData.consistency);
		}

		else if (this.$currentPanel.attr('id') === 'satisfaction') {
			this.userData.satisfaction = 'indifferent';//$('#satisfaction-slider').val();
			console.log(this.userData.satisfaction);
		}

		else if (this.$currentPanel.attr('id') === 'effort') {
			this.userData.effort = 'effortless';////$('#effort-slider').val();
			console.log(this.userData.effort);
		}

		var context = this;
		setTimeout(function() {
			//console.log(nextId);
			
			context.$currentPanel = $(nextId);
			context.$currentPanel.fadeIn();
			console.log(context.$currentPanel);
			//context.checkPanel();
		});



	},

	advancePage: function(e) {
		//var $currentTarget = $(e.currentTarget);
		
		//console.log(this.$currentPanel.attr('id'));
		//console.log(this.$currentPanel.attr('id'));
		if ((this.$currentPanel.attr('id') !== 'main') &&
			(this.$currentPanel.attr('id') !== 'account') &&
			(this.$currentPanel.attr('id') !== 'name')) {
			//console.log('hi');
			var context = this;
			this.$panelScreens.hide();
			var nextId = this.$currentPanel.data('screen');
			setTimeout(function() {
				$(nextId).fadeIn();
				context.$currentPanel = $(nextId);
				//context.checkPanel();
			});
		}
	},

	checkPanel: function() {
		if (this.$currentPanel.attr('id') === 'name') {
			//console.log($('.food-img')[0]);
			
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