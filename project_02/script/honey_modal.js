// Get the modal and the button that opens it
var honeyModal = document.getElementById("honeyModal");
var openHoneyModalButton = document.getElementById("open-honey-button");

// When the button is clicked, show the honeyModal
openHoneyModalButton.addEventListener("click", function() {
    honeyModal.style.display = "block";
});

// When the user clicks the close button or outside the honeyModal, hide it
honeyModal.addEventListener("click", function(event) {
    if (event.target === honeyModal || event.target.className === "close") {
        honeyModal.style.display = "none";
    }
});

// Close the honeyModal with the escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && honeyModal.style.display === "block") {
        honeyModal.style.display = "none";
    }
});

console.log("honeyModal.js loaded")
