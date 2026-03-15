"""print() - """


#1
print("gabo")

#2
print(10)

#3
print(12.4)


"""Variables -"""


#1
name = "andria"
print(name)

#2
last_name ="kupreishvili"
print(name + " " + last_name)

#3
age1 = 12
print(age1)

"""inputs & outputs -"""

#1
name = input("Enter your name: ")
print(name)

#2
age = int(input("Enter your age: "))
print(age + 13)

#3
height = float(input("Enter Your Height: "))
print(height + 13.2)

"""Data Type cheking -"""


#1
int = int(input("num: "))
print(type(int))

#2
float = float(input("enter num:"))
print(float)

#3
str = input("name: ")
print( "Hello," + " " + str)


"""data conversion"""

#1
num = int(input("integer: "))


#2
num1 = float(input("float: "))


#3
integer = 5
num2 = str(integer)
print(num2 + "age")

"""Comparison Operations & booleans """

#1
print(30 < 25)  #False

#2
print(5 < 9)    #True

#3
print(50 > 100) #False

"""Logical Operations & True and False"""

print(True and False) #False
print(True or False) #True
print(True and True) #True
print(False or False) #False

"""Control Flow"""

        #Sequences

print("3")
print("building")
print("blocks")

#output:

# 3
# building
# blocks

        #iteracion
#For Loop


#1
for i in range(3):
    print("Hello") 

#output:

#   Hello
#   Hello
#   Hello


#2
for num in range(5):
    print("Coding is fun!")

# output:

# Coding is fun!
# Coding is fun!
# Coding is fun!
# Coding is fun!
# Coding is fun!

#3
for num in range(2):
  print(num)

# output:

# 0
# 1

# While Loops

#1
seats = 100

while seats > 0:
    print("Sell ticket")
    seats = seats - 1

#2
counter = 0

while counter < 4:
  print(counter)
  counter = counter + 1

#3
counter = 0
while counter < 4:
  print(counter) # infinite loop

        #Selections
# if else


#1
age = 16
if age >= 18:
  print("Regular price")
else:
  print("Discount")

#2
age = 30
if age >= 18:
  print("Regular price")
else:
  print("Discount")
print("Proceed to payment")


#3
age = 32
is_student = True
if age < 18 or is_student:
    print("Discount")
else:
    print("Regu1ar price")

"""Lists"""


#1
animals =['cat', 'dog', 'bird', 'cow']
print(animals[2:4])


#2
animals =['dog', 'cat', 'bird', 'cow']
print(animals[0])



#3
c = ['$', '£', '€', '¥']
print(c[1:-1])


"""String Functions & List Functions"""


numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers.append(100)

numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers1.insert(0,5)

numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers2.remove(30)

numbers3 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers3.sort()

numbers4 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers4.reverse()

numbers5 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers5.index(50)

numbers6 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers6.count(20)

numbers7 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
" ".join(numbers7)

numbers8 = ("10, 20, 30, 40, 50, 60, 70, 80, 90")
numbers8.split(",")

numbers9 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers9 = len(numbers9)

numbers10 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers10 = max(numbers10)

numbers11 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers11 = min(numbers11)


numbers12 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers12 = numbers12.copy()

numbers13 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers13 = numbers13.extend(1,3,4,5,6,7,8,99,9,34,532,2342,45,45,46,456,456,)

"""Functions"""


#1
def rect(d1, d2):
  area = d1 * d2
  perimeter = 2 * d1 + 2 * d2
  price = 1000 * area
  return area, perimeter, price


#2
def profitable(dl, d2):
    area = dl * d2
    invest = area > 700
    return invest
buy = profitable(90, 120)
print(buy)


#3
def rect(dl, d2):
    area = 0
    return area #end of function

    area = dl * d2  #not execute
x = rect(50, 50)
print(x,)