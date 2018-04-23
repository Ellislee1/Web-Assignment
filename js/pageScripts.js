// If this page has an active slideshow
if(document.querySelector('.reel-image') !== null) {

 // JS adapted from W3Schools//
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
//End of cited code//

}

function submitButtton(){
  alert("Your feedback has been submitted. \nThank you for taking the time to send us feedback.");
  document.getElementById('feedbackform').reset();
}
