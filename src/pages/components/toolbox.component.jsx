import { For } from "solid-js";
import { useLinks } from "../../hooks/useLinks";
import { useFilter } from "../../hooks/useFilter";

const Toolbox = (props) => {
  const {
    links,
    setLinks,
    inputValue,
    setInputValue,
    addLink,
    exportLinks,
    importLinks,
  } = useLinks();

  const { filteredLinks, searchValue, setSearchValue } = useFilter(links);

  const handleImportChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      importLinks(file);
      e.target.value = "";
    }
  };

  const handleItemClick = (link) => {
    if (confirm(`Do you want to open the link: ${link.link}?`)) {
      window.open(link.link, "_blank");
    } else {
      if (confirm(`Do you want to delete the link: ${link.name}?`)) {
        setLinks(links().filter((l) => l.id !== link.id));
      }
    }
  };

  return (
    <>
      <div class={props.style.mlinkToolbox}>
        <div class={props.style.mlinkToolboxEssentials}>
          <label aria-label="campo de entrada para o link que desejava salvar">
            <i class="fa-solid fa-link"></i>
            <input
              class={props.style.mlinkToolboxInput}
              type="text"
              name="contentLink"
              id="contentLink"
              placeholder="Name, Tag (optional), Link, Description (optional)..."
              value={inputValue()}
              onInput={(e) => setInputValue(e.currentTarget.value)}
              onKeyPress={(e) => e.key === "Enter" && addLink()}
            />
          </label>
          <div class={props.style.mlinkToolboxExtra}>
            <label
              id="mlinkExport"
              classList={{ [props.style.disabled]: links().length === 0 }}
              onClick={() => {
                if (links().length > 0) exportLinks();
              }}
            >
              Export
            </label>
            <label>
              <input
                type="file"
                id="mlinkImport"
                accept="application/json"
                onChange={handleImportChange}
              />
              Import
            </label>
          </div>
        </div>
        <div class={props.style.mlinkToolboxSearch}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            id="mlinkSearch"
            class={props.style.mlinkSearchBookmarker}
            type="text"
            placeholder="Search by bookmarker..."
            value={searchValue()}
            onInput={(e) => setSearchValue(e.currentTarget.value)}
          />
        </div>
      </div>

      <div class={props.style.mlinkList}>
        <For each={filteredLinks()}>
          {(link) => (
            <div
              class={props.style.mlinkListItem}
              onClick={() => handleItemClick(link)}
            >
              <h3>
                {link.name}
                {link.tag && `, ${link.tag}`}
              </h3>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {link.link}
              </a>
              {link.description && <p>{link.description}</p>}
            </div>
          )}
        </For>
      </div>
    </>
  );
};

export default Toolbox;
