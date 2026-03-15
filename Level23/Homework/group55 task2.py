def simple_calculator(num1, num2, operation):
    if operation == "+":
        print(num1 + num2)
    elif operation == "-":
        print(num1 - num2)
    elif operation == "*":
        print(num1 * num2)
    elif operation == "/":
        if num2 == 0:
            print("შეცდომა: ნულზე გაყოფა შეუძლებელია")
        print(num1 / num2)
    else:
        print("შეცდომა: მიუთითეთ სწორი ოპერაცია")

while True:
    simple_calculator(int(input("Num1: ")), int(input("Num2: ")), input("+ ,- ,* ,/ : "))


    

