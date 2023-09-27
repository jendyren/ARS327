// Get the modal and the button that opens it
var pineappleModal = document.getElementById("pineappleModal");
var openPineappleModalButton = document.getElementById("open-pineapple-button");

// When the button is clicked, show the pineappleModal
openPineappleModalButton.addEventListener("click", function() {
    pineappleModal.style.display = "block";
});

// When the user clicks the close button or outside the pineappleModal, hide it
pineappleModal.addEventListener("click", function(event) {
    if (event.target === pineappleModal || event.target.className === "close") {
        pineappleModal.style.display = "none";
    }
});

// You can also close the pineappleModal with the escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && pineappleModal.style.display === "block") {
        pineappleModal.style.display = "none";
    }
});

console.log("pineappleModal.js loaded")
