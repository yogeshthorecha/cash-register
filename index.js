const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const section2 = document.querySelector("#section2");
section2.style.display = "none"
var availableNotes=[2000,500,100,20,10,5,1];


nextButton.addEventListener("click",function(){
    section2.style.display = "flex";
})

checkButton.addEventListener("click",function(){
    
    if(billAmount.value > 0){
        errorMessage.style.display = "none";
        if(cashGiven.value > billAmount.value){
            errorMessage.style.display = "none";
            var amountToBeReturned = cashGiven.value - billAmount.value;
            validateChangeAmount(amountToBeReturned);
        }
        else{
            showError("do you wanna wash plates?")
        }
    }
    else{
        showError("bill amount should be greater than 0");
    }



})

function validateChangeAmount(amountToBeReturned){
        for(let i=0;i<availableNotes.length;i++){
            var no_of_notes=Math.trunc(amountToBeReturned/availableNotes[i]);
            amountToBeReturned%=availableNotes[i]
            noOfNotes[i].innerText=no_of_notes;
        }

}
function showError(error){
    errorMessage.style.display = "block";
     errorMessage.innerText=error;
}

