// Function to check and update the UI based on the path completion status
function updateUIBasedOnPathCompletion() {
    // Retrieve the pathComplete variables from local storage
    var applePathComplete = JSON.parse(localStorage.getItem('applePathComplete'));
    var pineapplePathComplete = JSON.parse(localStorage.getItem('pineapplePathComplete'));
    var honeyPathComplete = JSON.parse(localStorage.getItem('honeyPathComplete'));

    // Get references to the "in-progress" and "completed" sections
    var inProgressSection = document.getElementById('in-progress');
    var completedSection = document.getElementById('completed');

    // Get references to the buttons
    var completeButton = document.getElementById('return-to-village-button');

    var num_collected = 0;

    // Check if all paths are complete
    if (applePathComplete && pineapplePathComplete && honeyPathComplete) {
        // All paths are complete, show the "completed" section
        inProgressSection.style.display = 'none';
        completedSection.style.display = 'block';
        completeButton.style.display = 'block'; // Optionally, show the complete button here
        
        // Retrieve the collected variables from local storage
        var appleCollected = JSON.parse(localStorage.getItem('collectedApple'));
        var pineappleCollected = JSON.parse(localStorage.getItem('collectedPineapple'));
        var honeyCollected = JSON.parse(localStorage.getItem('collectedHoney'));

        // Log the collected variables to the console
        console.log("apple collected:", appleCollected)
        console.log("pineapple collected:", pineappleCollected)
        console.log("honey collected:", honeyCollected)

        // If apple is collected, add 1 to num_collected
        if (appleCollected) {
            num_collected += 1;
        }

        // If pineapple is collected, add 1 to num_collected
        if (pineappleCollected) {
            num_collected += 1;
        }

        // If honey is collected, add 1 to num_collected
        if (honeyCollected) {
            num_collected += 1;
        }

        localStorage.setItem('num_collected', num_collected);
    } else {
        // At least one path is not complete, show the "in-progress" section
        inProgressSection.style.display = 'block';
        completedSection.style.display = 'none';
        completeButton.style.display = 'none'; // Optionally, hide the complete button here

        // Get references to the button elements
        var appleButton = document.getElementById('open-apple-button');
        var pineappleButton = document.getElementById('open-pineapple-button');
        var honeyButton = document.getElementById('open-honey-button');

        // Check the state of the variables and hide the respective buttons
        if (applePathComplete) {
            console.log("apple path complete")
            appleButton.style.display = 'none';
        }

        if (pineapplePathComplete) {
            console.log("pineapple path complete")
            pineappleButton.style.display = 'none';
        }

        if (honeyPathComplete) {
            console.log("honey path complete")
            honeyButton.style.display = 'none';
        }
    }
}

// Call the function to initially update the UI based on the path completion status
updateUIBasedOnPathCompletion();
