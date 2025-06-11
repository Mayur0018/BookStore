const Book = require('../model/Book_modal');

const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    if (!books || books.length === 0) {
      return res.status(404).json({ message: 'No books found' });
    }
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = { getBook };
