name = input("Enter Your Name: ") 

age = input("Enter Your Age: ")

print("Hello, " + name + "! You are " + age + " years old.")

txt = f"Hello, {name}! You are {age} years old."
print(txt)

txt2 = "Hello, {0}! You are {1} years old.".format(name, age)
print(txt2)