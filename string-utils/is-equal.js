export function isEqual(a, b) {
    if (typeof a!=='string'|| typeof b!=='string'){
        throw new TypeError('Аргументы должен быть строками');
    }
    
    for (let i=0; a[i]!==undefined || b[i]!==undefined; i++){
        if (a[i]!==b[i]){
            return false;
        }
    }
    return true;
}