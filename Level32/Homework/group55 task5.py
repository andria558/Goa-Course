"""Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12"""


#solution:
# def quarter_of(month):
#     pass


#My Code:
def quarter_of(month):
    if month == 1:
        return 1
    elif month == 2:
        return 1
    elif month == 3:
        return 1
    elif month == 4:
        return 2
    elif month == 5:
        return 2
    elif month == 6:
        return 2
    elif month == 7:
        return 3
    elif month == 8:
        return 3
    elif month == 9:
        return 3
    elif month == 10:
        return 4
    elif month == 11:
        return 4
    elif month == 12:
        return 4
    else:
        return "The month does not exist."