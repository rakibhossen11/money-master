
document.getElementById('calculation-btn').addEventListener('click',function(){
    // income field
    const incomeField = document.getElementById('input-income').value;
    const incomeValue = parseFloat(incomeField);

    if(incomeValue >= 0){
        const foodField = document.getElementById('input-food').value;
        const foodCost = parseFloat(foodField);
        const rentField = document.getElementById('input-rent').value;
        const rentCost = parseFloat(rentField);
        const clothesField = document.getElementById('input-clothes').value;
        const clothesCost = parseFloat(clothesField);

        if(foodCost >= 0 && rentCost >= 0 && clothesCost >= 0){
            const totalCost = foodCost + rentCost + clothesCost;

            if(incomeValue >= totalCost){
                const totalExpances = document.getElementById('total-expances');
                totalExpances.innerText = totalCost;

                const balance = document.getElementById('balance-field');
                const currentBalance = incomeValue - totalCost;
            
                balance.innerText = currentBalance;
            }else{
                alert('Your cost is big than your income');
            }

        }else if(foodField <= 0){
            alert('Please Enter your Food-Cost');
        }else if(rentField<= 0){
            alert('Please enter your Rent-Cost');
        }else if(clothesField <= 0){
            alert('Please enter your Clothes-cost');
        }

    }else{
        alert('Please enter your income');
    }

})

document.getElementById('save-btn').addEventListener('click',function(){
    // get savings
    const saveField = document.getElementById('save-field').value;
    const saveValue = parseFloat(saveField);
    // get income
    const incomeField = document.getElementById('input-income').value;
    const incomeValue = parseFloat(incomeField);

    if(saveValue >=0 && incomeValue >= 0){
        // calculation savings 
        const savings = (saveValue/100) * incomeValue;
        const savingText = document.getElementById('savings');
        savingText.innerText = savings;

        // calculate remaning balance
        const balance = document.getElementById('balance-field').innerText;
        const remaningField = document.getElementById('remaning-balance');  
        // condition for remaning balance
        if(savings >= 0 &&  savings <= balance){
            const remaningBalance = balance - savings;
            if(remaningBalance >=0 ){
                remaningField.innerText = remaningBalance;
            }
        }else{
            alert('You have not enough balance');
        }


    }else if(saveField <= 0){
        alert('Please enter a value in savings field');
    }else if(incomeField <= 0){
        alert('Please enter a value in income field');
    }

})