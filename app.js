$(document).ready(function(){
    

    $("#button").on("click",async function(){
        
        



         $(".words").slideUp()
        $(".quote-container").animate({height:"0.5px",paddingTop:"0",borderRadius:"10px"})
        

        
        


        var response= await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
       
        var parsedResponse=await response.json()

        console.log(parsedResponse.data[0].quoteText)

        $("#quote-text").text(parsedResponse.data[0].quoteText)
        $("#quote-name").text("- "+parsedResponse.data[0].quoteAuthor)
        
        /* var lengthOfList=parsedResponse.data.length

        

        var randomNumber=Math.floor(Math.random()*lengthOfList)
        console.log(randomNumber)

        console.log(parsedResponse.data[randomNumber]) */
        



        $(".quote-container").delay(200).animate({height:"100%",paddingTop:"30px"})
        $(".words").slideDown(1000) 
    })

    









})