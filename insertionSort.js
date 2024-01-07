function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        const currentElement = arr[i];

        let j = i - 1;
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }

    return arr;
}

const unsortedArray = [12, 11, 13, 5, 6];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = insertionSort(unsortedArray.slice()); 
console.log("Sorted Array:", sortedArray);
