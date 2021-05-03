// String array that integers will be mapped to
var strArray = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

function IntToString(nums){
    for(var i = 0; i < nums.length; i++){

        // Set variable to current element in inputted array
        var currentNum = nums[i];

        var numString = "";

        while (currentNum > 0){

            // Use modulo division to isolate individual digits
            var digit = (currentNum % 10)

            // Map digits to existing String array
            numString = strArray[digit]+ numString;

            currentNum = Math.floor((currentNum / 10))
        }
        nums[i] = numString
    }
    return nums;
}

var array = [9, 30, 809];
console.log(IntToString(array));