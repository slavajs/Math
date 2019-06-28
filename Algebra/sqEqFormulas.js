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
    return "NaN";
  }
}