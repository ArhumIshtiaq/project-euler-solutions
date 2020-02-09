/*
First version. Final version is the one I came up during Urdu's Board Exam - Paper I. 
The final version has been optmized in size. Version 1 was 12 lines, Version 2 is 6.

sum3 = 0;
sum5 = 0;
        
for (i = 1; i < 1000; i++) { 
  if (i%5 === 0) {
    sum5 = sum5 +i
  } else if (i%3 === 0) {
    sum3 = sum3 + i
  }
}

console.log(sum3 + sum5)
*/

sum = 0;
for (i = 0; i< 1000; i++) {
  if (i%3 === 0 || i%5 === 0)
    sum += i;
}
console.log(sum);
