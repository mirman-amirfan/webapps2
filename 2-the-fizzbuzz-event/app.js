$(document).ready(function(){
$("#done").click(function() {
    console.log("Running");
    var f = parseInt($("#fizzFactor")
        .val());
    var b = parseInt($("#buzzFactor")
        .val());
    var n = parseInt($("#number")
        .val());

    console.log(f, b, n);

    for (var i = 1; i < n+1; i++) {
        var newDiv = $(document.createElement("div"));
        if (i % (f * b) == 0) {
            newDiv.append("FizzBuzz!");
        } else if (i % b == 0) {
            newDiv.append("Buzz");
            newDiv.addClass("buzz");
        } else if (i % f == 0) {
            newDiv.append("Fizz!");
        } else {
            newDiv.append(i);
        }
        $("#output").append(newDiv);
      }
});

});
