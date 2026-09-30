// Dark mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// Category filtering
const categoryButtons = document.querySelectorAll(".category");
const blogCards = document.querySelectorAll(".blog-card");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {

    categoryButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const category = button.dataset.category;

    blogCards.forEach(card => {
      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    checkResults();
  });
});


// Search
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

  const search = searchInput.value.toLowerCase();

  blogCards.forEach(card => {

    const title = card
      .querySelector("h3")
      .textContent
      .toLowerCase();

    const description = card
      .querySelector("p")
      .textContent
      .toLowerCase();

    if (
      title.includes(search) ||
      description.includes(search)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  checkResults();
});


// Check if search/filter has results
function checkResults() {
  const visibleCards = [...blogCards]
    .filter(card => card.style.display !== "none");

  document.getElementById("noResults").style.display =
    visibleCards.length === 0 ? "block" : "none";
}


// Read More modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".read-btn").forEach(button => {

  button.addEventListener("click", () => {

    modalTitle.textContent = button.dataset.title;
    modalText.textContent = button.dataset.text;

    modal.classList.add("show");
  });
});


// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});


// Close modal when clicking outside
modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});


// Close modal with Escape
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});
