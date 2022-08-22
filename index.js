// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector("#text");
  text.textContent = "This is really cool!";
});

document.getElementsByTagName("p");
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
