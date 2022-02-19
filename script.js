const nav = document.getElementById("navigation-bar");
const navLinks = document.querySelectorAll(".link");
const dropdowns = document.querySelectorAll(".dropdown-content");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector("#toggle-icon");
const mobileDropdownToggleButtons = document.querySelectorAll(
  ".mobile-dropdown-toggle"
);
console.log(toggleIcon);
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    dropdowns.forEach((drop) => {
      if (drop.classList.contains("show-dropdown")) {
        drop.classList.remove("show-dropdown");
      }
    });
    const dropdown = document.getElementById(link.dataset.dropdownid);
    dropdown.classList.add("show-dropdown");
    nav.addEventListener("mouseleave", () => {
      if (dropdown.classList.contains("show-dropdown")) {
        dropdown.classList.remove("show-dropdown");
      }
    });
  });
});

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("mobile-nav-visible");
  toggleIcon.classList.toggle("fa-times");
  document.querySelector(".game-id").classList.toggle("m-bottom");
});

mobileDropdownToggleButtons.forEach((mDropdownToggleBtn) => {
  mDropdownToggleBtn.addEventListener("click", () => {
    const dropdownid = mDropdownToggleBtn.dataset.mobiledropdownid;
    const mDropdownContent = document.getElementById(dropdownid);
    const dropdownHeight = mDropdownContent.children[0].clientHeight;
    const angleDownIcon = mDropdownToggleBtn.children[0];
    angleDownIcon.classList.toggle("fa-angle-up");
    if (mDropdownContent.clientHeight > 0) {
      mDropdownContent.style.height = "0px";
      return;
    }
    mDropdownContent.style.height = dropdownHeight + "px";
    // if(angleDownIcon.classList.contains('fa-angle-up')) {
    //   angleDownIcon.classList.remove('fa-angle-up');

    // }
  });
});
