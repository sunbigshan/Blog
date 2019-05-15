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
- [x] [2. 选择排序](#selection)
- [x] [3. 插入排序](#insertion)
- [x] [4. 希尔排序](#shell)

### <a name="bubble">一、冒泡排序</a>

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

3）**动态图演示**

![冒泡排序](https://user-images.githubusercontent.com/36752487/56719080-99749d80-6772-11e9-8528-20f226644227.gif)

4）**算法分析**

#### 时间复杂度

- 最佳情况：`O(n)`

>  输入的数据已经是正序，只需要一趟扫描，比较次数为 n - 1，移动次数为 0，都为最小值

- 最差情况：`O(n^2)`

> 输入的数据是反序，需要进行 n - 1 趟排序，每趟排序要进行 n - i 次比较，且每次比较都必须移动记录三次来达到交换记录位置，在这种情
> 况下，比较和移动次数均达到最大值

- 平均情况：`O(n^2)`

#### 稳定性

冒泡排序就是把小的元素往前调或者把大的元素往后调。比较发生在两个相邻元素之间，如果两元素相等，是不会交换的，所以冒泡排序
是一种稳定的排序算法。

5）**代码实现**

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

### <a name="selection">二、选择排序</a>

1）**算法描述**

选择排序是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小或最大的一个元素，存放在序列的起始位置，
然后，再从剩余中未排序元素中继续寻找最小或最大元素，然后放到已排序序列的末尾。以此类推，直到全部待排序的数据元素排完。选
择排序是不稳定的排序方法。

2）**算法原理**

n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：

1. 初始状态：无序区为R[1..n]，有序区为空
2. 第i趟排序(i=1,2,3...n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中选出关键字最小的记录 R[k]，
将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区

3）**动态图演示**

![选择排序](https://user-images.githubusercontent.com/36752487/56731318-cd5cbc80-678c-11e9-801b-0100c31836f5.gif)

4）**算法分析**

#### 时间复杂度

选择排序的交换操作介于 `n - 1` 之间，比较操作为永远都是 `n (n - 1) / 2`，而移动次数与序列的初始排序有关。当序列正序时，移动次数最
少，为 0。当序列反序时，移动次数最多，为 `3n (n - 1) /  2`。

因此选择排序时间复杂度为 `O(n^2)`。

#### 稳定性

选择排序是给每个位置选择当前元素最小的，比如给第一个位置选择最小的，在剩余元素里面给第二个元素选择第二小的，依次类推，直
到第n-1个元素，第n个元素不用选择了，因为只剩下它一个最大的元素了。那么，在一趟选择，如果一个元素比当前元素小，而该小的元
素又出现在一个和当前元素相等的元素后面，那么交换后稳定性就被破坏了。比较拗口，举个例子，序列5 8 5 2 9，我们知道第一遍选择第
1个元素5会和2交换，那么原序列中两个5的相对前后顺序就被破坏了，所以选择排序是一个不稳定的排序算法。

5）**代码实现**

```javascript
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
```

### <a name="insertion">三、插入排序</a>

1）**算法描述**

插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。

2）**算法原理**

每步将一个待排序的记录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。

3）**动态图演示**

![插入排序](https://user-images.githubusercontent.com/36752487/56788489-33e7e600-6832-11e9-85ab-c95675eabd68.gif)

4）**算法分析**

#### 时间复杂度

- 最佳情况：`O(n)`

>  输入的数据已经是正序，只需要一趟扫描，比较次数为 n - 1，移动次数为 0，都为最小值

- 最差情况：`O(n^2)`

> 输入的数据是反序，那么此时需要进行的比较共有n(n-1)/2次。插入排序的赋值操作是比较操作的次数加上 (n-1）次。平均来说插入排序
> 算法的时间复杂度为O(n^2）

- 平均情况：`O(n^2)`

#### 稳定性

插入排序是在一个已经有序的小序列的基础上，一次插入一个元素。当然，刚开始这个有序的小序列只有1个元素，就是第一个元素。比较是从有序序列的末尾开始，也就是想要插入的元素和已经有序的最大者开始比起，如果比它大则直接插入在其后面，否则一直往前找直到找到它该插入的位置。如果碰见一个和插入元素相等的，那么插入元素把想插入的元素放在相等元素的后面。所以，相等元素的前后顺序没有改变，从原无序序列出去的顺序就是排好序后的顺序，所以插入排序是稳定的。

5）**代码实现**

```javascript
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
```

使用二分查找优化，代码如下：

```javascript
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
```

三种方法耗时对比：

![image](https://user-images.githubusercontent.com/36752487/56788556-61cd2a80-6832-11e9-9f62-7472dc066d31.png)

### <a name="shell">四、希尔排序</a>

> 1959年Shell发明； 第一个突破O(n^2)的排序算法；是简单插入排序的改进版；它与插入排序的不同之处在于，它会优先比较距离较远的
> 元素。希尔排序又叫缩小增量排序

1）**算法描述**

希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。动态定义间隔序列的算法是
《算法（第4版》的合著者 Robert Sedgewick 提出的。

5）**代码实现**

```javascript
/**
 * 希尔排序
 * @param {Array} arr
 * @return {Array}
 */
function shellSort(arr) {
    console.time('希尔排序耗时');
    let len = arr.length,
         temp,
         gap = 1;
    
     for(; gap > 0; gap = Math.floor(gap / 5)) {
         console.log(gap)
     }
     console.timeEnd('希尔排序耗时');
     return arr;
}
```