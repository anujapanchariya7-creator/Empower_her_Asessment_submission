function processProducts(products) {
  const productNames = products.map(product => product.name);

  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

console.log(processProducts(products));

