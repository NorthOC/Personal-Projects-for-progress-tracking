function rot13(str) {
  let abcs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let cypher = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
 let arr = str.split("");
  for (let i = 0; i <= str.length; i++){
    if (cypher.indexOf(arr[i]) == -1){
      arr[i] = str[i];
    } else{
      arr[i] = abcs[cypher.indexOf(arr[i])];
    }
    }
  return arr.join("");
}

rot13("RNG ZL FUBEGF!");
