function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  const found = accounts.find(account => account.id == id )
 return found;

  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  let sorted = accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return sorted;

  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
    return accounts.map(({name:{first, last}}) => first + ' ' + last);

  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
