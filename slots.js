$(document).ready(function () {

    //start the game
    $('#spinButton').click(function () {

        //decide if winner or loser
        var rdmBoolean = Math.random() >= 0.5;

        if (rdmBoolean == false) {
            console.log(false)
            //change backgrounds to not match if loser
            $(".spinner.last").removeClass("bkg1")
            $(".spinner.last").each(function (i) {
                $(this).addClass(`bkg${i + 1}`)
            })
        } else {
            $(".spinner.last").addClass("bkg1")
        }

        //move the icons
        $(".spinner.row1").each(function (i) {
            $(this).delay(200 * i).animate({top: `200px`}, 160 * i);
        })
        $(".spinner.row2").each(function (i) {
            $(this).delay(250 * i).animate({top: `200px`}, 160 * i);
        })
        $(".spinner.row3").each(function (i) {
            $(this).delay(300 * i).animate({top: `200px`}, 160 * i);
        })

        //display winner message
        if (rdmBoolean == true) {
            $('#winner').delay(3000).fadeIn()
        }
    })

    //reset the game
    $('#startOver').click(function () {
        $(".spinner").css({top: `0px`})
        $(".spinner.last").removeClass("bkg1 bkg2 bkg3 bkg4 bkg5")
        $('#winner').fadeOut()
    })
});

//cherries, peaches, grapes, sevens, diamonds

var imageValues = [1,2,3,5,10];






