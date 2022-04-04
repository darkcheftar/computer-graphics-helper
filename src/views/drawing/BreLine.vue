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
        <tbody v-for="([x, y], index) in data" :key="Math.random() * x * y">
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

function drawLine(x0, y0, x1, y1) {
    let { abs } = Math;
    if (abs(y1 - y0) < abs(x1 - x0)) {
        if (x0 > x1) {
            return plotLineLow(x1, y1, x0, y0);
        } else {
            return plotLineLow(x0, y0, x1, y1);
        }
    } else {
        if (y0 > y1) {
            return plotLineHigh(x1, y1, x0, y0);
        } else {
            return plotLineHigh(x0, y0, x1, y1);
        }
    }
}
function plotLineLow(x0, y0, x1, y1) {
    let a = []
    let dx = x1 - x0;
    let dy = y1 - y0;
    let yi = 1;
    if (dy < 0) {
        yi = -1;
        dy = -dy;
    }
    let p = 2 * dy - dx;
    let y = y0;
    let xi = x0 < x1 ? 1 : -1;
    for (let x = x0; x != x1; x += xi) {
        a.push([x,y])
        if (p > 0) {
            y = y + yi;
            p = p + 2 * (dy - dx);
        } else {
            p = p + 2 * dy;
        }
    }
    return a;
}
function plotLineHigh(x0, y0, x1, y1) {
    let a = []
    let dx = x1 - x0;
    let dy = y1 - y0;
    let xi = 1;
    if (dx < 0) {
        xi = -1;
        dx = -dx;
    }
    let p = 2 * dx - dy;
    let x = x0;
    let yi = y0 < y1 ? 1 : -1;
    for (let y = y0; y != y1; y += yi) {
        a.push([x,y])
        if (p > 0) {
            x = x + xi;
            p = p + 2 * (dx - dy);
        } else {
            p = p + 2 * dx;
        }
    }
    return a;
}

export default {
  name: "DDA",
  data() {
    return {
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
        let {x1,y1,x2,y2} = this
      return drawLine(x1,y1,x2,y2);
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
