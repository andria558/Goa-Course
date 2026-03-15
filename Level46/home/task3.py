"""
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
"""



# solution:

def digitize(n):
    return





# My code:

def digitize(n):
    s = str(n)
    i = len(s) - 1
    l = []
    while i >= 0:
        l.append(int(s[i]))
        i -= 1
    return l