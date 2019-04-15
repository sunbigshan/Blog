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

console.log(twoSum([2, 7, 11, 15], 9))