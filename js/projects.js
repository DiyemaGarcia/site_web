const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;
document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px';
});
(function animateTrail() {
  trailX += (mouseX - trailX) * 0.12; trailY += (mouseY - trailY) * 0.12;
  cursorTrail.style.left = trailX + 'px'; cursorTrail.style.top = trailY + 'px';
  requestAnimationFrame(animateTrail);
})();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.width='16px';cursor.style.height='16px'; });
  el.addEventListener('mouseleave', () => { cursor.style.width='10px';cursor.style.height='10px'; });
});

const burger = document.getElementById('navBurger');
const menu   = document.getElementById('mobileMenu');
let open = false;
burger.addEventListener('click', () => {
  open = !open; menu.classList.toggle('open', open);
  const s = burger.querySelectorAll('span');
  if (open) { s[0].style.transform='rotate(45deg) translate(5px,5px)';s[1].style.opacity='0';s[2].style.transform='rotate(-45deg) translate(5px,-5px)'; }
  else { s.forEach(x=>{x.style.transform='';x.style.opacity='';}); }
});

// Staggered reveal on scroll
const cards = document.querySelectorAll('.project-card');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, i * 100);
    }
  });
}, { threshold: 0.1 });
cards.forEach(c => obs.observe(c));

const _projects = {
  p01: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYQ=='),
  p02: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYQ=='),
  p03: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYQ=='),
  p04: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9OZXVyYWwtQXJjaGl0ZWN0dXJlLVNlYXJjaC13aXRoLVJlaW5mb3JjZW1lbnQtTGVhcm5pbmc='),
  p05: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9UcmFuc2ZlcnJpbmctTGVhcm5pbmctVHJhamVjdG9yaWVzLW9uLU5ldXJhbC1OZXR3b3Jrcw=='),
  p06: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9GZWF0dXJlLURldGVjdGlvbi1BLUNvbXBhcmF0aXZlLVN0dWR5LW9mLUNsYXNzaWNhbC1hbmQtRGVlcC1MZWFybmluZy1NZXRob2RzLUFjcm9zcy1Db21wbGV4LVNjZW5lcw=='),
  p07: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9EZXRlcm1pbmlzdGljLVBvbGljeS1HcmFkaWVudC1BbGdvcml0aG0='),
  p08: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9iYXllc2lhbl9waW5uX2Zvcl9mb3J3YXJkX2FuZF9pbnZlcnNlX3Byb2JsZW0='),
};

document.querySelectorAll('.view-project-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const url = _projects[btn.getAttribute('data-id')];
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  });
});

const _allProjects = atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYQ==');

document.getElementById('btnAllProjects').addEventListener('click', () => {
  window.open(_allProjects, '_blank', 'noopener,noreferrer');
});