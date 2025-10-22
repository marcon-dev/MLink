export const sanitizeInput = (str) =>
  str
    .replace(/<[^>]*>/g, "")
    .trim()
    .toLowerCase();

export const parseSearchQuery = (raw) => {
  const s = sanitizeInput(raw);
  if (!s) return { type: "empty", query: "" };
  if (s.startsWith("tag:")) return { type: "tag", query: s.slice(4).trim() };
  return { type: "text", query: s };
};

export const makeLinkPredicate = ({ type, query }) => {
  if (type === "empty") return () => true;
  if (type === "tag") {
    return (link) => link.tag && link.tag.toLowerCase().includes(query);
  }
  return (link) => link.name && link.name.toLowerCase().includes(query);
};

export const filterLinks = (linksArray, predicate) =>
  linksArray.filter(predicate);
