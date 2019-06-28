export function solveQuEq(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }

  if (d == 0) {
    let x1 = -(b / (2 * a));
    return x1;
  }

  if (d < 0) {
    return "No roots";
  }
}

//  arithmetical progression

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

// geometrical progression

 export function geomPrBn(b1, q, n) {
  let Bn = b1 * Math.pow(q, n - 1);
  return Bn;
}

 export function geomPrSum(b1, q, n) {
let sum = (b1*(Math.pow(q, n) - 1))/(q-1);
return sum;
}

