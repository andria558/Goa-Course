
for (let x = 1;   x < 200 ; x++) {
    if (x === 105) {
        break;
    }

    if (x % 3 === 0) {
        continue;
    }

    console.log(x)
}

