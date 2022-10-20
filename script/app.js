function getRandomPic() {
  //select answer div
  const answers = document.querySelector("#answers");
  //base url to unsplash
  const unsplashURL = "https://source.unsplash.com/random/";
  //creating the img and img source on the dom
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "randomPic");
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize}`;
  imgDiv.appendChild(img);
  answers.appendChild(imgDiv);
}

//query width * height for url
function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}
// returns a random number between 0 -10  and the add 300
function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}

function ask(event) {
  event.preventDefault();
  let input = document.querySelector("#askForm");
  console.log(question.value);

  let container = document.querySelector(".container");

  let answerDiv = document.createElement("div");
  answerDiv.setAttribute("id", "answers");
  answerDiv.textContent = `${question.value}`;
  container.replaceChild(answerDiv, container.childNodes[5]);

  getRandomPic();
}

let form = document.querySelector("form");
form.addEventListener("submit", ask);
