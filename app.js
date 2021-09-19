const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message")

const availableNotes = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes")

checkButton.addEventListener("click", function validateAmount() {
  hideMessage();
    if(parseInt(billAmount.value) > 0){
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)){
            
            const amountToBeReturned = parseInt(cashGiven.value) - parseInt(billAmount.value);
            showMessage("Here You Go!");
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Are you planning to wash dishes here?!");
        }

    } else {
        showMessage("The bill amount should be more than 0");

    }
} )

function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;  
    }
}

function hideMessage(){
    errorMessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}