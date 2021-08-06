const {
  addBook,
} = require('./addbook');
const {
  showAllBook,
} = require('./showallbook');
const {
  showSpecificBook,
} = require('./bookdetail');
const {
  editSpecificBook,
} = require('./editbook');
const {
  deleteSpecificBook,
} = require('./deletebook');

const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBook,
},
{
  method: 'GET',
  path: '/books',
  handler: showAllBook,
},
{
  method: 'GET',
  path: '/books/{id}',
  handler: showSpecificBook,
},
{
  method: 'PUT',
  path: '/books/{id}',
  handler: editSpecificBook,
},
{
  method: 'DELETE',
  path: '/books/{id}',
  handler: deleteSpecificBook,
},
];

module.exports = routes;
