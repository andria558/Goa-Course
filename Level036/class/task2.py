"""Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
"""



# solution:

# def grow(arr):
#     pass



# My code:

def grow(x):
    sum = 1
    
    for i in x:
        sum *= i
    return sum

#grow([1,2,3,4])