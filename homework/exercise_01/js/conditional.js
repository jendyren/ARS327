function changeCondition(isHappy){
    if(isHappy){
        // if isHappy is true, then the condition will be "Hello World!"
        document.getElementById("condition").innerHTML = "Hello World!";
    }else{
        // if isHappy is false, then the condition will be "Goodbye World!"
        document.getElementById("condition").innerHTML = "Goodbye World!";
    }
}

function happyWorld(){
    // creates a variable to store a boolean value
    let isHappy = true;

    let happyButton = document.getElementById("happy-button");
    let unhappyButton = document.getElementById("unhappy-button");

    // add an event listener to the happy button
    happyButton.addEventListener("click", function(){
        // if the happy button is clicked, then isHappy will be true
        isHappy = true;

        changeCondition(isHappy);
    });

    // add an event listener to the unhappy button
    unhappyButton.addEventListener("click", function(){
        // if the unhappy button is clicked, then isHappy will be false
        isHappy = false;

        changeCondition(isHappy);
    });
    
}

window.onload = function() {
    happyWorld();
}