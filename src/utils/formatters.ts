export const urlVideoFormatter = (url: string) => {
  const match = url.match(/embed\/([^?]+)/);
  return match ? match[1] : "";
};
