def fun(x):
    def f2(y):
        return x + y
    return f2


# def main_function(...):

#     # Main function body

#     def helper_function(...):
#         # some code

#     # some  code

#     return helper_function


def create_adder(a):

    def add(b):
        return a + b

    return add


def normal_function(x):
    return x + 1

lambda_function = lambda x: x + 1

def lambda_adder(a):
    return lambda b: a + b
