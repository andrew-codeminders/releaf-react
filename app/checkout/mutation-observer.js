export function watchForContentAndRender(renderCallback) {
  const observer = new MutationObserver((mutations, obs) => {
    if (shouldRenderComponent()) {
      renderCallback();
      obs.disconnect(); // stop observing once condition is met
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}


export function shouldRenderComponent() {
  return true;
  const targetElement = document.querySelector('.some-class'); // or any condition
  return !!targetElement;
}