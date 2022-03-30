function isPalindrome(line) {
  let str = String(line)
  let isPal = str.split('').reverse().join('')
  if (str === isPal){
    return true;
  }else {
    return false;
  }
  return undefined;
}
