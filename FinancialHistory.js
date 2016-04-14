'use strict'

function FinancialHistory(){} 

Object.defineProperty(FinancialHistory.prototype, "balance",
{
	
	set: function(value)
	{
		this._cash = valueOf()Object.defineProperty(this, "balance",
		{
			get: function() {return this.cash}
		})

	},
	enumerable: true,
	configurable:true

})

FinancialHistory.prototype.income = function(income)
{
  this._cash += income
}

FinancialHistory.prototype.spend = function(spend)
{
  this._cash -= spend
}

var history = new FinancialHistory
history.balance = 1e3
///////////
\/\/\/\/\/\/\/\
function FinancialHistory(balance)
{
	balance >>>=0//////всегда сводит к целому числу

	this.spend = money => balance -= money
	this.income = money => balance += money

	Object.defineProperty(FinancialHistory.prototype, "balance",
	{
	get: () => balance
	})
}
\/\/\/\/\/\/\/\
Object.defineProperty(FinancialHistory.prototype, "balance",
{
	get: function() 
	{
		return this.cash
	}
	set: function(value)
	{
		this._cash = valueOf()Object.defineProperty(this, "balance",
		{
			
		})


//////////////////GET/////////

var obj = {}
obj.key// obj.[[Get]]("key")
obj.[key]// obj.[[Get]](key)

Object.prototype.[[Get]] = function(key)
{
	var receiver = this
	var obj = receiver

	do
	{
		var desc = Object.getOwnPropertyDescriptor(obj, key)
		if(desc == null) continue
		
		return desc.get
			? desc.get.call(receiver)
			: desc.value

	}
	while (obj = obj.[[Prototype]])//////прототипная сеть всегда будет законченной, будет  false если не будет прототипа на obj
}
/////////
//////////////////SET/////////

var obj = {}
obj.key// obj.[[Set]]("key")
obj.[key]// obj.[[Set]](key)

Object.prototype.[[Set]] = function(key, value)
{
	var receiver = this
	var obj = receiver

	do
	{
		var desc = Object.getOwnPropertyDescriptor(obj, key)
		if(desc == null) continue
		
		if(!desc.writable) return
		if(!("value" in desc))
			desc.set.call(receiver, value)
	}
	while (obj = obj.[[Prototype]])//////прототипная сеть всегда будет законченной, будет  false если не будет прототипа на obj
		Object.defineProperty(receiver, key,
		{
			value: value,
			writable: true,
			enumerable: true,
			configurable:true
		})
}
\/\/\/\/\/\/\/\/
var arr = [1,2,3]

Object.defineProperty(Array.prototype, "last", 
{
	get: () => this[this.length - 1],
	set: value => this.push(value),
	configurable:true
})

////////////2-й вариант
Object.defineProperty(Array.prototype, "last", 
{
	get: function ()
	{
		return this[this.length - 1]
	}, 
	set: function(value)
	{
		if (Array.isArray(val))
			val.forEach(v=> this.push(v))
		else this.push(value)
	},
	configurable:true
})


////////
arr.last = 50
arr = [1,2,3]
arr.last = [7,8,9]
[1,2,3,[7,8,9]]
[1,2,3,7,8,9]
arr.last()
Array.isArray([1,2,3])

