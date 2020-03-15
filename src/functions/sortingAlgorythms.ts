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

function swap(items: Array<number>, leftIndex: number, rightIndex: number) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items: Array<number>, left: number, right: number) {
  const pivot = items[Math.floor((right + left) / 2)]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

export async function quickSort(
  items: Array<number>,
  left: number,
  right: number,
  reference: Function
) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1, reference);
      reference(items);
      await sleep(300);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right, reference);
      reference(items);
      await sleep(300);
    }
  }
  reference(items);
  return items;
}
