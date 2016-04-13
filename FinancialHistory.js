
'use strict'

function FinancialHistory(balance) 
{
  this.balance = balance
  // declare this.balance as getter only
  // instead of regular property:
  // Object.defineProperty(this, "balance", ....
}

FinancialHistory.prototype.income = function(income)
{
  this.balance += income
}

FinancialHistory.prototype.spend = function(spend)
{
  this.balance -= spend
}

var history = new FinancialHistory(500)

