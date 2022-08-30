// side bar logic
const body = document.querySelector("body"),
  sidebar = document.querySelector("nav"),
  toggle = document.querySelector(".toggle");
lis = document.querySelectorAll(".nav-link");
dropdown = document.querySelector(".dropdown");
sidebarPartTwo = document.querySelector(".sidebar-part-two");
root = document.querySelector(":root");
function showAndChangeLiBeforeArrow() {
  if (
    getComputedStyle(document.documentElement).getPropertyValue(
      "--beforeDisplay"
    ) === "none"
  ) {
    root.style.setProperty("--beforeDisplay", "block");
  } else {
    root.style.setProperty("--beforeDisplay", "none");
  }
}

showAndChangeLiBeforeArrow();

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  dropdown.classList.add("hidden");
  showAndChangeLiBeforeArrow();
  sidebarPartTwo.classList.toggle("close");

  // e.target.parentNode?.children[1]?.classList.toggle("hidden");
  lis.forEach((li) => {
    li.children[0].classList.toggle("link-closed");
    li.addEventListener("click", (e) => {
      e.target.parentNode.children[1]?.classList?.toggle("hidden");
      if (!e.target.parentNode?.children[1]) return;
      if (e.target.parentNode?.children[1]?.classList.contains("hidden")) {
        e.target.style.setProperty("--beforeRotate", "87.7deg");
        e.target.style.setProperty("--marginTop", "0px");
      } else {
        e.target.style.setProperty("--beforeRotate", "179deg");
        e.target.style.setProperty("--marginTop", "7px");
      }
    });
  });
});

// console.log()
