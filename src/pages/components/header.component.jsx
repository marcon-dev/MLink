import { A } from "@solidjs/router";

const title = `{ MLink }`;

const Header = (props) => {
  return (
    <header class={props.style.mlinkHeader}>
      <h3>
        <A href="/" class={props.style.mlinkLogotype}>
          {title}
        </A>
      </h3>
      <nav class={props.style.mlinkNavbar}>
        <li class={props.style.mlinkNavItem}>
          <A href="/works">How does it work?</A>
        </li>
      </nav>
      <span class={props.style.mlinkPreviousAbout}>
        Welcome to Mlink! This is a minimalistic open-source and viable product,
        a lightweight and straightforward link or bookmark manager (call it what
        you will); no registration, no account, no storage on external servers,
        and no AI (thank goodness)
      </span>
    </header>
  );
};

export default Header;
