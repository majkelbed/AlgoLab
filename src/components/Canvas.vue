<template>
  <div>
    <canvas width="500" height="500" ref="canvas" v-on:sortevent="handleSort"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { bubbleSort } from "@/functions/bubbleSort.ts";

@Component
export default class Canvas extends Vue {
  @Prop({ default: [] }) dataset!: Array<number>;
  // @Prop({ default: bubbleSort }) algorythm!: Function;
  private ctx: CanvasRenderingContext2D | null = null;
  private canvas: HTMLCanvasElement | null = null;

  @Watch("dataset")
  renderCanvas(dataset: Array<number>) {
    const { ctx, canvas } = this;
    if (ctx !== null && canvas !== null) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dataset.forEach((val, index) => {
        const width = 10;
        ctx.beginPath();
        ctx.strokeRect(2 * index * width, 0, width, val * 5);
      });
    }
  }
  handleSort(e: Event) {
    console.log(e, "sort handling");
  }
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.renderCanvas(this.dataset);
  }
}
</script>