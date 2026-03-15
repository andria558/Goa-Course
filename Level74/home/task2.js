`Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24`


// my code:

function grow(arr){

  res = 1;

  for (i = 0; i < arr.length; i++) {
    
   res *= arr[i];
    
  }
  
  return res;
}