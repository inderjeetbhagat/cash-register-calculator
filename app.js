const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message")

checkButton.addEventListener("click", function validateAmount() {
    errorMessage.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            
            const amountToBeReturned = cashGiven.value - billAmount.value;
            console.log(amountToBeReturned);
        } else {
            showMessage("Are you planning to wash dishes here?!");
           
            
        
        }

    } else {
        showMessage("The bill amount should be more than 0");

    }
} )

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}