<template>
  <div class="home">
    <button v-on:click="randomizeDataset()">Randomize</button>
    <Canvas v-bind:dataset="this.dataset" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Canvas from "@/components/Canvas.vue";

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