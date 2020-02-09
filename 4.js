/* This is a dumb version programmed to give the 
correct result along with some other values too*/

for (i=900; i<=999; i++){
  for (n=900; n<=999; n++){
    var x = n*i;
    var y = new Array(x.toString().split(""));
    if(y[0][0]== y[0][y[0].length -1] && y[0][1] == y[0][y[0].length -2] && y[0][2] == y[0][y[0].length -3] && y[0].length == 6) {
        console.log(x)
    }                           
  }
}


/*This is the redone and correctly working version*/
var largestPalindrome = 0; 

function reverse(s) {                               // This is the fastest string reversal 
    var o = '';                                     // algorithm for javascript, as proven 
  for (var i = s.length - 1; i >= 0; i--)           // by performance tests on Chrome. 
    o += s[i];                                      // This function is used to prove the 
  return o;                                         // palindromic property of the products.
}

for (a=999; a>=100; a--) {
  for (b=999;b>=100;b--) {
    x = a*b
    if (x.toString() === reverse(x.toString()))  {
      if (x > largestPalindrome) {
        largestPalindrome = x
      }
    }
  }
}

console.log(largestPalindrome)