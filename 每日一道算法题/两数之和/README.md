### 两数之和

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 `两个` 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

### 解决方案

------

#### 方法一：暴力法

> 暴力法很简单。遍历每个元素 x，并查找是否存在一个值与 target - x 相等的目标元素。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            if(nums[j] === target - nums[i]) {
                return [i, j]
            }
        }
    }
};
```
#### 复杂度分析：

- 时间复杂度：O(n2)，对于每个元素，试图通过遍历数组的其余部分来寻找它所对应的目标元素，这将耗费 O(n) 的时间。因此时间复杂
度为 O(n2)。
- 空间复杂度：O(1)。

------

#### 方法二：两遍哈希表

> 我们可以通过以空间换取速度的方式，把查找时间从 O(n) 降低到 O(1)。这里我们通过进行两次遍历来实现，在第一次遍历中，将每个元素的值
> 和索引放入哈希表中。然后，在第二次遍历中，我们将检查每个元素所对应的目标元素（target - nums[i]）是否存在于哈希表中。注意，
> 该目标元素不能是 nums[i] 本身。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    let cache = {};
    for(let i = 0; i < len; i++) {
        cache[nums[i]] = i;
    }
    for(let i = 0; i < len; i++) {
        let complement = target - nums[i];
        if(cache[complement] !== undefined && cache[complement] !== i) {
            return [i, cache[complement]];
        }
    }
    throw new Error('No two sum solution"')
};
```

#### 复杂度分析：

- 时间复杂度：O(n)，我们把包含有 n 个元素的列表遍历两次。由于哈希表将查找时间缩短到 O(1)，所以时间复杂度为 O(n)。
- 空间复杂度：O(n)，所需的额外空间取决于哈希表中储存的元素数量，该表中存储了 n 个元素。

------

#### 方法三：一遍哈希表

> 在进行遍历并把元素存入哈希表的同时，我们可以回过头来检查哈希表中是否已经存在当前元素所对应的目标元素。如果存在，将其返回。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    let cache = {};
    for(let i = 0; i < len; i++) {
        let complement = target - nums[i];
        if(cache[complement] !== undefined) {
            return [cache[complement], i];
        }
        cache[nums[i]] = i;
    }
    throw new Error('No two sum solution"')
}
```

#### 复杂度分析：

- 时间复杂度：O(n)，我们只遍历了包含有 n 个元素的列表一次。在表中进行的每次查找只花费 O(1) 的时间。
- 空间复杂度：O(n)，所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 n 个元素。
