//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Extra Challenge!

var bankCustomer = {
  lastname: "Lincoln",
  branchNumber: "008",
  accountBalance: 500.25, 
  interestRate: 1.03,
  multipleAccounts: true,
  makeDeposit: function(deposit){
    this.accountBalance += deposit;
    return "Thank you, your current balance is now $" + this.accountBalance;
  },
  makeWithdrawal: function(withdrawal){
    this.accountBalance -= withdrawal;
    return "Thank you, your current balance is now $" + this.accountBalance;
  },
  addInterest: function(){
    if (this.multipleAccounts === true){
      this.accountBalance *= (this.interestRate + 0.005);
    } else {
      this.accountBalance *= this.interestRate
    }
    return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
  }
}

console.log(bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());
