function getRandomPic() {
  //select answer div
  const answers = document.querySelector("#answers");
  //base url to unsplash
  const unsplashURL = "https://source.unsplash.com/random/";
  //creating the img and img source on the dom
  const imgDiv = document.createElement("div");
  imgDiv.id = "randomPic";
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

//remove h1
function removeH1() {
  let title = document.getElementById("hide");
  title.remove(title[0]);
}

function ask(event) {
  event.preventDefault();

  //selects the form and user input
  let input = document.querySelector("#askForm");
  console.log(question.value);

  //selects the parent element
  let container = document.querySelector(".container");

  //creates the answer div and replaces the form with user input
  let answerDiv = document.createElement("div");
  //   answerDiv.setAttribute("id", "answers");
  answerDiv.id = "answers";

  //content div
  let content = document.createElement("div");
  content.className = "content";
  answerDiv.append(content);

  //returns user input as h2
  let userInput = document.createElement("h2");
  //another way to set attribute :
  userInput.className = "response bg-primary rounded";
  userInput.textContent = ` question:\n ${question.value}`;
  content.append(userInput);
  //how to find childNodes
  //console.log(container.parentElement.children)
  container.replaceChild(answerDiv, container.childNodes[5]);
  console.log(container.children);

  //creates button to refresh the page
  let refresh = document.createElement("button");
  refresh.setAttribute("onClick", "window.location.reload()");
  refresh.className = "reset btn btn-outline-dark";
  refresh.textContent = `reset`;
  content.append(refresh);

  getRandomPic();
  removeH1();
}
//addEventListner takes in ( a string, and callback)
//removeEventListner(string, callback)
let form = document.querySelector("form");
form.addEventListener("submit", ask);

//how to add styles examples:
//document.body.style.fontSize = "50px";
//document.body.style.backgroundColor = "black";
