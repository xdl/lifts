(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.lifts_assets = function() {
	this.initialize();

	// Layer 1
	this.floor6c = new lib.floor();
	this.floor6c.setTransform(343.2,56.8,0.586,0.586);

	this.floor5c = new lib.floor();
	this.floor5c.setTransform(343.2,104.8,0.586,0.586);

	this.panel_c = new lib.ctrl_panel();
	this.panel_c.setTransform(345.1,353.5);

	this.floor4c = new lib.floor();
	this.floor4c.setTransform(343.2,152.8,0.586,0.586);

	this.floor3c = new lib.floor();
	this.floor3c.setTransform(343.2,200.8,0.586,0.586);

	this.floor2c = new lib.floor();
	this.floor2c.setTransform(343.2,248.7,0.586,0.586);

	this.floor1c = new lib.floor();
	this.floor1c.setTransform(343.2,296.7,0.586,0.586);

	this.floor6b = new lib.floor();
	this.floor6b.setTransform(270.2,56.8,0.586,0.586);

	this.floor5b = new lib.floor();
	this.floor5b.setTransform(270.2,104.8,0.586,0.586);

	this.panel_b = new lib.ctrl_panel();
	this.panel_b.setTransform(272.1,353.5);

	this.floor4b = new lib.floor();
	this.floor4b.setTransform(270.2,152.8,0.586,0.586);

	this.floor3b = new lib.floor();
	this.floor3b.setTransform(270.2,200.8,0.586,0.586);

	this.floor2b = new lib.floor();
	this.floor2b.setTransform(270.2,248.7,0.586,0.586);

	this.floor1b = new lib.floor();
	this.floor1b.setTransform(270.2,296.7,0.586,0.586);

	this.floor6a = new lib.floor();
	this.floor6a.setTransform(198.2,56.8,0.586,0.586);

	this.floor5a = new lib.floor();
	this.floor5a.setTransform(198.2,104.8,0.586,0.586);

	this.panel_a = new lib.ctrl_panel();
	this.panel_a.setTransform(200.1,353.5);

	this.floor4a = new lib.floor();
	this.floor4a.setTransform(198.2,152.8,0.586,0.586);

	this.floor3a = new lib.floor();
	this.floor3a.setTransform(198.2,200.8,0.586,0.586);

	this.floor2a = new lib.floor();
	this.floor2a.setTransform(198.2,248.7,0.586,0.586);

	this.floor1a = new lib.floor();
	this.floor1a.setTransform(198.2,296.7,0.586,0.586);

	// Layer 2
	this.car_c = new lib.chassis();
	this.car_c.setTransform(344.6,297.2,0.337,0.358);

	this.car_b = new lib.chassis();
	this.car_b.setTransform(271.6,297.2,0.337,0.358);

	this.car_a = new lib.chassis();
	this.car_a.setTransform(199.6,297.2,0.337,0.358);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQ5WgMgh4AAAMAAAgs/MAh4AAAgARA2fMAAAAs8");
	this.shape.setTransform(273.8,170);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(183,209,209,0.498)").s().p("Aw7WgMAAAgs+MAh4AAAMAAAAs+g");
	this.shape_1.setTransform(273.5,170);

	this.addChild(this.shape_1,this.shape,this.car_a,this.car_b,this.car_c,this.floor1a,this.floor2a,this.floor3a,this.floor4a,this.panel_a,this.floor5a,this.floor6a,this.floor1b,this.floor2b,this.floor3b,this.floor4b,this.panel_b,this.floor5b,this.floor6b,this.floor1c,this.floor2c,this.floor3c,this.floor4c,this.panel_c,this.floor5c,this.floor6c);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(165,26,217.8,368.8);


// symbols:
(lib.request = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:1});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AArgqIAABVIhVAAIAAhVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgqArIAAhVIBVAAIAABVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AArArIhVAAIAAhVIBVAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgqArIAAhVIBVAAIAABVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-4.3,8.7,8.7);


(lib.open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("ABgAAIhShRIAACigAgNBSIAAiiIhSBQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AhfAAIBShQIAAChgAAOhQIBSBQIhSBRg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AhfAAIBShQIAAChgAAOhQIBSBQIhSBRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,204,0,0)").s().p("AhgBSIAAijIDBAAIAACjg");
	this.shape_3.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-8.1,19.4,16.4);


(lib.door = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADXnRIAAOjImtAAIAAujg");
	this.shape.setTransform(-21.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjWHSIAAujIGtAAIAAOjg");
	this.shape_1.setTransform(-21.5,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-46.6,43,93.4);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("ABbBRIAAihIhRBQgAgJAAIhRhQIAAChg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AAKAAIBRhQIAAChgAhahQIBRBQIhRBRg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAKAAIBRhQIAAChgAhahQIBRBQIhRBRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,153,0,0)").s().p("AhdBPIAAidIC7AAIAACdg");
	this.shape_3.setTransform(-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-8.1,19.3,16.4);


(lib.chassis = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGvHSItdAAIAAujINdAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmuHSIAAujINdAAIAAOjg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-46.6,86.2,93.4);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AA0gzQAVAWAAAdQAAAegVAWQgWAVgeAAQgdAAgWgVQgVgWAAgeQAAgdAVgWQAWgVAdAAQAeAAAWAVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CCCC").s().p("AgzA0QgVgWAAgeQAAgdAVgWQAWgVAdAAQAeAAAWAVQAVAWAAAdQAAAegVAWQgWAVgeAAQgdAAgWgVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AgzA0QgVgWAAgeQAAgdAVgWQAWgVAdAAQAeAAAWAVQAVAWAAAdQAAAegVAWQgWAVgeAAQgdAAgWgVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.7,14.7);


(lib.lift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,closing:1,closed:13,opening:14,opened:27});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmuHSIAAujINdAAIAAOjg");

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGmnRIAAOjItLAAIAAujg");
	this.shape.setTransform(0.4,0);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(28));

	// Layer 5
	this.instance = new lib.door("synched",0);
	this.instance.setTransform(43.2,0.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({x:86.2},12).wait(1).to({startPosition:0},0).to({x:43.2},13).wait(1));

	// Layer 4
	this.instance_1 = new lib.door("synched",0);
	this.instance_1.setTransform(0,0.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({x:-42.8},12).wait(1).to({startPosition:0},0).to({x:0},13).wait(1));

	// Layer 1
	this.instance_2 = new lib.chassis("synched",0);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},1).to({startPosition:0},12).to({startPosition:0},1).to({startPosition:0},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-46.6,86.2,93.4);


(lib.doors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{close:0,"opening":1,"opened":10,open:11,"closing":12,"closed":21});

	// Layer 2
	this.instance = new lib.door("synched",0);
	this.instance.setTransform(12.5,-1.9,0.584,0.584,0,0,0,-21.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({x:38.1},9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({x:12.5},9).wait(1));

	// Layer 1
	this.instance_1 = new lib.door("synched",0);
	this.instance_1.setTransform(-12.4,-1.9,0.584,0.584,0,0,0,-21.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({x:-37.3},9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({x:-12.3},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-29.2,50.2,54.5);


(lib._6 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("6", "bold 15px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-0.2,-6.3,0.704,0.704);

	this.bkg = new lib.button();

	this.addChild(this.bkg,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.7,15.7);


(lib._5 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("5", "bold 15px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-0.1,-7.2,0.704,0.704);

	this.bkg = new lib.button();

	this.addChild(this.bkg,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.7,14.7);


(lib._4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("4", "bold 15px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-0.4,-6.9,0.704,0.704);

	this.bkg = new lib.button();

	this.addChild(this.bkg,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.7,15);


(lib._3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("3", "bold 15px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-0.1,-6.9,0.704,0.704);

	this.bkg = new lib.button();
	this.bkg.setTransform(0,0.2);

	this.addChild(this.bkg,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.1,14.7,14.8);


(lib._2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("2", "bold 15px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-0.2,-5.9,0.704,0.704);

	this.bkg = new lib.button();
	this.bkg.setTransform(0,0.4);

	this.addChild(this.bkg,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-6.9,14.7,15.7);


(lib.one = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1", "bold 15px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-0.3,-6.9,0.704,0.704);

	this.bkg = new lib.button();

	this.addChild(this.bkg,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.7,15.1);


(lib.floor = function() {
	this.initialize();

	// Layer 1
	this.request = new lib.request();
	this.request.setTransform(39.4,4.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADZimIn6gBIAAI/IAAADADdGYIAAo+AJqGYImLAAAJqmaIzTAAAppGYIFIAA");
	this.shape.setTransform(5.7,-11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(183,209,209,0.498)").s().p("ADeGaIgBAAIAAo/IgEAAIn6gBIAAJAIlIAAIAAsyITTAAIAAMygAElDJIBXAAIAAhXIhXAAg");
	this.shape_1.setTransform(5.7,-11.4);

	// Layer 3
	this.doors = new lib.doors();
	this.doors.setTransform(2.3,2.7,1,1.043);
	this.doors.alpha = 0.488;

	this.addChild(this.doors,this.shape_1,this.shape,this.request);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-52.4,123.7,82.3);


(lib.ctrl_panel = function() {
	this.initialize();

	// Layer 2
	this.six = new lib._6();
	this.six.setTransform(8.7,16.3);

	this.five = new lib._5();
	this.five.setTransform(-8.4,16.3);

	this.four = new lib._4();
	this.four.setTransform(8.7,-1.6);

	this.three = new lib._3();
	this.three.setTransform(-8.3,-1.5,1,1,0,0,0,0,0.2);

	this.two = new lib._2();
	this.two.setTransform(8.7,-18.8,1,1,0,0,0,0,0.2);

	this.one = new lib.one();
	this.one.setTransform(-8.4,-18.8);

	this.open = new lib.open();
	this.open.setTransform(8,32.9,0.657,0.657);

	this.close = new lib.close();
	this.close.setTransform(-7.7,32.6,0.647,0.647);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("ACtlaIAAK1IlZAAIAAq1g");
	this.shape.setTransform(0,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AirFbIAAq1IFXAAIAAK1g");
	this.shape_1.setTransform(0,6.6);

	this.addChild(this.shape_1,this.shape,this.close,this.open,this.one,this.two,this.three,this.four,this.five,this.six);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-28.1,34.6,69.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;