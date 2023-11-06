function createFruitList(){
    // Define an array of fruits
    const fruits = ['apple', 'honey', 'pineapple', 'watermelon'];

    // Get the element with id="fruit-list"
    let fruitListElement = document.getElementById('fruit-list');

    // Create a <ul> element
    let ulElement = document.createElement('ul');

    // Loop through the fruits array
    for(let i = 0; i < fruits.length; i++){
        // Create a <li> element
        let liElement = document.createElement('li');

        // Set the text of the <li> element
        liElement.innerHTML = fruits[i];

        // Append the <li> element to the <ul> element
        ulElement.appendChild(liElement);
    }

    // Append the <ul> element to the <div> element
    fruitListElement.appendChild(ulElement);
}

window.onload = function() {
    createFruitList();
}