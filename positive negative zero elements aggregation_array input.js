// https://www.hackerrank.com/challenges/plus-minus/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
let plusfrac=0;
let minusfrac=0;
let zerofrac=0;

// Complete the plusMinus function below.
function plusMinus(arr) {
    let elem = arr.length;
    for (let i=0; i < elem; i++)
        {
            if(arr[i] == 0)
            zerofrac+=1;
            else if(arr[i] > 0)
            plusfrac+=1;
            else if(arr[i] < 0)
            minusfrac+=1;
        }
        plusfrac/=elem;
        console.log(plusfrac);
        minusfrac/=elem;
        console.log(minusfrac);
        zerofrac/=elem;
        console.log(zerofrac);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
