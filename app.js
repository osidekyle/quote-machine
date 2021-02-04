$(document).ready(function(){
    

    $("#button").on("click",async function(){
        
        



         $(".words").slideUp()
        $(".quote-container").animate({height:"0.5px",paddingTop:"0",borderRadius:"10px"})
        


        var response= await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/")
        var parsedResponse=await response.json()
        



        $(".quote-container").delay(200).animate({height:"100%",paddingTop:"30px"})
        $(".words").slideDown(1000) 
    })

    









})