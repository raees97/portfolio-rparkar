function scrollProjects(direction) {
const grid = document.getElementById("projectGrid");
const scrollAmount = grid.querySelector(".card-project").offsetWidth * 2 + 40; // 2 cards + gap
grid.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}