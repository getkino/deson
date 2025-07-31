const humanizeRuntime = (amount: number) => {
  if (!amount) return "Unknown";

  const hours = Math.floor(amount / 60);
  const minutes = amount % 60;

  return `${hours}h ${minutes}m`;
};

export default humanizeRuntime;
