function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const prevPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = prevPhoneNumber + 1;
    }
    else{
        newPhoneNumber = prevPhoneNumber - 1;
        if(newPhoneNumber < 0){
            newPhoneNumber = 0;
            return newPhoneNumber;
        }
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    //calculate total
    calculcateSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculcateSubTotal();
})