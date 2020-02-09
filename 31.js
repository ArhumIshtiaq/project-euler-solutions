var probabilities = 1*a + 2*b + 5*c + 10*d + 20*e + 50*f + 100*g + 200*h

for (a,b,c,d,e,f,g,h = 0; a <= 200, b <= 100, c <= 40, d <= 20, e <= 10, f <= 4, g <= 2, h <=1; a++,b++,c++,d++,e++,f++,g++,h++) {
    console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g + " " + h + " ")
}
 
if (probabilities > 200) {
     console.log(probabilities)
 }