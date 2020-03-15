export const bubbleSort = (arr: Array<number>) => {
    console.log("Sorting")
    const inputArr = [...arr];
    const len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                const tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
                arr = inputArr;
                console.log(arr);
            }
        }
    } while (swapped);
    return inputArr;
};