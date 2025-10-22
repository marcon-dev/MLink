export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const extractNameFromUrl = (url) => {
  try {
    const hostname = new URL(url).hostname
      .replace(/^(www\.)|(\.(com|org|net|br))$/g, "")
      .split(".")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");
    return hostname || "Untitled";
  } catch {
    return "Untitled";
  }
};
