// If this page has an active slideshow
if(document.querySelector('.reel-image') !== null) {

  var slideIndex = 1;
  showSlides(slideIndex);

  //tag control
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("reel-image");
    var points = document.getElementsByClassName("reel-caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    points[slideIndex-1].className += " active";
  }
  // JS adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp//


//api from https://newsapi.org/docs/get-started for live news
}

var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=9d99f5de073945798663338b6affe79f';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
