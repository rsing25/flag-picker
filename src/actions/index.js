
export const selectContinent = continent => {
	return {
		type: "CONTINENT_SELECTED",
		payload: continent
	};
};

export const selectConuntry = country => {
	return {
		type: "COUNTRY_SELECTED",
		payload: country
	};
};

export const clearConuntry = () => {
	return {
		type: "CLEAR_COUNTRY_SELECTED",
		payload: {}
	};
};
