function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = new Array(bucketCount);

    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    for (let i = 0; i < bucketCount; i++) {
        buckets[i].sort((a, b) => a - b);
    }

    const sortedArray = [].concat(...buckets);

    return sortedArray;
}

const unsortedArray = [4, 2, 6, 3, 1, 9, 5, 7, 8];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = bucketSort(unsortedArray.slice());
console.log("Sorted Array:", sortedArray);
