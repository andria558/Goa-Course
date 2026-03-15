
height = float(input("Enter your height: "))

weight = float(input("Enter your weight: "))

sum = weight / (height ** 2)

if sum < 18.5:
    print("Underweight")
elif sum > 18.5 and weight <25:
    print("Normal")
elif sum > 25 and sum < 30:
    print("Overweight")
else:
    print("Obesity")

    
print(sum)

