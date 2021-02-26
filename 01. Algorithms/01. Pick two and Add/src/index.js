function solution(numbers) {
  // write the code.
  const sum = [];
  for (let i = 0; i + 1 < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(sum);

  const uniqueArr = [...set];
  const answer = uniqueArr.sort(function (a, b) {
    return a - b;
  });
  console.log(answer);

  return answer;
}

const numbers = [0, 10, 33, 17, 87, 39];
solution(numbers);

document.getElementById("process").innerText = `
  주어진 배열 : ${numbers}
`;
document.getElementById("solution").innerHTML = `
두 개의 수를 뽑아 더해서 만들 수 있는 모든 수 : ${solution(numbers)}
`;
