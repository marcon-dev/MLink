import { isValidUrl } from "./urlHelper";

export const validateImportArray = (data) => {
  if (!Array.isArray(data))
    throw new Error("The file must contain an array of objects.");

  const expected = ["id", "name", "tag", "link", "description"]
    .sort()
    .join(",");

  for (const item of data) {
    if (typeof item !== "object" || item === null)
      throw new Error("Invalid item in array.");

    if (Object.keys(item).sort().join(",") !== expected)
      throw new Error("Invalid structure: extra or missing fields.");

    if (!isValidUrl(item.link)) throw new Error("Invalid link found.");
  }
  return true;
};
