const UIConstants = {
    topicNames : {
        PREFIXSUM: "Prefix Sum",
        CARRYFORWARD: "Carry Forward",
        SUBARRAYS : "Subarrays",
        SUBSEQUENCESANDSUBSETS: "Subsequences And Subsets",
        HASHING: "Hashing",
        BITMANIPULATION: "Bit Manipulation",
        STRINGS: "Strings",
    },
    topicDescriptions : {
        PREFIXSUM: {
            meaning: "Prefix Sum array is a data structure design which helps us to answer several queries such as sum in a given range in constant time which would otherwise take linear time",
            desc: "Given an array, its prefix array is an array of same size such that ith element of prefix array is the sum of all elements of given array till it's ith element that is",
            formula: "prefix_array[i] = array[0] + array[1] + ... + array[i]",
            applications: [
                "Find sum of all elements in a given range",
                "Find product of all elements in a given range",
                "Find maximum subarray sum",
                "Find maximum subarray sum modulo m",
                "Maximum subarray such that sum is less than some number"
            ],
            complexity: {
                spaceComplexity: "O(n)",
                timeComplexity: "Build : O(n), Range Sum Query: O(1)"
            }
        },
        CARRYFORWARD: "Carry Forward",
        SUBARRAYS : "Subarrays",
        SUBSEQUENCESANDSUBSETS: "Subsequences And Subsets",
        HASHING: "Hashing",
        BITMANIPULATION: "Bit Manipulation",
        STRINGS: "Strings",

    },

    problems:{
        PREFIXSUM: [{
            questionTitle: "Equilibrium index of an array",
            questionDesc: "You are given an array A of integers of size N. Your task is to find the equilibrium index of the given array. Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.",
            note: "Array indexing starts from 0. If there is no equilibrium index then return -1. If there are more than one equilibrium indexes then return the minimum index.",
            constraints: [
                {constraint: "1<=N<=1e5"}, 
                {constraint: "-1e5<=A[i]<=1e5"}
            ],
            inputFormat: "First arugment contains an array A .",
            outputFormat: "Return the equilibrium index of the given array. If no such index is found then return -1.",
            examples: [
                {
                    input: "A=[-7, 1, 5, 2, -4, 3, 0]",
                    output: "3",
                    explanation: "3 is an equilibrium index, because: A[0] + A[1] + A[2] = A[4] + A[5] + A[6]"
                },
                {
                    input: "A=[1,2,3]",
                    output: "-1",
                    explanation: "There is no such index."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17015/assignment/problems/12826?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Count ways to make sum of odd and even indexed elements equal by removing an array element",
            questionDesc: "Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.",
            note: "Array indexing starts from 0. If there is no equilibrium index then return -1. If there are more than one equilibrium indexes then return the minimum index.",
            constraints: [
                {constraint: "1<=n<=1e5"}, 
                {constraint: "-1e5<=A[i]<=1e5"}
            ],
            inputFormat: "First argument contains an array A of integers of size N",
            outputFormat: "Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.",
            examples: [
                {
                    input: "A=[2, 1, 6, 4]",
                    output: "1",
                    explanation: "Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. Therefore, the required output is 1."
                },
                {
                    input: "A=[1, 1, 1]",
                    output: "3",
                    explanation: " Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1]. Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1]. Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1]. Therefore, the required output is 3."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17015/assignment/problems/12826?navref=cl_tt_lst_sl"
        }
    ]
    }
}

export default UIConstants;