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

export default storePage;
