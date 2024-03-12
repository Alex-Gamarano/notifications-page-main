/* document.querySelectorAll(".post").forEach((post) => {
  post.addEventListener("dblclick", () => {
    post.lastElementChild.firstElementChild.lastElementChild.classList.add(
      "circle"
    );
    i++;
    console.log(i);
    counter.innerHTML = i;
  });
}); */
let counter = document.querySelector(".counter");
let circles = document.querySelectorAll(".circle");
let i = circles.length;
let wrappers = document.querySelectorAll(".wrapper");

let reset = document.querySelector(".reset").addEventListener("click", () => {
  circles.forEach((circle) => {
    circle.parentElement.parentElement.parentElement.style.backgroundColor =
      "var(--white)";
    circle.classList.remove("circle");
  });
  i = 0;
  counter.innerHTML = 0;
});

counter.innerHTML = i;

wrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    if (wrapper.lastElementChild.classList.contains("circle")) {
      wrapper.lastElementChild.classList.remove("circle");
      wrapper.parentElement.parentElement.style.backgroundColor =
        "var(--white)";
      wrapper.removeEventListener("click", this);
      i--;
      console.log(i);
      counter.innerHTML = i;
    }
  });
});
