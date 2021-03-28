// 방법 1
const polyObj = {
  p: [],
  q: [],
  combine: (poly1, poly2) => {
    const checkLength = poly1.length <= poly2.length;
    const minPoly = checkLength ? poly1 : poly2;
    const result = checkLength ? poly2 : poly1;
    minPoly.forEach((coefMinPoly, idx) => (result[idx] += coefMinPoly));
    return result;
  }
};

polyObj.p = [3, 0, 3, 0, 4];
polyObj.q = [1, 2, 4, 3];

const result = polyObj.combine(polyObj.p, polyObj.q);

console.log(result);
