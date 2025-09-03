// Auto-wrap each letter
document.querySelectorAll(".MyName").forEach(el => {
    el.innerHTML = el.textContent
        .split("")
        .map(c => `<span>${c}</span>`)
        .join("");
});