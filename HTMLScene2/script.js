console.log("COnectado!")

let arrayOfClicked = []

const message1  = document.getElementsByClassName("message1");
const message2 = document.getElementsByClassName("message2");
const message3 = document.getElementsByClassName("message3");

const input = document.getElementsByClassName("bottomBar");
const buttonSend = document.getElementsByClassName("snedButton");

let numOfClicks = 0

function removeFromView(){
   
    message1[0].style.visibility = "visible"
 
    input.value = ""
}

function printVAlue() { 
  
 
  

    
    buttonSend[0].addEventListener("click", () => {
        if (arrayOfClicked.length == 0) { 
        removeFromView()
       input[0].value = ""

        setTimeout(function(){
            message2[0].style.visibility = "visible"
            arrayOfClicked.push(numOfClicks + 1)

        }, 2000);
        
    } else {
        addSecondClick()
console.log("suscess")
    }
      
    }) 
;

console.log(`this is going to be the value of the actual array ${arrayOfClicked.length}`)

  
  
}

function addSecondClick(){
  
        message3[0].style.visibility = "visible"
    
}

printVAlue()

