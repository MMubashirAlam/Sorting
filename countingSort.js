function countingSort(arr) {
    const n = arr.length;

    const max = Math.max(...arr);

    const count = new Array(max + 1).fill(0);

    for (let i = 0; i < n; i++) {
        count[arr[i]]++;
    }

    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    const output = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

const unsortedArray = [4, 2, 6, 3, 1, 0, 5];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = countingSort(unsortedArray.slice()); 
console.log("Sorted Array:", sortedArray);
