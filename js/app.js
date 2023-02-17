function getElement(elementId){
    const element = document.getElementById(elementId);
    return element;
}

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}
function getTextValue(textId){
    const element = document.getElementById(textId);
    const elementValue = element.innerText;
    const value = parseFloat(elementValue);
    return value;
}

function setValueById(elementId,value){
    const inputField = getElement(elementId);
    inputField.innerText = value;
} 

document.getElementById('calculation-btn').addEventListener('click',function(){
    //  get income 
    const incomeValue = getInputValue('input-income');

    // get cost
    const foodCost = getInputValue('input-food');
    const rentCost = getInputValue('input-rent');
    const clothesCost = getInputValue('input-clothes');
    // calcultion total cost 
    const totalCost = foodCost + rentCost + clothesCost;
    // set total expenses 
    setValueById('total-expances',totalCost);
    // current balance
    const currentBalance = incomeValue - totalCost;
    // set current balance 
    setValueById('balance-field',currentBalance);
    
})

//  saving calculatioin

getElement('save-btn').addEventListener('click',function(){
    // get income value and saving value 
    const incomeValue = getInputValue('input-income');
    const saveValue = getInputValue('save-field');
    // calculatin savings 
    const saving = (saveValue/100) * incomeValue;
    // set savings 
    setValueById('savings',saving);
    // get current balance 
    const currentBalance = getTextValue('balance-field');

    // calculation remaning balance
    const remaningBalance = currentBalance - saving;
    // set remaning balance
    setValueById('remaning-balance',remaningBalance);

})