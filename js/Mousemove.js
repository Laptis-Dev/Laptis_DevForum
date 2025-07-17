document.addEventListener('mousemove', BackGroundMove);
function BackGroundMove(every) {
    document.querySelectorAll('.background').forEach((js1) => {
        const speed = js1.getAttribute('data-speed');
        const x = (window.innerWidth - every.pageX * speed) / 100;
        const y = (window.innerHeight - every.pageY * speed) / 100;
        js1.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}