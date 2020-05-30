// eslint-disable-next-line no-unused-vars
const review = require('./review/review.service.js');
const products = require('./products/products.service.js');
const users = require('./users/users.service.js');
module.exports = function (app) {
  app.configure(review);
  app.configure(products);
  app.configure(users);
};
