// step 1 get the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2 get the withdraw amount from the withdraw field 
    const withdrawField = document.getElementById('withdraw-blance');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step 7 : clear the input field 
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please enter valid amount ')
        return;
    }
    

    // step 3 get previous withdraw amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   
  
    
    // step 5 get the previous total 
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
       // step 7 : clear the input field 
       withdrawField.value = '';
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Bank a ato taka nai ')
        return;
    }
     // step 4 : calculate total withdraw total amount and set total amount 
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6 calculate new balance total and set total blance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step 7 : clear the input field 
    withdrawField.value = '';
    

})