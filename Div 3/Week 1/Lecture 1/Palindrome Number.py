"""
Author: Khalid Mohammed
Problem: Palindrome Number
Problem link: https://leetcode.com/problems/palindrome-number/

Problem Description:
Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

Date Solved: Wed 13 Mar 2024
Time to Solve:  min
"""


class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]


s = Solution()
print(s.isPalindrome(-202))
