
"""Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade."""

#Solution:
    # def get_grade(s1, s2, s3):
    # # Code here
    # return "F"
    

#My Code:
def get_grade(s1, s2, s3):
    score =     score = (s1 + s2 + s3) / 3
    
    if score >= 90 and score <= 100:
        return 'A'
    elif score >= 80 and  score < 90:
        return 'B'
    elif score >= 70 and score < 80:
        return 'C'
    elif score >= 60 and score < 70:
        return 'D'
    else:
        return 'F'