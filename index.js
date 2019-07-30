var inspoBtn=$("#inspo");
var loveBtn=$("#love");
var cuteBtn=$("#cute");
var textBox=$(".text");
var message=$(".text p");
var imageBox=$(".image");
var image=$("#cuteImg");
var contentBox=$(".content");

textBox.hide();
imageBox.hide();

inspoBtn.on("click", showInspo);
loveBtn.on("click", showLove);
cuteBtn.on("click", showCute);

function showInspo() {
  contentBox.css("justify-content", "space-between");
  var inspiration=[
    "Limitation is your imagination.",
    "Success is inevitable if you keep moving. The only thing that matters is that you keep going.",
    "Everyone has the potential to live a fulfilling life. The difference lies in how we look at things.",
    "All you need is the plan, the road map, and the courage to press on to your destination.",
    "Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.",
    "Light tomorrow with today.",
    "Dwell in possibility."
  ];
  var randomNum=Math.floor(Math.random()*inspiration.length);
  message.text(inspiration[randomNum]);
  textBox.show();
  imageBox.hide();
}

function showLove() {
  contentBox.css("justify-content", "space-between");
  var selfLove=[
    "Be gentle with yourself, learn to love yourself, to forgive yourself, for only as we have the right attitude toward ourselves can we have the right attitude toward others.",
    "Love yourself unconditionally, just as you love those closest to you despite their faults.",
    "Love yourself instead of abusing yourself.",
    "To love yourself right now, just as you are, is to give yourself heaven. Don't wait until you die. If you wait, you die now. If you love, you live now.",
    "Loving yourself isn’t vanity. It’s sanity.",
    "Loving yourself is the greatest revolution.",
    "Strong, kind, beautiful. They all describe you. You just haven't realized it yet."
  ];
  var randomNum=Math.floor(Math.random()*selfLove.length);
  message.text(selfLove[randomNum]);
  textBox.show();
  imageBox.hide();
}

function showCute() {
  contentBox.css("justify-content", "space-between");
  var randomNum=Math.floor(Math.random()*8)+1;
  image.attr("src", "./images/image-"+randomNum+".jpg");
  imageBox.show();
  textBox.hide();
}
