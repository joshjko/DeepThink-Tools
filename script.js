const tools = [
  "AI Chat",
  "Writing Assistant",
  "Grammar Checker",
  "Code Generator",
  "Text Summarizer",
  "Research Tool",
  "Language Translator",
  "Idea Generator",
  "Email Writer",
  "PDF Parser"
];

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

function showSuggestions() {
  const input = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (input.length === 0) return;

  const filtered = tools.filter(tool => tool.toLowerCase().includes(input));
  
  if (filtered.length === 0) {
    suggestionsBox.innerHTML = `<li>No results found</li>`;
    return;
  }

  filtered.forEach(tool => {
    const li = document.createElement("li");
    li.textContent = tool;
    li.onclick = () => {
      searchInput.value = tool;
      suggestionsBox.innerHTML = "";
    };
    suggestionsBox.appendChild(li);
  });
}
