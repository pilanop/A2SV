"""
Author: Khalid Mohammed
Problem: String Split and Join
Problem link: https://www.hackerrank.com/challenges/python-string-split-and-join/problem?isFullScreen=true

Problem Description:
You are given a string. Split the string on a `" "` (space) delimiter and
join using a `-` hyphen

Date Solved: Wed 15 Mar 2024
Time to Solve: 3 min
"""


def split_and_join(line):
    # write your code here
    line = line.split(" ")
    line = "-".join(line)
    return line


if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)
