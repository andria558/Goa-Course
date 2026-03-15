from turtle import *

#we want to paint a house

#step 1: draw a squar
speed(20)
width(7)
begin_fill()
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)    #hight of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(180, 175)
pendown()

color("blue")
begin_fill()
right(60)
forward(30)

left(90)
forward(50)
left(90)
forward(30)
left(90)
forward(50)
end_fill()

penup()
goto(15, 175)
pendown()

begin_fill()
right(90)
forward(30)
right(90)
forward(50)
right(90)
forward(30)
right(90)
forward(50)
end_fill()


exitonclick()