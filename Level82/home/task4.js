function countTruthiesAndFalsies(arr) {
  let result = { truthy: 0, falsy: 0 };

  for (let item of arr) {
    if (item) {
      result.truthy++;
    } else {
      result.falsy++;
    }
  }

  return result;
}
