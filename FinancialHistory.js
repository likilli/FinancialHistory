
'use strict'

function FinancialHistory(balance) 
{
  this.balance = balance

  Object.defineProperties(this, "income",
  {
      set: function(income) 
      {
        this.balance = this.balance + this.income
      }

  })

  Object.defineProperties(this, "spend",
  {
      set: function(spend) 
      {
        this.balance = this.balance - this.spend
      }
  })
}
var history = new FinancialHistory(500)

