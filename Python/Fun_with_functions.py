# Odd/Even:
# Create a function called odd_even that counts from 1 to 2000. As your loop executes have your program print the number of that iteration and specify whether it's an odd or even number.

# def odd_even():
#     number = 0
#     for i in range(0,2001):
#         if i % 2 == 0:
#             print "Number is " +str(i)+" This is an even number."
#         if i % 2 != 0:
#             print "Number is " +str(i)+" This is an odd number."
#     return
#
# odd_even()


# Multiply:
# Create a function called 'multiply' that iterates through each value in a list (e.g. a = [2, 4, 10, 16]) and returns a list where each value has been multiplied by 5.
#
# The function should multiply each value in the list by the second argument. For example, let's say:

def multiply(x,y):
    myList =[] #dont forget this
    for num in x:
        num*=y
        myList.append(num)
    return myList

a = [1,2,3,4,5,6]

print multiply(a,5)

def layered_multiples(arr):
    newArr = []
    for i in arr:
        newArr.append([1]*i) #you can multiply strings as well as list in python to get multiples of that list
    return newArr

print layered_multiples(multiply(a,5))
