const transitionDuration = 520;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const directionKey = "page-transition-direction";
const page = document.querySelector(".page-sheet");
const currentUrl = new URL(window.location.href);
const savedDirection = currentUrl.searchParams.get(directionKey);

if ((savedDirection === "forward" || savedDirection === "backward") && page && !reduceMotion.matches) {
  currentUrl.searchParams.delete(directionKey);
  window.history.replaceState(null, "", currentUrl.href);
  page.dataset.direction = savedDirection;
  page.classList.add("is-entering");

  page.addEventListener("animationend", () => {
    page.classList.remove("is-entering");
    delete page.dataset.direction;
  }, { once: true });
}

const pageLinks = [...document.querySelectorAll(".main-nav a:not(.nav-download)")];

function getPageIndex(pathname) {
  return pageLinks.findIndex((link) => new URL(link.href, window.location.href).pathname === pathname);
}

document.addEventListener("click", (event) => {
  const link = event.target instanceof Element ? event.target.closest("a") : null;

  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (link.target && link.target !== "_self") ||
    link.hasAttribute("download") ||
    reduceMotion.matches
  ) {
    return;
  }

  const destination = new URL(link.href, window.location.href);

  if (
    destination.origin !== window.location.origin ||
    (destination.pathname === window.location.pathname && !destination.search)
  ) {
    return;
  }

  const currentPageIndex = getPageIndex(window.location.pathname);
  const destinationPageIndex = getPageIndex(destination.pathname);
  const direction =
    currentPageIndex >= 0 && destinationPageIndex >= 0 && destinationPageIndex < currentPageIndex
      ? "backward"
      : "forward";

  event.preventDefault();

  if (!page) {
    window.location.assign(destination.href);
    return;
  }

  page.dataset.direction = direction;
  page.classList.add("is-leaving");
  destination.searchParams.set(directionKey, direction);

  window.setTimeout(() => {
    window.location.assign(destination.href);
  }, transitionDuration);
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    page?.classList.remove("is-entering", "is-leaving");
    if (page) {
      delete page.dataset.direction;
    }
  }
});
