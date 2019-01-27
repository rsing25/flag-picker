
export const selectBook = book => {
	console.log("A book is selected" + book.title);
	return {
		type: "BOOK_SELECTED",
		payload: book
	};
};

// export const getCountryData = () => {
// 	const data = JOSN.parse(continents);
// 	console.log(data);
// 	return {
// 		type: "GET_COUNTRY_DTAT",
// 		payload: data
// 	};
// };

