def filter(numbers, test):
    result = []
    for number in numbers:
        if test(number):
            result.append(number)
    return result

def even(n):
    return n % 2 == 0

def odd(n):
    return n % 2 == 1

def greater_5(n):
    return n > 5

def is_a(char):
    return char == 'a'
