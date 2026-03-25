const showImg = document.querySelectorAll(".avatar");
const bigImg = document.querySelectorAll(".bigImg");
const userProfile = document.querySelectorAll(".profile");
const flipp = document.querySelectorAll(".elipsFlip");

const clickElements = [showImg, flipp];

clickElements.forEach((nodeList) =>
  nodeList.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      console.log("Клик по картинке $", index);
      userProfile.forEach((profile) => {
        profile.style.display = "none";
      });
      if (userProfile[index]) {
        userProfile[index].style.display = "block";
        userProfile[index].classList.add("animate");
      }
    });
  })
);

// const avatarClick = document.querySelectorAll(".avatar");
// const clickSub = document.querySelector(".avatar-1");

// avatarClick.forEach(avatar(avatar.addEventListener('click', () => {
//   clickSub.style.transform = "scale(1.2);"
//   console.log('click');
// })))

const avatars = document.querySelectorAll('.avatar');

avatars.forEach(avatar => {
  avatar.addEventListener('click', () => {
    // Обнуляем у всех класс 'focused'
    avatars.forEach(a => a.classList.remove('focused'));
    // Добавляем класс только для текущего
    avatar.classList.add('focused');
    console.log('Клик по изображению');
  });
});

let selectedIndex = null;

const imgs = document.querySelectorAll('.avatar');

imgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    if (selectedIndex === null) {
      // выбираем первое изображение
      selectedIndex = index;
    } else {
      // меняем местами два выбранных изображения
      [imgs[selectedIndex].src, imgs[index].src] = [imgs[index].src, imgs[selectedIndex].src];
      selectedIndex = null; // сбрасываем выбор
    }
  });
});


