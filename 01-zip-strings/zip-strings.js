function zipStrings(strA, strB) {
  let A = strA.split("");
  let B = strB.split("");
  let merged = [];
  const lang = Math.max(A.length, B.length);

  for (let i = 0; i < lang; i++) {
    if (i < A.length) {
      merged.push(A[i]);
    }
    if (i < B.length) {
      merged.push(B[i]);
    }
  }
  let result = merged.join("");
  return result;
}
