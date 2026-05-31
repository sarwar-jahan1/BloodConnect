// ================= DONOR SHOW / HIDE =================

const donorCards = document.querySelectorAll(".donor-card");

const viewBtn = document.querySelector(".view-donor");

const noDonor = document.querySelector(".no-donor");

let expanded = false;

// first 3 donor show

donorCards.forEach((card, index) => {

  if(index > 2){
    card.style.display = "none";
  }

});

// ================= VIEW ALL DONOR =================

viewBtn.addEventListener("click", function(e){

  e.preventDefault();

  if(!expanded){

    donorCards.forEach((card) => {
      card.style.display = "flex";
    });

    viewBtn.innerText = "Show Less";

    expanded = true;

  }

  else{

    donorCards.forEach((card, index) => {

      if(index > 2){

        card.style.display = "none";

      }

      else{

        card.style.display = "flex";

      }

    });

    viewBtn.innerText = "View All Donors";

    expanded = false;

  }

});


// ================= BLOOD FILTER =================

const filterButtons =
document.querySelectorAll(".filter-buttons button");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // remove active class

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // add active class

    button.classList.add("active");

    const bloodGroup = button.innerText;

    let found = false;

    donorCards.forEach((card) => {

      const donorBlood =
      card.querySelector(".details p").innerText.trim();

      // show all

      if (bloodGroup === "All") {

        card.style.display = "flex";

        found = true;

      }

      // matching donor

      else if (donorBlood.includes(bloodGroup)) {

        card.style.display = "flex";

        found = true;

      }

      // hide donor

      else {

        card.style.display = "none";

      }

    });

    // no donor found message

    if(found){

      noDonor.style.display = "none";

      viewBtn.style.display = "block";

    }

    else{

      noDonor.style.display = "block";

      viewBtn.style.display = "none";

    }

  });

});


// ================= CONTACT BUTTON =================

const contactButtons =
document.querySelectorAll(".contact-btn");

contactButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const donorName =
    button.parentElement.querySelector("h4").innerText;

    alert("Contacting " + donorName);

  });

});


// ================= FORM VALIDATION =================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const inputs =
  form.querySelectorAll("input");

  const select =
  form.querySelector("select");

  let isValid = true;

  // input validation

  inputs.forEach((input) => {

    if (input.value.trim() === "") {

      isValid = false;

    }

  });

  // select validation

  if (select.value === "Blood Group Needed") {

    isValid = false;

  }

  // success

  if (isValid) {

    alert("Request Submitted Successfully!");

    form.reset();

  }

  // error

  else {

    alert("Please fill all required fields!");

  }

});


// ================= HERO BUTTON ACTION =================

const requestBtn =
document.querySelector(".primary-btn");

const donorBtn =
document.querySelector(".secondary-btn");

const donorSection =
document.querySelector(".donor-section");

const requestForm =
document.querySelector(".request-box");


// REQUEST BLOOD BUTTON

requestBtn.addEventListener("click", () => {

  // smooth scroll

  requestForm.scrollIntoView({
    behavior: "smooth"
  });

  // highlight effect

  requestForm.style.boxShadow =
  "0 0 25px rgba(239, 17, 17, 0.35)";

  requestForm.style.transition = "0.3s";

  // remove effect after 2 second

  setTimeout(() => {

    requestForm.style.boxShadow = "none";

  }, 2000);

});


// VIEW DONORS BUTTON

donorBtn.addEventListener("click", () => {

  // smooth scroll

  donorSection.scrollIntoView({
    behavior: "smooth"
  });

  // donor section highlight

  donorSection.style.transition = "0.3s";

  donorSection.style.transform = "scale(1.01)";

  // remove effect

  setTimeout(() => {

    donorSection.style.transform = "scale(1)";

  }, 400);

});