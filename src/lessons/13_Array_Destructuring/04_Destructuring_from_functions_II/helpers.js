export default function getPrice() {
  const price = 10;

  function describePrice() {
    return `The price is ${price} euros`;
  }

  // TODO: return both the price and describePrice
  return [price, describePrice];
}
