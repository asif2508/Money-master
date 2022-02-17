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