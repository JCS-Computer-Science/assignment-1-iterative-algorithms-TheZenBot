function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	let length = array.length
	for (let i = 1; i < length; i++) {
		
		let index  = array[i]

		let last = i-1;

		while ((last > -1) && (index < array[last])) {
			console.log(last);

			array[last+1] = array[last];
			array[last]=index
			last--;
			
		}
		
	}

	return array;
}

//console.log(insertionSort([6,2,1,5, 4]))

module.exports = insertionSort;
