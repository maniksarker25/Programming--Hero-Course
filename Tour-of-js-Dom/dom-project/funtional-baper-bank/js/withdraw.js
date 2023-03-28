// add withdraw button click handler 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get withdraw amount by using getInputFieldValueById function
    const newWithdrawAmount = getInputFieldValueById('withdraw-field')
    // get previous withdraw amount by using getInputFieldValueById function
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    // calculate new withdraw total and set the total 
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set new withdraw total by using setTextElementValueById
    setTextElementValueById('withdraw-total',newWithdrawTotal);
    
    // get previous total balance by using getTextElementValueById
    const previousTotalBalance = getTextElementValueById('balance-total');
    // calculate new total balance and set the total
    const newBalanceTotal = previousTotalBalance - newWithdrawAmount;
    // set new total balance by using setTextElementValueById
    setTextElementValueById('balance-total',newBalanceTotal);

})