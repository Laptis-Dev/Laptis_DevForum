const cardsContainer = document.querySelector(".cards") as HTMLElement;
const containerWidth = cardsContainer.offsetWidth;
const containerHeight = cardsContainer.offsetHeight;

let parallaxEnabled = true;
let minScaleFactors: { [key: string]: number } = {};

function calculateMinScale(layer: HTMLElement) {
  const speed = parseFloat(layer.getAttribute("data-speed") || "0");
  const maxXOffset = (window.innerWidth * speed) / 2;
  const maxYOffset = (window.innerHeight * speed) / 2;

  const xOffsetRatio = maxXOffset / window.innerWidth;
  const yOffsetRatio = maxYOffset / window.innerHeight;

  const maxOffsetRatio = Math.max(xOffsetRatio, yOffsetRatio);

  return 1 + 2 * maxOffsetRatio;
}

function updateParallax(event: { clientX: number; clientY: number; }) {
  if (!parallaxEnabled) return;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  document.querySelectorAll(".background").forEach((layer) => {
    const speed = parseFloat(layer.getAttribute("data-speed") || "0");
    const moveX = (centerX - event.clientX) * speed;
    const moveY = (centerY - event.clientY) * speed;

    const minScale = minScaleFactors[layer.className] ?? 1.0;
    const safeScale = Math.max(minScale, 1.0);
    (layer as HTMLElement).style.transform = `translate(-50%, -50%) translate3d(${moveX}px, ${moveY}px, 0) scale(${safeScale})`;
  });
}

function resetParallax() {
  document.querySelectorAll(".background").forEach((layer) => {
    const minScale = minScaleFactors[layer.className] ?? 1.0;
    (layer as HTMLElement).style.transform = `translate(-50%, -50%) translate3d(0px, 0px, 0) scale(${minScale})`;
  });
}

function initScaleFactors() {
  document.querySelectorAll(".background").forEach((layer) => {
    minScaleFactors[layer.className] = calculateMinScale(layer as HTMLElement);
  });
}

function init() {
  initScaleFactors();
  resetParallax();
}

document.addEventListener("mousemove", updateParallax);
window.addEventListener("resize", init);
init();
