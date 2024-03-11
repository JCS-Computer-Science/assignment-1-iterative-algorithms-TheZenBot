function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
  // console.log(array);
        for (let i = 0; i < array.length; i++) {
            for(let j = 0; j < (array.length - i - 1); j++){
                if (array[j] > array[j+1]){
                    let temp = array[j];
                    array[j] = array[j+1]
                    array[j+1] = temp
                }
            }

               }

            //console.log(array);
	return array;
}

module.exports = bubbleSort;
