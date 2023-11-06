// Get the inventory modal and the button that opens it
var inventoryModal = document.getElementById("inventoryModal");

// Function to open the inventory modal
function openInventoryModal() {
    inventoryModal.style.display = "block";
}

// Function to close the inventory modal
function closeInventoryModal() {
    inventoryModal.style.display = "none";
}

// When the user clicks outside the inventory modal, close it
inventoryModal.addEventListener("click", function(event) {
    if (event.target === inventoryModal || event.target.className === "close") {
        closeInventoryModal();
    }
});

// Close the inventory modal with the "Escape" key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && inventoryModal.style.display === "block") {
        closeInventoryModal();
    }
});

// Open the inventory modal when the "I" key is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "i") {
        openInventoryModal();
    }
});

// get references to the inventory items
var appleImage = document.getElementById("apple-image");
var pineappleImage = document.getElementById("pineapple-image");
var honeyImage = document.getElementById("honey-image");

// get local storage variables
var appleCollected = JSON.parse(localStorage.getItem('collectedApple'));
var pineappleCollected = JSON.parse(localStorage.getItem('collectedPineapple'));
var honeyCollected = JSON.parse(localStorage.getItem('collectedHoney'));

console.log(appleCollected);
console.log(pineappleCollected);
console.log(honeyCollected);

if(appleCollected){
    appleImageSrc = "../images/Apple.png";
    appleImage.src = appleImageSrc;
    appleImage.style.display = "block";
    appleImage.style.width = "30%";
}

if(pineappleCollected){
    pineappleImageSrc = "../images/Pineapple.png";
    pineappleImage.src = pineappleImageSrc;
    pineappleImage.style.display = "block";
    pineappleImage.style.width = "30%";
}

if(honeyCollected){
    honeyImageSrc = "../images/Honey.png";
    honeyImage.src = honeyImageSrc;
    honeyImage.style.display = "block";
    honeyImage.style.width = "30%";
}

console.log("inventoryModal.js loaded");