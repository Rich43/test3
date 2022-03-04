input="aaabbbcd"

output="aaa3bbb3c1d1"

function transformInput(inputData) {
    let charCount = 1;
    return inputData.split('').reduce((prev, next, index, arr) => {
        let output = typeof prev === 'string' ? prev.split('') : prev;
        const prevLetter = output.length ? output[output.length - 1] : null;
        if (prevLetter && prevLetter !== next) {
            output = output.concat(charCount);
            charCount = 0;
        }
        output = output.concat(next);
        charCount++;
        if (index === arr.length - 1) {
            output = output.concat(charCount);
        }
        return output;
    }).join('');
}

const data = transformInput(input);
console.log(data);
console.log(data === output);
