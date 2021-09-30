/* 01. power
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow() */

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, exponent) {
  if (exponent === 0) return 1;

  return power(num, exponent - 1) * num;
}

/* 02. productOfArray
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all. */

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return productOfArray(arr.slice(0, -1)) * arr[arr.length - 1];
}

/* 03. reverse
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse. */

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str === '') return '';

  return reverse(str.slice(1)) + str.charAt(0);
}

/* 04. isPalindrome
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false. */

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str[0] === str[str.length - 1] && str.length > 1) {
    return isPalindrome(str.slice(1, -1));
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return true;
}
