//! Task 1

function growingRow(array) {
    array.sort(function (a, b) { return a - b });
    console.log(array);
}

growingRow([3,4,3,21,5,7,2,1])

//! Task 2

function checkArrayContains(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            return console.log(false);
        }
    }
    return console.log(true);;
}

checkArrayContains([1,2,3,4,5],[1,1,2,3,5])

//! Task 3

function binarySearch(arr, n) {
    arr.sort(function(a, b){return a - b})
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = parseInt((left + right) / 2);
        if (arr[mid] === n) {
            console.log(`Axtarilan eded (${n}) siyahinin indeksi: ${mid}`);
            break;
        } else if (arr[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left > right) {
        console.log(`Axtarilan eded (${n}) tapilmadi.`);
    }

}

let n = 9;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
binarySearch(arr, n)