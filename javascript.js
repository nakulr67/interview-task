const texts = [
    "text-4567890.",
    "Book3456789",
    "Get467890",
    "Travel 456789."
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";
const fixedText = "Easy booking, affordable prices. ";
const dynamicTextElement = document.getElementById("dynamic-text");
function type() {

    const fullText = texts[index];

    // Handle typing or deleting
    if (isDeleting) {
        currentText = fullText.substring(0, charIndex--); // Delete characters
    } else {
        currentText = fullText.substring(0, charIndex++); // Type characters
    }

    // Set the dynamic text content
    dynamicTextElement.textContent = currentText;

    // Determine the typing speed
    let typingSpeed = isDeleting ? 50 : 100;

    // When the full text has been typed, wait before starting to delete
    if (!isDeleting && currentText === fullText) {
        typingSpeed = 2000; // Pause before deleting
        isDeleting = true;  // Start deleting after the pause
    }
    // When the text has been deleted, move to the next text
    else if (isDeleting && currentText === "") {
        isDeleting = false;
        index = (index + 1) % texts.length; // Loop through the texts array
        charIndex = 0; // Reset character index for typing the next text
        typingSpeed = 500; // Small pause before typing the next text
    }

    // Call the function again to continue typing
    setTimeout(type, typingSpeed);
}