// food expenses function
function foodExpenses() {
    const footExpenses = document.getElementById('food-expenses');
    const foodValue = parseFloat(footExpenses.value);
    if (foodValue > 0) {
        return foodValue;
    } else {
        document.getElementById('warning').style.display = 'block';
    }

}
// rent expanses function
function rentExpenses() {
    const rentExpenses = document.getElementById('rent-expenses');
    const rentValue = parseFloat(rentExpenses.value);
    if (rentValue > 0) {
        return rentValue;
    } else {
        document.getElementById('warning').style.display = 'block';
    }
}
// clothes expenses function
function clotheExpenses() {
    const clotheExpenses = document.getElementById('clothe-expenses');
    const clotheValue = parseFloat(clotheExpenses.value);
    if (clotheValue > 0) {
        return clotheValue;
    } else {
        document.getElementById('warning').style.display = 'block';
    }
}
// get expenses total result here
function getExpenses() {
    //total monthly expenses
    const totalExpense = foodExpenses() + rentExpenses() + clotheExpenses();
    return totalExpense;
}

function getBalance() {
    // total monthly income
    const monthlyIncome = document.getElementById('monthly-income');
    const monthlyValue = parseFloat(monthlyIncome.value);
    if (monthlyValue > 0) {
        return monthlyValue;
    } else {
        document.getElementById('warning').style.display = 'block';

    }

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
    const percentageValue = parseInt(percentageMoney.value);
    const savingMoney = getBalance() / percentageValue;
    if (savingMoney > totalSaveBalance()) {
        document.getElementById('warning2').style.display = 'block';
    } else {
        document.getElementById('warning3').style.display = 'block';
    }
    const remainigMoney = totalSaveBalance() - savingMoney;
    // saving amount show into the ui design
    document.getElementById('saving-amount').innerText = savingMoney;
    document.getElementById('remainig-amount').innerText = remainigMoney;
});