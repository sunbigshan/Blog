var twoSum = function(nums, target) {
    let len = nums.length;
    let cache = {};
    for(let i = 0; i < len; i++) {
        cache[nums[i]] = i;
    }
    for(let i = 0; i < len; i++) {
        let complement = target - nums[i];
        if(cache[complement] && cache[complement] !== i) {
            return [i, cache[complement]];
        }
    }
    throw new Error('No two sum solution"')
};

console.log(twoSum([3, 2, 4], 6))