### 排序算法说明

1）定义：
`算法` 是指完成一个任务所需要的具体步骤和方法。而 `排序算法` 就是把一序列对象依照特定的方式进行排序的一种算法。

2）算法优劣术语说明：
- **稳定**：如果原本 `a` 在 `b` 的前面，且 `a = b`，排序后 `a` 仍在 `b` 的前面
- **不稳定**：如果原本 `a` 在 `b` 的前面，且 `a = b`，排序后 `a` 可能会在 `b` 的后面
- **内排序**：所有的排序操作都在内存中完成
- **外排序**：由于数据太大，因此把数据存放在磁盘中，而排序通过磁盘和内存的数据传输才能进行
- **时间复杂度**：算法执行所耗费的时间
- **空间复杂度**：算法执行所需的内存大小

3）排序算法图片总结：

排序对比（大O表示法）

![image](https://user-images.githubusercontent.com/36752487/56644436-36213780-66ae-11e9-8fe3-bb2b678af082.png)

### 十大经典排序

- [x] [1. 冒泡排序](#bubble)
- [ ] 2. 选择排序

### <a name="bubble">冒泡排序</a>

1）**算法描述**

冒泡排序是一种简单的排序算法。它重复的走访要排序的元素列，依次比较两个元素，如果顺序错误就把他们交换一下位置，直到没有需
要交换的元素为止。该算法的名字由来是因为越大的元素会经由交换慢慢的“浮”到数列的顶端，就如同碳酸饮料中二氧化碳的气泡最终会
上浮到顶端一样，故名“冒泡排序”。

2）**算法原理**

冒泡排序算法的原理如下：

1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个。
2. 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

3）**算法分析**

#### 稳定性

冒泡排序就是把小的元素往前调或者把大的元素往后调。比较发生在两个相邻元素之间，如果两元素相等，是不会交换的，所以冒泡排序
是一种稳定的排序算法。

4）**代码实现**

```javascript
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
```

> 改进冒泡排序：设置标志位变量 pos，用于记录每趟排序中最后一次进行交换的位置。由于 pos 之后的元素都已经排序到位，因此下一
> 趟排序只需要扫描到 pos 的位置即可。

```javascript
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
```

> 传统冒泡排序中每一趟排序只能找到一个最大值或最小值，我们可以在每趟排序中进行正向和反向两边冒泡的方式一次得到两个最终值，
> 从而使排序趟数减少一半。

```javascript
function bubbleSort3(arr) {
    console.time('改良2冒泡排序耗时');
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
    console.timeEnd('改良2冒泡排序耗时');
    return arr;
}
```

三种方法耗时对比：

![image](https://user-images.githubusercontent.com/36752487/56718915-4e5a8a80-6772-11e9-98a0-db6bae846c5d.png)


