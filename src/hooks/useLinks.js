import { createSignal, onMount, createEffect } from "solid-js";

import { sanitizeInput, splitByComma } from "../utils/js/stringHelper";
import { isValidUrl, extractNameFromUrl } from "../utils/js/urlHelper";
import { loadLinks, saveLinks } from "../utils/js/storageHelper";
import { exportJson, readJsonFile } from "../utils/js/fileHelper";
import {
  findSingleUrl,
  buildLinkObject,
  parseInputIntoParts,
} from "../utils/js/parseHelper";
import { validateImportArray } from "../utils/js/validateHelper";

const STORAGE_KEY = "mlink-links";

export const useLinks = () => {
  const [links, setLinks] = createSignal([]);
  const [inputValue, setInputValue] = createSignal("");

  onMount(() => {
    setLinks(loadLinks(STORAGE_KEY));
  });

  createEffect(() => {
    saveLinks(STORAGE_KEY, links());
  });

  const addLink = () => {
    const sanitized = sanitizeInput(inputValue()).trim();
    if (!sanitized) return;

    const parts = parseInputIntoParts(sanitized);
    if (parts.length === 0) return;

    const { urlIndex, urlCount, link } = findSingleUrl(parts);

    if (urlCount === 0) {
      alert("No valid links found.");
      return;
    }

    if (urlCount > 1) {
      alert(
        "More than one link detected. Please provide exactly one valid link.",
      );
      return;
    }

    try {
      const newLink = buildLinkObject({
        parts,
        urlIndex,
        link,
        extractNameFromUrl,
        sanitizeInput,
      });
      setLinks([newLink, ...links()]);
      setInputValue("");
    } catch (err) {
      alert(err.message);
    }
  };

  const exportLinks = () => {
    if (links().length === 0) return;
    exportJson("mlink-links.json", links());
  };

  const importLinks = (file) => {
    readJsonFile(file)
      .then((data) => {
        validateImportArray(data);
        if (
          links().length > 0 &&
          !confirm(
            "This will replace the current links. Do you want to continue?",
          )
        ) {
          throw new Error("Import cancelled");
        }
        setLinks(data);
        alert("Import successful!");
      })
      .catch((err) => {
        if (err.message !== "Import cancelled")
          alert(`Import error: ${err.message}`);
      });
  };

  return {
    links,
    setLinks,
    inputValue,
    setInputValue,
    addLink,
    exportLinks,
    importLinks,
  };
};
