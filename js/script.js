// get expenses total result here
function getExpenses() {
    const footExpenses = document.getElementById('food-expenses');
    const footValue = parseFloat(footExpenses.value);
    const rentExpenses = document.getElementById('rent-expenses');
    const rentValue = parseFloat(rentExpenses.value);
    const clotheExpenses = document.getElementById('clothe-expenses');
    const clotheValue = parseFloat(clotheExpenses.value);
    //total monthly expenses
    const totalExpense = footValue + rentValue + clotheValue;
    return totalExpense;
}

function getBalance() {
    // total monthly income
    const monthlyIncome = document.getElementById('monthly-income');
    const monthlyValue = parseFloat(monthlyIncome.value);
    return monthlyValue;
}

function totalSaveBalance() {
    const balanceMoney = getBalance() - getExpenses();
    return balanceMoney;
}
// click event handaler
document.getElementById('calculate').addEventListener('click', function () {

    getExpenses();

    //apply in to html 
    document.getElementById('total-expenses').innerText = getExpenses();
    document.getElementById('balance-Money').innerText = totalSaveBalance();


});


// saving amount 

document.getElementById('save-btn').addEventListener('click', function () {
    const percentageMoney = document.getElementById('percentage');
    const percentageValue = percentageMoney.value;
    const savingMoney = totalSaveBalance() / percentageValue;
    const remainigMoney = totalSaveBalance() - savingMoney;
    // saving amount show into the ui design
    document.getElementById('saving-amount').innerText = savingMoney;
    document.getElementById('remainig-amount').innerText = remainigMoney;
});