


var SpeechRec = new p5.SpeechRec();
var spech;

var img;

var t;
var m = 1;


var timmerer, timmer;
var tm;
var lock, lloc;
var mmt = 2;
var uk, aa;

SpeechRec.continuous = true;
SpeechRec.interimResult = true;

function preload() {
  timmerer = loadImage("dd.jpg");
  timmer = loadImage("di.jpg");
  lloc = loadImage("ddd.jpg");
  lock = loadSound("tt.wav");
  uk = loadSound("uk.mp3");
  aa = loadSound("aa.mp3");
}

function setup() {
  t = createCanvas(windowWidth, windowHeight);
 


  tm = timmerer;


  background(255);

  t.mouseClicked(galarry);





  spech = new p5.Speech();

  spech.setRate(0.8);
  SpeechRec.onResult = showResult;



}
function galarry() {
  if (mmt === 2) {
    if (tm === timmerer) {
      tm = timmer;
     
      SpeechRec.start();

    } else if (tm === timmer) {
      tm = timmerer;
    }
  }

}

function draw() {
  background(tm, 0, 0, windowWidth, windowHeight);
  
}



function showResult() {
  img = SpeechRec.resultString;
  img = img.toLowerCase();
  console.log(SpeechRec.resultString);
  if (mmt === 2) {
    if (img.includes('youtube') && img.includes('search')) {
      img = img.replace('youtube', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok Sir I am searching' + img + 'on youtube');
      window.open("https://www.youtube.com/results?search_query=" + img);
    } else if (img.includes('youtube')) {
      spech.speak('ok Sir opening youtube');
      window.open("https://www.youtube.com/");
    } else if (img.includes('whitehat') || img.includes('whiteHat') || img.includes('white hat') || img.includes('white Hat')) {
      spech.speak('ok Sir opening white hat junior dashboard');
      window.open("https://code.whitehatjr.com/s/dashboard");
    } else if (img.includes('whatsapp')) {
      spech.speak('ok Sir opening whatsapp');
      window.open("https://web.whatsapp.com/");
    } else if (img.includes('mail')) {
      spech.speak('ok Sir opening mail');
      window.open("https://mail.google.com/");
    } else if (img.includes('map')) {
      spech.speak('ok Sir opening map');
      window.open("https://www.google.co.in/maps");
    } else if (img.includes('map') && img.includes('search')) {
      img = img.replace('youtube', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok Sir I am searching' + img + 'on map');
      window.open("https://www.google.co.in/maps/search/" + img);
    } else if (img.includes('play store')) {
      spech.speak('ok Sir opening play store');
      window.open("https://play.google.com/");
    } else if (img.includes('set timer')) {

    } else if (img.includes('time')) {
      let h = hour();
      let m = minute();
      let s = second();
      spech.speak('Sir Time Is' + h + 'Hours' + m + 'Minutes' + s + 'seconds');
    } else if (img.includes('mel')) {
      spech.speak('ok Sir opening mail');
      window.open("https://mail.google.com/");

    } else if (img.includes('thankyou')) {
      spech.speak('its my pleasure');
    } else if (img.includes('quit')) {
      window.close();
    } else if (img.includes('google') && img.includes('search')) {
      img = img.replace('google', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok sir I am searching' + img + 'on google');
      window.open("https://www.google.com/search?q=" + img);


    } else if (img.includes('information') && img.includes('get')) {
      img = img.replace('information', '');
      img = img.replace('get', '');
      img = img.replace('from', '');
      img = img.replace('all', '');
      img = img.replace('on', '');
      img = img.replace('everything', '');
      img = img.replace('about', '');
      spech.speak('ok sir I am searching' + img + 'on google youtube maps and wikipeda');
      window.open("https://www.google.com/search?q=" + img);
      window.open("https://en.wikipedia.org/wiki/" + img);
      window.open("https://www.google.co.in/maps/search/" + img);
      window.open("https://www.youtube.com/results?search_query=" + img);
    } else if (img.includes('wikipedia') && img.includes('search')) {
      img = img.replace('wikipedia', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok sir I am searching' + img + 'on Wikipedia');
      window.open("https://en.wikipedia.org/wiki/" + img);


    } else if (img.includes('wikipedia')) {
      spech.speak('ok Sir opening google');
      window.open("https://en.wikipedia.org/wiki/");
    } else if (img.includes('computer class')) {
      spech.speak('ok Sir opening google class room computer');
      window.open("https://classroom.google.com/u/0/c/MzEwMTEyOTY2MTky");
    } else if (img.includes('english class')) {
      spech.speak('ok Sir opening google class room english');
      window.open("https://classroom.google.com/u/0/c/MzExNzcxNzkyMTcx");
    } else if (img.includes('science class ')) {
      spech.speak('ok Sir opening google class room science');
      window.open("https://classroom.google.com/u/0/c/MzExOTM2NDczMjkz");
    } else if (img.includes('hindi class')) {
      spech.speak('ok Sir opening google class room hindi');
      window.open("https://classroom.google.com/u/0/c/MTE2MTk3MTE3Nzg4");
    } else if (img.includes('sst class')) {
      spech.speak('ok Sir opening google class room SST');
      window.open("https://classroom.google.com/u/0/c/MzExNjAzODkzNTE1");
    } else if (img.includes('maths class')) {
      spech.speak('ok Sir opening google class room maths');
      window.open("https://classroom.google.com/u/0/c/MTE2MDg2NzcwOTY4");
    } else if (img.includes('w e class')) {
      spech.speak('ok Sir opening google class room W E');
      window.open("https://classroom.google.com/u/0/c/MzEyNTE3NjI4ODY4");
    } else if (img.includes('we class')) {
      spech.speak('ok Sir opening google class room W E');
      window.open("https://classroom.google.com/u/0/c/MzEyNTE3NjI4ODY4");
    } else if (img.includes('library class')) {
      spech.speak('ok Sir opening google class room library');
      window.open("https://classroom.google.com/u/0/c/MTE2MjM1ODU0MzU0");
    } else if (img.includes('computer meeting')) {
      spech.speak('ok Sir opening google meeting computer');
      window.open("https://meet.google.com/lookup/hx2k4f2x64?authuser=0&hs=179");
    } else if (img.includes('english meeting')) {
      spech.speak('ok Sir opening google meeting english');
      window.open("https://meet.google.com/lookup/g2t7unim7d?authuser=0&hs=179");
    } else if (img.includes('science meeting')) {
      spech.speak('ok Sir opening google meeting science');
      window.open("https://meet.google.com/lookup/gazx37h3qh?authuser=0&hs=179");
    } else if (img.includes('hindi meeting')) {
      spech.speak('ok Sir opening google meeting hindi');
      window.open("https://meet.google.com/lookup/heipevbnmk?authuser=0&hs=179");
    } else if (img.includes('sst meeting')) {
      spech.speak('ok Sir opening google meeting SST');
      window.open("https://meet.google.com/lookup/hfvmc4bos4?authuser=0&hs=179");
    }
    else if (img.includes('maths meeting')) {
      spech.speak('ok Sir opening google meeting maths');
      window.open("https://meet.google.com/lookup/dr3u7fjww4?authuser=0&hs=179");
    } else if (img.includes('w e meeting')) {
      spech.speak('ok Sir opening google meeting W E');
      window.open("https://meet.google.com/lookup/dgsvatp7t6?authuser=0&hs=179");
    } else if (img.includes('we meeting')) {
      spech.speak('ok Sir opening google meeting W E');
      window.open("https://meet.google.com/lookup/dgsvatp7t6?authuser=0&hs=179");
    } else if (img.includes('library meeting')) {
      spech.speak('ok Sir opening google meeting library');
      window.open("https://meet.google.com/lookup/b2ybaszwq5?authuser=0&hs=179");
    } else if (img.includes('meet')) {
      spech.speak('ok Sir opening google meet ');
      window.open("https://meet.google.com/");
    } else if (img.includes('class')) {
      spech.speak('ok Sir opening google class room');
      window.open("https://classroom.google.com/");
    } else if (img.includes('google')) {
      spech.speak('ok Sir opening google');
      window.open("https://www.google.com/");
    } else if (img.includes('shutdown')) {

      window.close();
    } else if (img.includes('new tab')) {
      spech.speak('ok Sir opening new tab');
      window.open('');
    }
  }
  
  
  
  if (img.includes('unlock 2006') || img.includes('deactivate lockdown 2006') || img.includes('deactivate protocol 2911') || img.includes('deactivate lock down 2006') || img.includes('deactivate emergency protocol 2911') || img.includes('deactivate protocol 2911') && mmt === 1) {
    tm = timmer;
    mmt = 2;
    uk.play();
  } else if (img.includes('lockdown') || img.includes('lock down') || img.includes('activate emergency protocol 2 9 1 1') || img.includes('activate emergency protocol 2911') && mmt === 2) {
    tm = lloc;
    lock.play();
    mmt = 1;
  }

  if((img.includes('a')||img.includes('e')||img.includes('i')||img.includes('o')||img.includes('u')||img.includes('m')||img.includes('i')||img.includes(' ')) && mmt===1 ){
    lock.play();
  }
}
