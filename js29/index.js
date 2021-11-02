class Product {
  constructor(params = {}) {
    Object.assign(
      this,
      {
        productName: null,
        amount: 1,
        trade: false,
      },
      { ...params }
    );
  }

  static sort(a, b) {
    return (
      (a.trade - b.trade) * 10 + a.productName.localeCompare(b.productName)
    );
  }
}
Product.prototype.toString = function () {
  return `${this.productName} (x${this.amount}), ${
    this.trade ? "куплено. " : "не куплено. "
  }`;
};

const shopList = [
  { productName: "Полтавська шкварка", amount: 2 },
  { productName: "Апельсин", amount: 5, trade: true },
  { productName: "Мандарин", trade: true },
  { productName: "Горілка", amount: 10 },
].map((productDef) => new Product(productDef));

const addToShopList = (productDef) => {
  const prod = shopList.find(
    (prod) => prod.productName === productDef.productName
  );
  if (!prod) return shopList.push(new Product(productDef));
  prod.amount += productDef.amount;
};
document.write("<h2>Товари:</h2>");
const printShopList = () =>
  shopList.forEach((prod, i) => document.write(`${i + 1}. ${prod}`));

shopList.sort(Product.sort);
printShopList();
document.write("<h2>Додані товари:</h2>");

addToShopList({ productName: "Шоколад", amount: 3 });
addToShopList({ productName: "Морозиво", amount: 2 });
shopList.sort(Product.sort);
printShopList();
