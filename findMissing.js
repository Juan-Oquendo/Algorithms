const numbers = [0, 1, 2, 3, 4, 6, 8, 9, 10]
const numbers2 = [4, 5, 0, 1, 2, 8, 10]
const numbers3 = [3, 4, 6, 9, 10]


const findMissing = array => { // array ordenado
    let missing = []
    let position = 1;
    for (let index = 0; index <= array.length; index++) {
        
        if (!array.includes(index, position-1)) {
            missing.push(index);
        }
    }
    return missing;
}

const findMissing2 = array => { // array desordenado
    let missing = []
    for (let index = 0; index <= Math.max(...array); index++) {
        
        if (!array.includes(index)) {
            missing.push(index);
        }
    }
    return missing;
}

const findMissing3 = array => { // array al cual no se le conoce su valor minimo
    let missing = []
    for (let index = Math.min(...array); index <= Math.max(...array); index++) {
        
        if (!array.includes(index)) {
            missing.push(index);
        }
    }
    return missing;
}

console.log(findMissing3(numbers3));