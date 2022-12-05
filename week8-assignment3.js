const validCardNumbers = (nums) => {
    const regex = /^[4,5,6]+(\d{3}-?\d{4}-?\d{4}-?\d{4})/gm
    const regex2 = /([\d])\1\1\1/gm
    const noDash = nums.replace(/-/g, "")
    
    if(nums.match(regex) && !noDash.match(regex2)) return 'Valid'
    else return 'Invalid'
}

console.log(validCardNumbers('4123456789123456')); // valid
console.log(validCardNumbers('5123-4567-8912-3456')); //valid
console.log(validCardNumbers('61234-567-8912-3456')); //invalid
console.log(validCardNumbers('4123356789123456')); // valid
console.log(validCardNumbers('5133-3367-8912-3456')); // invalid
console.log(validCardNumbers('5123 - 4567 - 8912 - 3456')); //invalid
