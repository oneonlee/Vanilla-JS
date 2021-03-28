// 방법 1
class PolyCal {
  constructor(p, q) {
    // code
    this.p = p;
    this.q = q;
  }
  combine() {
    // code
    const checkLength = this.p.length <= this.q.length;
    const minPoly = checkLength ? this.p : this.q;
    const result = checkLength ? this.q : this.p;
    minPoly.forEach((coefMinPoly, idx) => (result[idx] += coefMinPoly));
    return result;
  }
}
const polyInstance = new PolyCal([3, 0, 3, 0, 4], [1, 2, 4, 3]);
const result = polyInstance.combine();
console.log(result);
