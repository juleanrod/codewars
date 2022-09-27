/*
DESCRIPTION:
Count distinct elements in every window of size k
Given an array of size n and an integer k, return the count of distinct
contiguous numbers for all windows of size k. Consider that k is always lower
or equals to n.

Example:
Input: arr = {1, 2, 1, 3, 4, 2, 3} k = 4 Since we have n = 7 and k = 4, we have
4 windows with 4 contiguous elements.

Answer: [3,4,4,3]

<h2>Explanation:</h2>
First window is {1, 2, 1, 3} and we have 3 distinct numbers;
Second window is {2, 1, 3, 4} and we have 4 distinct numbers;
Third window is {1, 3, 4, 2} and we have 4 distinct numbers;
Fourth window is {3, 4, 2, 3} and we have 3 distinct numbers.

<br>

<h2>WARNING:</h2>

Be careful about the performances: your function will have to manage 150 random
tests with arrays of length between 10000 and 20000 and size of the window
between 1000 and 10000!

*/

function countContiguousDistinct(k, arr) {
    let counts = [];
    let iterations = arr.length - k;
    const starterArray = arr.slice(0,k)
    let occurrences = {}

    for (let j = 0; j < starterArray.length; j++) {
        occurrences[starterArray[j]] = (occurrences[starterArray[j]] || 0) + 1
    }

    let uniques = Object.keys(occurrences).length
    counts.push(uniques)

    for (let i = 0; i <= iterations-1; i++) {
        let firstFlag = Boolean(occurrences[arr[i]])
        let lastFlag = Boolean(occurrences[arr[i+k]])
        occurrences[arr[i]] = (occurrences[arr[i]]) - 1
        occurrences[arr[i+k]] = (occurrences[arr[i+k]] || 0) + 1
        if (Boolean(occurrences[arr[i]]) !== firstFlag) { uniques-- }
        if (Boolean(occurrences[arr[i+k]]) !== lastFlag) { uniques++ }
        counts.push(uniques)
    }
    return counts
}

// Time to complete: way too long..
