<template>
  <div class="home" v-on:sortevent="handleSort">
    <button v-on:click="handleClick()">Sort</button>
    <Canvas v-bind:dataset="this.dataset" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Canvas from "@/components/Canvas.vue";
import { bubbleSort } from "@/functions/bubbleSort.ts";

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
  @Emit("sortevent")
  handleClick() {
    this.$emit("sortevent");
    console.log("Event sort");
    // bubbleSort(this.dataset);
  }
  handleSort(e: Event) {
    console.log(e, "sort handling");
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