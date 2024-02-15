function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let searchResult = null;

	let searchLow = 0;

	let searchHigh = array.length - 1;


	while (searchLow <= searchHigh) {
		let midPoint = Math.floor((searchLow + searchHigh) / 2);

		if (array[midPoint] === searchTerm){
			searchResult = midPoint;
			}else if (array[midPoint] < searchTerm){
				searchHigh=midPoint+1;
				//searchHigh = array.length - (array[midPoint]+1);
			}else {
				searchLow=midPoint-1;
				//searchLow = (array[midPoint]+1) - array.length;
			};
	};

	
	return searchResult;
}

module.exports = binarySearch;
