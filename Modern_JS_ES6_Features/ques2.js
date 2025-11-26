function createBankAccount() {
  let balance = 0; // private variable
  let transactionHistory = []; // private transaction log

  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    checkBalance: function() {
      console.log(`Balance: ${balance}`);
      return balance;
    },
    getTransactionHistory: function() {
      console.log("Transaction History:", transactionHistory);
      return [...transactionHistory]; // returns a copy for safety
    }
  };
}
const myAccount = createBankAccount();