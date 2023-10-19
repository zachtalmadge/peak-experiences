function pickTwoDistinctRandomElements(arr) {
    if (arr.length < 2) {
        console.log('Not enough elements in the array to pick two distinct items.');
        return null;
    }

    const index1 = Math.floor(Math.random() * arr.length);
    let index2;

    do {
        index2 = Math.floor(Math.random() * arr.length);
    } while (index1 === index2);

    return [arr[index1], arr[index2]];
}

export default pickTwoDistinctRandomElements