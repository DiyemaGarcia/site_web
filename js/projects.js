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
  p01: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9pbnN0cnVjdGlvbl9mb2xsb3dpbmdfbXVsdGltb2RhbF9hZ2VudF93aXRoX3Zpc2lvbl9sYW5ndWFnZV9hY3Rpb25fcmVhc29uaW5n'),
  p02: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS8zZF9zY2VuZS1fcmVjb25zdHJ1Y3Rpb25fYW5kX2VzdGltYXRpb25fdXNpbmdfaW1wbGljaXRfbmV1cmFsX3JlcHJlc2VudGF0aW9u'),
  p03: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS91bnN1cGVydmlzZWRfbW9ycGhvbG9naWNhbF9hbmRfc3ludGFjdGljX3N0cnVjdHVyZV9pbmR1Y3Rpb25fdmlhX3ZhcmlhdGlvbmFsX2F1dG9lbmNvZGVycw=='),
  p04: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9OZXVyYWwtQXJjaGl0ZWN0dXJlLVNlYXJjaC13aXRoLVJlaW5mb3JjZW1lbnQtTGVhcm5pbmc='),
  p05: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9UcmFuc2ZlcnJpbmctTGVhcm5pbmctVHJhamVjdG9yaWVzLW9uLU5ldXJhbC1OZXR3b3Jrcw=='),
  p06: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9GZWF0dXJlLURldGVjdGlvbi1BLUNvbXBhcmF0aXZlLVN0dWR5LW9mLUNsYXNzaWNhbC1hbmQtRGVlcC1MZWFybmluZy1NZXRob2RzLUFjcm9zcy1Db21wbGV4LVNjZW5lcw=='),
  p07: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9EZXRlcm1pbmlzdGljLVBvbGljeS1HcmFkaWVudC1BbGdvcml0aG0='),
  p08: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9iYXllc2lhbl9waW5uX2Zvcl9mb3J3YXJkX2FuZF9pbnZlcnNlX3Byb2JsZW0='),
  p09: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9tdWx0aW1vZGFsX3Zpc3VhbF9wZXJjZXB0aW9uX3BsYXRmb3JtX2Zvcl9yZWFsX3RpbWVfY29nbml0aXZlX2Fzc2lzdGFuY2UuZ2l0'),
  p10: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9tdWx0aXRhc2tfbGluZ3Vpc3RpY19yZWFzb25pbmdfc3lzdGVtX3dpdGhfY29udGV4dHVhbF9tZW1vcnlfYW5kX2xsbV9hZ2VudHMuZ2l0'),
  p11: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9vbl9kZXZpY2VfbXVsdGltb2RhbF9jb2duaXRpdmVfYXNzaXN0YW50X3dpdGhfbGxtX2FnZW50c19hbmRyb2lkLmdpdA=='),
  p12: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9wcm9hY3RpdmVfbXVsdGltb2RhbF9pbnRlbGxpZ2VudF9saWZlX2Fzc2lzdGFudF93aXRoX3BlcnNvbmFsaXplZF9sZWFybmluZ19hbmRyb2lkLmdpdA=='),
  p13: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9yZWFsX3RpbWVfb2JqZWN0X3JlY29nbml0aW9uX2FwcGxpY2F0aW9uLmdpdA=='),
  p14: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9yZWFsX3RpbWVfaW1hZ2VfcHJvY2Vzc2luZ19hcHBsaWNhdGlvbl9mb3Jfc2VjdXJpdHlfY2FtZXJhX21vbml0b3JpbmcuZ2l0'),
  p15: atob('aHR0cHM6Ly9naXRodWIuY29tL0RpeWVtYUdhcmNpYS9yZWFsX3RpbWVfM2RfcmVjb25zdHJ1Y3Rpb25fYW5kX3NwYXRpYWxfdW5kZXJzdGFuZGluZ19zeXN0ZW1fYW5kcm9pZC5naXQ='),
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

// PREVIEW MODAL
const modal      = document.getElementById('previewModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalImgs  = [
  document.getElementById('modalImg1'),
  document.getElementById('modalImg2'),
  document.getElementById('modalImg3'),
  document.getElementById('modalImg4'),
];

const projectTitles = {
  '01': 'Instruction-Following Multimodal Agent',
  '02': '3D Scene Reconstruction & Estimation',
  '03': 'Unsupervised Morphological & Syntactic Structure Induction',
  '04': 'Neural Architecture Search with Reinforcement Learning',
  '05': 'Transferring Learning Trajectories on Neural Networks',
  '06': 'Feature Detection Comparison: Classical vs Deep Learning',
  '07': 'Deterministic Policy Gradient Algorithm',
  '08': 'B-PINNs: Bayesian Physics-Informed Neural Networks',
  '09': 'Multimodal Visual Perception Platform',
  '10': 'Multitask Linguistic Reasoning System',
  '11': 'On-Device Multimodal Cognitive Assistant',
  '12': 'Proactive Multimodal Intelligent Life Assistant',
  '13': 'Real-Time Object Recognition Application',
  '14': 'Real-Time Image Processing for Security Camera',
  '15': 'Real-Time 3D Reconstruction & Spatial Understanding',
};

document.querySelectorAll('.preview-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const id = btn.getAttribute('data-project');
    const folder = `images/project_${id}/`;

    modalTitle.textContent = `Project ${id} — ${projectTitles[id] || ''}`;
    modalImgs.forEach((img, i) => {
      img.src = `${folder}image_${i + 1}.png`;
      img.onerror = () => { img.src = `${folder}image_${i + 1}.jpg`; };
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  modalImgs.forEach(img => { img.src = ''; });
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// IMAGE ZOOM ON HOVER 
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomFullImg = document.getElementById('zoomFullImg');

const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

modalImgs.forEach(img => {
  // DESKTOP
  img.addEventListener('mouseenter', () => {
    if (isTouchDevice()) return;
    zoomFullImg.src = img.src;
    zoomOverlay.classList.add('open');
  });

  // MOBILE 
  img.addEventListener('touchstart', e => {
    if (!isTouchDevice()) return;
    e.preventDefault();
    e.stopPropagation();
    zoomFullImg.src = img.src;
    zoomOverlay.classList.add('open');
  }, { passive: false });
});

// DESKTOP 
zoomOverlay.addEventListener('mouseleave', () => {
  if (isTouchDevice()) return;
  zoomOverlay.classList.remove('open');
  zoomFullImg.src = '';
});

// MOBILE
zoomOverlay.addEventListener('touchstart', e => {
  if (!isTouchDevice()) return;
  const rect = zoomFullImg.getBoundingClientRect();
  const touch = e.touches[0];
  const insideImg =
    touch.clientX >= rect.left &&
    touch.clientX <= rect.right &&
    touch.clientY >= rect.top &&
    touch.clientY <= rect.bottom;
  if (!insideImg) {
    e.preventDefault();
    zoomOverlay.classList.remove('open');
    zoomFullImg.src = '';
  }
}, { passive: false });