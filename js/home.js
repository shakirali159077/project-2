let menu = document .querySelector('#menu-icon');
let navbar = document .querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }


 window.onscroll = () => {
   
   menu.classList.remove('bx-x');
   navbar.classList.remove('active');
 }
 
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

const stopSounds = () => {
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);
    currentSound.pause();
    currentSound.currentTime = 0;
  });
};

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
  buttons.appendChild(btn);
});
