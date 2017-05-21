function equals(A, B) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      return false;
    }
  }
  return true;
}

const A = [1, 5, 3, 3, 8];
const B = A.slice().sort();
console.log('A = [' + A + ']');
for (let i = 0; i < A.length; i++) {
  for (let j = i + 1; j < A.length; j++) {
    console.log(A[i] + '->' + A[j]);
    if (A[i] > A[j]) {
      let C = A.slice();
      let v = C[i];
      C[i] = C[j];
      C[j] = v;
      console.log(C);
      if (equals(C, B)) {
        console.log('Solution found swapping A[' + i + '] and A[' + j + ']');
      }
    }
  }
}
