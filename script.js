const tools = [
  "Design Thinking",
  "Persona Creation",
  "Empathy Mapping",
  "User Journey",
  "Wireframe",
  "Prototype",
  "Usability Test",
  "Accessibility",
  "Heatmap",
  "Competitor Analysis",
  "Card Sorting"
];

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const suggestionBox = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = tools.filter(tool => tool.toLowerCase().includes(query));

  // Show suggestions
  suggestionBox.innerHTML = "";
  if (query && filtered.length > 0) {
    filtered.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      li.onclick = () => {
        searchInput.value = item;
        suggestionBox.innerHTML = "";
        showResults([item]);
      };
      suggestionBox.appendChild(li);
    });
  } else {
    suggestionBox.innerHTML = "";
  }

  showResults(filtered);
});

function showResults(results) {
  resultsContainer.innerHTML = "";
  results.forEach(tool => {
    const div = document.createElement("div");
    div.className = "tool-card";
    div.textContent = tool;
    resultsContainer.appendChild(div);
  });
}
