export const loadLinks = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveLinks = (key, links) => {
  try {
    localStorage.setItem(key, JSON.stringify(links));
  } catch {}
};
