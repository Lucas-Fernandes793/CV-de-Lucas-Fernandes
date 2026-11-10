const transitionDuration = 420;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

  event.preventDefault();

  if (document.querySelector(".page-transition")) {
    return;
  }

  const transition = document.createElement("div");
  transition.className = "page-transition";
  transition.setAttribute("aria-hidden", "true");
  document.body.append(transition);

  window.setTimeout(() => {
    window.location.assign(destination.href);
  }, transitionDuration);
});

window.addEventListener("pageshow", () => {
  document.querySelector(".page-transition")?.remove();
});
