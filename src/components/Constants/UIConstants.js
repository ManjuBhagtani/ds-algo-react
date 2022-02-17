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
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17015/assignment/problems/12828?navref=cl_tt_nv"
        },
        {
            questionTitle: "Pick from both sides!",
            questionDesc: "Given an integer array A of size N. You can pick B elements from either left or right end of the array A to get maximum sum. Find and return this maximum possible sum.",
            note: " Suppose B = 4 and array A contains 10 elements then, you can pick first four elements or can pick last four elements or can pick 1 from front and 3 from back etc . you need to return the maximum possible sum of elements you can pick.",
            constraints: [
                {constraint: "1<=n<=1e5"}, 
                {constraint: "1 <= B <= N"},
                {constraint: "-10^3 <= A[i] <= 10^3"}
            ],
            inputFormat: "First argument is an integer array A. Second argument is an integer B.",
            outputFormat: "Return an integer denoting the maximum possible sum of elements you picked.",
            examples: [
                {
                    input: "A = [5, -2, 3 , 1, 2]  B = 3",
                    output: "8",
                    explanation: " Pick element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8"
                },
                {
                    input: "A = [1, 2]  B = 1",
                    output: "2",
                    explanation: "  Pick element 2 from end as this is the maximum we can get"
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17015/assignment/problems/9900?navref=cl_tt_nv"
        }
    ],
    CARRYFORWARD: [{
            questionTitle: "Special Subsequences \"AG\"",
            questionDesc: "You have given a string A having Uppercase English letters. You have to find that how many times subsequence \"AG\" is there in the given string.",
            note: "Return the answer modulo 10^9 + 7 as the answer can be very large.",
            constraints: [
                {constraint: "1 <= length(A) <= 10^5"},
            ],
            inputFormat: "First and only argument is a string A.",
            outputFormat: "Return an integer denoting the answer.",
            examples: [
                {
                    input: " A = \"ABCGAG\"",
                    output: "3",
                    explanation: " Subsequence \"AG\" is 3 times in given string "
                },
                {
                    input: " A = \"GAB\"",
                    output: "0",
                    explanation: "There is no subsequence \"AG\" in the given string."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17256/assignment/problems/1247?navref=cl_tt_lst_nm"
        },
        {
            questionTitle: "Closest MinMax",
            questionDesc: "Given an array A. Find the size of the smallest subarray such that it contains atleast one occurrence of the maximum value of the array and atleast one occurrence of the minimum value of the array.",
            note: "Return the answer modulo 10^9 + 7 as the answer can be very large.",
            constraints: [
                {constraint: "1 <= |A| <= 2000"},
            ],
            inputFormat: "First and only argument is vector A",
            outputFormat: "Return the length of the smallest subarray which has atleast one occurrence of minimum and maximum element of the array",
            examples: [
                {
                    input: "A = [1, 3]",
                    output: "2",
                    explanation: "Only choice is to take both elements. "
                },
                {
                    input: "A = [2]",
                    output: "1",
                    explanation: "Take the whole array."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17256/assignment/problems/986?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Leaders in an array",
            questionDesc: "Given an integer array A containing N distinct integers, you have to find all the leaders in the array A. An element is leader if it is strictly greater than all the elements to its right side.",
            note: "The rightmost element is always a leader.",
            constraints: [
                {constraint: "1 <= N <= 10^5"},
                {constraint: "1 <= A[i] <= 10^8"}
            ],
            inputFormat: "First and only argument is an integer array A.",
            outputFormat: "Return an integer array denoting all the leader elements of the array. NOTE: Ordering in the output doesn't matter.",
            examples: [
                {
                    input: "A = [16, 17, 4, 3, 5, 2]",
                    output: "[17, 2, 5]",
                    explanation: "Element 17 is strictly greater than all the elements on the right side to it. Element 2 is strictly greater than all the elements on the right side to it. Element 5 is strictly greater than all the elements on the right side to it. So we will return this three elements i.e [17, 2, 5], we can also return [2, 5, 17] or [5, 2, 17] or any other ordering."
                },
                {
                    input: "A = [1, 2]",
                    output: "[2]",
                    explanation: "Only 2 the rightmost element is the leader in the array."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17256/homework/problems/11921?navref=cl_tt_nv"
        }]
    }
}

export default UIConstants;