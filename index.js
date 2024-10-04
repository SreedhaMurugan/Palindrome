function reverseString(str) {
  const reverse = str.split('').reverse().join('');
  return str === reverse;
}

console.log(reverseString('racecar'));
console.log(reverseString('hello'));
console.log(reverseString('madam'));
