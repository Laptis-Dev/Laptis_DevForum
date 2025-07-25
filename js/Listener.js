//定义变量
KEYBOARD = document.addEventListener("keydown", KeyListener);

//计算卡片容器尺寸
const cardsContainer = document.querySelector(".cards");
const containerWidth = cardsContainer.offsetWidth;
const containerHeight = cardsContainer.offsetHeight;

//视差开关
let parallaxEnabled = true;
let minScaleFactors = {};

//监听ESCAPE键
function KeyListener(esc) {
  if (esc.key === "Escape") {
    const confirmBack = confirm("要返回上一页吗?");
    if (confirmBack) {
      history.back();
    }
  }
}

//计算每个背景图层所需的最小缩放倍数
function calculateMinScale(layer) {
  const speed = parseFloat(layer.getAttribute("data-speed"));
  const maxXOffset = (window.innerWidth * speed) / 2;
  const maxYOffset = (window.innerHeight * speed) / 2;

  const xOffsetRatio = maxXOffset / window.innerWidth;
  const yOffsetRatio = maxYOffset / window.innerHeight;

  const maxOffsetRatio = Math.max(xOffsetRatio, yOffsetRatio);

  return 1 + 2 * maxOffsetRatio;
}

//计算所有背景层的位移量
function updateParallax(event) {
  if (!parallaxEnabled) return;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  document.querySelectorAll(".background").forEach((layer) => {
    const speed = parseFloat(layer.getAttribute("data-speed"));
    const moveX = (centerX - event.clientX) * speed;
    const moveY = (centerY - event.clientY) * speed;

    const minScale = minScaleFactors[layer.className];
    const safeScale = Math.max(minScale, 1.0);
    layer.style.transform = `translate(-50%, -50%) translate3d(${moveX}px, ${moveY}px, 0) scale(${safeScale})`;
  });
}

//重置视差效果
function resetParallax() {
  document.querySelectorAll(".background").forEach((layer) => {
    const minScale = minScaleFactors[layer.className];
    layer.style.transform = `translate(-50%, -50%) translate3d(0px, 0px, 0) scale(${minScale})`;
  });
}

//初始化背景图层的缩放倍数
function initScaleFactors() {
  document.querySelectorAll(".background").forEach((layer) => {
    minScaleFactors[layer.className] = calculateMinScale(layer);
  });
}

//初始化函数
function init() {
  initScaleFactors();
  resetParallax();
}

//监听鼠标移动
document.addEventListener("mousemove", updateParallax);
window.addEventListener("resize", init);
init();
