
// currency formatter
export const toCurrency = (num) => {
  const f = new Intl.NumberFormat('en-us', {
    currency: "USD",
    style: "currency"
  });

  return f.format(num);
} 