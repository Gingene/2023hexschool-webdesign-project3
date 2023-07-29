const categoryMenuItem = document.querySelectorAll(".category-menu-item-link");

function productPage() {
  const optical = document.querySelector(".optical");
  const sunglasses = document.querySelector(".sunglasses");
  const opticalSection = document.querySelector(".optical-section");
  const sunglassesSection = document.querySelector(".sunglasses-section");
  categoryMenuItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      console.log(e.target.innerText);
      removecategoryMenu();
      e.target.classList.toggle("active");
      if (e.target.innerText === "OPTICAL") {
        optical.classList.add("active");
        opticalSection.classList.add("active");
        sunglasses.classList.remove("active");
        sunglassesSection.classList.remove("active");
      } else if (e.target.innerText === "SUNGLASSES") {
        optical.classList.remove("active");
        opticalSection.classList.remove("active");
        sunglasses.classList.add("active");
        sunglassesSection.classList.add("active");
      }
    });
  });
}

function removecategoryMenu() {
  categoryMenuItem.forEach((item) => {
    item.classList.remove("active");
  });
}

export { productPage };
