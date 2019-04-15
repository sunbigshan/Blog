### 题目

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

遍历每个元素 x，并查找是否存在一个值与 x 之和 等于 target 的目标元素、

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
            if(nums[i] + nums[j] === target) {
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