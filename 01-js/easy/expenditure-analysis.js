/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {};

    for (let transaction of transactions) {
	let category = transaction.category;
	let price = transaction.price;

	if (categoryTotals[category]) {
	    // Category already exists, add the price to the total
	    categoryTotals[category] += price;
	} else {
	    // Category doesn't exist, initialize it with the price
	    categoryTotals[category] = price;
	}
    }
    
    let result = [];

    for (let category in categoryTotals) {
	result.push({ 'category': category, 'totalSpent': categoryTotals[category] });
    }

  return result;
}


module.exports = calculateTotalSpentByCategory;
