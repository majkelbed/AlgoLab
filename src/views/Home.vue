<template>
  <div>
    <button v-on:click="handleClick()">Sort</button>
    <Canvas v-bind:dataset="this.dataset" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Canvas from "@/components/Canvas.vue";
import { sleep } from "@/functions/utils.ts";
import { bubbleSort } from "@/functions/sortingAlgorythms.ts";

@Component({
  components: {
    Canvas
  }
})
export default class Home extends Vue {
  private dataset: Array<number> = [1, 5, 9, 14, 22, 3, 2, 1, 1, 6];

  randomizeDataset(): void {
    const newDataset = [];
    for (let index = 0; index < 25; index++) {
      newDataset.push(Math.random() * 15);
    }
    this.dataset = newDataset;
  }

  handleClick() {
    this.bubbleSort();
  }
  // @TODO: Find out way to retive render function from child component to call instead of spread operator hack for reference change
  async bubbleSort() {
    const changeDatasetReference = (newDataset: Array<number>) => {
      this.dataset = [...newDataset];
    };
    await bubbleSort(this.dataset, changeDatasetReference);
    // const inputArr = this.dataset;
    // const len = inputArr.length;
    // let swapped;
    // do {
    //   swapped = false;
    //   for (let i = 0; i < len; i++) {
    //     if (inputArr[i] > inputArr[i + 1]) {
    //       const tmp = inputArr[i];
    //       inputArr[i] = inputArr[i + 1];
    //       inputArr[i + 1] = tmp;
    //       swapped = true;
    //       this.dataset = [...inputArr];
    //       await sleep(300);
    //     }
    //   }
    // } while (swapped);
  }
}
</script>
 

 <style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin-bottom: 1rem;
}
</style>