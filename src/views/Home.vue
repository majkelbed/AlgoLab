<template>
  <div class="home">
    <button @click="handleClick()">Sort</button>
    <canvas width="500" height="500" ref="canvas"></canvas>
    {{dataset}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

type renderDatasetArgs = {
  ctx: CanvasRenderingContext2D;
  dataset: Array<number>;
};

@Component
export default class Home extends Vue {
  private ctx: CanvasRenderingContext2D | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private dataset: Array<number> = [];

  // get dataset() {
  //   return this._dataset;
  // }

  // set dataset(val: Array<number>) {
  //   this._dataset = val;
  // }

  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;

    this.dataset = [
      1,
      5,
      9,
      14,
      22,
      3,
      2,
      1,
      1,
      6,
      15,
      23,
      7,
      4,
      18,
      14,
      13,
      3
    ];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.renderDataset();
  }

  updated() {
    this.renderDataset();
  }

  async bubbleSort(arr: Array<number>) {
    const inputArr = arr;
    const len = inputArr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (inputArr[j] > inputArr[j + 1]) {
          const tmp = inputArr[j];
          inputArr[j] = inputArr[j + 1];
          inputArr[j + 1] = tmp;

          console.log(i, j);
          setTimeout(() => this.renderDataset(), 500);
          // await this.sleep(300);
        }
      }
    }
    return inputArr;
  }

  sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }

  randomizeDataset(): void {
    const newDataset = [];
    for (let index = 0; index < 25; index++) {
      newDataset.push(Math.random() * 15);
    }
    this.dataset = newDataset;
  }

  handleClick() {
    this.bubbleSort(this.dataset); //pass by value not reference hack
  }

  @Watch("dataset")
  renderDataset() {
    const { ctx, canvas } = this;
    const dataset = this.dataset;
    if (ctx !== null && canvas !== null) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dataset.forEach((val, index) => {
        const width = 10;
        ctx.beginPath();
        ctx.strokeRect(2 * index * width, 0, width, val * 5);
      });
    }
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