<template>
  <section>
    <h1>Midpoint Circle</h1>
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
        /*int x = r, y = 0;
     
    // Printing the initial point on the axes
    // after translation
    cout << "(" << x + x_centre << ", " << y + y_centre << ") ";
     
    // When radius is zero only a single
    // point will be printed
    if (r > 0)
    {
        cout << "(" << x + x_centre << ", " << -y + y_centre << ") ";
        cout << "(" << y + x_centre << ", " << x + y_centre << ") ";
        cout << "(" << -y + x_centre << ", " << x + y_centre << ")\n";
    }
     
    // Initialising the value of P
    int P = 1 - r;
    while (x > y)
    {
        y++;
         
        // Mid-point is inside or on the perimeter
        if (P <= 0)
            P = P + 2*y + 1;
        // Mid-point is outside the perimeter
        else
        {
            x--;
            P = P + 2*y - 2*x + 1;
        }
         
        // All the perimeter points have already been printed
        if (x < y)
            break;
         
        // Printing the generated point and its reflection
        // in the other octants after translation
        cout << "(" << x + x_centre << ", " << y + y_centre << ") ";
        cout << "(" << -x + x_centre << ", " << y + y_centre << ") ";
        cout << "(" << x + x_centre << ", " << -y + y_centre << ") ";
        cout << "(" << -x + x_centre << ", " << -y + y_centre << ")\n";
         
        // If the generated point is on the line x = y then
        // the perimeter points have already been printed
        if (x != y)
        {
            cout << "(" << y + x_centre << ", " << x + y_centre << ") ";
            cout << "(" << -y + x_centre << ", " << x + y_centre << ") ";
            cout << "(" << y + x_centre << ", " << -x + y_centre << ") ";
            cout << "(" << -y + x_centre << ", " << -x + y_centre << ")\n";
        }
    }
}
  */
    let {xc, yc, r} = this;
    let y = r, x = 0;
    let P = 1 - r;
      let a = [];
      while (y > x) {
        x++;
        if (P <= 0){
            P = P + 2*x + 1;}
        else
        {
            y--;
            P = P + 2*x - 2*y + 1;
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
