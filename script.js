const showImg = document.querySelectorAll(".showImg");
const bigImg = document.querySelectorAll(".bigImg");
const userPort = document.querySelectorAll(".portfolio");
const flipp = document.querySelectorAll(".elipsFlip");

const clickElements = [showImg, flipp];

clickElements.forEach((nodeList) =>
  nodeList.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      console.log("Клик по картинке $", index);
      userPort.forEach((portfolio) => {
        portfolio.style.display = "none";
      });
      if (userPort[index]) {
        userPort[index].style.display = "block";
        userPort[index].classList.add("animate");
      }
    });
  })
);
