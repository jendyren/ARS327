var images = new Array(
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg"
    );

for (var i = 0; i < images.length; i++) {
    document.write(images[i] + "<br />");
}

window.onload = function() {
    var img = document.getElementById("slides");
    var i = 0;
    setInterval(function() {
        img.src = images[i];
        i++;
        if (i == images.length) {
            i = 0;
        }
    }, 3000);
}