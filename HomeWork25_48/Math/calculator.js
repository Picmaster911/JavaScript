import add from './match_add.js';
import sub from './match_sub.js';
import div from './match_div.js';
import mul from './match_mul.js';

  class calculator {
    constructor(add,sub,div,mul) {
        this.add = add;
        this.sub = sub;
        this.div = div;
        this.mul = mul;
    }

}
const newCalc =  new calculator (add,sub,div,mul);
export {newCalc};
