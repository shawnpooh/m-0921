function romanToInt(romanNum) {
  let currentValue = 0;

  for (let i = 0; i < romanNum.length; i++) {
    if (
      romanNum[i] === 'I' &&
      romanNum[i + 1] !== 'V' &&
      romanNum[i + 1] !== 'X'
    ) {
      currentValue += 1;
    } else if (
      (romanNum[i] === 'I' && romanNum[i + 1] === 'V') ||
      (romanNum[i] === 'I' && romanNum[i + 1] === 'X')
    ) {
      currentValue -= 1;
    } else if (romanNum[i] === 'V') {
      currentValue += 5;
    } else if (
      romanNum[i] === 'X' &&
      romanNum[i + 1] !== 'L' &&
      romanNum[i + 1] !== 'C'
    ) {
      currentValue += 10;
    } else if (
      (romanNum[i] === 'X' && romanNum[i + 1] === 'L') ||
      (romanNum[i] === 'X' && romanNum[i + 1] === 'C')
    ) {
      currentValue -= 10;
    } else if (romanNum[i] === 'L') {
      currentValue += 50;
    } else if (
      romanNum[i] === 'C' &&
      romanNum[i + 1] !== 'D' &&
      romanNum[i + 1] !== 'M'
    ) {
      currentValue += 100;
    } else if (
      (romanNum[i] === 'C' && romanNum[i + 1] === 'D') ||
      (romanNum[i] === 'C' && romanNum[i + 1] === 'M')
    ) {
      currentValue -= 100;
    } else if (romanNum[i] === 'D') {
      currentValue += 500;
    } else if (romanNum[i] === 'M') {
      currentValue += 1000;
    }
  }

  console.log(currentValue);
}
