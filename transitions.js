const transitionDuration = 420;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const directionKey = "page-transition-direction";
const savedDirection = sessionStorage.getItem(directionKey);

document.documentElement.dataset.transitionDirection =
  savedDirection === "backward" ? "backward" : "forward";
sessionStorage.removeItem(directionKey);

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

  if (document.querySelector(".page-transition")) {
    return;
  }

  sessionStorage.setItem(directionKey, direction);

  const transition = document.createElement("div");
  transition.className = "page-transition";
  transition.dataset.direction = direction;
  transition.setAttribute("aria-hidden", "true");
  document.body.append(transition);

  window.setTimeout(() => {
    window.location.assign(destination.href);
  }, transitionDuration);
});

window.addEventListener("pageshow", () => {
  document.querySelector(".page-transition")?.remove();
});
