"""
Author: Khalid Mohammed
Problem: Arithmetic Operators
Problem link: https://www.hackerrank.com/challenges/python-arithmetic-operators/problem?isFullScreen=true

Problem Description:
The provided code stub reads two integers from STDIN, `a` and `b`.
Add code to print three lines where:
1. The first line contains the sum of the two numbers.
2. The second line contains the difference of the two numbers (first - second).
3. The third line contains the product of the two numbers.

Date Solved: Wed 13 Mar 2024
Time to Solve: 2 min
"""

if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(f"{a + b}\n{a - b}\n{a * b}")
