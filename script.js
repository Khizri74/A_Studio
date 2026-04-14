const showImg = document.querySelectorAll(".avatar");
const bigImg = document.querySelectorAll(".bigImg");
const userProf = document.querySelectorAll(".profile");
const flipp = document.querySelectorAll(".ellipsFlip");

const clickElements = [showImg, flipp];

clickElements.forEach((nodeList) =>
  nodeList.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      userProf.forEach((profile) => {
        profile.style.display = "none";
      });
      if (userProf[index]) {
        userProf[index].style.display = "block";
        userProf[index].classList.add("animate");
      }
    });
  })  
);
const avatars = document.querySelectorAll('.avatar');

avatars.forEach(avatar => {
  avatar.addEventListener('click', () => {
    avatars.forEach(a => a.classList.remove('focused'));
    avatar.classList.add('focused');
  });
});



const myVideo = document.querySelector(".myVideo");
const toggleBtn = document.querySelector(".togglePlay");

let isPlaying = false;

myVideo.onclick = () => {

  if (!isPlaying) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
  isPlaying = !isPlaying; 
}

myVideo.onplay = () => {
isPlaying = false;
};

myVideo.onpause = () => {
  isPlaying = true;
};