function getTexElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currPhoneTotalString = phoneTotalElement.innerText;
    const currPhoneTotal = parseInt(currPhoneTotalString);
    return currPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculcateSubTotal(){
    const currPhoneTotal = getTexElementValueById('phone-total');
    const currCaseTotal = getTexElementValueById('case-total');
    const currSubTotal =  currPhoneTotal + currCaseTotal;
    setTextElementValueById('sub-total', currSubTotal);
    //calculate Tax
    const taxAmountString = (currSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}


