document.addEventListener('mousemove', BackGroundMove);
function BackGroundMove(every) {
    document.querySelectorAll('.background').forEach((js1) => {
        const speed = parseFloat(js1.getAttribute('data-speed'));
        const bg_size = document.querySelector('.background');
        const x_max = (bg_size.clientWidth);
        const y_max = (bg_size.scrollHeight);
        // const vertices = {
        //     topLeft: { x: 0, y: 0 },
        //     topright: { x: x_max, y: y_max },
        //     bottomLeft: { x: 0, y: -y_max },
        //     bottomRight: { x: x_max, y: -y_max }
        // }
        // const x = Math.max(Math.min(window.innerWidth - every.pageX * speed) / 100);
        // const y = Math.max(Math.min(window.innerHeight - every.pageY * speed) / 100);
        const x = Math.max(Math.min(x_max - every.pageX * speed) / 100);
        const y = Math.max(Math.min(y_max - every.pageY * speed) / 100);
        js1.style.transform = `translateX(${x}px) translateY(${y}px)`;
        js1.style.width = `width(${x_max}) height(${y_max})`;
    })
}