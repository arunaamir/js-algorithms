export function isLessOrEqual(a, b) {
    if (typeof a!=='string'|| typeof b!=='string') {
        throw new TypeError('Аргументы должны быть строками');
    }

    let i=0;
    for (; a[i]!==undefined && b[i]!==undefined; i++) {
        if (a[i]!==b[i]) {
            return a[i]<b[i];
        }
    }

    return a[i]===undefined || b[i]!==undefined;
}