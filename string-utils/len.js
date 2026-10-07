export function len(str) {
    if (typeof str!=='string'){
        throw new TypeError('Аргумент должен быть строкой');
    }
    let count = 0;
    for (let i=0; str[i]!==undefined; i++){
        count++;
    }
    return count;
}