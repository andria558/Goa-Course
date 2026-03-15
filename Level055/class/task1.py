"""

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

"""


# Solution:
# def small_enough(array, limit):
#     pass

# Awnser:

def small_enough(arr, limit):
    
    for x in arr:
        
        if not x <= limit: 
            return False
    
    return True

