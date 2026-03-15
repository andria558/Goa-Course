function modifyArray(array) {

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    let concatArray = array1+array2;
    concatArray.copyWithin(concatArray.length, 0, 2);
    concatArray.fill(0, concatArray.length - 3);
    lastElement = concatArray.pop();
    firstElement = concatArray.shift();
    concatArray.unshift(10, 20);

    return concatArray;
}

modifyArray([]);

