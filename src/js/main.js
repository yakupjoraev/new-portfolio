// Custom scripts

function toggleMenu() {
  const btnMenu = document.querySelector('.toggle-button');
  const menuwrapper = document.querySelector('.menu-wrapper');
  const mainBody = document.querySelector('.main__body')

  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('open');
    menuwrapper.classList.toggle('open');
    mainBody.classList.toggle('locked');
  })
}

toggleMenu()


// музыка
const handleSpeaker = () => {
  const audio = document.querySelector("#audioPlayer");

  if (speakerState === "muted") {
    setSpeakerState("unmuted");
    audio.pause();
  } else {
    setSpeakerState("muted");
    audio.play();
  }
};


// прелоадер

setTimeout(() => {
  const preloader = document.querySelector('[data-preloader]');
  // const scrollWindow = document.querySelector('[data-scroll-container]')

  if (!preloader) {
    return null
  }


  preloader.style.top = "-100vh";
}, 10000)

//speaker

function speaker() {
  const speakerBtn = document.querySelector('.speaker__toggle')

  if (!speakerBtn) {
    return null
  }

  speakerBtn.addEventListener('click', () => {
    speakerBtn.classList.toggle('speaker__toggle--anim')
  })
}

speaker();

// анимация для скролла и для скроллбара

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 800,
  // Размер шага в пикселях 
  stepSize: 100,

  // Дополнительные настройки:

  // Ускорение 
  accelerationDelta: 30,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
})


const audioToggle = document.querySelector('.speaker__toggle');
// const audioToggleClose = document.querySelector('.speaker__toggle--anim');
let audioFIle = document.querySelector('.speaker__audio');
let count = 0;


function playPause() {
  if (count == 0) {
    count = 1;
    audioFIle.play();
  } else {
    count = 0;
    audioFIle.pause();
  }
}
