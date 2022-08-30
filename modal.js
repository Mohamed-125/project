document
  .getElementById("payment-btn-modal")
  .addEventListener("click", function () {
    document.getElementById("overlay").classList.add("is-visible");
    document.getElementById("payment-modal").classList.add("is-visible");
  });

document
  .getElementById("end-day-btn-modal")
  .addEventListener("click", function () {
    document.getElementById("overlay").classList.add("is-visible");
    document.getElementById("end-day-modal").classList.add("is-visible");
  });

document
  .getElementById("sales-btn-modal")
  .addEventListener("click", function () {
    document.getElementById("overlay").classList.add("is-visible");
    document.getElementById("sales-modal").classList.add("is-visible");
  });

document
  .getElementById("registration-details-btn-modal")
  .addEventListener("click", function () {
    document.getElementById("overlay").classList.add("is-visible");
    document
      .getElementById("registration-details-modal")
      .classList.add("is-visible");
  });

document
  .getElementById("add-client-btn-modal")
  .addEventListener("click", function () {
    document.getElementById("overlay").classList.add("is-visible");
    document.getElementById("add-client-modal").classList.add("is-visible");
  });
document
  .getElementById("end-day-btn-modal")
  .addEventListener("click", function () {
    document.getElementById("overlay").classList.add("is-visible");
    document.getElementById("end-day-modal").classList.add("is-visible");
  });

//    close button

document.querySelectorAll("#close-btn").forEach((e) => {
  e.addEventListener("click", function () {
    document.getElementById("overlay").classList.remove("is-visible");
    document.getElementById("payment-modal").classList.remove("is-visible");
    document.getElementById("sales-modal").classList.remove("is-visible");
    document
      .getElementById("registration-details-modal")
      .classList.remove("is-visible");
    document.getElementById("add-client-modal").classList.remove("is-visible");
    document.getElementById("end-day-modal").classList.remove("is-visible");
  });
});

//    overlay button

document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("payment-modal").classList.remove("is-visible");
  document.getElementById("sales-modal").classList.remove("is-visible");
  document
    .getElementById("registration-details-modal")
    .classList.remove("is-visible");
  document.getElementById("end-day-modal").classList.remove("is-visible");
  document.getElementById("add-client-modal").classList.remove("is-visible");
});
