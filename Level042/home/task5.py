"""Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example:

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]."""



# solution:

# def count_positives_sum_negatives(arr):
#     return





# My code:

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    a = 0
    b = 0

    
    for i in arr:
        if i > 0:
            a += 1
        if i < 0:
            b += i
            
    return [a,b]

