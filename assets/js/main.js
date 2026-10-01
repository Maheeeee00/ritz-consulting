/* Ritz Consulting – shared script */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');
  e.target.querySelectorAll?.('.count').forEach(runCount); if(e.target.classList.contains('count'))runCount(e.target); io.unobserve(e.target);}}),{threshold:.18});
document.querySelectorAll('.reveal,.stairs').forEach(el=>io.observe(el));
function runCount(el){if(el.dataset.done)return;el.dataset.done=1;const to=+el.dataset.to,p=el.dataset.prefix||'',s=el.dataset.suffix||'';let t0=null;
  const step=t=>{t0??=t;const k=Math.min((t-t0)/1800,1),v=Math.floor(to*(1-Math.pow(1-k,3)));el.textContent=p+v+s;if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)}
const nav=document.getElementById('nav'),top_=document.getElementById('toTop'),bar=document.getElementById('progress');
addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('scrolled',y>20);top_.classList.toggle('show',y>600);
  bar.style.width=(y/(document.body.scrollHeight-innerHeight)*100)+'%'},{passive:true});
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navtoggle').checked=false));
// back to top
document.getElementById('toTop')?.addEventListener('click', e => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); });
