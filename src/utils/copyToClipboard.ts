export const copyToClipboard = async (str: string) => {
  try {
    await navigator.clipboard.writeText(str);
  } catch (err) {
    throw new Error("Failed to copy to clipboard");
  }
};
