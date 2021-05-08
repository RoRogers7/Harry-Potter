var body;

window.onload = function() {
  var timeBtn = document.querySelector('.time');

  body = document.querySelector('body');
  
  body.classList.add('day');

  timeBtn.addEventListener('click', toggleTime);

  processStars(stars, numStars);
};

function toggleTime(){
  var isDay = body.classList.contains('day');
  if(isDay){
    body.classList.remove('day');
    body.classList.add('night');
  } else{
    body.classList.remove('night');
    body.classList.add('day');
  }
}
