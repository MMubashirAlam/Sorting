function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

const unsortedArray = [64, 25, 12, 22, 11];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = selectionSort(unsortedArray.slice()); 
console.log("Sorted Array:", sortedArray);
