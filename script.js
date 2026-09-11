const lines = [
  "whoami",
  "aspiring data analyst / developer",
  "status: open to opportunities",
];

const el = document.getElementById("typed");
let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function tick() {
  const current = lines[lineIndex];

  if (!deleting) {
    charIndex++;
    el.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(tick, 1400);
      return;
    }
  } else {
    charIndex--;
    el.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }

  setTimeout(tick, deleting ? 28 : 55);
}

if (el) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = lines[0];
  } else {
    tick();
  }
}
