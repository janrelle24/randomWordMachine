const colors = [
    "#1ABC9C", // turquoise
    "#2ECC71", // emerald
    "#3498DB", // blue
    "#9B59B6", // purple
    "#E67E22", // orange
    "#E74C3C", // red
    "#16A085", // green teal
    "#27AE60", // dark green
    "#2980B9", // dark blue
    "#8E44AD", // violet
    "#F39C12", // yellow-orange
    "#D35400", // dark orange
    "#C0392B", // dark red
    "#7F8C8D", // gray
    "#2C3E50", // navy
    "#34495E", // dark slate
    "#F1C40F", // bright yellow
    "#1D8348", // forest green
    "#5DADE2", // sky blue
    "#F1948A"  // soft pink
];

const wordEl = document.getElementById('word');
const btn = document.getElementById('btn');

// fetch JSON words
async function getWords() {
    try {
    const response = await fetch("words.json");
    const data = await response.json();
      return data.words; // return the array of word objects
    } catch (error) {
    console.error("Error fetching words:", error);
    return [];
    }
}

  // show random word + info
async function showRandomWord() {
    const words = await getWords();
    if (words.length === 0) return;

    //pick random word
    const randomIndex = Math.floor(Math.random() * words.length);
    const { word, definition, example } = words[randomIndex];

    //pick random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // update text content
    wordEl.innerHTML = `
    <i class="fa-solid fa-quote-left"></i>
    <strong>${word}</strong><br>
    <em>${definition}</em><br><br>
    <small>"${example}"</small>
    `;

    //apply colors
    document.body.style.backgroundColor = randomColor; 
    btn.style.backgroundColor = randomColor; 
}

  // event listener
btn.addEventListener("click", showRandomWord);

  // first word on load
showRandomWord();