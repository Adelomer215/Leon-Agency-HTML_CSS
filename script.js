const links = document.getElementById("links");
const linksUl = document.querySelector("#links ul");

links.addEventListener("click", (e) => {
  linksUl.style.display = "block";
});
document.body.addEventListener("dblclick", (e) => {
  linksUl.style.display = "none";
});
