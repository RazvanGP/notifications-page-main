const notifications = document.querySelectorAll("main article");
const dots = document.querySelectorAll(".unread-dot");
const badge = document.querySelector(".badge");
const markAll = document.querySelector(".mark-all");
let counter = 0;

notifications.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    if (dots[index].classList.contains("dot")) {
      dots[index].classList.remove("dot");
      elem.classList.remove("unread");
      counter--;
    } else {
      dots[index].classList.add("dot");
      elem.classList.add("unread");
      counter++;
    }
    badge.innerHTML = counter;
  });
});

markAll.addEventListener("click", () => {
  dots.forEach((elem) => {
    elem.classList.remove("dot");
    counter = 0;
    badge.innerHTML = counter;
  });
});
