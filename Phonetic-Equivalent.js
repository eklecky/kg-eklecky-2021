var strArray = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

function IntToString(nums){
    for(var i = 0; i < nums.length; i++){

        currentNum = nums[i];

        var numString = "";

        while (currentNum > 0){
            var digit = (currentNum % 10)

            numString = strArray[digit]+ numString;

            currentNum = Math.floor((currentNum / 10))
        }
        nums[i] = numString
    }
    return nums;
}

var array = [9, 30, 809];
console.log(IntToString(array));