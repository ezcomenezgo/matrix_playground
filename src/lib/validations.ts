function isFibonacciNum(target: number) {
  let n1 = 0
  let n2 = 1

  while ((n1 + n2) <= target) {
    if (n1 + n2 === target) return true

    const temp = n1 + n2
    n1 = n2
    n2 = temp
  }

  return false
}

function isTheSameArray(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

function isFibSeq(arr: number[]) {
  const fibSeq = [0, 1];
  const last = arr[arr.length - 1]

  let i = 2;
  while (fibSeq[fibSeq.length - 1] < last) {
    fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1]);
    i += 1;
  }

  const result = isTheSameArray(arr, fibSeq.slice(-5))

  return result
}

export { isFibonacciNum, isTheSameArray, isFibSeq }