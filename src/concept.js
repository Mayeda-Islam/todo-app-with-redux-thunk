// const getUser = (user) => {
//   if (user) {
//     if (user.gender === "female") {
//       return "User is female";
//     } else if (user.gender === "male") {
//       return "user us male";
//     }
//   } else return "Unknown user";
// };

// const getUser2 = (user) => {
//   if (!user) return "user not found";
//   if (user.gender === "female") return "female";
//   if (user.gender === "male") return "male";//run korbe na cz agey condition match kore geche
// };

// const user = {
//   gender: "female",
// };
// getUser(user);
// getUser2(user);

const products = [
  {
    name: "Product Name 1",
    price: 19.99,
    stock: 100,
  },
  {
    name: "Product Name 2",
    price: 24.99,
    stock: 50,
  },
  {
    name: "Product Name 3",
    price: 14.99,
    stock: 75,
  },
];

let sum = 0;
const getSumOfPrice = (products) => {
  return products.forEach((product) => (sum += product.price));
};
console.log(getSumOfPrice(products));

export const getColumnTotal = (tableData, columnKey) => {
  let total = 0;
  if (Array.isArray(tableData)) {
    tableData.forEach((row) => {
      total += row?.[columnKey] || 0;
    });
  }
  return total;
};
getColumnTotal(products);
