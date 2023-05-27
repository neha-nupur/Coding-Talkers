//  <!------ JavaScript for Toggle Menu ------>

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

// ------------Accordion ---------

const accordionLinks = document.querySelectorAll(".accordion-link");

accordionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const accordionItem = link.closest(".accordion-item");
    const answerEl = accordionItem.querySelector(".answer");
    if (accordionItem.classList.contains("active")) {
      // If the item is already active, remove the active state and hide the answer
      accordionItem.classList.remove("active");
      answerEl.style.maxHeight = null;
      link.querySelector(".fa-minus").style.display = "none";
      link.querySelector(".fa-plus").style.display = "block";
    } else {
      // Remove active state from other items and set this item as active
      accordionLinks.forEach((otherLink) => {
        if (otherLink !== link) {
          otherLink.closest(".accordion-item").classList.remove("active");
          otherLink.nextElementSibling.style.maxHeight = null;
          otherLink.querySelector(".fa-minus").style.display = "none";
          otherLink.querySelector(".fa-plus").style.display = "block";
        }
      });
      accordionItem.classList.add("active");
      answerEl.style.maxHeight = answerEl.scrollHeight + "px";
      link.querySelector(".fa-minus").style.display = "block";
      link.querySelector(".fa-plus").style.display = "none";
    }
  });
});

// Add click event listener to minus icons to collapse the accordion
const minusIcons = document.querySelectorAll(".accordion-link .fa-minus");

minusIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.stopPropagation();

    const accordionItem = icon.closest(".accordion-item");
    const accordionLink = accordionItem.querySelector(".accordion-link");
    accordionItem.classList.remove("active");
    accordionItem.querySelector(".answer").style.maxHeight = null;
    accordionLink.querySelector(".fa-minus").style.display = "none";
    accordionLink.querySelector(".fa-plus").style.display = "block";
  });
});


