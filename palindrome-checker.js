function palindrome(str) {
  var newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  str = newStr.split(" ").join("");
  newStr = str.split('').reverse().join('');
  if (str != newStr){
    return false;
  } else{
    return true;
  }
}



palindrome("_eye, eye. eye");
