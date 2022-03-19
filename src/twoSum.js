export const twoSum = (nums, target) => {
  const prevValues = {};
  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    let requiredValue = target - currentValue;
    let index2 = prevValues[requiredValue];
    
    if (index2 != null) {
      return [index2, i];
    } else {
      prevValues[currentValue] = i;
    }
  }
  return [];
};