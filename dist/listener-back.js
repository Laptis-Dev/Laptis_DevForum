"use strict";
const KEYBOARD = document.addEventListener("keyup", KeyListener);
function KeyListener(esc) {
    if (esc.key === "Escape") {
        const confirmBack = confirm("要返回上一页吗?");
        if (confirmBack) {
            history.back();
        }
    }
}
