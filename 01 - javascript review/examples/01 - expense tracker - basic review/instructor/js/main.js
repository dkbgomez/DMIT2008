// 1. import the data from the file (in lieu of e.g. a database / REST API)
import expenses from './expense-data.js';

console.log('test')
// 2. grab relevant DOM elements
cosnt expenseContainer = document.getElementById('expense-container')

// 3. [skeleton]: render out data into a grid of cards
function renderExpenses(expenseData) {
    console.log(expenseData);
}

// 4. call the function to actually do the render
renderExpenses(expenses);
