function heapSort(arr) {
    const len = arr.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, len, i);
    }

    for (let i = len - 1; i > 0; i--) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, len, rootIndex) {
    let largest = rootIndex;
    const leftChild = 2 * rootIndex + 1;
    const rightChild = 2 * rootIndex + 2;

    if (leftChild < len && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }

    if (rightChild < len && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }

    if (largest !== rootIndex) {
        const temp = arr[rootIndex];
        arr[rootIndex] = arr[largest];
        arr[largest] = temp;

        heapify(arr, len, largest);
    }
}

const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = heapSort(unsortedArray.slice()); 
console.log("Sorted Array:", sortedArray);
