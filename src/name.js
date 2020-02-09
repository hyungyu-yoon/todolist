
  const usernameContianer = document.querySelector(".js-username-container"),
  name = usernameContianer.querySelector(".js-name"),
  formName = usernameContianer.querySelector(".js-form"),
  inputName = formName.querySelector(".js-input-name");

function printUsername(username) {
  name.innerText = `안녕하세요? ${username}님 반갑습니다 :)`;
  inputName.remove();
}

function handleSubmit(event) {
  event.preventDefault();
  const username = inputName.value;
  saveUsername(username);
  printUsername(username);
}

function loadUsername() {
  return localStorage.getItem("username");
}

function saveUsername(username) {
  localStorage.setItem("username", username);
}

function init() {
  const username = loadUsername();
  if (username) {
    printUsername(username);
  } else {
    name.innerText = `너의 이름은?`;
  }
  formName.addEventListener("submit", handleSubmit);
}

init();
