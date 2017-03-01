import re

mystr = "If monkeys like bananas, then I must be a monkey!"
# generalized version using regular expressions for cases where there are more than 2 substrings
for sub in re.finditer("monkey", mystr):
    print("monkey found", sub.start(), sub.end()) #range of substring

print mystr.find("monkey")
print mystr.rfind("monkey")

print mystr.replace("monkey", "alligator")

x = [2,54,-2,7,12,98]
print min(x), max(x)

y = ["hello",2,54,-2,7,12,98,"world"]

print y[0], y[len(y)-1]
newlist = [y[0], y[len(y)-1]]
print newlist

z = [19,2,54,-2,7,12,98,32,10,-3,6]
z.sort()
print z

new_z = z[0:2]
z.remove(-3)
z.remove(-2)
print new_z
z.insert(0, new_z)
print z
