function solution(A, D) {
    const monthlyFee = 5;
    const transactions = {};
    let totalIncome = 0;
    let totalExpenses = 0;
    
    // Parse transaction dates and calculate total income and expenses
    for (let i = 0; i < A.length; i++) {
        const amount = A[i];
        const date = new Date(D[i]);
        const month = date.getMonth();
        
        transactions[month] = transactions[month] || { cardPayments: 0, totalAmount: 0 };
        transactions[month].totalAmount += amount;
        
        if (amount < 0) {
            totalExpenses -= amount;
            transactions[month].cardPayments -= amount;
        } else {
            totalIncome += amount;
        }
    }
    
    // Deduct monthly fees
    for (const month in transactions) {
        if (transactions[month].cardPayments >= 100 || transactions[month].cardPayments === undefined) {
            totalExpenses -= monthlyFee;
        }
    }
    
    // Calculate final balance
    const finalBalance = totalIncome - totalExpenses;
    
    return finalBalance;
}

// Test cases
console.log(solution([100,100,100,-10], ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29'])); // Output: 230
console.log(solution([180,-50,-25,-25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'])); // Output: 25
console.log(solution([1,-1,0,-105,1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'])); // Output: -164
console.log(solution([100,100,-10,-20,-30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08'])); // Output: 80
console.log(solution([-60,60,-40,-20], ['2020-10-01', '2020-02-02', '2020-10-10', '2020-10-30'])); // Output: -115
