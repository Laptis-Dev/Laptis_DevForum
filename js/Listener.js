MOUSE = document.addEventListener('mousemove', BackGroundMove);
KEYBOARD = document.addEventListener("keydown", KeyListener);

function KeyListener(esc) {
    if (esc.key === "Escape") {
    console.log("hello,world");
    }
}

function BackGroundMove(every) {
    document.querySelectorAll('.background').forEach((bg) => {
        const speed = parseFloat(bg.getAttribute('data-speed'));
        const x = Math.max(Math.min(bg.innerWidth - every.pageX * speed) / 120);
        const y = Math.max(Math.min(bg.innerHeight - every.pageY * speed) / 120);
        bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}
