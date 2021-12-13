function fib1(num) {
  const res = [0, 1];
  for (let i = 2; i <= num; i++) {
    const prevNum1 = res[i - 1];
    const prevNum2 = res[i - 2];
    res.push(prevNum1 + prevNum2);
  }
  console.log(res[num]);
}

fib1//#region (15);
