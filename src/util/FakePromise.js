import customers from "../data/customers";
import orders from "../data/orders";

export function getCustomers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customers);
    }, Math.random() * 100);
  });
}

export function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, Math.random() * 100);
  });
}

export function getPrettyHeader(jsonData) {
  return Object.keys(jsonData).map((key) => {
    const temp = key.replace(/([A-Z])/g, " $1");
    return { prop: key, name: temp.charAt(0).toUpperCase() + temp.slice(1) };
  });
}
