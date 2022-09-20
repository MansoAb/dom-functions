const h1 = document.createElement("h1");
const a = document.createElement("a");
const form = document.createElement("form");
const input = document.createElement("input");
const input1 = document.createElement("input");

const ul = document.querySelector("ul");
const divMain = document.getElementById("main");
const copyright = document.getElementById("copyright");

h1.textContent = "Работа с DOM";
a.textContent = "DOM";
a.href = "https://learn.javascript.ru/modifying-document";
input.type = "text";
input1.type = "button";
input1.value = "Отправить";

input1.addEventListener("click", () => {
  document.body.style.backgroundColor = input.value;
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.append(li);
  input.value = "";
  copyright.remove();
});

form.append(input, input1);
divMain.append(a);
document.body.prepend(h1, form);
