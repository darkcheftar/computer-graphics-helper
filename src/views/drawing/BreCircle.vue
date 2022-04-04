<template>
  <section>
    <h1>Digital Differential Algorithm</h1>
    <div id="inputs">
      <label for="xc">xc</label
      ><input v-model="xc" id="xc" name="xc" type="number" />
      <label for="yc">yc</label
      ><input v-model="yc" id="yc" name="yc" type="number" />
      <label for="r">r</label
      ><input v-model="r" id="r" name="r" type="number" />
    </div>
    <div id="outputs">
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
      xc: 0,
      yc: 0,
      r: 10,
    };
  },
  computed: {
    data() {
    let {xc, yc, r} = this;
    let x = 0, y =r;
    let d = 3 - 2 *r;
      let a = [];
      while (y >= x) {
          x++;
          if (d > 0){
            y--;
            d = d + 4 * (x - y) + 10;
        }
        else{
            d = d + 4 * x + 6;
            }
        a.push([xc+x, yc+y]);
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
