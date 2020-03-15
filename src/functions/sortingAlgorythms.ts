import { sleep } from "@/functions/utils.ts";

export async function bubbleSort(inputArr: Array<number>, reference: Function) {
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
        reference(inputArr);
        await sleep(300);
      }
    }
  } while (swapped);
  return inputArr;
}
