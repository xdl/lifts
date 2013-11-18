var canvas, stage, exportRoot;

//var Central = new Container();

var init = function() {

	setupStage();

	initialiseElevators();
	initialiseFloors();

	createjs.Ticker.addEventListener('tick',tickHandler);
};

var initialiseElevators = function() {

	var el = exportRoot.panel_a;
	var car = exportRoot.car_a;
	var ele = new Elevator({ele:el, carriage: car, name: "elevator_a"});
	elevators.push(ele);

	//el = exportRoot.panel_b;
	//car = exportRoot.car_b;
	//ele = new Elevator({ele:el, carriage: car, name: "elevator_b"});
	//elevators.push(ele);

	//el = exportRoot.panel_c;
	//car = exportRoot.car_c;
	//var ele = new Elevator({ele:el, carriage: car, name: "elevator_c"});
	//elevators.push(ele);
};

var floorMarkers = [57.2,105.2,153.2,201.2,249.2,297.2];

var getFloorPosition = function(x) {
	for (var i = floorMarkers.length-1;i >=0;i--) {
		if (Math.floor(floorMarkers[i]) == Math.floor(x)) {
			return floorMarkers.length - i;
		}
	}
	return false;
}

var floors = [];

var elevators = [];

var initialiseFloors = function() {

	var fl = exportRoot.floor1a;
	floors.push(new Floor({floor:fl}));

	fl = exportRoot.floor2a;
	floors.push(new Floor({floor:fl}));

	fl = exportRoot.floor3a;
	floors.push(new Floor({floor:fl}));

	fl = exportRoot.floor4a;
	floors.push(new Floor({floor:fl}));

	fl = exportRoot.floor5a;
	floors.push(new Floor({floor:fl}));

	fl = exportRoot.floor6a;
	floors.push(new Floor({floor:fl}));

};


var rememberFloor = function(i) {
	return function() {
	}
}
var closeFloorReminder = function(i) {
	//create closure:
	return function() {
		console.log('i:', i);
		if (central.floors[i].status == 'open') {
			central.floors[i].close();
		}
	};
}

var tickHandler = function() {

	var curr_label;
	//handling floor opening/closing animations:
	for (var i = central.floors.length - 1; i >= 0; i--) {
		curr_label = central.floors[i].graphic.doors.getCurrentLabel();
		
		//if the door has just been opened, or if a to_open flag is set:
		if (curr_label == 'opened' || (curr_label == 'open' && elevators[0].to_close == true)) {
			if (elevators[0].to_close == true) {
				central.floors[i].close();
				elevators[0].closeOff(); //toggles it
			}
			else {
				central.floors[i].graphic.doors.gotoAndStop('open');
				central.floors[i].status = 'open';
				//make sure it closes:
				setTimeout(closeFloorReminder(i),1000);
			}
		}

		//if the door has just been closed, or if a to_close flag is set:
		else if (curr_label == 'closed' || (curr_label == 'close' && elevators[0].to_open == true && i == elevators[0].current-1) ) {
			if (elevators[0].to_open == true) {
				central.floors[i].open();
				elevators[0].openOff(); //toggles it
			}
			else {
				central.floors[i].status = 'close';
				central.floors[i].graphic.doors.gotoAndStop('close');
			}
		}
	}

	var curr_status;
	var relevant_door;
	var el;
	//iterating through elevators:
	for (i = elevators.length - 1; i >= 0; i--) {
		el = elevators[i];
		
		curr_status = el.status;
		curr_position = el.carriage.y;
		relevant_door = central.floors[el.current-1];
		//console.log('el.current-1:', el.current-1);
		//console.log('relevant_door:', relevant_door);
		//console.log('el.current-1:', el.current-1);
		floor_check = getFloorPosition(curr_position);

		//moving them:
		el.carriage.y += el.speed;

		//if stationary:
		if (el.speed == 0 && relevant_door.status == 'close') {
			//for new instructions:
			if (el.current == el.target && el.instructions.length != 0) {
				el.target = el.instructions.shift();
			}
			else if(el.current == el.target && central.floor_requests != 0) {
				el.target = central.floor_requests[0];
			}
			
			//for resuming instructions:
			if (el.target > el.current) {
				el.goUp();
			}
			else if (el.target < el.current) {
				el.goDown();
			}
		}
		
		//for when it has just arrived at a floor:
		if (floor_check != false && el.speed != 0) {
			var message = {};
			message.floor = floor_check;
			message.el = el.name;
			central.trigger('CARRIAGE_AT_FLOOR', message);
		}
		
	}

	stage.update();
};

//sets up the global variables.
var setupStage = function() {
	canvas = document.getElementById('canvas');
	exportRoot = new lib.lifts_assets();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.enableMouseOver();
};

