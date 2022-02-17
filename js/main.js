document.getElementById("calculate-balance").addEventListener("click", function(){
    
    // getting the income amount
    const income = document.getElementById("income").value;
    const incomeValue = parseInt(income);
    // console.log(incomeValue)
    
    // getting the expenses and adding them
    //food cost
    const foodCost  = document.getElementById("food").value;
    const foodCostValue = parseInt(foodCost);
    //rent cost
    const rentCost = document.getElementById("rent").value;
    const rentCostValue = parseInt(rentCost);
    
    // clothes cost 
    const clothesCost = document.getElementById("clothes").value;
    const clothesCostValue = parseInt(clothesCost);

    // total expenses
    const totalExpense = foodCostValue + rentCostValue + clothesCostValue;
    console.log(totalExpense);

    // showing of the expenses
    const expenseShow = document.getElementById("total-expense");
    expenseShow.innerText = totalExpense;

    //balance 
    const balance = incomeValue - totalExpense;

    //showing of the balance
    const balanceShow = document.getElementById("balance");
    balanceShow.innerText = balance;

})

document.getElementById("saving-btn").addEventListener("click", function(){
    // getting the income amount
    const income = document.getElementById("income").value;
    const incomeValue = parseInt(income);

    // getting saving amount and setting them 
    const savingAmount = document.getElementById("saving-amount").value;
    const savingAmountValue = parseInt(savingAmount);

    const savings = incomeValue - savingAmountValue;
    
    const savingTotal = document.getElementById("saving-total");
    savingTotal.innerText = savings;

    // remaining balance
    //getting the previous balance
    const previousBalance  = document.getElementById("balance").innerText;
    const previousBalanceValue  = parseInt(previousBalance);

    // calculating the remianing balance 
    const remainingBalance = previousBalanceValue - savings;
    //showing the remianing balance
    const remainingBalanceShow = document.getElementById("remaining-balance");
    remainingBalanceShow.innerText = remainingBalance;
})