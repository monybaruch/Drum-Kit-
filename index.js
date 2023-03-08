let numberOfdrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfdrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    alert("Drum was clicked!");
  });
}
