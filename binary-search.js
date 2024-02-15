function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	//let searchResult = -1;

	let searchLow = 0;

	let searchHigh = array.length - 1;


	while (searchLow <= searchHigh) {
		let midPoint = Math.floor((searchLow + searchHigh) / 2);
/*
		if (array[midPoint] === searchTerm) {
            // found the key
            return midPoint;
        } else if (array[midPoint] < searchTerm) {
            // continue searching to the right
            searchLow = midPoint + 1;
        } else {
            // search searching to the left
            searchHigh = midPoint - 1;
        }
*/
		if (array[midPoint] === searchTerm){
			return midPoint;
			}else if (array[midPoint] < searchTerm){
				searchLow=midPoint+1;
				//searchLow = midPoint = array.length; not sure why this wont work
			}else {
				searchHigh=midPoint-1;
				//searchHigh = array.length - midPoint; 
			};
	};

	
	return -1;
}

module.exports = binarySearch;
