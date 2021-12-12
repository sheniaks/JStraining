function bank(amount, percentage, years) {
  for (let i = 1; i <= years; i++) {
    amount += amount * (percentage / 100);
  }
  return amount;
}
console.log(bank(1000, 50, 2));
