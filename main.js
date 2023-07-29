import "./assets/scss/all.scss";

import { productPage } from "./assets/app/product";
import storePage from "./assets/app/store";
import blogNavHandler from "./assets/app/blogNav";

getCurrentFileName() === "product.html"
  ? productPage()
  : console.log("not product");

getCurrentFileName() === "store.html" ? storePage() : console.log("not store");

getCurrentFileName() === "blogEvent.html"
  ? blogNavHandler()
  : console.log("not blogEvent");

// const currentFileName = getCurrentFileName();
// console.log("目前網頁的檔案名:", currentFileName);
function getCurrentFileName() {
  let path = window.location.pathname;
  let fileName = path.split("/").pop();
  return fileName;
}
