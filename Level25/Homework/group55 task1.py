print("ჩაიფიქრე რიცხვი 1-დან 100-მდე")
low = 1
high = 100

for attempt in range(1, 4):
    guess = (high - low)
    print(f"ჩემი {attempt}-ე მცდელობა: {guess}")
    
    number = input("სწორია? ; მაღალია? ; დაბალია?. : ")
    
    if number == "სწორია":
        print("ყოჩაღ მე❤️")
        break
    elif number == "მაღალია":
        high -= 1  
        print(guess)
    elif number == "დაბალია":
        low += 2  
        guess = low - high
        print(guess)
    else:
        print("სამწუხაროდ, ვერ გამოვიცანი. სხვა დროს გავიმარჯვებ!")
