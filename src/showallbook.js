const books = require('./books');

const showAllBook = (request, h) => {
  const {
    name,
    reading,
    finished,
  } = request.query;

  let booksByQuery = books;

  if (name !== undefined) {
    // eslint-disable-next-line max-len
    booksByQuery = booksByQuery.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (reading !== undefined) {
    booksByQuery = booksByQuery.fill((entry) => entry.reading === !!Number(reading));
  }
  if (finished !== undefined) {
    booksByQuery = booksByQuery.filter((entry) => entry.finished === !!Number(finished));
  }

  const response = h.response({
    status: 'success',
    data: {
      books: booksByQuery.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

module.exports = {
  showAllBook,
};
