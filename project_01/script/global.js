// Setting variables
localStorage.setItem('collectedApple', false);
localStorage.setItem('collectedPineapple', false);
localStorage.setItem('collectedHoney', false);

localStorage.setItem('applePathComplete', false);
localStorage.setItem('pineapplePathComplete', false);
localStorage.setItem('honeyPathComplete', false);

localStorage.setItem('num_collected', 0);

// Retrieving variables
var collectedApple = JSON.parse(localStorage.getItem('collectedApple'));
var collectedPineapple = JSON.parse(localStorage.getItem('collectedPineapple'));
var collectedHoney = JSON.parse(localStorage.getItem('collectedHoney'));

var applePathComplete = JSON.parse(localStorage.getItem('applePathComplete'));
var pineapplePathComplete = JSON.parse(localStorage.getItem('pineapplePathComplete'));
var honeyPathComplete = JSON.parse(localStorage.getItem('honeyPathComplete'));
