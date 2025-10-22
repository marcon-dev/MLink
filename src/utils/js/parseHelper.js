import { splitByComma } from "./stringHelper";
import { isValidUrl, extractNameFromUrl } from "./urlHelper";

export const findSingleUrl = (parts) => {
  let urlIndex = -1,
    urlCount = 0,
    link = "";
  for (let i = 0; i < parts.length; i++) {
    if (isValidUrl(parts[i])) {
      urlCount++;
      if (urlCount > 1) return { urlCount };
      urlIndex = i;
      link = parts[i];
    }
  }
  return { urlIndex, urlCount, link };
};

export const buildLinkObject = ({ parts, urlIndex, link }) => {
  let name = "",
    tag = "",
    description = "";
  const before = parts.slice(0, urlIndex);
  if (before.length === 0) name = extractNameFromUrl(link);
  if (before.length === 1) name = before[0];
  if (before.length === 2) [name, tag] = before;
  if (before.length > 2)
    throw new Error(
      "Too many fields before the link. Use at most: Name, Tag (optional).",
    );
  const after = parts.slice(urlIndex + 1);
  if (after.length > 0) description = after.join(", ").trim();
  return { id: Date.now(), name, tag, link, description };
};

export const parseInputIntoParts = (input) => splitByComma(input);
