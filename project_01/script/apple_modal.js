// Get the modal and the button that opens it
var appleModal = document.getElementById("appleModal");
var openAppleModalButton = document.getElementById("open-apple-button");

// When the button is clicked, show the appleModal
openAppleModalButton.addEventListener("click", function() {
    appleModal.style.display = "block";
});

// When the user clicks the close button or outside the appleModal, hide it
appleModal.addEventListener("click", function(event) {
    if (event.target === appleModal || event.target.className === "close") {
        appleModal.style.display = "none";
    }
});

// You can also close the appleModal with the escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && appleModal.style.display === "block") {
        appleModal.style.display = "none";
    }
});

console.log("appleModal.js loaded")
