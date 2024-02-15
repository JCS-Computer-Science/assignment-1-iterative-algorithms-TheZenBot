function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	let length = array.length
	for (let i = 0; i < length; i++) {
		let index = array[i];

		let last = index-1;

		while ((last > -1) && (index < array[last])) {
			array[last+1] = array[last];
			last--;
		}
		array[last] = index;
	}

	return array;
}

module.exports = insertionSort;
