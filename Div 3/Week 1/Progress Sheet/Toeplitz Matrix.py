"""
Author: Khalid Mohammed
Problem: Toeplitz Matrix
Problem link: https://leetcode.com/problems/toeplitz-matrix/

Problem Description:
Given an`m x n` `matrix`, return `true` if the matrix is Toeplitz. Otherwise,
return `false`.

A matrix is **Toeplitz** if every diagonal from top-left to bottom-right has
the same elements.

Date Solved: Wed 20 Mar 2024
Time to Solve: 15 min
"""
from typing import List

matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]


class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        for i in range(len(matrix) - 1):
            for j in range(len(matrix[0]) - 1):
                if matrix[i][j] != matrix[i + 1][j + 1]:
                    return False
        return True


s = Solution()
print(s.isToeplitzMatrix(matrix))
