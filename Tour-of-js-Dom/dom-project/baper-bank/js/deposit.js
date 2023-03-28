//step 1: add event listener at deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    //step2; get the deposit amount at the deposit input field
    const depositField = document.getElementById('deposit-blance');
    // use .value for get input field value 
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
       // step7: clear the deposit value
       depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid amount');
        return;
    }
    //step 3: current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    //use inner text for get the text at text element (other input or textarea)
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 4 : add previous and new deposit amount 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step 5; Get the current balance total 
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;










 



})