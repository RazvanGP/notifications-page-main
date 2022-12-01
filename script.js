const notification = document.querySelectorAll("main article");
let state = true;

notification.forEach((elem) => {
  elem.addEventListener("click", function myFunction() {
    if (state) {
      state = false;
      elem.querySelector("article .dot").classList.add(".read-dot");
    } else {
      state = true;
    }
    // console.log(elem);
  });
});
