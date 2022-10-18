const answer = document.querySelector(".answer");
const unsplashURL = "https://source.unsplash.com/random/";
const img = document.createElement("img");
img.src = `${unsplashURL}${getRandomSize}`;
answer.appendChild(img);

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}
function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}
const resultList = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((value, name) => {
  resultList.append(`${value}`);
  resultList.append(document.createElement("br"));
});
