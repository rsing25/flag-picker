
export const selectContinent = continent => {
	console.log("A continent is selected" + continent);
	return {
		type: "CONTINENT_SELECTED",
		payload: continent
	};
};

export const selectConuntry = country => {
	console.log("A country is selected" + country);
	return {
		type: "COUNTRY_SELECTED",
		payload: country
	};
};
