# [Polynomial Addition](https://oneonlee.github.io/Vanilla-JS/01.%20Algorithms/02.%20Polynomial%20Addition)

**p(x) = 4x<sup>4</sup>+3x<sup>2</sup>+3 와 q(x) = 3x<sup>3</sup>+4x<sup>2</sup>+2x+1 을 더하면, 
p(x) + q(x) = 4x<sup>4</sup>+3x<sup>3</sup>+7x<sup>2</sup>+2x+4 가 된다.**

## Step 1. 이러한 연산을 수행하는 일반적인 프로그램을 만들어 보자.

* 방법 1
  * k차 다항식의 계수를 1차원 배열에 저장하는 방법
  * ex> p = [3, 0, 3, 0, 4], q = [1, 2, 3, 4]
* 방법 2
  * k차 다항식의 계수와 차수를 2차원 배열로 저장하는 방법
  * ex> p = [[4, 4], [3, 2], [3, 0]], q = [[3, 3], [4, 2], [2, 1], [1, 0]]
* 방법 3
  * 방법 2를 Linked List 형식으로 저장하는 방법

```javascript
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
```

## Step2. 이러한 연산을 수행하는 일반적인 프로그램을 인스턴스와 클래스를 활용해서 만들어 보자.

```javascript
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

```
