<template>
  <div class="home">
    <button v-on:click="randomizeDataset">Randomize</button>
    <canvas width="500" height="500" ref="canvas"></canvas>
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
  private dataset!: Array<number>;

  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;

    this.dataset = [1, 5, 9, 14, 22, 3, 2, 1, 1, 6];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.renderDataset();
  }

  updated() {
    this.renderDataset();
  }

  public randomizeDataset(): void {
    const newDataset = [];
    for (let index = 0; index < 25; index++) {
      newDataset.push(Math.random() * 15);
    }
    this.dataset = newDataset;
    this.renderDataset();
  }

  @Watch("dataset")
  public renderDataset() {
    const { ctx, dataset, canvas } = this;
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