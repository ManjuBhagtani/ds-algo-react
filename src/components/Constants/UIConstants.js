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
        BITMANIPULATION: {
            meaning: "Bit manipulation is the process of applying logical operations on a sequence of bits to achieve a required result. It is an act of algorithmically manipulating bits or other pieces of data that are shorter than a word.",
            desc: "Bit manipulation is something that has constant time complexity.",

        },
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
        },
    ],
    SUBARRAYS: [
        {
            questionTitle: "Max Sum Contiguous Subarray",
            questionDesc: "Find the contiguous non empty subarray within an array, A of length N which has the largest sum.",
            constraints: [
                {constraint: "1 <= N <= 1e6"},
                {constraint: "-1000 <= A[i] <= 1000"},
            ],
            inputFormat: "The first and the only argument contains an integer array, A.",
            outputFormat: "Return an integer representing the maximum possible sum of the contiguous subarray.",
            examples: [
                {
                    input: " A = [1, 2, 3, 4, -10] ",
                    output: "10",
                    explanation: "The subarray [1, 2, 3, 4] has the maximum possible sum of 10. "
                },
                {
                    input: " A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] ",
                    output: "6",
                    explanation: "The subarray [4,-1,2,1] has the maximum possible sum of 6. "
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17018/assignment/problems/56?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Sum of All Subarrays",
            questionDesc: "You are given an integer array A of length N. You have to find the sum of all subarray sums of A. More formally, a subarray is a defined as a contiguous part of an array, which we can obtain by deleting zero or more elements from either end of the array. A subarray sum denotes the sum of all the elements of that subarray.",
            constraints: [
                {constraint: "1 <= N <= 10^5"},
                {constraint: "1 <= Ai <= 10^4"},
            ],
            inputFormat: "The first argument is the integer array A.",
            outputFormat: "Return a single integer denoting the sum of all subarray sums of the given array.",
            examples: [
                {
                    input: "A = [1, 2, 3] ",
                    output: "20",
                    explanation: "The different subarrays for the given array are: [1], [2], [3], [1, 2], [2, 3], [1, 2, 3]. Their sums are: 1 + 2 + 3 + 3 + 5 + 6 = 20"
                },
                {
                    input: "A = [2, 1, 3]",
                    output: "19",
                    explanation: "Similiar to the first example, the sum of all subarray sums for this array is 19."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17018/assignment/problems/14363?navref=cl_tt_nv"
        },
        {
            questionTitle: "Subarray with least average",
            questionDesc: "Given an array of size N, Find the subarray with least average of size k.",
            constraints: [
                {constraint: "1<=k<=N<=1e5"},
                {constraint: "-1e5<=A[i]<=1e5"},
            ],
            inputFormat: "First argument contains an array A of integers of size N. Second argument contains integer k.",
            outputFormat: "Return the index of the first element of the subarray of size k that has least average. Array indexing starts from 0.",
            examples: [
                {
                    input: "A=[3, 7, 90, 20, 10, 50, 40]  B=3",
                    output: "3",
                    explanation: "Subarray between indexes 3 and 5 - The subarray {20, 10, 50} has the least average among all subarrays of size 3."
                },
                {
                    input: "A=[3, 7, 5, 20, -10, 0, 12]  B=2",
                    output: "4",
                    explanation: "Subarray between [4, 5] has minimum average"
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17018/assignment/problems/12827?navref=cl_tt_nv"
        },
        {
            questionTitle: "Maximum Subarray",
            questionDesc: "You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum. But the sum must not exceed B.",
            constraints: [
                {constraint: "1 <= A <= 10^3"},
                {constraint: "1 <= B <= 10^9"},
                {constraint: "1 <= C[i] <= 10^6"},
            ],
            inputFormat: "The first argument is the integer A. The second argument is the integer B. The third argument is the integer array C.",
            outputFormat: "Return a single integer which denotes the maximum sum.",
            examples: [
                {
                    input: "A = 5, B = 12, C = [2, 1, 3, 4, 5]",
                    output: "12",
                    explanation: "We can select {3,4,5} which sums up to 12 which is the maximum possible sum."
                },
                {
                    input: "A = 3, B = 1, C = [2, 2, 2]",
                    output: "0",
                    explanation: "All elements are greater than B, which means we cannot select any subarray. Hence, the answer is 0."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17018/assignment/problems/16121?navref=cl_tt_nv"
        },
        {
            questionTitle: "Alternating Subarrays",
            questionDesc: "You are given an integer array A of length N comprising of 0's & 1's, and an integer B. You have to tell all the indices of array A that can act as a centre of 2 * B + 1 length 0-1 alternating subarray. A 0-1 alternating array is an array containing only 0's & 1's, and having no adjacent 0's or 1's. For e.g. arrays [0, 1, 0, 1], [1, 0] and [1] are 0-1 alternating, while [1, 1] and [0, 1, 0, 0, 1] are not.",
            constraints: [
                {constraint: "1 <= N <= 10^5"},
                {constraint: "A[i] equals to 0 or 1."},
                {constraint: "0 <= B <= (N - 1) / 2"},
            ],
            inputFormat: "First argument is an integer array A. Second argument is an integer B.",
            outputFormat: "Return an integer array containing indices(0-based) in sorted order. If no such index exists, return an empty integer array.",
            examples: [
                {
                    input: "A = [1, 0, 1, 0, 1], B = 1 ",
                    output: "[1, 2, 3]",
                    explanation: "Index 1 acts as a centre of alternating sequence: [A0, A1, A2]. Index 2 acts as a centre of alternating sequence: [A1, A2, A3]. Index 3 acts as a centre of alternating sequence: [A2, A3, A4] "
                },
                {
                    input: "A = [0, 0, 0, 1, 1, 0, 1], B = 0 ",
                    output: "[0, 1, 2, 3, 4, 5, 6]",
                    explanation: "Each index in the array acts as the center of alternating sequences of lengths 1."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17018/homework/problems/16123?navref=cl_tt_nv"
        }
    ],
    SUBSEQUENCESANDSUBSETS: [
        {
            questionTitle: "Little Ponny and 2-Subsequence",
            questionDesc: "Little Ponny is given a string A and he wants to find out the lexicographically minimum subsequence from it of size >= 2. Can you help him? A string a is lexicographically smaller than a string b, if the first different letter in a and b is smaller in a. For example, \"abc\" is lexicographically smaller than \"acc\" because the first different letter is 'b' and 'c' which is smaller in \"abc\".",
            constraints: [
                {constraint: "1 <= |A| <= 10^5"},
                {constraint: "A only contains lowercase alphabets."},
            ],
            inputFormat: "The first and the only argument of input contains the string, A.",
            outputFormat: "Return a string representing the answer.",
            examples: [
                {
                    input: "A = \"abcdsfhjagj\" ",
                    output: "\"aa\" ",
                    explanation: "\"aa\" is the lexicographically minimum subsequence from A. "
                },
                {
                    input: " A = \"ksdjgha\" ",
                    output: "\"da\" ",
                    explanation: "\"da\" is the lexicographically minimum subsequence from A. "
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18133/assignment/problems/9990?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Subset",
            questionDesc: "Given a set of distinct integers, A, return all possible subsets.",
            note: "Elements in a subset must be in non-descending order. The solution set must not contain duplicate subsets. Also, the subsets should be sorted in ascending ( lexicographic ) order. The list is not necessarily sorted.",
            constraints: [
                {constraint: "1 <= |A| <= 16"},
                {constraint: "INTMIN <= A[i] <= INTMAX"},
            ],
            inputFormat: "First and only argument of input contains a single integer array A.",
            outputFormat: "Return a vector of vectors denoting the answer.",
            examples: [
                {
                    input: "A = [1]",
                    output: "[ [], [1] ]",
                    explanation: "You can see that these are all possible subsets."
                },
                {
                    input: "A = [1, 2, 3]",
                    output: "[ [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3] ]",
                    explanation: "You can see that these are all possible subsets."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18133/assignment/problems/148?navref=cl_tt_nv"
        },
        {
            questionTitle: "Sum the Difference",
            questionDesc: "Given an integer array A of size N. You have to find all possible non-empty subsequence of the array of numbers and then, for each subsequence, find the difference between the largest and smallest numbers in that subsequence Then add up all the differences to get the number. As the number may be large, output the number modulo 1e9 + 7 (1000000007).",
            note: "Subsequence can be non-contiguous.",
            constraints: [
                {constraint: "1 <= N <= 10000"},
                {constraint: "1<= A[i] <=1000"},
            ],
            inputFormat: "First argument is an integer array A.",
            outputFormat: "Return an integer denoting the output.",
            examples: [
                {
                    input: "A = [1, 2]",
                    output: "1",
                    explanation: "All possible non-empty subsets are: [1]    largest-smallest = 1 - 1 = 0, [2]    largest-smallest = 2 - 2 = 0, [1 2]  largest-smallest = 2 - 1 = 1, Sum of the differences = 0 + 0 + 1 = 1. So, the resultant number is 1"
                },
                {
                    input: "A = [1]",
                    output: "0",
                    explanation: "Only 1 subsequence of 1 element is formed."
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18133/homework/problems/453?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Find subsequence",
            questionDesc: "Given two strings A and B, find if A is a subsequence of B. Return \"YES\" if A is a subsequence of B, else return \"NO\".",
            constraints: [
                {constraint: "1 <= lenght(A), length(B) <= 100000"},
                {constraint: "'a' <= A[i], B[i] <= 'z'"},
            ],
            inputFormat: "The first argument given is the string A. The second argument given is the string B.",
            outputFormat: "Return \"YES\" if A is a subsequence of B, else return \"NO\".",
            examples: [
                {
                    input: "A = \"bit\", B = \"dfbkjijgbbiihbmmt\"",
                    output: "YES",
                },
                {
                    input: "A = \"apple\", B = \"appel\"",
                    output: "NO",
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18133/homework/problems/4831?navref=cl_tt_nv"
        },
        {
            questionTitle: "Subsequence-Sum Problem",
            questionDesc: "You are given an array of integers of N size. You have to find that there is any subsequence exists or not whose sum is equal to B.",
            note: "Array is considered 1 based indexing.",
            constraints: [
                {constraint: "1 <= N <= 20"},
                {constraint: "1 <= A[i] <= 100000"},
                {constraint: "0 <= B <= 1e9"},
            ],
            inputFormat: "First Argument is array of integers A. Second Argument is B",
            outputFormat: "Return 1 if any subsequence sum is equal to B otherwise return 0.",
            examples: [
                {
                    input: "A=[1,20,13,4,5], B=18",
                    output: "1",
                    explanation: "There is as subsequence present at indexes 1,3,4 whose sum is 18"
                },
                {
                    input: "A=[2,2,2,2], B=5",
                    output: "0",
                    explanation: "There is no possible subsequence whose sum is 5"
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18133/homework/problems/12555?navref=cl_tt_nv"
        },
        {
            questionTitle: "Odd Even Subsequences",
            questionDesc: "Given an array of integers A of size N. Find the longest subsequence of A which is odd-even. A subsequence is said to odd-even in the following cases: 1. The first element of the subsequence is odd, second element is even, third element is odd and so on. For example: [5, 10, 5, 2, 1, 4], [1, 2, 3, 4, 5]. 2. The first element of the subsequence is even, second element is odd, third element is even and so on. For example: [10, 5, 2, 1, 4, 7], [10, 1, 2, 3, 4]. Return the maximum possible length of odd-even subsequence.",
            note: "An array B is a subsequence of an array A if B can be obtained from A by deletion of several (possibly, zero or all) elements.",
            constraints: [
                {constraint: "1 <= N <= 100000"},
                {constraint: "1 <= A[i] <= 10^9 "},
            ],
            inputFormat: "The only argument given is the integer array A.",
            outputFormat: "Return the maximum possible length of odd-even subsequence.",
            examples: [
                {
                    input: "A = [1, 2, 2, 5, 6]",
                    output: "4",
                    explanation: "Maximum length odd even subsequence is [1, 2, 5, 6]"
                },
                {
                    input: "A = [2, 2, 2, 2, 2, 2]",
                    output: "1",
                    explanation: "Maximum length odd even subsequence is [2]"
                }
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18133/homework/problems/5557?navref=cl_tt_nv"
        }
    ],
    HASHING: [
        {
            questionTitle: "Largest Continuous Sequence Zero Sum",
            questionDesc: "Given an array A of N integers. Find the largest continuous sequence in a array which sums to zero.",
            constraints: [
                {constraint: "1 <= N <= 10^6"},
                {constraint: "-10^7 <= A[i] <= 10^7"},
            ],
            inputFormat: "Single argument which is an integer array A.",
            outputFormat: "Return an array denoting the longest continuous sequence with total sum of zero. If there are multiple correct answers, return the sequence which occurs first in the array.",
            examples: [
                {
                    input: "A = [1,2,-2,4,-4]",
                    output: "[2,-2,4,-4]",
                    explanation: "[2,-2,4,-4] is the longest sequence with total sum of zero."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18125/assignment/problems/298?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Sub-array with 0 sum",
            questionDesc: "Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0. If the given array contains a sub-array with sum zero return 1 else return 0.",
            constraints: [
                {constraint: "1 <= |A| <= 100000"},
                {constraint: "-10^9 <= A[i] <= 10^9"},
            ],
            inputFormat: "The only argument given is the integer array A.",
            outputFormat: "Return whether the given array contains a subarray with a sum equal to 0.",
            examples: [
                {
                    input: "A = [1, 2, 3, 4, 5]",
                    output: "0",
                    explanation: "No subarray has sum 0."
                },
                {
                    input: "A = [-1, 1]",
                    output: "1",
                    explanation: "The array has sum 0."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18125/assignment/problems/4202?navref=cl_tt_nv"
        },
        {
            questionTitle: "Shaggy and distances",
            questionDesc: "Shaggy has an array A consisting of N elements. We call a pair of distinct indices in that array as a special pair if elements at that index in the array are equal. Shaggy wants you to find a special pair such that distance between that pair is minimum. Distance between two indices is defined as |i-j|. If there is no special pair in the array then return -1.",
            constraints: [
                {constraint: "1 <= |A| <= 10^5"},
            ],
            inputFormat: "First and only argument is the array A.",
            outputFormat: "Return one integer corresponding to the minimum possible distance between a special pair.",
            examples: [
                {
                    input: "A = [7, 1, 3, 4, 1, 7]",
                    output: "3",
                    explanation: "Here we have 2 options: 1. A[1] and A[4] are both 1 so (1,4) is a special pair and |1-4|=3. 2. A[0] and A[5] are both 7 so (0,5) is a special pair and |0-5|=5. Therefore the minimum possible distance is 3."
                },
                {
                    input: "A = [1, 1]",
                    output: "1",
                    explanation: "Only possibility is choosing A[1] and A[2]."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18125/assignment/problems/1302?navref=cl_tt_nv"
        },
        {
            questionTitle: "Check Palindrome - II",
            questionDesc: "Given a string A consisting of lowercase characters. Check if characters of the given string can be rearranged to form a palindrome. Return 1 if it is possible to rearrange the characters of the string A such that it becomes a palindrome else return 0.",
            constraints: [
                {constraint: "1 <= |A| <= 10^5"},
                {constraint: "A consists only of lower-case characters."},
            ],
            inputFormat: "First argument is an string A.",
            outputFormat: "Return 1 if it is possible to rearrange the characters of the string A such that it becomes a palindrome else return 0.",
            examples: [
                {
                    input: "A = \"abcde\"",
                    output: "0",
                    explanation: "No possible rearrangement to make the string palindrome."
                },
                {
                    input: "A = \"abbaee\"",
                    output: "1",
                    explanation: "Given string \"abbaee\" can be rearranged to \"aebbea\" to form a palindrome."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18125/homework/problems/11859?navref=cl_tt_nv"
        },
        {
            questionTitle: "Colorful Number",
            questionDesc: "For Given Number A find if its COLORFUL number or not. If number A is a COLORFUL number return 1 else return 0. What is a COLORFUL Number: A number can be broken into different contiguous sub-subsequence parts. Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245. And this number is a COLORFUL number, since product of every digit of a contiguous subsequence is different.",
            constraints: [
                {constraint: "1 <= A <= 2 * 10^9"},
            ],
            inputFormat: "Single Argument which denotes integer A.",
            outputFormat: "Return 1 if integer A is COLORFUL else return 0.",
            examples: [
                {
                    input: "A = 23",
                    output: "1",
                    explanation: "Possible Sub-sequences: [2, 3, 23] where 2 -> 2, 3 -> 3, 23 -> 6  (product of digits) This number is a COLORFUL number since product of every digit of a sub-sequence are different. "
                },
                {
                    input: "A = 236",
                    output: "0",
                    explanation: " Possible Sub-sequences: [2, 3, 6, 23, 36, 236] where 2 -> 2, 3 -> 3, 6 -> 6, 23 -> 6 (product of digits), 36 -> 18  (product of digits), 236 -> 36  (product of digits). This number is not a COLORFUL number since the product sequence 23  and sequence 6 is same. "
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18125/homework/problems/275?navref=cl_tt_nv"
        },
    ],
    STRINGS: [
        {
            questionTitle: "Longest Common Prefix",
            questionDesc: "Given the array of strings A, you need to find the longest string S which is the prefix of ALL the strings in the array. Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2. For Example: longest common prefix of \"abcdefgh\" and \"abcefgh\" is \"abc\".",
            constraints: [
                {constraint: "0 <= sum of length of all strings <= 1000000"},
            ],
            inputFormat: "The only argument given is an array of strings A.",
            outputFormat: "Return the longest common prefix of all strings in A",
            examples: [
                {
                    input: "A = [\"abcdefgh\", \"aefghijk\", \"abcefgh\"]",
                    output: "\"a\"",
                    explanation: "Longest common prefix of all the strings is \"a\"."
                },
                {
                    input: "A = [\"abab\", \"ab\", \"abcd\"];",
                    output: "\"ab\"",
                    explanation: "Longest common prefix of all the strings is \"ab\"."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/18124/homework/problems/176?navref=cl_tt_lst_sl"
        },
    ],
    BITMANIPULATION: [
        {
            questionTitle: "Single Number",
            questionDesc: "Given an array of integers A, every element appears twice except for one. Find that single one.",
            note: "Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?",
            constraints: [
                {constraint: "2 <= |A| <= 2000000"},
                {constraint: "0 <= A[i] <= INTMAX"},
            ],
            inputFormat: "First and only argument of input contains an integer array A.",
            outputFormat: "Return a single integer denoting the single element.",
            examples: [
                {
                    input: " A = [1, 2, 2, 3, 1]",
                    output: "3",
                    explanation: "3 occurs once."
                },
                {
                    input: "A = [1, 2, 2]",
                    output: "1",
                    explanation: "1 occurs once."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17617/assignment/problems/193?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Add Binary Strings",
            questionDesc: "Given two binary strings, return their sum (also a binary string).",
            examples: [
                {
                    input: "a = \"100\", b = \"11\"",
                    output: "\"111\"",
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17617/assignment/problems/189?navref=cl_tt_nv"
        },
        {
            questionTitle: "Number of 1 Bits",
            questionDesc: "Write a function that takes an integer and returns the number of 1 bits it has.",
            constraints: [
                {constraint: "1 <= A <= 10^9"},
            ],
            inputFormat: "First and only argument contains integer A",
            outputFormat: "Return an integer as the answer",
            examples: [
                {
                    input: "11",
                    output: "3",
                    explanation: "11 is represented as 1011 in binary."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17617/homework/problems/192?navref=cl_tt_lst_sl"
        },
        {
            questionTitle: "Interesting Array",
            questionDesc: "You have an array A with N elements. We have 2 types of operation available on this array : 1. We can split a element B into 2 elements C and D such that B = C + D. 2. We can merge 2 elements P and Q as one element R such that R = P^Q i.e XOR of P and Q. You have to determine whether it is possible to make array A containing only 1 element i.e. 0 after several splits and/or merge?",
            constraints: [
                {constraint: "1 <= N <= 100000"},
                {constraint: "1 <= A[i] <= 10^6"},
            ],
            inputFormat: "The first argument is an integer array A of size N.",
            outputFormat: "Return \"Yes\" if it is possible otherwise return \"No\".",
            examples: [
                {
                    input: "A = [9, 17]",
                    output: " Yes",
                    explanation: "Following is one possible sequence of operations -   1) Merge i.e 9 XOR 17 = 24   2) Split 24 into two parts each of size 12   3) Merge i.e 12 XOR 12 = 0. As there is only 1 element i.e 0. So it is possible."
                },
                {
                    input: "A = [1]",
                    output: " No",
                    explanation: "There is no possible way to make it 0."
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17617/homework/problems/1085?navref=cl_tt_nv"
        },
        {
            questionTitle: "Reverse Bits",
            questionDesc: "Reverse the bits of an 32 bit unsigned integer A.",
            constraints: [
                {constraint: "0 <= A <= 2^32"},
            ],
            inputFormat: "First and only argument of input contains an integer A.",
            outputFormat: "Return a single unsigned integer denoting the decimal value of reversed bits.",
            examples: [
                {
                    input: "0",
                    output: "0",
                    explanation: "00000000000000000000000000000000    =>      00000000000000000000000000000000"
                },
                {
                    input: "3",
                    output: "3221225472",
                    explanation: "00000000000000000000000000000011    =>      11000000000000000000000000000000"
                },
            ],
            link: "https://www.scaler.com/academy/mentee-dashboard/class/17617/homework/problems/191?navref=cl_tt_nv"
        }
    ]
    },

    tricks:{
        BITMANIPULATION: [
            "x & (x-1) will clear the lowest set bit of x",
            "x & ~(x-1) extracts the lowest set bit of x (all others are clear). Pretty patterns when applied to a linear sequence.",
            "x & (x + (1 << n)) = x, with the run of set bits (possibly length 0) starting at bit n cleared.",
            "x & ~(x + (1 << n)) = the run of set bits (possibly length 0) in x, starting at bit n.",
            "x | (x + 1) = x with the lowest cleared bit set.",
            "x | ~(x + 1) = extracts the lowest cleared bit of x (all others are set).",
            "x | (x - (1 << n)) = x, with the run of cleared bits (possibly length 0) starting at bit n set.",
            "x | ~(x - (1 << n)) = the lowest run of cleared bits (possibly length 0) in x, starting at bit n are the only clear bits.",            
        ]
    },

    notesFileNames: {
        PREFIXSUM: "Arrays_PrefixSum",
        CARRYFORWARD: "Arrays_CarryForward",
        SUBARRAYS: "Arrays_Subarrays",
        SUBSEQUENCESANDSUBSETS: "Arrays_SubsequencesAndSubsets",
        BITMANIPULATION: "BitManipulation",
        STRINGS: "Strings",
        HASHING: "Hashing",
    }
}

export default UIConstants;