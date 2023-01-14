// Custom Scripts

// Custom scripts

var wrapperMenu = document.querySelector('.toggle-button');

wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');
})

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


/*! locomotive-scroll v4.1.1 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
// анимация для скролла и для скроллбара

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  reloadOnContextChange: true,
  multiplier: 0.75,
  inertia: 0.5,
  scrollbarClass: 'c-scrollbar'
});

// прелоадер

setTimeout(() => {
  const preloader = document.querySelector('[data-preloader]');
  // const scrollWindow = document.querySelector('[data-scroll-container]')

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


