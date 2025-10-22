import { createSignal, createMemo } from "solid-js";
import {
  sanitizeInput,
  parseSearchQuery,
  makeLinkPredicate,
  filterLinks,
} from "../utils/js/filterHelper";

export const useFilter = (links) => {
  const [searchValue, setSearchValue] = createSignal("");

  const filteredLinks = createMemo(() => {
    const parsed = parseSearchQuery(searchValue());
    if (parsed.type === "empty") return links();
    const predicate = makeLinkPredicate(parsed);
    return filterLinks(links(), predicate);
  });

  return { filteredLinks, searchValue, setSearchValue };
};
