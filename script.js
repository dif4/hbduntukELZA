const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "OKEE INI ELZA YA!! Tau kan hari ini hari apa?!! Aku ada hadiah buatmuuu.Mau liat? .";
  gif.src =
    "https://private-user-images.githubusercontent.com/77387192/292655485-9b5aa94c-fa46-43c8-931c-8161de31b303.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMzOTQxNDksIm5iZiI6MTcwMzM5Mzg0OSwicGF0aCI6Ii83NzM4NzE5Mi8yOTI2NTU0ODUtOWI1YWE5NGMtZmE0Ni00M2M4LTkzMWMtODE2MWRlMzFiMzAzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjI0VDA0NTcyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNiYzdlODJmNTg4MmQwZjQ2MGQwNjEzNWUyNTcxODhlNjBjOGU4YjJjZDAyMDUyZGVhMzI2MzFkOWI4MzA5ZmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JgcMLKcsU06D1XW7DdLUpbJftHjv-3TYInFzCmCC28k";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
