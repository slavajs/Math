export function geomPrBn(b1, q, n) {
  let Bn = b1 * Math.pow(q, n - 1);
  return Bn;
}

 export function geomPrSum(b1, q, n) {
let sum = (b1*(Math.pow(q, n) - 1))/(q-1);
return sum;
}