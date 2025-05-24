document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formSuccess").classList.remove("hidden");
  this.reset();
});

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("quoteSuccess").classList.remove("hidden");
  this.reset();
});
