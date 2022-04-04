<template>
  <section>
    <h1>Digital Differential Algorithm</h1>
    <div id="inputs">
      <label for="x1">x1</label
      ><input v-model="x1" id="x1" name="x1" type="number" />
      <label for="y1">y1</label
      ><input v-model="y1" id="y1" name="y1" type="number" />
      <label for="x2">x2</label
      ><input v-model="x2" id="x2" name="x2" type="number" />
      <label for="y2">y2</label
      ><input v-model="y2" id="y2" name="y2" type="number" />
    </div>
    <div id="outputs">
      <label for="dx">dx:</label><span>{{ dx }}</span>
      <label for="dy">dy:</label><span>{{ dy }}</span> <label for="m">m:</label
      ><span>{{ m }}</span>
      <table>
        <thead>
          <th>sno</th>
          <th>x</th>
          <th>y</th>
        </thead>
        <tbody v-for="([x, y], index) in data" :key="x * y">
          <tr>
            <td>{{ index }}</td>
            <td>{{ Math.floor(x) }}</td>
            <td>{{ Math.floor(y) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>


export default {
  name: "DDA",
  data() {
    return {
      message: "Hello Vue!",
      x1: 0,
      y1: 0,
      x2: 10,
      y2: 11,
    };
  },
  computed: {
    dx() {
      return this.x2 - this.x1;
    },
    dy() {
      return this.y2 - this.y1;
    },
    m() {
      return this.dy / this.dx;
    },
    data() {
      let { abs } = Math;
      console.log(this.dx);
      let a = [];
      let { dx, dy, x1, y1 } = this;
        let step,x,y,i;
      if (abs(dx) >= abs(dy)) step = abs(dx);
      else step = abs(dy);
      dx = dx / step;
      dy = dy / step;
      x = x1;
      y = y1;
      i = 1;
      while (i <= step) {
        a.push([x, y]);
        x = x + dx;
        y = y + dy;
        i = i + 1;
      }
      return a;
    },
  },
};
</script>
<style lang="stylus" scoped>
section
    background black
    color white
    display grid
    justify-items center
    align-items center
    height 100%
    table,tr, td,th
        border 1px solid white
    table
        width 100%
        text-align center

    #inputs
        display grid
        grid-template-columns 1fr 1fr
    #outputs
        display grid
        grid-template-columns 1fr 1fr
        label
            text-align right
        table
            grid-column span 2
</style>
