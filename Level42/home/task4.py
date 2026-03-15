"""
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

Examples:
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

"""

# solution:

# def same_case(a, b): 
#     # your code here
#     pass


# My code:
def same_case(a, b): 
    upper = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    lower = ('abcdefghijklmnopqrstuvwxyz')
    
    if a in upper and b in upper:
        return 1
    elif a in lower and b in lower:
        return 1
    elif a in upper and b in lower:
        return 0
    elif a in lower and b in upper:
        return 0
    else:
        return -1 