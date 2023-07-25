import "./assets/scss/all.scss";

const categoryMenuItem = document.querySelectorAll(".category-menu-item-link");
const optical = document.querySelector(".optical");
const sunglasses = document.querySelector(".sunglasses");
const opticalSection = document.querySelector(".optical-section");
const sunglassesSection = document.querySelector(".sunglasses-section");

getCurrentFileName() === "product.html"
  ? productPage()
  : console.log("not product");

function getCurrentFileName() {
  let path = window.location.pathname;
  let fileName = path.split("/").pop();
  return fileName;
}

// const currentFileName = getCurrentFileName();
// console.log("目前網頁的檔案名:", currentFileName);

function productPage() {
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

getCurrentFileName() === "store.html" ? storePage() : console.log("not store");

function storePage() {
  const storeCards = document.querySelectorAll(".store-list-card");
  const locationInput = document.querySelector("#locationInput");

  locationInput.addEventListener("change", function (e) {
    console.log(e.target.value);
    if (e.target.value === "台北市") {
      for (let i = 0; i < 5; i++) {
        if (i == 0 || i == 1) {
          storeCards[i].style.display = "block";
        } else {
          storeCards[i].style.display = "none";
        }
      }
    } else if (e.target.value === "台中市") {
      for (let i = 0; i < 5; i++) {
        if (i == 2) {
          storeCards[i].style.display = "block";
        } else {
          storeCards[i].style.display = "none";
        }
      }
    } else if (e.target.value === "高雄市") {
      for (let i = 0; i < 5; i++) {
        if (i == 3 || i == 4) {
          storeCards[i].style.display = "block";
        } else {
          storeCards[i].style.display = "none";
        }
      }
    } else {
      for (let i = 0; i < 5; i++) {
        storeCards[i].style.display = "block";
      }
    }

    locationInput.addEventListener("click", function (e) {
      if (e.target) {
        e.target.value = "";
      }
    });
  });
}

getCurrentFileName() === "blogEvent.html"
  ? blogNavHandler()
  : console.log("not blogEvent");

function blogNavHandler() {
  const blogNav = document.querySelector(".blog-nav");
  blogNav.style.display = "block";
}
