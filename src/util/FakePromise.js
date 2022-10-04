import customers from "../data/customers";

export function getCustomers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customers);
    }, Math.random() * 100);
  });
}

export function getPrettyHeader(jsonData) {
  return Object.keys(jsonData).map((key) => {
    const temp = key.replace(/([A-Z])/g, " $1");
    return { prop: key, name: temp.charAt(0).toUpperCase() + temp.slice(1) };
  });
}
