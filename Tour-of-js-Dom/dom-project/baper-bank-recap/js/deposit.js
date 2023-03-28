// step 1; add event listener to the deposit button
//step 2: get deposit amount from the deposit field
// step 2.5: convert string amount to a number amount 
//step 3: clear the deposit input field after the getting value 
// step 4; GET THE PREVIOUS DEPOSIT TOTAL
//step 5 : calculate new deposit total and set the deposit total
// step 6: get the current balance 
// step 7: calculate new balance total and set the balance total 



// step 1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2: get deposit amount from deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // step 2.5: convert string amount to a number amount 
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 3: clear input value to set empty string 
    depositField.value = '';
    // step 4: get the previous deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 5: calculate new deposit total and set the deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // get the current balance 
    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7: calculate new balance total and set the balance total 
    const totalBalance = previousBalanceTotal + newDepositAmount;
    totalBalanceElement.innerText = totalBalance;


})