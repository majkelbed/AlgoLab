<template>
  <div>
    <button v-on:click="handleClick()">quick Sort</button>
    <Canvas v-bind:dataset="this.dataset" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Canvas from "@/components/Canvas.vue";
import { sleep } from "@/functions/utils.ts";
import { bubbleSort, quickSort } from "@/functions/sortingAlgorythms.ts";

@Component({
  components: {
    Canvas
  }
})
export default class Home extends Vue {
  private dataset: Array<number> = [1, 5, 9, 14, 22, 3, 2, 1, 1, 6];

  randomizeDataset(): void {
    const newDataset = [];
    for (let index = 0; index < 40; index++) {
      newDataset.push(Math.random() * 50 + 1);
    }
    this.dataset = newDataset;
  }
  mounted() {
    this.randomizeDataset();
  }
  handleClick() {
    this.bubbleSort();
  }
  // @TODO: Find out way to retive render function from child component to call instead of spread operator hack for reference change
  async bubbleSort() {
    const changeDatasetReference = (newDataset: Array<number>) => {
      this.dataset = [...newDataset];
    };
    await quickSort(
      this.dataset,
      0,
      this.dataset.length,
      changeDatasetReference
    );
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