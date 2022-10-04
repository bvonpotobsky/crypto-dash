export const textColorByNumber = (number: number | undefined): string => {
  if (number === undefined) return "";

  if (number > 0) return "text-green-500";
  if (number < 0) return "text-red-500";
  return "";
};
