input="aaabbbcd"

output="aaa3bbb3c1d1"

function transformInput(inputData) {
    let lastChar = null;
    let charCount = 0;
    let resultStr = '';
    for (const char of inputData.split('')) {
        if ((lastChar === null) || (lastChar && char === lastChar)) {
            lastChar = char;
            charCount++;
            resultStr += char;
        } if (lastChar && lastChar !== char) {
            resultStr += `${char}${charCount}`;
            lastChar = null;
            charCount = 0;
        }
    }
    return resultStr;
}

console.log(transformInput(input));
console.log(transformInput(input) === output);
