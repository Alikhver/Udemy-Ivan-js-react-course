"use strict"

function fib(a) {
    if (!Number.isInteger(a) || a == 0) {
        return '';
    } else if (a == '1') {
        return '0';
    }
    let res = '0 1',
        prev = 0,
        cur = 1;
    return rec(res, prev, cur, a);
}

function rec(res, prev, cur, a) {
    if (a == 2) {
        return res;
    }
    res += ` ${prev + cur}`;
    return rec(res, cur, prev + cur, --a);
}

console.log(fib(20))
