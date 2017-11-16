var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var overlay = document.querySelector('.overlay');
btn = document.querySelector('button');


/* Looping through images */

// for(var i = 1; i <= 5; i++) {
//   var newImage = document.createElement('img');
//   newImage.setAttribute('src', 'images/pic' + i + '.jpg');
//   thumbBar.appendChild(newImage);
//   newImage.onclick = function(e) {
//     var imgSrc = e.target.getAttribute('src');
//     displayImage(imgSrc);
//   }
// }

var images = document.querySelectorAll('.thumb-bar img')

function handleClick(event) {
  var image = event.target
  displayedImage.src = image.src
  
}

for (var i = 0; i < images.length; i++) {
  images[i].onclick = handleClick

}
// var image1 = images[0]
// var image2 = images[1]

// image1.onclick = handleClick
// image2.onclick = handleClick




function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  var btnClass = btn.getAttribute('class'); 
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}