// gettingIncome 
function gettingIncome(){
    // getting the income amount
    const income = document.getElementById("income").value;
    const incomeValue = parseInt(income);
    // console.log(incomeValue)
    return incomeValue;
}

// getting all expenses 
function gettingExpenses(){
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
    // console.log(totalExpense);
    return totalExpense;
}

// getting all the balance 
function gettingBalance(){
    const incomeValue = gettingIncome();
    const totalExpense = gettingExpenses()
    //balance 
    const balance = incomeValue - totalExpense;
    return balance;
}

// calculate button 
document.getElementById("calculate-balance").addEventListener("click", function(){
    
    // calling functions
    const incomeValue = gettingIncome();
    const totalExpense = gettingExpenses()
    const balance = gettingBalance();

    if(isNaN(balance) == false && isNaN(totalExpense)==false){
        if(incomeValue < totalExpense){
            document.getElementById("error-msg1").style.display = "block";
            document.getElementById("error-msg2").style.display = "none";
        }
        else{
            document.getElementById("error-msg1").style.display = "none";
            document.getElementById("error-msg2").style.display = "none";
            // showing of the expenses
            const expenseShow = document.getElementById("total-expense");
            expenseShow.innerText = totalExpense;
    
            //showing of the balance
            const balanceShow = document.getElementById("balance");
            balanceShow.innerText = balance;
        }    
    }
    else{
        document.getElementById("error-msg2").style.display = "block";
        document.getElementById("error-msg1").style.display = "none";
    }
})

// saving buttons
document.getElementById("saving-btn").addEventListener("click", function(){
    // getting the income amount
    const incomeValue = gettingIncome();
    // getting saving amount and setting them 
    const savingAmount = document.getElementById("saving-amount").value;
    const savingAmountValue = parseInt(savingAmount);

    const savings = incomeValue * (savingAmountValue/100);

    // remaining balance
    //getting the previous balance
    const previousBalance  = gettingBalance();

    // calculating the remianing balance 
    const remainingBalance = previousBalance - savings;

    if(isNaN(savingAmountValue) == false){
        if(savingAmountValue > previousBalance){
            document.getElementById("error-msg1").style.display = "block";
            document.getElementById("error-msg2").style.display = "none";
        }
        else{
            document.getElementById("error-msg1").style.display = "none";
            document.getElementById("error-msg2").style.display = "none";
            //shwoing savings
            const savingTotal = document.getElementById("saving-total");
            savingTotal.innerText = savings;
            //showing the remianing balance
            const remainingBalanceShow = document.getElementById("remaining-balance");
            remainingBalanceShow.innerText = remainingBalance;
        }    
    }
    else{
        document.getElementById("error-msg2").style.display = "block";
        document.getElementById("error-msg1").style.display = "none";
    }
})