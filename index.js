#Algorithm analysis on Time complexity and Space complexity
  
/ Time complexity example: Linear search

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}



// Time complexity analysis: O(n)

const array = [1, 2, 3, 4, 5];
const target = 4;
const index = linearSearch(array, target);

if (index !== -1) {
  console.log('Element found at index:', index);
} else {
  console.log('Element not found');
}
