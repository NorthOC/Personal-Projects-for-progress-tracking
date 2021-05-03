function convertToRoman(num) {
   var romanNumeral = [
    "M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"
  ];
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let roman = "";
  for (let i = 0; i <= decimalValue.length; i++){
    while(decimalValue[i] <= num){
      roman += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
 return roman;
}

convertToRoman(23);
