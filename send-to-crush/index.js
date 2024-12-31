const yesBtn = document.querySelector(".yes-button");
const noBtn = document.querySelector(".no-button");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Thankss !";
  gif.src = "yess.gif";
});

noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});