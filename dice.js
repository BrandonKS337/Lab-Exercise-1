//Break the function using checks....somehow good luck




function diceRoll(num,num2,Name1){
    console.log("this is how many sides:", num,num2)
    document.getElementById(Name1).innerHTML=numberMinMax(num,num2)

}



function d6(){
    console.log("button clicked")
    console.log("this is function d6")
    numberMinMax(1,6) //calls numberMinMax function defined down there
    document.getElementById("roll6").innerHTML=numberMinMax(1,7)
}
function d10(){
    // console.log("button clicked")
    document.getElementById("rolld10").innerHTML=numberMinMax(1,11)
}
function d4(){
    //adding HTML call thingermabbober for d4
    document.getElementById("rolld4").innerHTML=numberMinMax(1,4)
}

function numberMinMax(min,max) { //creates numberMinMax function
    const diceRoll=Math.floor(Math.random() * (max- min +1)) + min
    console.log(diceRoll)
    return(diceRoll)
}