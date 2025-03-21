export const urlVideoFormatter = (url?: string) => {
  if (!url || typeof url !== "string") {
    return "";
  }

  const match = url.match(/embed\/([^?]+)/);
  return match ? match[1] : "";
};

export const formatDate = (dateISO: string): string => {
  const date = new Date(dateISO);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};
