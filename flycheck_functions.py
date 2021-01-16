

def get_divisors(n):
    divisors = []
    for div in range(1, n + 1):
        if n % div == 0:
            divisors.append(div)
    return divisors


def print_range_divisors(start, end):
    for number in range(start, end + 1):
        divisors = get_divisors(number)
        print('Number {} divisors are: {}'.format(number, divisors))


for n in range(1, 10 + 1):
    divisors = []
    for div in range(1, n + 1):
        if n % div == 0:
            divisors.append(div)
    print('Number {} divisors are: {}'.format(n, divisors))

for n in range(1, 10 + 1):
    divisors = get_divisors(n)
    print('Number {} divisors are: {}'.format(n, divisors))

print_range_divisors(1, 5)

