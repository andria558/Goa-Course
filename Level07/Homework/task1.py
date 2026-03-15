'''ჩაწერე განსხვავებული მონაცემთა ტიპების (int, float, string, boolean) ცვლადები.
დაწერე კოდი, რომელიც ამოწმებს, არის თუ არა მოცემული ცვლადი string ტიპის.
დაწერე კოდი, რომელიც ამოწმებს, არის თუ არა მოცემული ცვლადი integer ტიპის.
დაწერე კოდი, რომელიც შეამოწმებს, არის თუ არა მოცემული ცვლადი boolean ტიპის.
მომხმარებელს შემოატანინეთ სახელი გვარი ასაკი სიმაღლე საყვარელი ფერი და გამოიტანეთ ეს ყველაფერი ერთ დიდ წინადადებაში'''

string = 'Andria'
integer = '15'
float = 7.5
boolean = True

print(type(string))
print(type(integer))
print(type(float))
print(type(boolean))

name = input('Pleas enter your name: ')

Lastname = input('Pleas enter your Lastname: ')

age = input('Please enter your age: ')

height = input('Please enter your height: ')

color = input('Please enter your favourite color: ')

print('my name is' + ' ' + name + ' ' + 'and my lastname is'+ ' ' + Lastname + " " + 'im' + ' ' + age + ' ' + 'years old.' + ' ' + height + ' ' + 'centimeters' + ' ' + 'and my favourite color is' + ' ' + color)
