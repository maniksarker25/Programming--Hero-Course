/* 
step 1: add event handler at the withdraw button
step 2: get the withdraw amount from input field 
step 2.5: convert string amount to number amount 
step 3: clear the input field 
step 4: get previous withdraw total 
step 5: calculate total withdraw amount and set it to the withdraw total amount 
step 6: get previous balance 
step 7: calculate new balance and set total balance
*/

// step 1:  add event handler at the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step2: get the withdraw amount from input field 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalString = withdrawField.value;
    // step 2.5: convert string amount to number amount 
    const newWithdrawTotal = parseFloat(newWithdrawTotalString);
    // step 3: clear the input field 
    withdrawField.value = '';
    //step 4: get previous withdraw total 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //step 5: calculate total withdraw amount and set it to the withdraw total amount 
    const withdrawTotal = previousWithdrawTotal + newWithdrawTotal;
    withdrawTotalElement.innerText = withdrawTotal;
    //step 6: get previous balance 
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);
    //step 7: calculate new balance and set total balance
    const newBalanceTotal = previousBalance - newWithdrawTotal;
    balanceElement.innerText = newBalanceTotal;


    
})