password = "group55"
guess = input("Enter password: ")

while guess != password:
    print("inncorect")
    guess = input("Enter password: ")
if guess == password:
    print("correct")