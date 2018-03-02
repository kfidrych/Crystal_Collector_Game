$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#gameNumber").text(randomNumber);

    var gem1 = Math.floor(Math.random() * 12) + 1;
    var gem2 = Math.floor(Math.random() * 12) + 1;
    var gem3 = Math.floor(Math.random() * 12) + 1;
    var gem4 = Math.floor(Math.random() * 12) + 1;
    var currentNumber = 0;
    var wins = 0;
    var losses = 0;

    $("#gem1").val(gem1);
    $("#gem2").val(gem2);
    $("#gem3").val(gem3);
    $("#gem4").val(gem4);

    $("#gem1").on("click", function() {
        $(this).attr('value', gem1);
        $("#gem1Value").text(gem1);
        currentNumber = currentNumber + parseInt($("#gem1").val());
        $("#userNumber").text(currentNumber);
        gamePlay();
    })

    $("#gem2").on("click", function() {
        $(this).attr('value', gem2);
        $("#gem2Value").text(gem2);
        currentNumber = currentNumber + parseInt($("#gem2").val());
        $("#userNumber").text(currentNumber);
        gamePlay();
    })

    $("#gem3").on("click", function() {
        $(this).attr('value', gem3);
        $("#gem3Value").text(gem3);
        currentNumber = currentNumber + parseInt($("#gem3").val());
        $("#userNumber").text(currentNumber);
        gamePlay();
    })

    $("#gem4").on("click", function() {
        $(this).attr('value', gem4);
        $("#gem4Value").text(gem4);
        currentNumber = currentNumber + parseInt($("#gem4").val());
        $("#userNumber").text(currentNumber);
        gamePlay();
    })

    function gamePlay() {
        if (currentNumber === randomNumber) {
            alert("You matched the number! You Win!");
            wins++;
            $("#wins").html("<h3>Wins: " + wins + "</h3>");
            newGame();
        } else if (currentNumber > randomNumber) {
            alert("You went over the number! You Lose! Try again!");
            losses++;
            $("#losses").html("<h3>Losses: " + losses + "</h3>");
            newGame();
        }
    }

    function newGame() {
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#gameNumber").text(randomNumber);
        currentNumber = 0;
        $("#userNumber").text(currentNumber);
        gem1 = Math.floor(Math.random() * 12) + 1;
        gem2 = Math.floor(Math.random() * 12) + 1;
        gem3 = Math.floor(Math.random() * 12) + 1;
        gem4 = Math.floor(Math.random() * 12) + 1;
        $("#gem1").val(gem1);
        $("#gem2").val(gem2);
        $("#gem3").val(gem3);
        $("#gem4").val(gem4);
        $("#gem1Value").text("");
        $("#gem2Value").text("");
        $("#gem3Value").text("");
        $("#gem4Value").text("");
    }
})
