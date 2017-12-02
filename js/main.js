//Галерея 

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var modalIndex = 1;
showModals(modalIndex);

function plusSlides(n) {
  showModals(modalIndex += n);
}

function currentSlide(n) {
  showModals(modalIndex = n);
}

function showModals(n) {
  var i;
  var slides = document.getElementsByClassName("myModals");
  if (n > slides.length) {modalIndex = 1}
  if (n < 1) {modalIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[modalIndex-1].style.display = "block";
}
