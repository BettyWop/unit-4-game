//creating values for wins,losses,total score
var wins = 0;
var losses = 0;
var TotalScore = 0;
//determining random number for the computer guess max 120
$(document).ready(function () {
    function computerNumber() {
        var number = Math.floor(Math.random() * 120) + 1;
        return number;
    }
    var compN = computerNumber();
    $(".numbox").text(computerNumber);

    //getting random numbers for each diamonds onclick between 1-12
    function diamondNumber() {
        function number() {
            var number = Math.floor(Math.random() * 12) + 1;
            return number;
        }
        $("#purple").attr("crystalValue", number());
        $("#pink").attr("crystalValue", number());
        $("#blue").attr("crystalValue", number());
        $("#green").attr("crystalValue", number());
    }
    diamondNumber();
    //press diamond
    $(".objects").on("click", function () {
        var crystalValue = ($(this).attr("crystalValue"));
        crystalValue = parseInt(crystalValue);

        //adding diamond value to total score to change score
        TotalScore += crystalValue;
        $("#total").text(TotalScore);

        //if or else conditions for when I lose or win
        if (TotalScore === compN) {
            wins++;
            $("#winlose").text("Yay, you won!");
            $("#wins").text(wins);
            TotalScore = 0,
            $("#total").text(TotalScore);
            compN = computerNumber();
            $(".numbox").text(compN);
            diamondNumber();
        }
        else if (TotalScore > compN) {
            losses++;
            $("#losses").text(losses);
            $("#winlose").text("You lost!");
            TotalScore = 0;
            $("total").text(TotalScore);
            compN = computerNumber();
            $(".numbox").text(compN);
            diamondNumber();

        }
    })
})