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

// function opticalGlasses() {
//   return [
//     {
//       id: "001",
//       name: "BJ41600S",
//       price: "NTD3,490",
//       image: "../assets/images/product-1.png",
//     }
//   ]
// }

// function rednerOptical() {

// }
