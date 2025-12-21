export const total = (arr) => {
  const totalValue = arr.reduce((acc, item) => {
    const stock = 20;
    return acc + item.price * stock;
  }, 0);

  return totalValue;
};

export const categoryCount = (arr) => {
  const categoryCounts = arr.reduce((acc, item) => {
    const category = item.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return categoryCounts;
};
