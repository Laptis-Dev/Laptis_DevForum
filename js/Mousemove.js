document.addEventListener('mousemove', BackGroundMove);
function BackGroundMove(every) {
    document.querySelectorAll('.background').forEach((js1) => {
        const speed = parseFloat(js1.getAttribute('data-speed'));
        const maxOffset = 50;
        const x = Math.max(Math.min((window.innerWidth - every.pageX * speed) / 100, maxOffset), -maxOffset);
        const y = Math.max(Math.min((window.innerHeight - every.pageY * speed) / 100, maxOffset), -maxOffset);
        js1.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}