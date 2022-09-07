const arr = [22, 1, 2, 3, 5];

function getOddEven(nums) {
    return {
        even: nums.filter(num => num % 2 == 0).reduce((acc, num) => acc + num),
        odd: nums.filter(num => num % 2 == 1).reduce((acc, num) => acc + num),
    };
}

const a = getOddEven(arr);
console.log(a);
