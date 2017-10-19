var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var text8;
var text9;
var text10;
var text11;
var text12;
var text13;
var backgroundColor;
var lonely;
var comfort;
var focus;
var patient;
var calm;
var love;
var dazed;
var anxious;
var depression;
var exhaustion;
var bittersweet;
var pride;
var clean;

function preload() {
    
    lonely = loadSound("LONELY.wav");
    comfort = loadSound("COMFORT.wav");
    focus = loadSound("FOCUS.wav");
    patient = loadSound("PATIENT.wav");
    calm = loadSound("CALM.wav");
    love = loadSound("LOVE.wav");
    dazed = loadSound("DAZED.wav");
    anxious = loadSound("ANXIOUS.wav");
    depression = loadSound("DEPRESSED.wav");
    exhaustion = loadSound("EXHAUSTED.wav");
    bittersweet = loadSound("LONGING.wav");
    pride = loadSound("PRIDE2.wav");
    clean = loadSound("REFRESHED.wav");
}

function setup() {
  createCanvas(1366, 768);
	backgroundColor = random(255);
	
    text1 = new Jitter("LONELY", lonely, 0.2);
	text2 = new Jitter("PATIENT", patient, 0.2);
	text3 = new Jitter("FOCUSED", focus, 1);
	text4 = new Jitter("COMFORT", comfort, 1.2);
    text5 = new Jitter("CALM", calm, 1.2);
    text6 = new Jitter("LOVE", love, 1.5);
    text7 = new Jitter("DAZED", dazed, 1.2);
    text8 = new Jitter("ANXIOUS", anxious, 0.3);
    text9 = new Jitter("DEPRESSION", depression, 0.3);
    text10 = new Jitter("EXHAUSTION", exhaustion, 1);
    text11 = new Jitter("BITTERSWEET", bittersweet, 1);
    text12 = new Jitter("PRIDE", pride, 0.5);
    text13 = new Jitter("CLEAN", clean, 1);
    
    comfort.loop(0, 1, 0, 4, 38);
    lonely.loop(0, 1, 0, 1, 40);
    focus.loop(0, 1, 0, 6, 25);
    patient.loop(0, 1, 0, 3, 14);
    calm.loop(0, 1, 0, 1, 31);
    love.loop(0, 1, 0, 1, 46);
    dazed.loop(0, 1, 0, 1, 29);
    anxious.loop(0, 1, 0, 0, 14);
    depression.loop(0, 1, 0, 0, 28);
    exhaustion.loop(0, 1, 0, 7, 22);
    bittersweet.loop(0, 1, 0, 1, 26);
    pride.loop(0, 1, 0, 1, 29);
    clean.loop(0, 1, 0, 2, 41);
}

function draw() { 
	backgroundColor += random(-5, 5);
	background(backgroundColor);
	text1.move();
	text1.display();
    text1.soundz();
	text2.move();
	text2.display();
    text2.soundz();
	text3.move();
	text3.display();
    text3.soundz();
	text4.move();
	text4.display();
    text4.soundz();
    text5.move();
    text5.display();
    text5.soundz();
    text6.move();
    text6.display();
    text6.soundz();
	text7.move();
    text7.display();
    text7.soundz();
    text8.move();
    text8.display();
    text8.soundz();
    text9.move();
    text9.display();
    text9.soundz();
    text10.move();
    text10.display();
    text10.soundz();
    text11.move();
    text11.display();
    text11.soundz();
    text12.move();
    text12.display();
    text12.soundz();
    text13.move();
    text13.display();
    text13.soundz();
}

function Jitter(word, sound, adjustment) {
  this.x = random(-20, width-200);
  this.y = random(50,height-20);
  this.fontsize = random(10, 70);
  this.speed = 1;
  this.word = word;

	

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.fontsize += random(-this.speed, this.speed);
	
  };
	
	this.display = function() {
		
    text(this.word, this.x, this.y);
		textSize(this.fontsize);
		fill(random(255));
  };
    this.soundz = function() {
        var distance = dist(mouseX,mouseY,this.x,this.y) 
        var volume = adjustment*exp(-distance/50);
        console.log(distance);
        //console.log(volume);
        sound.amp(volume);
    }
}