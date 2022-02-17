function gettingIncome(){
    // getting the income amount
    const income = document.getElementById("income").value;
    const incomeValue = parseInt(income);
    // console.log(incomeValue)
    return incomeValue;
}

document.getElementById("calculate-balance").addEventListener("click", function(){
    
    const incomeValue = gettingIncome();
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

    //balance 
    const balance = incomeValue - totalExpense;
    if(isNaN(balance) == false && isNaN(totalExpense)==false && isNaN(incomeValue)==false && isNaN(foodCostValue)==false && isNaN(rentCostValue)==false && isNaN(clothesCostValue)==false){
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

document.getElementById("saving-btn").addEventListener("click", function(){
    // getting the income amount
    const income = document.getElementById("income").value;
    const incomeValue = parseInt(income);

    // getting saving amount and setting them 
    const savingAmount = document.getElementById("saving-amount").value;
    const savingAmountValue = parseInt(savingAmount);

    const savings = incomeValue * (savingAmountValue/100);

    // remaining balance
    //getting the previous balance
    const previousBalance  = document.getElementById("balance").innerText;
    const previousBalanceValue  = parseInt(previousBalance);

    // calculating the remianing balance 
    const remainingBalance = previousBalanceValue - savings;

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