function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const prevCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease){
        newCaseNumber = prevCaseNumber + 1;
    }
    else{
        newCaseNumber = prevCaseNumber - 1;
        if(newCaseNumber < 0){
            newCaseNumber = 0;
            return newCaseNumber;
        }
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculcateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculcateSubTotal();
})