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



(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

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


(lib.mc_sparkle_item = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAbIjggbIDggZIAZjgIAbDgIDfAZIjfAbIgbDfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0.204,1],0,0,0,0,0,32.1).s().p("AjcDdQhdhcAAiBQAAiBBdhbQBbhcCBAAQCCAABbBcQBdBbAACBQAACBhdBcQhbBciCAAQiBAAhbhcg");
	this.shape_1.setTransform(0,0.0188,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_sparkle_item, new cjs.Rectangle(-25,-25,50,50), null);


(lib.mc_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EA/sgCyIAAGXQAAAHALAKQANAJATADIiIAAQAHgBAVgKQAIgHAAgKIAAm8QAAgJgHgFIgPgKQgIgFgTgIQgPgFgEAAICpAAIHwF6IAAlbQAAgHgLgJQgKgKgQgFICQAAQgQAFgLAJQgPAMAAAFIgBHygEAikgCqIAAGNQAAAIANAJQAKALAPADIiCAAQASgDAIgJQAMgLAAgGIAAnGQAAgIgIgJQgIgJgOgDICYAAIECGRID9mRICaAAQgXAIgGAIQgJAHAAAQIAAG3QAAALAOAMQAJAFAXAGIjBAAQAEAAAJgDQANgFAFgGQAHgFAAgOIAAmLIkfG4gAGnBJIgBklQABgLgKgKQgEgFgNgHQgLgFgCAAIDCAAQgVAGgJAJQgKAKABANIgCE8QAAA5AyAiQA3AnBogBQDagEgBiBIAAk3QABgQgLgIQgKgLgTgEICXAAQgLACgUAKQgOAJAAAVIAAEjQAAA3giAoQhGBVi/ACIgMAAQkrAAAAi4gEA4zAEAQAEAAANgFQATgHAFgIQAHgHgFgJQAAgCgMgRIhEhpIk7AAIhNB1QgNASAGAIQAHALAeAHIiegBIAPgFQANgHAHgFQAOgIAPgVIFHniIE/HhQAMARAPAKQAPALAmAKgEAzpAA+IEOAAIiKjLgAjsEBIARgFQASgGAFgGQARgNAAgLIAAjfIjNjKQgRgSgUgJQgKgGgWgJQgUgHgDAAIDwAAQgjAHgGALQgEAKAUAXICsCoICGiiQAZgegBgHQgFgPgdgFICiAAQgbAFgVAPQgPAHgOAUIi5DPIAADaQAAASALAKQAHAFASAFQAPAFADAAgA7wEAQADAAAPgFQATgIAIgHQAKgKAAgKIAAmwQAAgLgMgLQgGgHgOgHIgQgFIGMAAQCkAABwBEQB0BEAHBsQAJBwiNBPQiLBPjMAAgA5GDQQAlAIAkACQAXACA0AAQCqAABZguQBqg4ACiBQADhUhag/QhbhBiDAAIjOAAgEgioAEBIANgGQAOgIAFgGQAKgKAAgJIAAm1QAAgMgJgJQgFgFgNgHIgPgGIDEAAIgNAFQgLAFgHAGQgOALAAAMIAAG1QAAALAOANQAHAFALAFIANAFgEgwBgDTQgNgRgNgKQgJgHgQgHQgPgGgDAAIDVAAQgYAJgGAJQgMANAJANIDiFQIDclcQAHgKgFgJQgEgGgNgDQgJgEgDAAICXAAQgTAFgMAIQgUAMgIAOIk0HcgEgzwAEAQAEAAAOgFQASgHAGgIQAFgHgEgJIgLgTIhGhpIk5AAIhPB1QgMASAGAIQAHALAfAHIiegBIAOgFQANgHAIgFQARgKAKgTIFIniIFAHhQAMARAOAKQAPALAmAKgEg45AA+IEOAAIiKjLgEhJxAEAQAigJAMgLQAJgMABgIIAAmwQgBgJgKgNQgKgKgbgJIGLAAQClAABwBEQBzBEAIBsQAJBwiMBPQiMBPjMAAgEhHGADQQA2AMBdAAQCsAABYguQBqg4ADiBQABhVhZg+QhbhBiFAAIjMAAgAcsEAQgVgBgTgLQgOgHgKgKIi+i4QgMgOgRgGQgbgLgiAAIhFAAIAADNQABAMAQALQAWAQAJAAIjEAAQADAAAKgGQAMgHAGgGQAMgLAAgJIAAm0QgBgHgIgOQgHgGgMgHQgLgFgDAAIEIAAQBbAABFAcQBWAiACBAQAEA+hSAmQhUAcgFAAQAPAEAlAaQA8AnArAzQAiAlAtAnQAvAoATAHQAiANAaAEgAWPgSIBsgBQDOgzg0hUQgyhOiLAAIhJAAg");
	this.shape.setTransform(0.25,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(-472,-27,944.5,54.6), null);


(lib.mc_cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {off:0,on:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// copyWhite
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBGQgPgFgLgMIAMgQQAHAJANAFQAMAHAPgBQAQABAJgIQAJgGAAgLQgBgLgJgEQgJgGgNgCIgZgHQgOgDgJgJQgJgJAAgPQAAgMAGgJQAHgJAMgGQAMgFAQgBQASAAAOAHQANAFAJAJIgLAPQgGgHgMgFQgLgGgOAAQgOABgIAGQgJAHAAAJQAAAJAJAFQAJAEANADQANADANAFQANAEAJAHQAJAJABARQAAANgHAKQgGAJgNAGQgNAGgSAAQgRAAgPgGg");
	this.shape.setTransform(154.225,2.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmBKIAAheQgBgSgIgIQgJgHgPAAQgMAAgMAHQgLAGgHAJIAABpIgWAAIAAiQIAWAAIAAAVQAFgGAIgFQAIgGAKgDQAJgEALAAQAXAAALALQAMAMAAAYIAABkg");
	this.shape_1.setTransform(138.675,2.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglBCQgQgKgJgSQgJgRAAgVQAAgUAJgSQAJgQAQgLQAQgJAVgBQAWABAQAJQAQALAJAQQAJASAAAUQAAAVgJARQgJASgQAKQgQAKgWAAQgVAAgQgKgAgZgvQgLAIgGANQgFAMAAAOQAAAPAFANQAGANALAHQALAIAOAAQAPAAALgIQALgHAFgNQAGgNAAgPQAAgOgGgMQgFgNgLgIQgLgIgPAAQgOAAgLAIg");
	this.shape_2.setTransform(121.325,2.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKBiIAAiQIAVAAIAACQgAgKhHQgEgEAAgHQAAgGAEgEQAFgEAFgBQAGABAFAEQAEAEAAAGQAAAHgEAEQgFAEgGABQgFgBgFgEg");
	this.shape_3.setTransform(108.875,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBVQgJgJABgQIAAhdIgZAAIAAgUIAZAAIAAgoIAVAAIAAAoIAeAAIAAAUIgeAAIAABZQAAAHAEAFQADAGAHAAQAFAAAEgCQAEgBADgDIAGARQgEAEgGADQgHACgKAAQgPAAgHgJg");
	this.shape_4.setTransform(100.65,0.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbBCQgRgKgIgRQgKgRAAgWQAAgUAKgSQAIgRARgKQAQgJAVgBQATAAANAHQANAIAIAKIgPAOQgHgKgKgEQgJgFgLAAQgPABgLAGQgLAHgGANQgGAMAAAQQAAAQAGANQAGAMALAHQALAIAPAAQALAAAJgFQAKgEAHgKIAPAOQgIALgNAHQgNAHgTAAQgVAAgQgKg");
	this.shape_5.setTransform(88.525,2.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBDQgQgKgKgSQgKgQABgXQgBgUAKgSQAJgQAQgLQAQgJAUgBQAWABAQAJQAPALAIARQAJASgBAVIAAAFIh0AAQABAOAGALQAHAMALAGQAMAIAOgBQANABAMgGQAMgEAIgJIALAPQgLALgPAFQgOAGgRAAQgWAAgQgJgAAxgIQgBgLgFgLQgFgLgLgIQgKgHgQgBQgPABgKAHQgLAIgEAKQgGALgBAMIBfAAIAAAAg");
	this.shape_6.setTransform(71.9,2.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKBkIAAjHIAVAAIAADHg");
	this.shape_7.setTransform(59.575,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKBkIAAjHIAVAAIAADHg");
	this.shape_8.setTransform(52.325,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBCQgQgKgJgSQgJgRAAgVQAAgUAJgSQAJgQAQgLQAQgJAVgBQAWABAQAJQAQALAJAQQAJASAAAUQAAAVgJARQgJASgQAKQgQAKgWAAQgVAAgQgKgAgZgvQgLAIgGANQgFAMAAAOQAAAPAFANQAGANALAHQALAIAOAAQAPAAALgIQALgHAFgNQAGgNAAgPQAAgOgGgMQgFgNgLgIQgLgIgPAAQgOAAgLAIg");
	this.shape_9.setTransform(39.875,2.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBaQgXgNgOgXQgOgXABgfQgBgeAOgXQAOgXAXgNQAXgNAcAAQASAAAOAFQAOAFAMAJQAKAJAIALIgVAMQgJgNgOgIQgPgIgRAAQgVAAgRAKQgRALgKASQgLASAAAXQAAAYALASQAKATARAKQARAKAVAAQARAAAPgIQAOgIAJgNIAWAMQgNARgTALQgSALgbABQgcgBgXgNg");
	this.shape_10.setTransform(21,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjBKIAAiQIAXAAIAAAYQAJgMALgHQANgIAOAAIAAAXIgEgBIgFAAQgHABgHADQgJADgFAGQgGAEgEAHIAABlg");
	this.shape_11.setTransform(-2.35,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgwA/QgLgLAAgYIAAhlIAWAAIAABeQAAATAJAHQAJAHAPAAQAMAAALgGQAMgHAHgJIAAhpIAWAAIAACQIgWAAIAAgVQgJAKgNAHQgOAHgPAAQgXAAgMgLg");
	this.shape_12.setTransform(-16.925,2.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgzBaQgWgOgNgXQgMgXAAgeQAAgdAMgXQANgXAWgOQAWgNAdAAQAeAAAWANQAWAOANAXQAMAXAAAdQAAAegMAXQgNAXgWAOQgWANgeABQgdgBgWgNgAgmhGQgRALgJASQgIATgBAWQABAXAIATQAJASARALQAQAKAWAAQAWAAARgKQAQgLAJgSQAJgTAAgXQAAgWgJgTQgJgSgQgLQgRgKgWAAQgWAAgQAKg");
	this.shape_13.setTransform(-37.175,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiBDQgRgKgJgSQgKgQAAgXQAAgUAKgSQAJgQAQgLQAQgJAUgBQAWABAPAJQAQALAJARQAHASABAVIAAAFIh0AAQAAAOAGALQAHAMALAGQAMAIAOgBQANABAMgGQAMgEAIgJIALAPQgLALgOAFQgPAGgSAAQgUAAgRgJgAAwgIQAAgLgFgLQgFgLgKgIQgLgHgQgBQgPABgKAHQgKAIgGAKQgFALAAAMIBdAAIAAAAg");
	this.shape_14.setTransform(-65.85,2.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBKIAAiQIAWAAIAAAYQAJgMALgHQANgIAPAAIAAAXIgFgBIgFAAQgHABgIADQgHADgGAGQgGAEgEAHIAABlg");
	this.shape_15.setTransform(-78.9,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglBCQgQgKgJgSQgJgRAAgVQAAgUAJgSQAJgQAQgLQAQgJAVgBQAWABAQAJQAQALAJAQQAJASAAAUQAAAVgJARQgJASgQAKQgQAKgWAAQgVAAgQgKgAgZgvQgLAIgGANQgFAMAAAOQAAAPAFANQAGANALAHQALAIAOAAQAPAAALgIQALgHAFgNQAGgNAAgPQAAgOgGgMQgFgNgLgIQgLgIgPAAQgOAAgLAIg");
	this.shape_16.setTransform(-93.775,2.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKBkIAAjHIAVAAIAADHg");
	this.shape_17.setTransform(-106.225,-0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhDBmIAAjHIAWAAIAAAWQAJgMAMgHQANgGAPgBQATABAOAJQAOAJAJARQAHARABAXQgBAYgHAQQgJARgOAJQgOAJgTAAQgPAAgMgGQgMgHgKgMIAABNgAgbhKQgLAHgHAJIAABBQAHAKALAGQAMAHAOAAQANAAALgHQAKgHAFgNQAGgMAAgQQAAgQgGgMQgFgNgKgHQgLgHgNgBQgOABgMAGg");
	this.shape_18.setTransform(-118.2,4.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAsBJIgsg8IgrA8IgaAAIA4hKIg0hGIAaAAIAnA3IAog3IAaAAIg1BGIA5BKg");
	this.shape_19.setTransform(-135.05,2.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhBBkIAAjHICCAAIAAAWIhpAAIAABBIBoAAIAAAVIhoAAIAABFIBpAAIAAAWg");
	this.shape_20.setTransform(-151,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// lineWhite
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.298)").s().p("A5JAKIAAgTMAyTAAAIAAATg");
	this.shape_21.setTransform(1,17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("A5JAKIAAgTMAyTAAAIAAATg");
	this.shape_22.setTransform(1,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-20,326,40.6);


(lib.mc_back = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Egu3BdwMAAAi7fMBdvAAAMAAAC7fg");
	this.shape.setTransform(300,250.0031,1,0.4167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_back, new cjs.Rectangle(0,0,600,500), null);


(lib.clickthrough = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_sparkle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var r = this;
		r.tl = gsap.timeline({paused:true});
		
		r.RanNum = function(inNum, inMod){
			tmp = Math.random() * inNum + inMod;
			return tmp;
		}
		
		function init() {
			r.m_item.alpha = 0;
			r.m_item.scale = r.RanNum(.2, .8);
			r.m_item.rotation = r.RanNum(360, 0);
			r.tl.add("start", "+=0");
			r.tl.to( r.m_item , 1.5 , {alpha:r.RanNum(.2, .8), rotation:"+=45", ease:Quad.easeInOut} , "start+=0" );
			r.tl.to( r.m_item , .5 ,   {alpha:0} , "start+=1" );
		}
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.m_item = new lib.mc_sparkle_item();
	this.m_item.name = "m_item";
	this.m_item.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.m_item).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_sparkle, new cjs.Rectangle(-25,-25,50,50), null);


(lib.mc_product1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var r = this;	 
			
		var numClips = 1;
		var clipPrefix = 's';
		
		/*
		* delay this call because the "clip" isn't ready yet
		*/
		
		setTimeout( function(){ initClip() } , 200 );
		
		function initClip() {
			
			var tl = gsap.timeline({repeat:-1 , repeatDelay:0.2} );
			tl.add("start" , "+=0");
			
			for( var i = 0 ; i < 25 ; i++ ) {
				var clip = r[clipPrefix + i];
				if( !clip ) continue;		
				tl.fromTo( clip.tl , 2.5 , {progress:0} , {progress:1} , "start+=" + i * 0.5 );
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mc_sparkle
	this.s15 = new lib.mc_sparkle();
	this.s15.name = "s15";
	this.s15.setTransform(487,299.05,0.4332,0.4332,0,0,0,1.4,1.8);

	this.s14 = new lib.mc_sparkle();
	this.s14.name = "s14";
	this.s14.setTransform(475.95,138,0.4332,0.4332,0,0,0,1.2,1.6);

	this.s13 = new lib.mc_sparkle();
	this.s13.name = "s13";
	this.s13.setTransform(412.95,206,0.4332,0.4332,0,0,0,1.2,1.6);

	this.s12 = new lib.mc_sparkle();
	this.s12.name = "s12";
	this.s12.setTransform(373.95,216,0.4332,0.4332,0,0,0,1.2,1.6);

	this.s11 = new lib.mc_sparkle();
	this.s11.name = "s11";
	this.s11.setTransform(353,315,0.4104,0.4104,0,0,0,1.2,1.6);

	this.s10 = new lib.mc_sparkle();
	this.s10.name = "s10";
	this.s10.setTransform(337,211,0.4104,0.4104,0,0,0,1.1,1.6);

	this.s9 = new lib.mc_sparkle();
	this.s9.name = "s9";
	this.s9.setTransform(274,20,0.3876,0.3876,0,0,0,1.3,1.7);

	this.s8 = new lib.mc_sparkle();
	this.s8.name = "s8";
	this.s8.setTransform(264,80,0.4332,0.4332,0,0,0,1.2,1.5);

	this.s7 = new lib.mc_sparkle();
	this.s7.name = "s7";
	this.s7.setTransform(262,157,0.342,0.342,0,0,0,1.3,1.6);

	this.s4 = new lib.mc_sparkle();
	this.s4.name = "s4";
	this.s4.setTransform(168.95,240.05,0.5244,0.5244,0,0,0,0.8,1.2);

	this.s3 = new lib.mc_sparkle();
	this.s3.name = "s3";
	this.s3.setTransform(172,202,0.4104,0.4104,0,0,0,0.8,1.2);

	this.s6 = new lib.mc_sparkle();
	this.s6.name = "s6";
	this.s6.setTransform(258,225,0.5016,0.5016,0,0,0,1.2,1.6);

	this.s2 = new lib.mc_sparkle();
	this.s2.name = "s2";
	this.s2.setTransform(96,223,0.418,0.418,0,0,0,1,1.2);

	this.s5 = new lib.mc_sparkle();
	this.s5.name = "s5";
	this.s5.setTransform(211,234,0.2888,0.2888,0,0,0,1.6,1.8);

	this.s1 = new lib.mc_sparkle();
	this.s1.name = "s1";
	this.s1.setTransform(40,229,0.494,0.494,0,0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1},{t:this.s5},{t:this.s2},{t:this.s6},{t:this.s3},{t:this.s4},{t:this.s7},{t:this.s8},{t:this.s9},{t:this.s10},{t:this.s11},{t:this.s12},{t:this.s13},{t:this.s14},{t:this.s15}]}).wait(1));

	// Layer_1
	this.instance = new lib.product();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_product1, new cjs.Rectangle(0,0,600,500), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/**
		* Squarewave CreateJS Template 3.1 (Jan 2020)
		**/
		var root = r = this,
		    adCompleted = false,
			isOver = false,
			timeout;
		
		/**** uncomment to use within creative ******/
		/*
		root.clickthrough.on('mouseover' , onRollOver );
		root.clickthrough.on('mouseout' , onRollOut );
		root.clickthrough.on('click' , onClick );
		*/
		
		/*
		* remove elements for backup capture
		*/
		if( queryVar('capture') ) {
			// use this for removing items in backups
		}
		
		this.onInit = function()
		{
			
			setTimeout( function(){ 
				console.log('%c----------------------------------------\n------------- 15 SECONDS ---------------\n----------------------------------------\n', 'background: #ffff33; color: #ff00ff');
			} , 15000 );
				
			var tl = gsap.timeline({onComplete:function(){ if(!isOver){ r.adHelper.sleep(); } adCompleted = true; }});
			//var tl = gsap.timeline({ onComplete:function(){ adCompleted = true; } });
			
			tl.addLabel("frame01", "0");
			tl.to(root.sunflare, 4, {scale:2, alpha:0, rotation:"+=60"}, "frame01");
			tl.from(root.m_product1, 12, {scale:"+=.15"}, "frame01");
			tl.from(root.m_logo, 3, {alpha:0}, "frame01");
			tl.from(root.m_cta, 1, {y:"+=20", alpha:0}, "frame01+=1");
			
			//tl.addLabel("frame02", "frame01+=4");
			//tl.from(root.m_product2, 1, {alpha:0}, "frame02");
			//tl.from(root.m_product2, 6, {scale:"+=.1"}, "frame02");
			
		/*	tl.addLabel("frame03", "frame02+=3");
			tl.from(root.m_product3, 1, {alpha:0}, "frame03");
			tl.from(root.m_product3, 6, {scale:"+=.1"}, "frame03");
		*/
			
		}
		
		
		this.onRollOverEvent = function(e)
		{
			// wake up creative if asleep //
			clearTimeout( timeout );
			if( root.adHelper && !root.adHelper.awake ) root.adHelper.wake();
			isOver = true;
			console.log("creative-mouse over" );
			if( adCompleted ) {
			}
			
			root.m_cta.gotoAndStop("on");
		}
		
		this.onRollOutEvent = function(e)
		{
			if( adCompleted ) timeout = setTimeout( function(){ if(!isOver) r.adHelper.sleep(); } , 3000 );
			isOver = false
			console.log("creative-mouse out" );
			if( adCompleted ) {
				}
				
			root.m_cta.gotoAndStop("off");
		}
		
		this.onClickEvent = function(e)
		{
			console.log("creative-click");
		}
		
		/**
		* AD HELPER METHODS
		* 
		* If everything is setup correctly, you can use 
		* root.adHelper.sleep() & root.adHelper.wake() 
		* to manually control AdHelper.
		* NOTE: sleep() pauses CreateJS AND TweenLite
		*
		**/
		this.adHelper = null; // adhelper reference //
		this.onSlowDown = function()
		{
			console.log("creative-slowdown");
		}
		
		this.onSleep = function()
		{
			console.log("creative-sleep");
		}
		
		this.onWake = function()
		{
			console.log("creative-wake");
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clickthrough
	this.clickthrough = new lib.clickthrough();
	this.clickthrough.name = "clickthrough";
	this.clickthrough.setTransform(300,250.2,2,1.9999,0,0,0,150,125.1);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHgEgutAm6MBdbAAAMAAAhNzMhdbAAAg");
	this.shape.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// cta
	this.m_cta = new lib.mc_cta();
	this.m_cta.name = "m_cta";
	this.m_cta.setTransform(300.1,460.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.m_cta).wait(1));

	// logo
	this.m_logo = new lib.mc_logo();
	this.m_logo.name = "m_logo";
	this.m_logo.setTransform(298,416,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.m_logo).wait(1));

	// product1
	this.m_product1 = new lib.mc_product1();
	this.m_product1.name = "m_product1";
	this.m_product1.setTransform(290,232,1,1,0,0,0,290,232);

	this.timeline.addTween(cjs.Tween.get(this.m_product1).wait(1));

	// back
	this.instance = new lib.mc_back();
	this.instance.setTransform(300,600,1,1,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgwbgonMBg3AAAMAAABRPMhg3AAAg");
	this.shape_1.setTransform(300,250);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgwbAooMAAAhRPMBg3AAAMAAABRPg");
	this.shape_2.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(300,250,300,250);
// library properties:
lib.properties = {
	id: '99F9E67B1098454B98616AAEA28ACA00',
	width: 600,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/product.jpg?1643655790152", id:"product"}
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
an.compositions['99F9E67B1098454B98616AAEA28ACA00'] = {
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