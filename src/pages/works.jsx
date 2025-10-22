import homeStyles from "./assets/modules/home.module.css";
import workStyles from "./assets/modules/works.module.css";
import Header from "./components/header.component";

const Works = (props) => {
  return (
    <div class={homeStyles.mlink}>
      <Header style={homeStyles} />
      <div class={workStyles.mlinkContentWork}>
        <section class={workStyles.mlinkContentSectionWork}>
          <h2 class={workStyles.mlinkContentSectionTitle}>Saving Links</h2>
          <p class={workStyles.mlinkContentSectionParagraph}>
            Enter details in the top input field. Follow this format: "Name, Tag
            (optional), Link, Description (optional)". Try this example:
            "Google, Search, https://google.com, My go-to search engine". Or
            enter just a URL like "https://example.com". Mlink will extract a
            name from the URL. Press 'Enter' to add it.
          </p>
        </section>
        <section class={workStyles.mlinkContentSectionWork}>
          <h2 class={workStyles.mlinkContentSectionTitle}>
            Searching for Links
          </h2>
          <p class={workStyles.mlinkContentSectionParagraph}>
            Use the search bar to find links quickly. Type a name like "Google"
            to filter by names. Matches are partial and ignore case. For tags,
            start with "tag:" like "tag: search". This shows all matching tags,
            partial and case-insensitive. Clear the search to view all links.
          </p>
        </section>
        <section class={workStyles.mlinkContentSectionWork}>
          <h2 class={workStyles.mlinkContentSectionTitle}>Deleting Links</h2>
          <p class={workStyles.mlinkContentSectionParagraph}>
            Click on a saved link to start the action. A confirmation window
            will appear asking if you want to open the link. Press "OK" to open
            the site in a new tab. Press "Cancel" to continue to the next step.
            A new window will ask if you want to delete the link. Press "OK" to
            remove the link from the list. Press "Cancel" to end the process
            with no changes. Nothing is deleted until you confirm. All actions
            happen locally and without reloading the page.
          </p>
        </section>
        <section class={workStyles.mlinkContentSectionWork}>
          <h2 class={workStyles.mlinkContentSectionTitle}>
            Exporting and Importing Links
          </h2>
          <p class={workStyles.mlinkContentSectionParagraph}>
            Click "Export" to download your links as "mlink-links.json". This
            works only if you have saved links. For import, click "Import" and
            select a JSON file. Confirm if you have existing links to avoid
            overwriting. Mlink verifies the file structure first. All actions
            happen locally.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Works;
