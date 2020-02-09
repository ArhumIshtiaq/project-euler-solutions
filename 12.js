<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2016 by anonymous (http://jsbin.com/kareqareri/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
var triangleNumber = 1;
var sum = 0;
var factorCount = 0;

while (factorCount < 501) {
  sum += triangleNumber
  for (i = 1; i <= sum; i++) {
    if (sum % i == 0) {
      factorCount++
    }
  }
  triangleNumber++
  factorCount = 0
}

if (factorCount <= 501) {
  console.log("Factors: " + factorCount)
  console.log("TN: " + triangleNumber)
  console.log("Sum: " + sum)
}
</script>
</body>
</html>