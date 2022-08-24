/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    // make each array have an even number of candies
    var totalA = 0;
    var totalB = 0;
    var size = 0;
    var answer = [];
    if (aliceSizes.length > bobSizes.length) {
        size = aliceSizes.length;
    }
    else size = bobSizes.length;
    
    for (var i = 0; i < size; ++i) {
        if(aliceSizes[i]) {
            totalA += aliceSizes[i];
        }
        if(bobSizes[i]) {
            totalB += bobSizes[i];
        }
    }

    var diff = Math.abs(totalA - totalB);
    for (var i = 0; i < size; ++i) {
        console.log(i);
        for (var j = 0; j < size; ++j) {
            if(aliceSizes[i]) {
                if(bobSizes[j] + totalA - aliceSizes[i] == aliceSizes[i] + totalB - bobSizes[j]) {
                    answer.push(aliceSizes[i]);
                    answer.push(bobSizes[j]);
                    return answer;
                }
            }
        }
    }

    return answer;
};

x = [1, 2];
y = [2, 3];
console.log(fairCandySwap(x, y));