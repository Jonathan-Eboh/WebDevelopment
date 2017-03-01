import random

heads = 0
tails = 0

for i in range(5001):
    tosses = random.randint(0,1)
    if tosses == 1:
        heads+=1
    elif tosses ==0:
        tails+=1
print "Flipped a coin 5000 times and we got..."
print str(heads) + " heads"
print "and "+str(tails)+" tails"
