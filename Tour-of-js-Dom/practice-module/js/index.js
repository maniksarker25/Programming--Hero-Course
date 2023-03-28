// get food,rent,clothes amount 
function getInputValueById(idName) {
    const inputValue = document.getElementById(idName);
    const inputValueString = inputValue.value;
    const inputValueTotal = parseFloat(inputValueString);
    // inputValue.value = '';
    return inputValueTotal;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalIncome = getInputValueById('total-income');

    const foodAmount = getInputValueById('food-amount');
    const rentAmount = getInputValueById('rent-amount');
    const clothesAmount = getInputValueById('clothes-amount');

    if (isNaN(totalIncome) || isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)) {
        alert('Please provide a valid amount');
        return;
    }
    else if (totalIncome < 0 || foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {
        alert('Please provide a valid amount ');
        return;
    }


    const totalExpense = foodAmount + rentAmount + clothesAmount;
        const totalExpenseElement = document.getElementById('expenses-total');
        
    if (totalExpense > totalIncome) {
        alert('Ai buja bai koran');
        return;
    }


    // set total balance
    else {
        
        totalExpenseElement.innerText = totalExpense;
        const totalBalance = totalIncome - totalExpense;
        const totalBalanceElement = document.getElementById('balance-total');
        totalBalanceElement.innerText = totalBalance;
        // set total expenses

    }


})
document.getElementById('save-btn').addEventListener('click', function () {
    // set save balance 
    const totalIncome = getInputValueById('total-income');
    const saveparcent = getInputValueById('save-parsent');
    console.log(totalIncome)
    if (isNaN(saveparcent)) {
        alert('Please provide valid parcent ')
        return;

    }
    else if (saveparcent < 0) {
        alert('Please provide valid parcent')
    }
    const savingAmount = (totalIncome * saveparcent) / 100;
    const savingAmountElement = document.getElementById('saving-amount');
    savingAmountElement.innerText = savingAmount;

    // set remaining balance 
    const totalBalanceElement = document.getElementById('balance-total').innerText;
    const totalBalance = parseFloat(totalBalanceElement);

    if (savingAmount > totalBalance) {
        alert('Ato taka save kora possible na ');
        return;
    }
    const remainingAmount = totalBalance - savingAmount;
    const remainingAmountElement = document.getElementById('remaining-amount');
    remainingAmountElement.innerText = remainingAmount;
})