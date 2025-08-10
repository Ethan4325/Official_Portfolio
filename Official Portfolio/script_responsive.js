// Mobile nav toggle with ARIA updates
(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if(!btn || !nav) return;

  function toggle(){
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  }

  btn.addEventListener('click', toggle);
  // Close menu when clicking a link (mobile)
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(a && window.innerWidth < 900){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Current year in footer
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();