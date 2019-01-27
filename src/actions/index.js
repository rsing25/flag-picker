export const selectBook = book => {
	console.log("A book is selected" + book.title);
	return {
		type: "BOOK_SELECTED",
		payload: book
	};
};
