const ratingSection = document.querySelector(".rating-section");
const submitButton = document.querySelector(".btn");
const ratingList = document.querySelectorAll(".rating");
let selectedRating = "";
ratingList.forEach((rating) => {
  rating.addEventListener("click", function (e) {
    if (this.dataset.rating === e.target.textContent) {
      ratingList.forEach((rating) => rating.classList.remove("active"));
      this.classList.add("active");
      selectedRating = this.innerText;
    }
  });
});
submitButton.addEventListener("click", function () {
  if (selectedRating) {
    ratingSection.classList.add("thanks");
    ratingSection.innerHTML = `
  <img src="./images/illustration-thank-you.svg" alt="Thank you image" class="thanks-img">
  <p class="rating-state">You selected ${selectedRating} out of 5</p>
  <h1>Thank you!</h1>
  <p class="thanks-text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
  `;
  } else {
    submitButton.classList.add("disabled");
    setTimeout(function () {
      submitButton.classList.remove("disabled");
    }, 3000);
  }
});
