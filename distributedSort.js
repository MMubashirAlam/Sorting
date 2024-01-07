let array1 = [3, 4, 5];
let array2 = [0, 1, 2];
let array3 = [];


let t2 = 0;

while (t2 < 12) {
    findMinArr();
}

let t0 = 0;
let t1 = 0;
t2 = 0;

while (t0 < 12 || t1 < 12) {
    addIn1();
    addIn2();
}

t0 = 0;
t1 = 0;
t2 = 0;

while (t2 < 24) {
    printElement();
}


function findMinArr() {
    let t3 = array1[t0];
    let t4 = array2[t1];

    if (t3 < t4) {
        merge(t3);
        t0++;
    } else {
        merge(t4);
        t1++;
    }
}

function merge(value) {
    array3[t2] = value;
    t2++;
}

function addIn1() {
    let t7 = array1[t0];

    if (t7 !== 0) {
        addToArray(t7);
    }
    t0++;
}

function addIn2() {
    let t7 = array2[t1];

    if (t7 !== 0) {
        addToArray(t7);
    }
    t1++;
}

function addToArray(value) {
    array3[t2] = value;
    t2++;
}

function printElement() {
    let t6 = array3[t0];
    console.log(t6);

    t2++;

    console.log("\n");
}
