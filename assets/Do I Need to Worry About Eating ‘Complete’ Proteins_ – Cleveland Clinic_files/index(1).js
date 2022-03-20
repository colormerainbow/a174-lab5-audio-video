(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BaseImage = function() {
	this.initialize(img.BaseImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,368);


(lib.line_1 = function() {
	this.initialize(img.line_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,12);


(lib.line_2 = function() {
	this.initialize(img.line_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,12);


(lib.Notification = function() {
	this.initialize(img.Notification);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,304);


(lib.Notification_bg = function() {
	this.initialize(img.Notification_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,304);


(lib.Site = function() {
	this.initialize(img.Site);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,304);


(lib.Site_btn = function() {
	this.initialize(img.Site_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,41);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Notification();
	this.instance.setTransform(-114,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-152,228,304);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Notification_bg();
	this.instance.setTransform(-114,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-152,228,304);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Notification_bg();
	this.instance.setTransform(-114,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-152,228,304);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006AFF").ss(5,1,1).p("AjDgIICJCIID+j/");
	this.shape.setTransform(19.575,12.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-2.5,-2.5,44.2,30.5), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAXIAAgsIAsAAIAAAsg");
	this.shape.setTransform(86,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhCBtIAJggQAFADAHAAQAJAAAGgGQAFgGAGgQIhBilIAuAAIAnB1IAph1IArAAIhBCqQgMAhgNANQgNALgWAAQgRAAgJgFg");
	this.shape_1.setTransform(73.875,-8.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BLQgQgOAAgZQAAgbAUgMQANgHAagEQAYgEAHgDQANgEAAgLQAAgSgeAAQgdAAgXAQIgOgdQAegUAnAAQBDAAABA4IAAB0IgmAAIAAgSQgRAVgfAAQgbAAgPgNgAgEALQgOADgFADQgIAHAAAKQAAAWAaABQAQAAAJgJQAMgKAAgSIAAgTQgHAFgdAFg");
	this.shape_2.setTransform(56.65,-11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BbQgUgZAAgmQAAglAUgZQAVgaAiAAQAiAAASAaIAAhRIAoAAIAADjIgoAAIAAgVQgSAZgiAAQgiAAgVgZgAgegIQgLANAAAXQAAAXALAOQALAQATAAQAVAAAMgQQALgOAAgXQAAgXgLgOQgMgPgVAAQgTAAgLAQg");
	this.shape_3.setTransform(38.425,-14.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag9A/QgXgXAAgoQAAgmAXgZQAXgZAmABQAmgBAYAZQAXAZAAAmQAAAogXAXQgYAZgmAAQgmAAgXgZgAgegmQgLAPAAAXQAAAYALAPQAMAOASAAQAUAAALgOQALgPAAgYQAAgXgLgPQgLgPgUAAQgTAAgLAPg");
	this.shape_4.setTransform(19.9,-11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbBAIAAhXIgfAAIAAghIAfAAIAAg7IAoAAIAAA7IApAAIAAAhIgpAAIAABRQAAAXATAAQALAAAHgFIAJAfQgNAJgXAAQgyAAAAg0g");
	this.shape_5.setTransform(4.425,-14.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-37.3,121.6,42.4);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BAQgWgZAAgmQAAgmAWgYQAXgaAmAAQAlAAAWAXQAVAXAAAlIgBAOIh2AAQAAAUANALQAMALASAAQAcAAAQgVIAaAZQgbAhgtgBQgnAAgYgYgAAqgSQgCgSgLgLQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape.setTransform(82.925,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBXIAAhlQAAgjgdABQgQAAgLAKQgLALAAATIAABfIgoAAIAAipIAoAAIAAAVQASgYAhAAQAaAAAPARQAPAQAAAcIAABvg");
	this.shape_1.setTransform(64.875,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTByIAAioIAnAAIAACogAgThOIAAgjIAnAAIAAAjg");
	this.shape_2.setTransform(51.825,-14.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTByIAAjjIAnAAIAADjg");
	this.shape_3.setTransform(44.175,-14.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAiBXIAAhlQAAgjgdABQgQAAgLAKQgLALAAATIAABfIgoAAIAAipIAoAAIAAAVQASgYAhAAQAaAAAPARQAPAQAAAcIAABvg");
	this.shape_4.setTransform(31.225,-11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhRBUQgeghAAgzQAAgyAeghQAfgiAyAAQAzAAAfAiQAeAhAAAyQAAAzgeAhQgfAigzAAQgyAAgfgigAgxg3QgSAVAAAiQAAAjASAVQATAWAeAAQAfAAATgWQASgVAAgjQAAgigSgVQgTgWgfAAQgeAAgTAWg");
	this.shape_5.setTransform(10,-14.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-37.2,121.6,42.400000000000006);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BAQgWgYAAgnQAAgmAWgYQAXgaAmAAQAlgBAWAYQAVAXAAAkIgBAPIh2AAQAAAUANALQAMALASAAQAcAAAQgVIAaAZQgbAhgtgBQgnABgYgZgAAqgSQgCgSgLgLQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape.setTransform(148.875,-16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAWQAQgZAdAAQAPAAAHAFIgHAlQgGgFgNABQgTAAgKANQgMAPAAAaIAABPg");
	this.shape_1.setTransform(134.675,-16.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BLQgQgOAAgZQgBgbAWgMQANgIAZgDQAYgEAHgDQANgEAAgKQAAgTgeABQgdAAgXAPIgPgdQAfgVAnABQBEAAAAA3IAAB0IgmAAIAAgSQgSAXgegBQgaAAgQgNgAgEALQgOADgFAEQgIAFAAALQAAAXAaAAQAPAAAKgJQAMgKAAgSIAAgTQgHAFgdAFg");
	this.shape_2.setTransform(118.55,-16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BFQgQgQAAgcIAAhvIApAAIAABmQAAAiAdAAQAQAAALgLQALgLAAgTIAAhfIApAAIAACoIgpAAIAAgUQgSAZghgBQgaAAgPgRg");
	this.shape_3.setTransform(101.35,-15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAsByIAAhNQgSAagiAAQgiAAgVgZQgUgZAAglQAAgnAUgZQAVgZAiAAQAiAAASAaIAAgWIAoAAIAADfgAgeg+QgLAOAAAXQAAAXALAOQALAPATAAQAVAAAMgPQALgOAAgXQAAgXgLgOQgMgQgVAAQgTAAgLAQg");
	this.shape_4.setTransform(82.075,-13.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag1BqQgYgNgOgWIAigWQATAhAqAAQAVAAANgJQALgIABgPQgBgPgPgIQgJgEgagGQgmgIgSgLQgbgRAAggQAAgfAZgSQAWgRAlAAQA5AAAdApIgfAWQgUgbgkAAQgSAAgLAHQgLAHAAAOQgBARAhAJIAfAIQAUAFANAGQAlARAAAlQAAAggYAUQgYAUgpAAQgfAAgZgMg");
	this.shape_5.setTransform(62.9,-19.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51,-41.6,121.6,42.4);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCBtIAJggQAFADAHAAQAJAAAGgGQAFgGAGgPIhBimIAuAAIAnB0IAph0IArAAIhBCqQgMAhgNAMQgNAMgWAAQgRAAgJgFg");
	this.shape.setTransform(39.475,18.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAXQAQgaAdAAQAPAAAHAFIgHAlQgGgEgNAAQgTAAgKANQgMAPAAAaIAABPg");
	this.shape_1.setTransform(25.925,15.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUByIAAi8IhJAAIAAgnIC7AAIAAAnIhJAAIAAC8g");
	this.shape_2.setTransform(8.75,12.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-9.7,121.5,42.400000000000006);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAXIAAgsIAsAAIAAAsg");
	this.shape.setTransform(127.1,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BbQgUgZAAgmQAAglAUgZQAVgaAiAAQAiAAASAaIAAhRIAoAAIAADjIgoAAIAAgVQgSAZgiAAQgiAAgVgZgAgegIQgLANAAAXQAAAXALAOQALAQATAAQAVAAAMgQQALgOAAgXQAAgXgLgOQgMgPgVAAQgTAAgLAQg");
	this.shape_1.setTransform(113.125,-14.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag7A/QgWgXAAgoQAAglAWgZQAXgaAmAAQAlAAAWAYQAVAXAAAlIgBANIh2AAQAAAVANAMQAMAKASAAQAcAAAQgUIAaAYQgbAggtAAQgnAAgYgZgAAqgSQgCgTgLgKQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape_2.setTransform(94.925,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAXQAQgaAdAAQAPAAAHAGIgHAkQgGgEgNgBQgTAAgKAOQgMAPAAAaIAABPg");
	this.shape_3.setTransform(80.725,-12.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTByIAAioIAnAAIAACogAgThOIAAgjIAnAAIAAAjg");
	this.shape_4.setTransform(69.675,-14.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BFQgOgRAAgbIAAhuIAoAAIAABkQAAAjAdAAQARAAAKgLQALgMAAgSIAAheIAoAAIAACoIgoAAIAAgWQgSAZghAAQgaAAgQgRg");
	this.shape_5.setTransform(56.65,-11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAsByIAAhNQgSAagiAAQgiAAgVgZQgUgZAAglQAAgnAUgZQAVgZAiAAQAiAAASAaIAAgWIAoAAIAADfgAgeg+QgLAOAAAXQAAAXALAOQALAPATAAQAVAAAMgPQALgOAAgXQAAgXgLgOQgMgQgVAAQgTAAgLAQg");
	this.shape_6.setTransform(37.375,-9.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag7A/QgWgXAAgoQAAglAWgZQAXgaAmAAQAlAAAWAYQAVAXAAAlIgBANIh2AAQAAAVANAMQAMAKASAAQAcAAAQgUIAaAYQgbAggtAAQgnAAgYgZgAAqgSQgCgTgLgKQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape_7.setTransform(19.175,-11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAXQAQgaAdAAQAPAAAHAGIgHAkQgGgEgNgBQgTAAgKAOQgMAPAAAaIAABPg");
	this.shape_8.setTransform(4.975,-12.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-37.4,140.5,42.4);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMBgIATgfQAVAQAeAAQAxAAAAgtIAAgMQgQAZgkAAQggAAgWgYQgUgXAAgiQAAgkAVgXQAVgYAhAAQAjAAAQAaIAAgWIApAAIAACLQAAAogSAUQgYAcgvAAQgrAAgcgUgAgehCQgLAMAAAVQAAAVALANQALAOATAAQAVAAALgOQALgNAAgVQAAgVgKgMQgMgOgVgBQgTABgLAOg");
	this.shape.setTransform(136.725,-13.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBWIAAhkQAAgjgdABQgQAAgLAKQgLALAAATIAABeIgoAAIAAioIAoAAIAAAWQASgZAhAAQAaAAAPARQAPAQAAAcIAABug");
	this.shape_1.setTransform(118.325,-16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTByIAAioIAnAAIAACogAgThOIAAgjIAnAAIAAAjg");
	this.shape_2.setTransform(105.275,-19.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BbQgUgZAAgmQAAglAUgZQAVgaAiAAQAiAAASAaIAAhRIAoAAIAADjIgoAAIAAgVQgSAZgiAAQgiAAgVgZgAgegIQgLANAAAXQAAAXALAOQALAQATAAQAVAAAMgQQALgOAAgXQAAgXgLgOQgMgPgVAAQgTAAgLAQg");
	this.shape_3.setTransform(91.225,-18.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag9BAQgXgYAAgnQAAgnAXgYQAXgZAmAAQAnAAAXAZQAXAYAAAnQAAAngXAYQgXAZgngBQgmABgXgZgAgegmQgLAPAAAXQAAAYALAPQALAPATAAQATAAAMgPQALgPAAgYQAAgXgLgPQgLgPgUAAQgTAAgLAPg");
	this.shape_4.setTransform(72.7,-16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag2A/QgWgZAAgmQgBglAXgZQAYgaAkABQAvAAAYAnIgdATQgOgXgZAAQgUAAgLAPQgMAOAAAXQAAAXAMAPQAMAPATAAQAZAAAQgXIAcAXQgbAkgtgBQgkAAgYgZg");
	this.shape_5.setTransform(55.25,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.5,-41.6,121.5,42.4);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9A/QgXgYAAgnQAAgmAXgZQAXgZAmAAQAnAAAXAZQAXAZAAAmQAAAngXAYQgXAagnAAQgmAAgXgagAgeglQgLAOAAAXQAAAXALAPQALAPATAAQATAAAMgPQALgPAAgXQAAgXgLgOQgLgQgUAAQgTAAgLAQg");
	this.shape.setTransform(31.85,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAxByIhnioIAACoIgpAAIAAjjIA0AAIBiCgIAAigIApAAIAADjg");
	this.shape_1.setTransform(10.925,12.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-9.7,121.6,42.400000000000006);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAWIAAgsIAsAAIAAAsg");
	this.shape.setTransform(191.35,-36.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhIA9IAWgaQAUAVAhAAQAfAAAAgUQAAgJgJgEQgIgDgXgEQgdgFgNgKQgTgMAAgYQAAgaAUgOQATgNAcAAQAqABAcAaIgWAZQgRgTgfAAQgdgBAAASQAAAIALAEQAHADASAEQAiAFAPALQARALAAAYQAAAagTAPQgUAQghAAQgtAAgcgcg");
	this.shape_1.setTransform(179.475,-43.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag7A/QgWgYAAgnQAAglAWgZQAXgaAmAAQAlABAWAXQAVAXAAAkIgBAOIh2AAQAAAVANAMQAMAKASAAQAcAAAQgUIAaAYQgbAggtABQgnAAgYgagAAqgSQgCgSgLgKQgLgKgQAAQgQAAgLALQgLAKgBARIBPAAIAAAAg");
	this.shape_2.setTransform(162.775,-43.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7A/QgWgYAAgnQAAglAWgZQAXgaAmAAQAlABAWAXQAVAXAAAkIgBAOIh2AAQAAAVANAMQAMAKASAAQAcAAAQgUIAaAYQgbAggtABQgnAAgYgagAAqgSQgCgSgLgKQgLgKgQAAQgQAAgLALQgLAKgBARIBPAAIAAAAg");
	this.shape_3.setTransform(144.875,-43.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZB0IAAiHIgaAAIAAghIAaAAIAAgTQAAgsAxAAQAPAAANAEIgEAfQgIgDgIAAQgSAAAAAOIAAARIAkAAIAAAhIgkAAIAACHg");
	this.shape_4.setTransform(130.575,-46.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.7,-68.7,121.60000000000001,42.400000000000006);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCBuIAJghQAFADAHAAQAJAAAGgGQAFgGAGgPIhBimIAuAAIAnB0IAph0IArAAIhBCqQgMAhgNAMQgNAMgWAAQgRAAgJgEg");
	this.shape.setTransform(9.925,-9.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTByIAAjjIAnAAIAADjg");
	this.shape_1.setTransform(-2.225,-15.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiByIAAhmQAAghgdAAQgQAAgLALQgLAKAAATIAABfIgoAAIAAjjIAoAAIAABQQASgZAhAAQAaAAAPASQAPAQAAAbIAABvg");
	this.shape_2.setTransform(-15.175,-15.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbBAIAAhXIgfAAIAAghIAfAAIAAg7IAoAAIAAA7IApAAIAAAhIgpAAIAABRQAAAXATAAQALAAAHgFIAJAfQgNAJgXAAQgyAAAAg0g");
	this.shape_3.setTransform(-30.575,-14.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAiBWIAAhlQAAgigdAAQgQAAgLALQgLAMAAASIAABeIgoAAIAAinIAoAAIAAAVQASgaAhAAQAaAAAPASQAPAQAAAcIAABug");
	this.shape_4.setTransform(-45.825,-12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag9A/QgXgYAAgnQAAgmAXgYQAXgaAmAAQAmAAAYAaQAXAYAAAmQAAAngXAYQgYAagmAAQgmAAgXgagAgeglQgLAOAAAXQAAAXALAPQALAPATABQATgBAMgPQALgPAAgXQAAgXgLgOQgLgQgUAAQgTAAgLAQg");
	this.shape_5.setTransform(-64.3,-12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABTBWIAAhlQAAghgcgBQgPABgKAJQgKAMAAASIAABfIgnAAIAAhlQAAghgcgBQgQABgJAJQgKAMAAASIAABfIgpAAIAAinIApAAIAAAUQARgYAggBQAiABAMAdQAUgdAjgBQAaABAPAQQAPARAAAbIAABvg");
	this.shape_6.setTransform(-87.625,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-37.7,140.1,42.400000000000006);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9BAQgXgYAAgnQAAgnAXgYQAXgaAmAAQAnAAAXAaQAXAYAAAnQAAAngXAYQgXAZgnAAQgmAAgXgZgAgeglQgLAOAAAXQAAAYALAOQAMAPASABQAUgBALgPQALgOAAgYQAAgXgLgOQgLgQgUAAQgTAAgLAQg");
	this.shape.setTransform(211.45,-46.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBWIAAhkQAAgjgdAAQgQAAgLALQgLAMAAASIAABeIgoAAIAAioIAoAAIAAAWQASgaAhAAQAaAAAPASQAPARAAAbIAABug");
	this.shape_1.setTransform(193.075,-47.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.6,-72.5,121.6,42.4);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiByIAAhmQAAghgdAAQgQAAgLALQgLAKAAATIAABfIgoAAIAAjjIAoAAIAABQQASgZAhAAQAaAAAPASQAPAQAAAbIAABvg");
	this.shape.setTransform(165.475,-19.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbBAIAAhXIgfAAIAAghIAfAAIAAg7IAoAAIAAA7IApAAIAAAhIgpAAIAABRQAAAXATAAQALAAAHgFIAJAfQgNAJgXAAQgyAAAAg0g");
	this.shape_1.setTransform(150.075,-18.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTByIAAioIAnAAIAACogAgThOIAAgjIAnAAIAAAjg");
	this.shape_2.setTransform(140.075,-19.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBUIgghxIggBxIgqAAIgtioIArAAIAbBxIAhhxIAiAAIAgBxIAbhxIArAAIguCog");
	this.shape_3.setTransform(123.95,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.4,-41.6,121.5,42.4);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiByIAAhmQAAghgdAAQgQAAgLALQgLAKAAATIAABfIgoAAIAAjjIAoAAIAABQQASgZAhAAQAaAAAPASQAPAQAAAbIAABvg");
	this.shape.setTransform(96.575,12.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2A/QgWgZAAgmQgBglAXgZQAYgZAkgBQAvAAAYAoIgdATQgOgXgZAAQgUAAgLAPQgMAOAAAXQAAAYAMAOQAMAPAUAAQAYAAAQgXIAbAXQgaAkgtAAQgkgBgYgZg");
	this.shape_1.setTransform(79.2,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBWIAAhlQAAghgdgBQgQAAgLALQgLAMAAASIAABeIgoAAIAAinIAoAAIAAAUQASgZAhAAQAaAAAPASQAPARAAAbIAABug");
	this.shape_2.setTransform(61.575,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7BFQgOgQAAgcIAAhuIAoAAIAABkQAAAjAdAAQARAAAKgLQALgMAAgSIAAheIAoAAIAACnIgoAAIAAgVQgSAaghAAQgaAAgQgSg");
	this.shape_3.setTransform(43.15,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag3BLQgQgOgBgZQAAgbAWgMQANgHAZgFQAYgDAHgCQANgFAAgLQAAgRgegBQgcABgYAQIgPgeQAfgVAnAAQBEAAAAA4IAAB0IgnAAIAAgSQgQAXgfAAQgbAAgPgOgAgEALQgNADgGADQgIAHAAAKQAAAWAbAAQAOABALgJQALgKAAgSIAAgTQgHAFgdAFg");
	this.shape_4.setTransform(25.2,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhMByIAAjjIAqAAIAAC9IBvAAIAAAmg");
	this.shape_5.setTransform(9.1,12.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-9.7,121.6,42.400000000000006);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAXIAAgsIAsAAIAAAsg");
	this.shape.setTransform(232.5,-37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7BAQgWgZAAgmQAAgmAWgYQAXgaAmAAQAlAAAWAXQAVAXAAAlIgBAOIh2AAQAAAUANALQAMALASAAQAcAAAQgVIAaAZQgbAhgtgBQgnAAgYgYgAAqgSQgCgSgLgLQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape_1.setTransform(219.825,-43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag7BAQgWgZAAgmQAAgmAWgYQAXgaAmAAQAlAAAWAXQAVAXAAAlIgBAOIh2AAQAAAUANALQAMALASAAQAcAAAQgVIAaAZQgbAhgtgBQgnAAgYgYgAAqgSQgCgSgLgLQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape_2.setTransform(201.925,-43.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAWQAQgZAdAAQAPAAAHAGIgHAkQgGgFgNAAQgTAAgKAOQgMAPAAAaIAABPg");
	this.shape_3.setTransform(187.725,-43.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZB0IAAiHIgaAAIAAghIAaAAIAAgTQAAgsAxAAQAPAAANAEIgEAfQgIgDgIAAQgSAAAAAOIAAARIAkAAIAAAhIgkAAIAACHg");
	this.shape_4.setTransform(175.175,-46.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.3,-68.7,121.59999999999997,42.400000000000006);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAWQAQgZAdAAQAPAAAHAGIgHAkQgGgFgNAAQgTAAgKAOQgMAPAAAaIAABPg");
	this.shape.setTransform(57.825,-11.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9A/QgXgXAAgoQAAgmAXgZQAXgZAmABQAngBAXAZQAXAZAAAmQAAAogXAXQgXAZgnAAQgmAAgXgZgAgegmQgLAPAAAXQAAAYALAPQAMAOASAAQAUAAALgOQALgPAAgYQAAgXgLgPQgLgPgUAAQgTAAgLAPg");
	this.shape_1.setTransform(41.35,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZB0IAAiHIgaAAIAAghIAaAAIAAgTQAAgsAxAAQAPAAANAEIgEAfQgIgDgIAAQgSAAAAAOIAAARIAkAAIAAAhIgkAAIAACHg");
	this.shape_2.setTransform(26.725,-14.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.9,-37.3,121.5,42.4);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BAQgWgZAAgmQAAgmAWgYQAXgaAmAAQAlAAAWAXQAVAXAAAlIgBAOIh2AAQAAAUANALQAMALASAAQAcAAAQgVIAaAZQgbAhgtgBQgnAAgYgYgAAqgSQgCgSgLgLQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape.setTransform(104.875,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbBAIAAhXIgfAAIAAghIAfAAIAAg7IAoAAIAAA7IApAAIAAAhIgpAAIAABRQAAAXATAAQALAAAHgFIAJAfQgNAJgXAAQgyAAAAg0g");
	this.shape_1.setTransform(89.725,-14.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTByIAAioIAnAAIAACogAgThOIAAgjIAnAAIAAAjg");
	this.shape_2.setTransform(79.725,-14.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIA8IAWgZQAUAVAhAAQAfAAAAgUQAAgJgJgEQgIgDgXgEQgdgFgNgJQgTgNAAgXQAAgaAUgPQATgMAcAAQAqAAAcAaIgWAZQgRgTgfgBQgdABAAAQQAAAJALAFQAHACASADQAiAHAPAJQARAMAAAXQAAAbgTAPQgUAPghAAQgtAAgcgcg");
	this.shape_3.setTransform(67.775,-11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBbIAAAVIgoAAIAAjjIAoAAIAABRQASgaAiAAQAiAAAVAaQAUAYAAAlQAAAngUAZQgVAZgiAAQgiAAgSgZgAgggIQgLANAAAXQAAAXALAOQAMAQAUAAQAUAAALgQQALgOAAgXQAAgXgLgNQgLgQgUAAQgUAAgMAQg");
	this.shape_4.setTransform(50.725,-14.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BAQgWgZAAgmQAAgmAWgYQAXgaAmAAQAlAAAWAXQAVAXAAAlIgBAOIh2AAQAAAUANALQAMALASAAQAcAAAQgVIAaAZQgbAhgtgBQgnAAgYgYgAAqgSQgCgSgLgLQgLgJgQAAQgQAAgLAKQgLALgBARIBPAAIAAAAg");
	this.shape_5.setTransform(31.575,-11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgBVIgghyIggByIgpAAIguipIArAAIAbBxIAhhxIAiAAIAhBxIAahxIArAAIguCpg");
	this.shape_6.setTransform(10.3,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-37.2,121.6,42.400000000000006);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAWQAQgZAdAAQAPAAAHAFIgHAlQgGgFgNABQgTAAgKANQgMAPAAAaIAABPg");
	this.shape.setTransform(163.925,-16.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BFQgPgQgBgcIAAhvIApAAIAABmQAAAiAeAAQAQAAAKgLQALgLAAgTIAAhfIApAAIAACoIgpAAIAAgUQgSAZghgBQgaAAgPgRg");
	this.shape_1.setTransform(147.5,-15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BAQgXgYAAgnQAAgnAXgYQAXgZAmAAQAmAAAYAZQAXAYAAAnQAAAngXAYQgYAZgmgBQgmABgXgZgAgegmQgLAPAAAXQAAAYALAPQALAPATAAQATAAAMgPQALgPAAgYQAAgXgLgPQgLgPgUAAQgTAAgLAPg");
	this.shape_2.setTransform(129.2,-16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhCBuIAJghQAFADAHAAQAJAAAGgGQAFgGAGgQIhBilIAuAAIAnB1IAph1IArAAIhBCqQgMAhgNANQgNALgWAAQgRAAgJgEg");
	this.shape_3.setTransform(111.525,-13.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101,-41.6,121.5,42.4);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7A/QgWgYAAgnQAAglAWgZQAXgaAmAAQAlABAWAXQAVAXAAAkIgBAOIh2AAQAAAVANAMQAMAKASAAQAcAAAQgUIAaAYQgbAggtABQgnAAgYgagAAqgSQgCgSgLgKQgLgKgQAAQgQAAgLALQgLAKgBARIBPAAIAAAAg");
	this.shape.setTransform(89.175,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbBAIAAhXIgfAAIAAghIAfAAIAAg7IAoAAIAAA7IApAAIAAAhIgpAAIAABRQAAAXATAAQALAAAHgFIAJAfQgNAJgXAAQgyAAAAg0g");
	this.shape_1.setTransform(74.025,13.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BLQgQgOgBgZQAAgbAWgMQANgHAZgFQAYgDAHgCQANgFAAgLQAAgRgegBQgcABgYAQIgPgeQAfgVAnAAQBEAAAAA4IAAB0IgnAAIAAgSQgQAXgfAAQgbAAgPgOgAgEALQgNADgGADQgIAHAAAKQAAAWAbAAQAOABALgJQALgKAAgSIAAgTQgHAFgdAFg");
	this.shape_2.setTransform(58.95,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7A/QgWgYAAgnQAAglAWgZQAXgaAmAAQAlABAWAXQAVAXAAAkIgBAOIh2AAQAAAVANAMQAMAKASAAQAcAAAQgUIAaAYQgbAggtABQgnAAgYgagAAqgSQgCgSgLgKQgLgKgQAAQgQAAgLALQgLAKgBARIBPAAIAAAAg");
	this.shape_3.setTransform(42.025,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1BWIAAioIAoAAIAAAXQAQgaAdAAQAPAAAHAFIgHAlQgGgEgNAAQgTAAgKANQgMAPAAAaIAABPg");
	this.shape_4.setTransform(27.825,15.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhHBWQgfghABg1QgBg0AfggQAfghAwAAQA9AAAgAzIghAVQgVgigmAAQgeAAgSAWQgTAWABAjQgBAkATAWQASAWAeAAQAmAAAVgjIAiAUQghA1g8AAQgxAAgfggg");
	this.shape_5.setTransform(9.95,12.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-9.7,121.5,42.400000000000006);


(lib.site_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// site_btn
	this.instance = new lib.Site_btn();
	this.instance.setTransform(-95.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-20.5,191,41);


(lib.notification = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Notification();
	this.instance.setTransform(-114,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-152,228,304);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AhOBuQgMgCgIgJQgJgIgCgMIAAidQACgMAJgIQAIgJAMgCICdAAQAMACAIAJQAJAIACAMIAACdQgCAMgJAIQgIAJgMACgAg+g+QgDADAAAEIAABvQAAAEADADQADADAEAAIBvAAQAEAAADgDQADgDAAgEIAAhvQAAgEgDgDQgDgDgEAAIhvAAQgEAAgDADgAgWAbQgDgBgBgDIAAgtQABgDADgBIAEgBIAlAAIAEABQADABABADIABAEIAAAlIgBAEQgBADgDABg");
	this.shape.setTransform(32.5147,32.0539,1.1175,1.116);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#121212").s().p("AlmBNIAAgqQgJAOgSAAQgSAAgMgNQgLgOAAgUQAAgTALgNQAMgOASAAQASAAAJAOIAAgMIAWAAIAAB3gAmNgRQgGAIAAALQAAANAGAHQAGAIAKAAQALAAAHgIQAFgHAAgNQAAgLgGgIQgGgIgLAAQgKAAgGAIgAHHAkQgMgNAAgVQAAgTAMgNQAMgOAUAAQAUAAALANQAMAMAAATIgBAHIg/AAQAAALAHAGQAGAGALAAQAPAAAIgLIAOANQgPARgYAAQgVAAgMgNgAH8gHQgBgUgUAAQgJAAgGAGQgFAFgBAJIAqAAIAAAAgABEAfQgQgRAAgbQAAgbAQgSQARgSAbAAQAbAAAQASQAQASAAAbQAAAagQASQgQASgbAAQgbAAgRgSgABVgqQgJALAAASQAAASAJALQAKAMARAAQAQAAAKgMQAKgLAAgSQAAgSgKgLQgKgMgQAAQgRAAgKAMgAhFAkQgMgNAAgVQAAgTAMgNQAMgOAVAAQATAAAMANQAKAMAAATIAAAHIg/AAQABALAGAGQAHAGAKAAQAPAAAIgLIANANQgNARgYAAQgVAAgNgNgAgPgHQgCgUgTAAQgJAAgGAGQgFAFgBAJIAqAAIAAAAgAjeAqQgIgHAAgOQAAgOALgHQAHgDANgCQANgCAEgBQAHgDAAgFQAAgKgQAAQgPAAgNAJIgIgQQASgLAUAAQAkAAAAAeIAAA9IgUAAIAAgKQgJAMgRAAQgOAAgJgHgAjCAIQgPADAAAJQAAAMAOAAQAJAAAFgEQAGgGAAgJIAAgKQgDACgQADgAk4AoQgIgJAAgPIAAg6IAVAAIAAA1QAAATAQAAQAJAAAFgGQAGgGAAgKIAAgyIAWAAIAABZIgWAAIAAgLQgJANgSAAQgOAAgIgJgAoRAYIASgMQAKASAXAAQALAAAGgFQAHgEAAgIQAAgIgIgEQgFgBgOgEQgUgDgLgHQgOgJAAgRQAAgRANgJQANgKATAAQAfAAAQAXIgRALQgLgOgTAAQgKAAgFADQgHAEAAAHQAAAKARAEQAeAIAFADQATAJAAATQAAARgMAKQgNALgWAAQgjAAgPgZgAGbAvIAAg1QAAgSgQAAQgJAAgFAFQgGAGAAAKIAAAyIgWAAIAAhZIAWAAIAAALQAKgNARAAQAOAAAIAJQAIAJAAAPIAAA6gAE7AvIAAhZIAWAAIAABZgAEVAvIAAh4IAVAAIAAB4gADvAvIAAg1QAAgSgPAAQgJAAgGAFQgGAGAAAKIAAAyIgVAAIAAhZIAVAAIAAALQAKgNASAAQANAAAJAJQAIAJAAAPIAAA6gAiJAvIAAhZIAVAAIAAAMQAJgNAQAAQAIAAAEADIgEATQgDgCgIAAQgJAAgGAHQgHAIAAANIAAAqgAE7g3IAAgSIAWAAIAAASg");
	this.shape_1.setTransform(110.0697,33.5047,1.1175,1.116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(20.3,19.8,149,24.499999999999996), null);


(lib.line_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_2
	this.instance = new lib.line_2();
	this.instance.setTransform(-76.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(89).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-6,153,12);


(lib.line_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_1
	this.instance = new lib.line_1();
	this.instance.setTransform(-47.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-6,95,12);


(lib.hitArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBpIAAjRIDfAAIAADRg");
	this.shape.setTransform(11.225,10.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hitArea, new cjs.Rectangle(0,0,22.5,21), null);


(lib.circle_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.BG2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.website_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notification_bg
	this.instance = new lib.Tween3("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).to({_off:true,alpha:1},9).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66).to({_off:false},9).to({startPosition:0},13).to({_off:true},1).wait(10).to({_off:false},0).wait(1));

	// site_btn
	this.instance_2 = new lib.site_btn("synched",0);
	this.instance_2.setTransform(-0.8,113.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},19).to({_off:true},1).wait(24).to({_off:false},0).to({startPosition:0},16).to({regX:-0.1,regY:0.1,scaleX:0.7906,scaleY:0.7894},4).to({regX:0,regY:0,scaleX:1,scaleY:0.999,x:-0.75,y:113.5},7).to({startPosition:0},17).to({_off:true},1).wait(10).to({_off:false},0).wait(1));

	// website 1
	this.instance_3 = new lib.Site();
	this.instance_3.setTransform(-114,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:true},1).wait(24).to({_off:false},0).wait(44).to({_off:true},1).wait(10).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-152,228,304);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006AFF").ss(5,1,1).p("AjDgIICJCIID+j/");
	this.shape.setTransform(0.025,0);

	this.instance = new lib.Symbol19();
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,19.6,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},44).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-15.2,44.1,30.5);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line_1_1("synched",0);
	this.instance.setTransform(0.3,0.2);

	this.instance_1 = new lib.line_1_1("synched",7);
	this.instance_1.setTransform(-0.35,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-6.1,95.6,12.3);


(lib.Text4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 17
	this.instance = new lib.Symbol17("synched",0);
	this.instance.setTransform(184.55,365.25,1.5822,1.5822,0,0,0,19.4,11.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regY:11.6,y:349.3,alpha:1},5,cjs.Ease.quadOut).wait(35).to({startPosition:0},0).to({_off:true},1).wait(13).to({_off:false},0).wait(136).to({startPosition:0},0).wait(1).to({regX:43.4,regY:-11.8,x:222.5,y:312.3,alpha:0.9406},0).wait(1).to({alpha:0.8704},0).wait(1).to({alpha:0.7885},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.5865},0).wait(1).to({alpha:0.4643},0).wait(1).to({alpha:0.3267},0).wait(1).to({alpha:0.1724},0).wait(1).to({regX:19.4,regY:11.6,x:184.55,y:349.3,alpha:0},0).wait(1));

	// Symbol 16
	this.instance_1 = new lib.Symbol16("synched",0);
	this.instance_1.setTransform(68.15,365.25,1.5822,1.5822,0,0,0,46.1,11.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:11.6,y:349.3,alpha:1},5,cjs.Ease.quadOut).wait(37).to({startPosition:0},0).to({_off:true},1).wait(13).to({_off:false},0).wait(136).to({startPosition:0},0).wait(1).to({regX:44.9,regY:-14.7,x:66.25,y:307.7,alpha:0.9406},0).wait(1).to({alpha:0.8704},0).wait(1).to({alpha:0.7885},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.5865},0).wait(1).to({alpha:0.4643},0).wait(1).to({alpha:0.3267},0).wait(1).to({alpha:0.1724},0).wait(1).to({regX:46.1,regY:11.6,x:68.15,y:349.3,alpha:0},0).wait(1));

	// Symbol 15
	this.instance_2 = new lib.Symbol15("synched",0);
	this.instance_2.setTransform(102.7,320.4,1.5822,1.5822,0,0,0,66.6,14.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:304.6,alpha:1},5,cjs.Ease.quadOut).wait(39).to({startPosition:0},0).to({_off:true},1).wait(13).to({_off:false},0).wait(136).to({startPosition:0},0).wait(1).to({regX:105.4,regY:-16.5,x:164.1,y:256.05,alpha:0.9406},0).wait(1).to({alpha:0.8704},0).wait(1).to({alpha:0.7885},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.5865},0).wait(1).to({alpha:0.4643},0).wait(1).to({alpha:0.3267},0).wait(1).to({alpha:0.1724},0).wait(1).to({regX:66.6,regY:14.2,x:102.7,y:304.6,alpha:0},0).wait(1));

	// Symbol 14
	this.instance_3 = new lib.Symbol14("synched",0);
	this.instance_3.setTransform(51.3,266,1.5822,1.5822,0,0,0,36.7,11.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:250.15,alpha:1},5,cjs.Ease.quadOut).wait(41).to({startPosition:0},0).to({_off:true},1).wait(13).to({_off:false},0).wait(136).to({startPosition:0},0).wait(1).to({regX:23.7,regY:15.8,x:30.75,y:256.5,alpha:0.9406},0).wait(1).to({alpha:0.8704},0).wait(1).to({alpha:0.7885},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.5865},0).wait(1).to({alpha:0.4643},0).wait(1).to({alpha:0.3267},0).wait(1).to({alpha:0.1724},0).wait(1).to({regX:36.7,regY:11.8,x:51.3,y:250.15,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,0,351.90000000000003,354.9);


(lib.Text3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 8
	this.instance = new lib.Symbol13("synched",0);
	this.instance.setTransform(68.15,365.25,1.5822,1.5822,0,0,0,46.1,11.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regY:11.6,y:349.3,alpha:1},5,cjs.Ease.quadOut).wait(29).to({startPosition:0},0).wait(1).to({regX:64.5,regY:-12.1,x:97.25,y:311.8,alpha:0.9305},0).wait(1).to({alpha:0.8518},0).wait(1).to({alpha:0.7634},0).wait(1).to({alpha:0.6648},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4351},0).wait(1).to({alpha:0.3028},0).wait(1).to({alpha:0.158},0).wait(1).to({regX:46.1,regY:11.6,x:68.15,y:349.3,alpha:0},0).to({_off:true},1).wait(11));

	// Symbol 12
	this.instance_1 = new lib.Symbol12("synched",0);
	this.instance_1.setTransform(102.7,320.4,1.5822,1.5822,0,0,0,66.6,14.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:304.6,alpha:1},5,cjs.Ease.quadOut).wait(31).to({startPosition:0},0).wait(1).to({regX:96.3,regY:-16.1,x:149.7,y:256.7,alpha:0.9329},0).wait(1).to({alpha:0.8563},0).wait(1).to({alpha:0.7694},0).wait(1).to({alpha:0.6718},0).wait(1).to({alpha:0.5629},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.3084},0).wait(1).to({alpha:0.1613},0).wait(1).to({regX:66.6,regY:14.2,x:102.7,y:304.6,alpha:0},0).to({_off:true},1).wait(11));

	// Symbol 11
	this.instance_2 = new lib.Symbol11("synched",0);
	this.instance_2.setTransform(51.3,266,1.5822,1.5822,0,0,0,36.7,11.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:250.15,alpha:1},5,cjs.Ease.quadOut).wait(33).to({startPosition:0},0).wait(1).to({regX:20.9,regY:13,x:26.3,y:252.05,alpha:0.9357},0).wait(1).to({alpha:0.8613},0).wait(1).to({alpha:0.7763},0).wait(1).to({alpha:0.6798},0).wait(1).to({alpha:0.5713},0).wait(1).to({alpha:0.4499},0).wait(1).to({alpha:0.3148},0).wait(1).to({alpha:0.1652},0).wait(1).to({regX:36.7,regY:11.8,x:51.3,y:250.15,alpha:0},0).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,0,272,354.6);


(lib.Text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 10
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(30.15,415.9,1.5822,1.5822,0,0,0,21.6,12.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:30.2,y:400.1,alpha:1},5,cjs.Ease.quadOut).wait(40).to({startPosition:0},0).wait(1).to({regX:159.5,regY:-46.1,x:248.35,y:307.35,alpha:0.949},0).wait(1).to({alpha:0.8861},0).wait(1).to({alpha:0.8102},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.6141},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.3489},0).wait(1).to({alpha:0.1859},0).wait(1).to({regX:21.6,regY:12.5,x:30.2,y:400.1,alpha:0},0).wait(1));

	// Symbol 9
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.setTransform(184.55,365.25,1.5822,1.5822,0,0,0,19.4,11.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regY:11.6,y:349.3,alpha:1},5,cjs.Ease.quadOut).wait(42).to({startPosition:0},0).wait(1).to({regX:-40.8,regY:-12.2,x:89.3,y:311.65,alpha:0.9516},0).wait(1).to({alpha:0.8909},0).wait(1).to({alpha:0.8169},0).wait(1).to({alpha:0.7281},0).wait(1).to({alpha:0.6229},0).wait(1).to({alpha:0.4996},0).wait(1).to({alpha:0.3562},0).wait(1).to({alpha:0.1904},0).wait(1).to({regX:19.4,regY:11.6,x:184.55,y:349.3,alpha:0},0).wait(1));

	// Symbol 8
	this.instance_2 = new lib.Symbol8("synched",0);
	this.instance_2.setTransform(68.15,365.25,1.5822,1.5822,0,0,0,46.1,11.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regY:11.6,y:349.3,alpha:1},5,cjs.Ease.quadOut).wait(44).to({startPosition:0},0).wait(1).to({regX:202.8,regY:-47,x:316.05,y:256.6,alpha:0.9543},0).wait(1).to({alpha:0.8962},0).wait(1).to({alpha:0.8244},0).wait(1).to({alpha:0.7371},0).wait(1).to({alpha:0.6328},0).wait(1).to({alpha:0.5093},0).wait(1).to({alpha:0.3643},0).wait(1).to({alpha:0.1955},0).wait(1).to({regX:46.1,regY:11.6,x:68.15,y:349.3,alpha:0},0).wait(1));

	// Symbol 7
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.setTransform(102.7,320.4,1.5822,1.5822,0,0,0,66.6,14.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:304.6,alpha:1},5,cjs.Ease.quadOut).wait(46).to({startPosition:0},0).wait(1).to({regX:142.4,regY:-18.9,x:222.65,y:252.25,alpha:0.9543},0).wait(1).to({alpha:0.8962},0).wait(1).to({alpha:0.8244},0).wait(1).to({alpha:0.7371},0).wait(1).to({alpha:0.6328},0).wait(1).to({alpha:0.5093},0).wait(1).to({alpha:0.3643},0).wait(1).to({alpha:0.1955},0).wait(1).to({regX:66.6,regY:14.2,x:102.7,y:304.6,alpha:0},0).wait(1));

	// Symbol 6
	this.instance_4 = new lib.Symbol6("synched",0);
	this.instance_4.setTransform(51.3,266,1.5822,1.5822,0,0,0,36.7,11.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:250.15,alpha:1},5,cjs.Ease.quadOut).wait(48).to({startPosition:0},0).wait(1).to({regX:52.7,regY:13,x:76.65,y:252.05,alpha:0.9747},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.8804},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.7016},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.4021},0).wait(1).to({alpha:0.208},0).wait(1).to({regX:36.7,regY:11.8,x:51.3,y:250.15,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,216.1,486.29999999999995,138.4);


(lib.Text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 5
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(30.15,415.9,1.5822,1.5822,0,0,0,21.6,12.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:30.2,y:400.1,alpha:1},5,cjs.Ease.quadOut).wait(40).to({startPosition:0},0).wait(1).to({regX:202.3,regY:-46.2,x:316.1,y:307.2,alpha:0.9747},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.8804},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.7016},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.4021},0).wait(1).to({alpha:0.208},0).wait(1).to({regX:21.6,regY:12.5,x:30.2,y:400.1,alpha:0},0).wait(1));

	// Symbol 4
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(184.55,365.25,1.5822,1.5822,0,0,0,19.4,11.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regY:11.6,y:349.3,alpha:1},5,cjs.Ease.quadOut).wait(42).to({startPosition:0},0).wait(1).to({regX:42.4,regY:-14.8,x:220.95,y:307.55,alpha:0.9747},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.8804},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.7016},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.4021},0).wait(1).to({alpha:0.208},0).wait(1).to({regX:19.4,regY:11.6,x:184.55,y:349.3,alpha:0},0).wait(1));

	// Symbol 3
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.setTransform(68.15,365.25,1.5822,1.5822,0,0,0,46.1,11.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regY:11.6,y:349.3,alpha:1},5,cjs.Ease.quadOut).wait(44).to({startPosition:0},0).wait(1).to({regX:55.7,regY:-14.5,x:83.35,y:308,alpha:0.9747},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.8804},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.7016},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.4021},0).wait(1).to({alpha:0.208},0).wait(1).to({regX:46.1,regY:11.6,x:68.15,y:349.3,alpha:0},0).wait(1));

	// Symbol 2
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(102.7,320.4,1.5822,1.5822,0,0,0,66.6,14.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:304.6,alpha:1},5,cjs.Ease.quadOut).wait(46).to({startPosition:0},0).wait(1).to({regX:136.2,regY:-13.3,x:212.85,y:261.1,alpha:0.9747},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.8804},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.7016},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.4021},0).wait(1).to({alpha:0.208},0).wait(1).to({regX:66.6,regY:14.2,x:102.7,y:304.6,alpha:0},0).wait(1));

	// Symbol 1
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(51.3,266,1.5822,1.5822,0,0,0,36.7,11.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:250.15,alpha:1},5,cjs.Ease.quadOut).wait(48).to({startPosition:0},0).wait(1).to({regX:48.5,regY:12.8,x:70,y:251.75,alpha:0.9747},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.8804},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.7016},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.4021},0).wait(1).to({alpha:0.208},0).wait(1).to({regX:36.7,regY:11.8,x:51.3,y:250.15,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,216.1,465.20000000000005,138.79999999999998);


(lib.circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.circle_animation("synched",0);
	this.instance.setTransform(159.45,235.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006AFF").ss(5,1,1).p("AFUAAQAACNhkBjQhjBkiNAAQiMAAhjhkQhkhjAAiNQAAiMBkhkQBjhjCMAAQCNAABjBjQBkBkAACMg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-36.5,73,73);


(lib.notification_lines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tick
	this.instance = new lib.Tween25("synched",0);
	this.instance.setTransform(-9.8,63.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1,startPosition:7},4).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).to({_off:true},1).wait(13));

	// circle
	this.instance_1 = new lib.circle("synched",0);
	this.instance_1.setTransform(-9.35,64.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:1},5).to({startPosition:0},73).to({_off:true},1).wait(13));

	// line_2
	this.instance_2 = new lib.line_2_1("synched",0);
	this.instance_2.setTransform(-9.5,130);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1,startPosition:7},5).to({startPosition:83},76).to({_off:true},1).wait(13));

	// line_1
	this.instance_3 = new lib.line_1_1("synched",0);
	this.instance_3.setTransform(-11.5,148);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-11.15,148.15);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,x:-11.15,y:148.15,alpha:1},5).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},5).to({startPosition:0},79).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,27.9,153,126.5);


(lib.notification_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notification_lines
	this.instance = new lib.notification_lines("synched",0);
	this.instance.setTransform(9.4,-62.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(43).to({startPosition:43},0).to({_off:true},1).wait(41));

	// notification_animation
	this.instance_1 = new lib.notification("synched",0);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,alpha:1},13).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},13).to({startPosition:0},43).to({_off:true},1).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-152,228,304);


(lib.Websiteanimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notification_animation
	this.instance = new lib.notification_animation("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(35).to({startPosition:35},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,alpha:0.9975,startPosition:36},0).wait(1).to({scaleX:0.9898,scaleY:0.9898,alpha:0.9897,startPosition:37},0).wait(1).to({scaleX:0.9768,scaleY:0.9767,alpha:0.9767,startPosition:38},0).wait(1).to({scaleX:0.9583,scaleY:0.9583,alpha:0.9582,startPosition:39},0).wait(1).to({scaleX:0.9344,scaleY:0.9343,alpha:0.9341,startPosition:40},0).wait(1).to({scaleX:0.9048,scaleY:0.9047,alpha:0.9044,startPosition:41},0).wait(1).to({scaleX:0.8695,scaleY:0.8694,alpha:0.869,startPosition:42},0).wait(1).to({scaleX:0.8285,scaleY:0.8284,alpha:0.8278,startPosition:43},0).wait(1).to({scaleX:0.7819,scaleY:0.7816,alpha:0.7809,startPosition:44},0).wait(1).to({scaleX:0.7296,scaleY:0.7293,alpha:0.7284,startPosition:45},0).wait(1).to({scaleX:0.6719,scaleY:0.6715,alpha:0.6705,startPosition:46},0).wait(1).to({scaleX:0.609,scaleY:0.6086,alpha:0.6073,startPosition:47},0).wait(1).to({scaleX:0.5414,scaleY:0.5409,alpha:0.5394,startPosition:48},0).wait(1).to({scaleX:0.4695,scaleY:0.4689,alpha:0.4672,startPosition:49},0).wait(1).to({scaleX:0.3941,scaleY:0.3935,alpha:0.3915,startPosition:50},0).wait(1).to({scaleX:0.3161,scaleY:0.3154,alpha:0.3131,startPosition:51},0).wait(1).to({scaleX:0.2367,scaleY:0.2358,alpha:0.2333,startPosition:52},0).wait(1).to({scaleX:0.1571,scaleY:0.1562,alpha:0.1534,startPosition:53},0).wait(1).to({scaleX:0.0791,scaleY:0.078,alpha:0.075,startPosition:54},0).wait(1).to({scaleX:0.0044,scaleY:0.0033,alpha:0,startPosition:55},0).to({_off:true},1).wait(1));

	// website_1
	this.instance_1 = new lib.website_1("synched",44);
	this.instance_1.setTransform(0.2,0.2,0.0044,0.0033,0,0,0,45.6,60.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,scaleX:0.0635,scaleY:0.0627,x:0,y:0,alpha:0.0594,startPosition:45},0).wait(1).to({scaleX:0.123,scaleY:0.1225,alpha:0.1193,startPosition:46},0).wait(1).to({scaleX:0.1829,scaleY:0.1826,alpha:0.1795,startPosition:47},0).wait(1).to({scaleX:0.2429,scaleY:0.2429,alpha:0.24,startPosition:48},0).wait(1).to({scaleX:0.3032,scaleY:0.3034,alpha:0.3005,startPosition:49},0).wait(1).to({scaleX:0.3634,scaleY:0.364,alpha:0.3611,startPosition:50},0).wait(1).to({scaleX:0.4236,scaleY:0.4244,alpha:0.4217,startPosition:51},0).wait(1).to({scaleX:0.4835,scaleY:0.4846,alpha:0.482,startPosition:52},0).wait(1).to({scaleX:0.5432,scaleY:0.5446,alpha:0.542,startPosition:53},0).wait(1).to({scaleX:0.6025,scaleY:0.6041,alpha:0.6017,startPosition:54},0).wait(1).to({scaleX:0.6613,scaleY:0.6632,alpha:0.6608,startPosition:55},0).wait(1).to({scaleX:0.7194,scaleY:0.7216,alpha:0.7193,startPosition:56},0).wait(1).to({scaleX:0.7769,scaleY:0.7794,alpha:0.7772,startPosition:57},0).wait(1).to({scaleX:0.8337,scaleY:0.8364,alpha:0.8342,startPosition:58},0).wait(1).to({scaleX:0.8895,scaleY:0.8925,alpha:0.8904,startPosition:59},0).wait(1).to({scaleX:0.9445,scaleY:0.9477,alpha:0.9457,startPosition:60},0).wait(1).to({regX:45.6,regY:60.7,scaleX:0.9985,scaleY:1.002,x:45.55,y:60.8,alpha:1,startPosition:44},0).wait(1).to({regX:0,regY:0,x:0,y:0,startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({regX:45.6,regY:60.7,x:45.55,y:60.8,startPosition:99},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.9334,startPosition:0},0).wait(1).to({alpha:0.8688,startPosition:1},0).wait(1).to({alpha:0.8062,startPosition:2},0).wait(1).to({alpha:0.7456,startPosition:3},0).wait(1).to({alpha:0.687,startPosition:4},0).wait(1).to({alpha:0.6303,startPosition:5},0).wait(1).to({alpha:0.5756,startPosition:6},0).wait(1).to({alpha:0.5227,startPosition:7},0).wait(1).to({alpha:0.4718,startPosition:8},0).wait(1).to({alpha:0.4227,startPosition:9},0).wait(1).to({alpha:0.3754,startPosition:10},0).wait(1).to({alpha:0.33,startPosition:11},0).wait(1).to({alpha:0.2863,startPosition:12},0).wait(1).to({alpha:0.2445,startPosition:13},0).wait(1).to({alpha:0.2044,startPosition:14},0).wait(1).to({alpha:0.1661,startPosition:15},0).wait(1).to({alpha:0.1295,startPosition:16},0).wait(1).to({alpha:0.0946,startPosition:17},0).wait(1).to({alpha:0.0614,startPosition:18},0).wait(1).to({alpha:0.0299,startPosition:19},0).wait(1).to({regX:45.6,regY:60.7,x:45.55,y:60.8,alpha:0,startPosition:44},0).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-152.2,228,304.6);


// stage content:
(lib.SQ_ECOM_SLLONLNFRPRGSSVIMGRY_HTML5_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.cta_hit_area.alpha = 0;
		this.clickThruMC.alpha = 0.01;
		
		this.cta_hit_area.name = "cta";
		this.clickThruMC.name = "clickThruMC";
		
		stage.enableMouseOver();
		
		this.clickThruMC.addEventListener("mouseover", fl_MouseOverHandler);
		this.cta_hit_area.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler(e){
			
			document.body.style.cursor = "pointer";
		
			switch (e.currentTarget.name){
				
				case "cta":
					//e.currentTarget.parent.cta.gotoAndPlay("over");
				break;
				
		
			}
		
		}
		
		this.clickThruMC.addEventListener("mouseout", fl_MouseOutHandler);
		this.cta_hit_area.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler(e){
			
			document.body.style.cursor = "default";
			
			switch (e.currentTarget.name){
				
				case "cta":
					e.currentTarget.parent.cta.gotoAndStop(0);
				break;
				
			}
		} 
		
		this.clickThruMC.addEventListener("click", fl_Click);
		this.cta_hit_area.addEventListener("click", fl_Click);
		
		function fl_Click(e) {
			
			switch (e.currentTarget.name){
		
				
				default:
					window.open(window.clickTag);
				break;
			}
		}
	}
	this.frame_1 = function() {
		this.cta_hit_area.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(226));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(227));

	// HitAreas
	this.cta_hit_area = new lib.hitArea();
	this.cta_hit_area.name = "cta_hit_area";
	this.cta_hit_area.setTransform(235.2,261.6,2.4202,2.0115,0,0,0,0.8,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta_hit_area).wait(227));

	// clickTag
	this.clickThruMC = new lib.hitArea();
	this.clickThruMC.name = "clickThruMC";
	this.clickThruMC.setTransform(149.65,300.7,13.363,28.6395,0,0,0,11.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.clickThruMC).wait(227));

	// Website animation
	this.instance = new lib.Websiteanimation("synched",0,false);
	this.instance.setTransform(150,399);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({_off:true},105).wait(54));

	// Logo
	this.instance_1 = new lib.Logo();
	this.instance_1.setTransform(133.95,111.6,0.8929,0.8929,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227));

	// Text4
	this.instance_2 = new lib.Text4("synched",0,false);
	this.instance_2.setTransform(158.8,313.7,0.6156,0.6124,0,0,0,220.5,624.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).wait(47).to({startPosition:14},0).wait(1));

	// Text3
	this.instance_3 = new lib.Text3("synched",0,false);
	this.instance_3.setTransform(165.75,314,0.6152,0.614,0,0,0,231.4,624.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({_off:true},52).wait(45));

	// Text2
	this.instance_4 = new lib.Text2("synched",0,false);
	this.instance_4.setTransform(159.25,314.2,0.615,0.6147,0,0,0,220.9,623.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({_off:true},68).wait(93));

	// Text1
	this.instance_5 = new lib.Text1("synched",0,false);
	this.instance_5.setTransform(90.9,-57.15,0.6156,0.6124,0,0,0,110.2,18.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({_off:true},66).wait(159));

	// CTA.svg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGdAdQgHgHAAgMQAAgLAHgIQAHgIAMAAQAMAAAHAHQAGAHAAALIAAAEIglAAQAAAOAOAAQAJAAAFgHIAIAIQgJAKgOAAQgNAAgHgIgAG9ADQgBgLgLABQgMgBgBALIAZAAIAAAAgAFkAdQgHgHAAgMQAAgLAHgIQAHgIAMAAQALAAAHAHQAHAHAAALIAAAEIgmAAQAAAOAOAAQAJAAAFgHIAIAIQgIAKgOAAQgNAAgHgIgAGDADQAAgLgMABQgMgBgBALIAZAAIAAAAgACaAdQgIgIAAgLQAAgMAIgHQAHgIAMAAQAMAAAHAIQAHAHAAAMQAAALgHAIQgHAIgMAAQgMAAgHgIgACgAKQAAAQANAAQANAAAAgQQAAgQgNAAQgNAAAAAQgAAdAdQgHgHAAgMQAAgLAHgIQAHgIAKAAQALAAAFAIIAAgZIANAAIAABGIgNAAIAAgHQgFAIgLAAQgKAAgHgIgAAkAKQAAAQANAAQANAAAAgQQAAgQgNAAQgNAAAAAQgAgbAdQgHgHAAgMQAAgLAHgIQAHgIAMAAQAKAAAHAHQAHAHAAALIgBAEIgkAAQAAAOAOAAQAIAAAFgHIAIAIQgJAKgNAAQgMAAgHgIgAADADQAAgLgLABQgMgBgBALIAYAAIAAAAgAhCAVIAAgbIgJAAIAAgKIAJAAIAAgSIANAAIAAASIANAAIAAAKIgNAAIAAAZQAAAHAGAAQAEAAACgCIADALQgGACgGAAQgQAAAAgQgAinAVQAAgOASgDIALgBQAEgCAAgCQAAgFgKAAQgKAAgGAEIgFgJQAKgGAMAAQAVAAAAARIAAAkIgMAAIAAgGQgEAHgLAAQgSAAAAgQgAiSANQgJABAAAGQAAAHAJAAQAMAAAAgMIAAgFQgCABgKACgAjHAVIAAgbIgKAAIAAgKIAKAAIAAgSIAMAAIAAASIANAAIAAAKIgNAAIAAAZQAAAHAHAAQADAAACgCIADALQgFACgGAAQgQAAAAgQgAkDAcIAHgHQAHAGAKAAQAKAAAAgGQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgKgDQgTgDAAgMQAAgQAVAAQAOAAAIAIIgHAIQgFgGgKAAQgJAAAAAFQAAADALACQAVADAAANQAAAIgGAFQgGAFgLAAQgOAAgJgJgAk9AVIAAgbIgJAAIAAgKIAJAAIAAgSIANAAIAAASIANAAIAAAKIgNAAIAAAZQAAAHAGAAQAEAAACgCIACALQgFACgGAAQgQAAAAgQgAl3AdQgHgHAAgMQAAgLAHgIQAHgIAMAAQAMAAAHAHQAGAHAAALIAAAEIglAAQAAAOAOAAQAIAAAFgHIAIAIQgIAKgOAAQgNAAgHgIgAlXADQgBgLgMABQgLgBgBALIAZAAIAAAAgAm/AbQgJgLAAgQQAAgPAJgKQAKgLAQAAQATAAAKAQIgLAGQgGgKgMAAQgKAAgGAHQgFAHAAAKQAAALAFAIQAGAGAKAAQASAAABgRIgRAAIAAgKIAfAAIAAAFQAAAPgIAJQgKAKgPAAQgQAAgKgKgAE4AkIAAg0IANAAIAAAHQAFgIAKAAQAEAAACACIgCALIgGgBQgNAAAAAQIAAAZgAEYAkIAAgqIgIAAIAAgKIAIAAIAAgGQAAgOAQAAQAFAAAEACIgCAJIgFgBQgFAAAAAEIAAAGIALAAIAAAKIgLAAIAAAqgADRAkIAAg0IANAAIAAAHQAFgIAJAAQAFAAACACIgCALIgGgBQgNAAAAAQIAAAZgAB2AkIAAgqIgIAAIAAgKIAIAAIAAgGQAAgOAQAAQAGAAADACIgBAJIgFgBQgGAAAAAEIAAAGIALAAIAAAKIgLAAIAAAqgAhtAkIAAg0IAMAAIAAAHQAFgIAJAAIAEABIAAAKQgSAAAAARIAAAZg");
	this.shape_1.setTransform(74.575,167);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006AFF").s().p("AoWCbQgMAAgJgJQgJgIAAgNIAAj5QAAgMAJgJQAJgJAMAAIQtAAQAMAAAJAJQAJAJAAAMIAAD5QAAANgJAIQgJAJgMAAg");
	this.shape_2.setTransform(74.6,166.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(227));

	// image
	this.instance_6 = new lib.BaseImage();
	this.instance_6.setTransform(18,213);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(227));

	// BG white
	this.instance_7 = new lib.BG2("synched",0);
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(227));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1187,283,1502.3,318);
// library properties:
lib.properties = {
	id: '0A699BA23F964BD280A6D5329E5C089A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./BaseImage.png", id:"BaseImage"},
		{src:"./line_1.png", id:"line_1"},
		{src:"./line_2.png", id:"line_2"},
		{src:"./Notification.png", id:"Notification"},
		{src:"./Notification_bg.png", id:"Notification_bg"},
		{src:"./Site.png", id:"Site"},
		{src:"./Site_btn.png", id:"Site_btn"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0A699BA23F964BD280A6D5329E5C089A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;