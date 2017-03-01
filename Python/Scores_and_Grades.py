import random



def scores_and_Grades():

    for i in range(10):
        grade = random.randint(60,100)
        if grade >= 60 and grade<=69:
            print "Score: "+str(grade)+"; Your grade is a D"
            # return
        elif grade >= 70 and grade<=79:
            print "Score: "+str(grade)+"; Your grade is a C"
            # return
        elif grade >= 80 and grade<=89:
            print "Score: "+str(grade)+"; Your grade is a B"
            # return
        else:
            print "Score: "+str(grade)+"; Your grade is a A"

    return

scores_and_Grades()
