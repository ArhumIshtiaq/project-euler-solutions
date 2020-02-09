for (a = 0; a <= 1000; a++) {
	for (b = 0; b <= 1000; b++) {
		for (c = 0; c <= 1000; c++) {
			if (a < c && b < c) {
				if (a + b + c === 1000) {
					if (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) === 0) {
						console.log(a + " " + b + " " + c)
					}
				}
			}
		}
	}
}

// Version 2 - Wokring perfectly

for (a = 1; a <= 1000; a++) {
  for (b = a + 1; b <= 1000; b++) {
    c = 1000 - a - b
    if (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) === 0) {
      console.log(a + ' ' + b + ' ' + c)
      console.log(a * b * c)
    }
  }
}
