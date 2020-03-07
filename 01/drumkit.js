const keys = document.querySelectorAll('.key');

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;              //Exits function if no associated sound
    audio.currentTime = 0;          //Starts audio from beginning
    audio.play();           
    key.classList.add('playing');   // Adds animation
}

window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));   // Removes styling after keypress