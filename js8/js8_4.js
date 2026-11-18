function summa(nums, target) {
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }
    }

    return [];
}


const result1 = summa([2,7,11,15], 9)
console.log(result1)
const result2 = summa([1,3,4,15], 5)
console.log(result2)
const result3 = summa([1,3,4,15], 19)
console.log(result3)