# cons(a, b) constructs a pair, 
# and car(pair) and cdr(pair) returns the first and last element of that pair. 
# For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

# Given this implementation of cons:

# here they define function with two params
def cons(a, b):
	# make a new function with single param object
    def pair(f):
		#return a combination of both items from parent function into the single param
        return f(a, b)
	#return this to the call
    return pair

# Implement car and cdr
def car(f):
    def first(a, b):
        return a
    return f(first)

def cdr(f):
    def last(a, b):
        return b
    return f(last)

print(car(cons(3,4)))
print(cdr(cons(3,4)))
# will need to return first num, take in the object first

print()

# /***** Python Solution *****/