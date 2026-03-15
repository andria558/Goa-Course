"""

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

"""


# solution:

# def sum_two_smallest_numbers(numbers):
#    # your code here


# Anser:

def sum_two_smallest_numbers(numbers):
    
    low1 = numbers[0]
    
    low2 = numbers[1]
    
    for i in numbers:    
        if i < low1:
            low1 = i
    
    for i in numbers[1:]:
        if i < low2:
            if i != low1:
                low2 = i
                
    sum = low1 + low2
    
    return(sum)