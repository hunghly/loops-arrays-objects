"use strict";

/*TODO Problem 1 - 'Sum Array' from Code Wars
Write a method named sum that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Examples:
numbers = [1, 5.2, 4, 0, -1];
9.2
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.*/



// console.log(sum([1, 5.2, 4, 0, -1])); // outputs 9.2
// console.log(sum([2, 3, 4, 5, 6])); // outputs 20
// console.log(sum([10.5, 50.3, -100, 77.7, 230])); // output 268.5

/*TODO Problem 2 - 'Remove String Spaces' from Code Wars
Simple, remove the spaces from the string, then return the resultant string.
*/




// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // output '8j8mBliB8gimjB8B8jlB'
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // output '88Bifk8hB8BB8BBBB888chl8BhBfd'
// console.log(noSpace('8aaaaa dddd r     ')); // output '8aaaaaddddr'

/*TODO Problem 3 - 'Numbers to Letters' on Code Wars
Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/


// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // outputs 'codewars'
// console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); // outputs 'btswmdsbd kkw'
// console.log(switcher(['4', '24'])); // outputs 'wc'