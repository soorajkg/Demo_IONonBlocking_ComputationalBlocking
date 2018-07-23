## simple fibonacci in Java script
def recursive(n):
    if n <= 2 :
        return 1
    else :
        return recursive(n - 1) + recursive(n - 2)

print "Output from external python program"
print (recursive(35))
