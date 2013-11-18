var canvas, stage, exportRoot;

//var Central = new Container();

var init = function() {

	setupStage();

	initialiseElevators();
	initialiseFloors();

	createjs.Ticker.addEventListener('tick',tickHandler);
};

var initialiseElevators = function() {

	console.log('central.elevators:', central.elevators);

	central.elevators.a = new Elevator(
		{ele:exportRoot.panel_a,carriage:exportRoot.car_a,shaft: 'a'}
	);

	central.elevators.b = new Elevator(
		{ele:exportRoot.panel_b,carriage:exportRoot.car_b,shaft: 'b'}
	);

	central.elevators.c = new Elevator(
		{ele:exportRoot.panel_c,carriage:exportRoot.car_c,shaft: 'c'}
	);

	central.floor_requests.a = [];
	central.floor_requests.b = [];
	central.floor_requests.c = [];

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

var initialiseFloors = function() {
	
	var fls = central.floors;

	fls.a = [];
	fls.b = [];
	fls.c = [];

	var floor_a = [exportRoot.floor1a, exportRoot.floor2a, exportRoot.floor3a, exportRoot.floor4a, exportRoot.floor5a, exportRoot.floor6a];
	var floor_b = [exportRoot.floor1b, exportRoot.floor2b, exportRoot.floor3b, exportRoot.floor4b, exportRoot.floor5b, exportRoot.floor6b];
	var floor_c = [exportRoot.floor1c, exportRoot.floor2c, exportRoot.floor3c, exportRoot.floor4c, exportRoot.floor5c, exportRoot.floor6c];

	for (var i = 0; i < floor_a.length; i++) {
		fls.a.push(new Floor({floor:floor_a[i], shaft: 'a', number: i+1}));
		fls.b.push(new Floor({floor:floor_b[i], shaft: 'b', number: i+1}));
		fls.c.push(new Floor({floor:floor_c[i], shaft: 'c', number: i+1}));
	}


	console.log('central.floors:', central.floors);

};


var closeFloorReminder = function(i,shaft) {
	//create closure:
	return function() {
		if (central.floors[shaft][i].status == 'open') {
			central.floors[shaft][i].close();
		}
	};
}

var tickHandler = function() {

	var curr_label;
	//handling floor opening/closing animations:
	for (var shaft in central.floors) {
		if (central.floors.hasOwnProperty(shaft)) {
			var fl = central.floors[shaft];
			for (var i = fl.length - 1; i >= 0; i--) {
				var el = central.elevators[shaft];

				curr_label = fl[i].graphic.doors.getCurrentLabel();

				//if the door has just been opened, or if a to_open flag is set:
				if (curr_label == 'opened' || (curr_label == 'open' && el.to_close == true)) {
					if (el.to_close == true) {
						fl[i].close();
						el.closeOff(); //toggles it
					}
					else {
						fl[i].graphic.doors.gotoAndStop('open');
						fl[i].status = 'open';
						//make sure it closes:
						setTimeout(closeFloorReminder(i,shaft),1000);
					}
				}

				//if the door has just been closed, or if a to_close flag is set:
				else if (curr_label == 'closed' || (curr_label == 'close' && el.to_open == true && i == el.current-1) ) {
					if (el.to_open == true) {
						fl[i].open();
						el.openOff(); //toggles it
					}
					else {
						fl[i].status = 'close';
						fl[i].graphic.doors.gotoAndStop('close');
					}
				}
			}
		}
	}
	

	var curr_status;
	var relevant_door;
	var el;
	//iterating through elevators:
	for (var ele in central.elevators) {
		if (central.elevators.hasOwnProperty(ele)) {

			el = central.elevators[ele];
			var shaft = el.shaft;

			curr_status = el.status;
			curr_position = el.carriage.y;
			relevant_door = central.floors[shaft][el.current-1];
			floor_check = getFloorPosition(curr_position);

			//moving them:
			el.carriage.y += el.speed;

			//if stationary:
			if (el.speed == 0 && relevant_door.status == 'close') {
				//for new instructions:
				if (el.current == el.target && el.instructions.length != 0) {
					el.target = el.instructions.shift();
				}
				else if(el.current == el.target && central.floor_requests[shaft].length != 0) {
					if (central.floor_requests[shaft][0] != el.current) {
						el.target = central.floor_requests[shaft][0];
					} else {
						//okay, this is definitely hacky.
						central.floor_requests[shaft].shift();
						central.floors[shaft][el.target-1].toggleRequest();
						central.floors[shaft][el.target-1].open();
					}
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

				//constructing hardware message:
				var message = {};
				message.floor = floor_check;
				message.el = el.shaft;
				central.trigger('CARRIAGE_AT_FLOOR', message);
			}

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

