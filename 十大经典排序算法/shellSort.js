/**
 * 希尔排序
 * @param {Array} arr
 * @return {Array}
 */
function shellSort(arr) {
    console.time('希尔排序耗时');
    let len = arr.length;
    for(let fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
        for(let i = fraction; i < len; i++) {
            
        }
    }
     console.timeEnd('希尔排序耗时');
     return arr;
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(shellSort(arr));