const array = [1, 2, 5, 3, 2, 3, 4, 5, 1, 1, 6, 6, 7]

const removeDuplicates = array => {
    let set = new Set(array);

    return Array.from(set).sort();
}

console.log(removeDuplicates(array))

// test