$( document ).ready(function() {

    //start the game
    $('#spinButton').click(function(){

        //decide if winner or loser
        var rdmBoolean = Math.random() >= 0.5;

        if( rdmBoolean == false ) {
            console.log(false)
            //change backgrounds to not match if loser
            $( ".spinner.last" ).removeClass("bg1")
            $( ".spinner.last" ).each(function(i){
                $(this).addClass(`bg${i+1}`)
            })
        } else {
            $( ".spinner.last" ).addClass("bg1")
        }


        //move the icons
        $( ".spinner.row1" ).each(function(i){
            $(this).delay(200*i).animate({top: `200px`}, 160*i);
        })
        $( ".spinner.row2" ).each(function(i){
            $(this).delay(250*i).animate({top: `200px`}, 160*i);
        })
        $( ".spinner.row3" ).each(function(i){
            $(this).delay(300*i).animate({top: `200px`}, 160*i);
        })

        //display winner message
        if( rdmBoolean == true ) {
            $('#winner').delay(3000).fadeIn()
        }

    })

    //reset the game
    $('#startOver').click(function(){
        $( ".spinner" ).css({top: `0px`})
        $( ".spinner.last" ).removeClass("bg1 bg2 bg3 bg4 bg5")
        $('#winner').fadeOut()


    })


});