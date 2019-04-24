/**
 * 冒泡排序
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
    console.time('传统冒泡排序耗时');
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.timeEnd('传统冒泡排序耗时');
    return arr;
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr))


function bubbleSort2(arr) {
    console.time('改良冒泡排序耗时');
    let i = arr.length - 1;
    while(i > 0) {
        let pos = 0;
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // 记录交换位置
                pos = j;
            }
        }
        // 记录最后的交换位置
        i = pos;
    }
    console.timeEnd('改良冒泡排序耗时')
    return arr;
}

let arr2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort2(arr2))


function bubbleSort3(arr) {
    console.time('最终版冒泡排序耗时');
    let low = 0,
        high = arr.length - 1,
        j,
        temp;
    while(low < high) {
        for(j = low; j < high; j++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        low++;
        for(j = high; j > low; j--) {
            if(arr[j] < arr[ j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        high--;
    }
    console.timeEnd('最终版冒泡排序耗时');
    return arr;
}

let arr3 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort3(arr3))

