"""Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

"""


# Solution:

# def create_array(n):
#     res=[]
#     i=1
#     while i<=n: res+=[i]
#     return res


# My code:

def create_array(n):
    res=[]
    i= 1
    while i<=n:
        res.append(i)
        i += 1
    return res