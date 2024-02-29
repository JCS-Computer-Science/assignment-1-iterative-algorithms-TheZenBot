function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	let sorted = []
	console.log(array);
	while(array.length>0){
		small = 0
		for (let i = 0; i < array.length; i++) {
			if (array[i]<array[small]) {
				small = i					
			};
		};
		sorted.push(array[small])

		array.splice(small,1)
	};
	console.log(sorted);
	return sorted;
}

module.exports = selectionSort;
