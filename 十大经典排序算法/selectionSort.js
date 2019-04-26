/**
 * 选择排序
 * @param {Array} arr
 * @return {Array}
 */
function selectionSort(arr) {
    console.time('选择排序耗时');
    let len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) { // 寻找最小数
                minIndex = j; // 把最小索引保存
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));