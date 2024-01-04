
// Start Menu
let btnmenu = document.querySelector('#menubtn');
let btnmenu2 = document.querySelector('#menubtn2');
let $menu = document.querySelector('#menu');

btnmenu2.style.display = 'none';

btnmenu.addEventListener('click', () => {
    $menu.style.height = '180px';
    $menu.style.display = 'block';
    $menu.setAttribute('data-Status', 'On');
    btnmenu.style.display = 'none';
    btnmenu2.style.display = 'block';
});

btnmenu2.addEventListener('click', () => {
    $menu.style.height = '0px';
    $menu.setAttribute('data-Status', 'Off');
    btnmenu.style.display = 'block';
    btnmenu2.style.display = 'none';
    $menu.style.display = 'none';
});
// End Menu

// Start Music Player
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const $play = document.getElementsByClassName('play')
const volume = document.getElementById("volume");
const range = document.getElementById("range");
const volbtn = document.getElementById("vol-btn");

volume.classList.add('d-none')

volbtn.addEventListener('click', () => {
    volume.classList.add('d-block')
    volume.classList.remove('d-none')
});


volume.addEventListener("change", () => {
    audioPlayer.volume = volume.value / 100;
});

range.addEventListener("change", () => {
    audioPlayer.currentTime = range.value;
});

const musicFiles = [
    'assets/Khooneh.mp3',
    'assets/TM Bax - Meydoon.mp3',
];

let currentIndex = 0;
pauseBtn.style.display = 'none';


function playMusic() {
    audioPlayer.play();
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    pauseBtn.style.display = 'block';
    playBtn.style.display = 'none';
}

function pauseMusic() {
    audioPlayer.pause();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
}

function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
}

function skipToPrevious() {
    stopMusic();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = musicFiles.length - 1;
    }
    audioPlayer.src = musicFiles[currentIndex];
    playMusic();
}

function skipToNext() {
    stopMusic();
    currentIndex++;
    if (currentIndex >= musicFiles.length) {
        currentIndex = 0;
    }
    audioPlayer.src = musicFiles[currentIndex];
    playMusic();
}


setInterval(range.value = audioPlayer.currentTime, 1000)

// Attach event listeners to the buttons
playBtn.addEventListener('click', playMusic);
pauseBtn.addEventListener('click', pauseMusic);
prevBtn.addEventListener('click', skipToPrevious);
nextBtn.addEventListener('click', skipToNext);

// Set the initial music source
audioPlayer.src = musicFiles[currentIndex];
// End Music Player