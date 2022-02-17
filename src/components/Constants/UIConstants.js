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
            formula: "prefix_array[i] = array[0] + arrat[1] + ... + array[i]",
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

    }
}

export default UIConstants;