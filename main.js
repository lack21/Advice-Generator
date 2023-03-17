// lear
// Advice Generator

window.addEventListener("DOMContentLoaded", () => {
  const diceBtn = document.querySelector(".dice-btn");
  const adviceNumber = document.querySelector(".advice-number");
  const adviceText = document.querySelector(".advice-text");

  const getData = async () => {
    const randomNumber = Math.floor(Math.random() * 200);
    const newFile = await fetch(
      `https://api.adviceslip.com/advice?random${randomNumber}`
    );
    const {
      slip: { id, advice },
    } = await newFile.json();
    adviceNumber.innerHTML = id;
    adviceText.innerHTML = advice;
  };

  diceBtn.addEventListener("click", () => {
    getData();
  });
});
