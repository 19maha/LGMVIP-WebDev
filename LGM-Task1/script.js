var images = [
  "./images/life1.jpg",
  "./images/life2.jpeg",
  "./images/life3.jpg",
  "./images/life4.jpg",
  "./images/life5.jpg",
];
var i = 0;

function slides() {
  document.getElementById("slide").src = images[i];
  if (i < images.length - 1) {
      i++;
  } else
      i = 0;
}
setInterval(slides, 2000);
