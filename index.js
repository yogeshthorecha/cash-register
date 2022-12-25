let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let checkBtn = document.querySelector("#check");
let message = document.querySelector("#error-message");
let numberOfNotes = document.querySelectorAll(".no-of-notes");


var availableNotes=[2000,500,100,20,10,5,1];

checkBtn.addEventListener("click", function validateBillAmount(){
   
    hideMessage();
   if(billAmount.value && cashGiven.value){
      hideMessage();
    if(billAmount.value > 0 ){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
           
            let amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned); 
           
        }
        else{
            showMessage( "Do you wanna wash plates");
        }
    }
    else{
        showMessage("Invalid Bill Amount");
    }
   }
   else{
     showMessage("please fill both the fields");  
   }
});

function calculateChange(amountToBeReturned){
    for(let i = 0 ; i < availableNotes.length; i++){
        let noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];

        numberOfNotes[i].innerText = noOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg) {
    for(let i = 0 ; i < availableNotes.length; i++){
       numberOfNotes[i].innerText = 0;
    }
    message.style.display = "block";
    message.innerText = msg;
}
