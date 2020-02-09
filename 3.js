/*
Figured this one out after the AKUEB English Board Exam Paper-I.
Added line 10 the night after the exam, but have no idea why it's required.


var n = 600851475143;
for (i=1;i<=n;i++) {
  if (n%i===0) {
    console.log(Math.max(i) + " is a factor");
    n/=i; 
  } 
}
*/

// Corrected all mistakes and final version is below
// The result is now correct with code that I understand

var n = 600851475143;
for (i = 1; i <= n; i++) {
  if (n % i === 0) {
    var a = 0
    if (a < i) {
      a = i
    }
    n /= i;
  }
}

console.log(a + " is the highest prime factor for " + n);