//select answer div
const answer = document.querySelector(".answer");
//base url to unsplash
const unsplashURL = "https://source.unsplash.com/random/";
//creating the img and img source on the dom
const img = document.createElement("img");
img.src = `${unsplashURL}${getRandomSize}`;
answer.appendChild(img);
//query width * height for url
function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}
// returns a random number between 0 -10  and the add 300
function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}
//returns the user input from index
/*
const resultList = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((value) => {
  resultList.append(`${value}`);
  resultList.append(document.createElement("br"));
});
*/
