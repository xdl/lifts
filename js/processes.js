//Backbone.Events.extend({
//});

var Elevator = Backbone.View.extend({
	//target: int,
	//speed: int,
	//to_open: bool,
	//to_close:bool,
	//instructions: [],
	//buttons: [],
	
	initialize: function(options) {
		this.graphic = options.ele;
		this.carriage = options.carriage;

		this.instructions = [];
		this.buttons = [];

		//binding registration purposes:
		this.shaft = options.shaft;

		this.buttons.push(this.graphic.one);
		this.buttons.push(this.graphic.two);
		this.buttons.push(this.graphic.three);
		this.buttons.push(this.graphic.four);
		this.buttons.push(this.graphic.five);
		this.buttons.push(this.graphic.six);

		for (var i = this.buttons.length-1; i >= 0; i--) {
			this.buttons[i].addEventListener('click', $.proxy(this.emit, this));
			this.buttons[i].cursor = 'pointer';
			this.buttons[i].bkg.stop();
		}


		this.graphic.close.addEventListener('click', $.proxy(this.close, this));
		this.graphic.open.addEventListener('click', $.proxy(this.open, this));


		this.graphic.close.stop();
		this.graphic.open.stop();

		this.graphic.close.cursor = 'pointer';
		this.graphic.open.cursor = 'pointer';


		//initialising properties:
		this.target = 1;
		this.current = 1;
		this.speed = 0;

	},
	light_up: function(floor) {
		var btn = this.buttons[floor - 1];
		btn.bkg.gotoAndStop('on');
	},
	light_off: function(floor) {
		var btn = this.buttons[floor - 1];
		btn.bkg.gotoAndStop('off');
	},
	emit: function(e) {
		var message = {};
		var floor = e.currentTarget.children[1].text;
		message.floor = Number(floor);
		message.shaft = this.shaft;
		central.trigger('FLOOR_BUTTON_PRESSED', message);
	},
	goDown: function() {
		this.speed = 1;
	},
	stop: function() {
		this.speed = 0;
	},
	goUp: function() {
		this.speed = -1;
	},
	//only works if elevator is stationary
	open: function() {
		if (this.speed == 0) {
			var floor_status = central.floors[this.shaft][this.current-1].status;
			if (floor_status == 'close' || floor_status == 'closing') {
				this.to_open = true;
				this.graphic.open.gotoAndStop('on');
			}
		}
	},
	openOff:function() {
		this.to_open = false;
		this.graphic.open.gotoAndStop('off');
	},
	close: function() {
		if (this.speed == 0) {
			var floor_status = central.floors[this.shaft][this.current-1].status;
			if (floor_status == 'open' || floor_status == 'opening') {
				this.to_close = true;
				this.graphic.close.gotoAndStop('on');
			}
		}
	},
	closeOff:function() {
		this.to_close = false;
		this.graphic.close.gotoAndStop('off');
	}
});

var Central = Backbone.View.extend({
	elevators: {},
	floors: {},
	floor_requests: {},
	//floor_requests: [],
	registerFloor: function(floor) {
		this.floors.push(floor);
	},
	initialize: function() {
		this.on("REQUEST_FLOOR_CALLED", this.processFloorRequest, this);
		this.on("FLOOR_BUTTON_PRESSED", this.processFloorButton, this);
		this.on("CARRIAGE_AT_FLOOR", this.processCarriageArrival, this);
	},
	events: {
	},
	processCarriageArrival:function(m) {
		var ele = this.elevators[m.el];
		ele.current = m.floor;
		var enroute_stop = _.indexOf(ele.instructions, ele.current);
		var floor_requested = _.indexOf(central.floor_requests[m.el],ele.current);

		if (ele.current == ele.target || enroute_stop != -1 || floor_requested != -1) {
			if (ele.current == ele.target) {
				ele.light_off(ele.current);
			}
			if (enroute_stop != -1) {
				ele.instructions = _.without(ele.instructions, ele.instructions[enroute_stop]);
				ele.light_off(ele.current);
			}
			if (floor_requested != -1) {
				this.floors[m.el][m.floor-1].toggleRequest();
				//get the other shafts to see if there are floor requests needed to be turned off.
				for (var request in this.floors) {
					if (this.floors.hasOwnProperty(request) && request != m.el) {
						var fr = this.floor_requests[request];
						console.log('request:', request);
						var r = _.indexOf(fr, ele.current);
						console.log('r:', r);
						if (r != -1) {
							this.floors[request][m.floor-1].toggleRequest();
						}
					}
				}
			}
			ele.stop();
			this.floors[m.el][ele.current-1].open();
		}
	},
	processFloorRequest:function(e) {
		console.log('uhh... this doesn\'t actually do anything!');
		console.log('message:', e);
	},
	processFloorButton:function(e) {

		var elevator = this.elevators[e.shaft];
		var instructions = this.elevators[e.shaft].instructions;
		var floor = e.floor;
		var shaft = e.shaft
		if (_.indexOf(instructions, floor) == -1) {

			//open it if the elevator is 'idle' and not moving anywhere.
			if (elevator.current == floor && elevator.speed == 0) {
				this.floors[shaft][floor-1].open();
			} else {

				var state = elevator.buttons[e.floor-1].bkg.getCurrentLabel();

				elevator.light_up(e.floor);
				instructions.push(e.floor);
			}
		} else {
			//cancel it!
			elevator.light_off(e.floor);
			this.elevators[e.shaft].instructions = _.without(instructions, e.floor);
		}
	}
});

var Floor = Backbone.View.extend({
	requesting: false,
	//this.number: int,
	//shaft: char,
	initialize: function(options) {

		this.graphic = options.floor;
		//central.registerFloor(this);

		this.graphic.doors.stop();
		this.status = 'close';

		this.graphic.request.cursor = 'pointer';
		this.graphic.request.stop();
		this.graphic.request.addEventListener('click', $.proxy(this.toggleRequest, this));

		//initing some values:
		this.shaft = options.shaft;
		this.number = options.number;
	},
	toggleRequest: function() {
		var shaft = this.shaft;
		if (this.requesting) {
			this.light_off();
			central.floor_requests[shaft] = _.without(central.floor_requests[shaft], this.number);
		} else {
			this.light_up();
			central.floor_requests[shaft].push(this.number);
		}
		this.requesting = !this.requesting;
	},
	light_up:function() {
		this.graphic.request.gotoAndStop('on');
	},
	light_off:function() {
		this.graphic.request.gotoAndStop('off');
	},
	open: function() {
		this.status = 'opening';
		this.graphic.doors.gotoAndPlay('opening');
	},
	close: function() {
		this.status = 'closing';
		this.graphic.doors.gotoAndPlay('closing');
	}
});

var central = new Central();
