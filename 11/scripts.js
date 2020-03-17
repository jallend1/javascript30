const player      = document.querySelector('.player');
const progress    = player.querySelector('.progress');
const video       = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress__filled');
const toggle      = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges      = player.querySelectorAll('.player__slider');
const fullScreen  = document.querySelector('#fullscreen')
let   mousedown   = false;

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function togglePlay(){
    video.paused ? video.play() : video.pause();
}

function updateButton(){
    this.paused ? toggle.textContent = '►' : toggle.textContent = '❚ ❚';
}

video.addEventListener('timeupdate', handleProgress);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);