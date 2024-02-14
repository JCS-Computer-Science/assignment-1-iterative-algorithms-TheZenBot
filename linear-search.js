function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
	let searchResult; //states empty variable
	for (let i = 0; i < array.length; i++) {//loops trough checking each index
		if (array[i] == searchTerm) {//checks at selected index it it matches
			searchResult =i;//returns result to the variable iff it matches
		};
		
	};
	return searchResult;
};

module.exports = linearSearch;
