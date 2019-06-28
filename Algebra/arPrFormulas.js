export function arPrAn(a1, d, n) {
  let An = a1 + d * (n - 1);
  return An;
}

 export function arPrSumFromAn(a1, an, n) {
  let sum = ((a1 + an) / 2) * n;
  return sum;
}

export function arPrSumFromD(a1, d, n) {
  let sum = ((2 * a1 + d(n - 1)) / 2) * n;
  return sum;
}