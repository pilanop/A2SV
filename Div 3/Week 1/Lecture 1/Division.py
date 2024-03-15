"""
Author: Khalid Mohammed
Problem: Division
Problem link: https://www.hackerrank.com/challenges/python-division/problem?isFullScreen=true

Problem Description:
The provided code stub reads two integers, `a` and `b`, from STDIN.
Add logic to print two lines.
The first line should contain the result of integer division, `a // b`.
The second line should contain the result of float division, `a / b`.
No rounding or formatting is necessary.

Date Solved: Wed 13 Mar 2024
Time to Solve: 2 min
"""

if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(f"{a//b}\n{a/b}")


