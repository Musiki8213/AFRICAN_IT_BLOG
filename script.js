function openSlider() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeSlider() {
  document.getElementById("sideMenu").style.width = "0";
}

function doneAlert() {
  alert("Thank you for reviewing the challenges!");
}

document.querySelectorAll("details").forEach((detailsEl) => {
  detailsEl.addEventListener("click", function () {
    document.querySelectorAll("details").forEach((el) => {
      if (el !== detailsEl) el.removeAttribute("open");
    });
  });
});
