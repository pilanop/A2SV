"""
Author: Khalid Mohammed
Problem: Convert the Temperature
Problem link: https://leetcode.com/problems/convert-the-temperature/

Problem Description:
You are given a non-negative floating point number rounded to two decimal places
`celsius`, that denotes the temperature in Celsius.
You should convert Celsius into Kelvin and Fahrenheit and return it as an array
`ans = [kelvin, fahrenheit]`.
Return the array `ans`.
Answers within `10^5` of the actual answer will be accepted.

Note that:
`Kelvin = Celsius + 273.15`
`Fahrenheit = Celsius * 1.80 + 32.00`

Date Solved: Wed 13 Mar 2024
Time to Solve: 5 min
"""


class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        ans = [celsius + 273.15, celsius * 1.80 + 32.00]
        return ans
