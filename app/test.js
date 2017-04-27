function rollDice(callback) {
    var i = Math.floor((Math.random() * 25) + 5);
    var j = i;
    var test = setInterval(function() {
        i--;
        var value = Math.floor((Math.random() * 6) + 1);
      //  document.getElementById("dice").src = "./images/dice/dice" + value + ".png";
        if(i < 1) {
            clearInterval(test);
            callback(value);
        }
    }, 50);
}

rollDice(function(value) {
  console.log("Hi!! Nice to meet you . . . ");
});
