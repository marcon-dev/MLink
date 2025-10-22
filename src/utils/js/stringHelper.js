export const sanitizeInput = (str) => String(str || "").replace(/<[^>]*>/g, "");
export const splitByComma = (str) =>
  sanitizeInput(str)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
