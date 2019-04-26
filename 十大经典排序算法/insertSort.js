/**
 * 插入排序
 * @param {Array} arr
 * @return {Array}
 */
function insertSort(arr) {
    console.time('插入排序耗时');
    let len = arr.length;
    for(let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.timeEnd('插入排序耗时');
    return arr;
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertSort(arr));

function insertSort2(arr) {
    console.time('二分插入排序耗时');
    let len = arr.length;
    for(let i = 1; i < len; i++) {
        let key = arr[i], 
             left = 0,
             right = i - 1;
        while(left <= right) {
            let mid = parseInt((left + right) / 2);
            if(key < arr[mid]) {
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        for(let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    console.timeEnd('二分插入排序耗时');
    return arr;
}

let arr2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertSort2(arr2));