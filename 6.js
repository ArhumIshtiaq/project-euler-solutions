//Working alpha version 

var x=0;
for (i=0;i<=100;i++) {
    x+=i
}
z =Math.pow(x,2)
console.log(Math.pow(x,2)) 

var y=0;
for (j=0;j<=100;j++) {
    y+=Math.pow(j,2)
}
console.log(y)

if (z>y) {
  console.log(z - y)
} else {            
  console.log(y -  z)
}

//Optimized final version
 
var x=0;
var y=0;
for (i=0;i<=100;i++) {
    x+=i
    y+=Math.pow(i,2)
    z=Math.pow(x,2)
}

console.log(z-y)