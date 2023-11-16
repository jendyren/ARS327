
function handleSubmitName() {
    // Get the input element by its id
    var nameInput = document.getElementById("name");

    // Get the output element by its id
    var outputElement = document.getElementById("output");

    // Get the value of the input
    var name = nameInput.value;

    // Display the name in the output element
    outputElement.innerHTML = "<h1> Hello, " + name + "!</h1>";

    // // Clear the input field
    // nameInput.value = "";
}

function go() {
    var n = document.getElementById("name").value;

    // use data and put into URL
    var params = new URLSearchParams();
    params.append("name", JSON.stringify(n));

    // go to page 2
    location.href = "/class/tutorial_13/html/page2.html?" + params.toString();
}
