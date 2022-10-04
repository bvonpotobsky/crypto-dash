export const marketCapToBillons = (marketCap: number | undefined): string => {
  if (!marketCap) return "N/A";

  const marketCapInBillions = marketCap / 1e9; // 1e9 is 1 billion

  if (marketCapInBillions > 100) {
    return `$${marketCapInBillions.toFixed(0)}B`;
  }

  return `$${marketCapInBillions.toFixed(2)}B`;
  // There is probably a better way to do this. I would like to learn it at Exactly ;)
};

export const formatPrice = (price: number | undefined): string => {
  if (!price) return "N/A";

  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatPercent = (percent: number | undefined): string => {
  if (!percent) return "N/A";

  return `${percent.toFixed(2)}%`;
};

export const formatPriceChart = (price: number | undefined): string => {
  if (!price) return "0";

  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
};
