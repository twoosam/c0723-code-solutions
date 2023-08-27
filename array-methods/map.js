const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObjects = prices.map((price, salePrice) => {
  salePrice = price / 2;
  return { price, salePrice };
});
console.log('Price objects:', priceObjects);

const formattedPrices = prices.map((price) => {
  return `$${price.toFixed(2)}`;
});
console.log('Formatted prices:', formattedPrices);
