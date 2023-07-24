const facades = document.querySelectorAll(".facade");
facades.forEach((facade) => {
  facade.addEventListener("click", (e) => {
    e.preventDefault();
    const id = facade.getAttribute("for");
    const element = document.getElementById(id);
    const src = element.getAttribute("facade-src");
    element.setAttribute("src", src);
    facade.remove();
  });
});
