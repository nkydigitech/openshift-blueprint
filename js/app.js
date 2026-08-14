
const chapters = window.CHAPTERS||[];
let activeId = 1;
function saveProgress(id){
  const done = JSON.parse(localStorage.getItem('openshift-blueprint-done')||'[]');
  if(!done.includes(id)){done.push(id);localStorage.setItem('openshift-blueprint-done',JSON.stringify(done))}
  renderProgress();
}
function renderProgress(){
  const done = JSON.parse(localStorage.getItem('openshift-blueprint-done')||'[]');
  const pct = Math.round((done.length/chapters.length)*100);
  document.getElementById('progress-bar').style.width = pct+'%';
  document.getElementById('progress-text').textContent = `${done.length}/${chapters.length} • ${pct}%`;
}
function renderSidebar(){
  const box = document.getElementById('sidebar-list');
  box.innerHTML='';
  chapters.forEach(ch=>{
    const btn=document.createElement('button');
    btn.className='chapter-btn'+(ch.id===activeId?' active':'');
    btn.innerHTML=`<span>${ch.emoji}</span><span><strong>${ch.id}. ${ch.title}</strong><small>${ch.analogy}</small></span>`;
    btn.onclick=()=>openChapter(ch.id);
    box.appendChild(btn);
  });
}
function openChapter(id){
  activeId=id;
  const ch = chapters.find(c=>c.id===id);
  const el = document.getElementById('chapter-content');
  el.innerHTML = `
    <div class="hero">
      <div style="display:flex;gap:8px;margin-bottom:8px"><span class="badge">${ch.emoji} Chapter ${ch.id}</span><span class="badge">${ch.analogy}</span></div>
      <h1>${ch.title}</h1>
      <p>${ch.desc}</p>
    </div>
    <div class="card">${ch.content}</div>
    <div style="margin-top:18px;display:flex;gap:10px">
      <button class="toggle" onclick="saveProgress(${ch.id});renderSidebar();">✅ Mark Done</button>
      <button class="toggle" onclick="nextChapter()">Next →</button>
    </div>
  `;
  document.querySelectorAll('.code-block').forEach(b=>{
    if(!b.querySelector('.copy-btn')){
      const btn=document.createElement('button');btn.className='copy-btn';btn.textContent='Copy';
      btn.onclick=()=>{navigator.clipboard.writeText(b.innerText.replace('Copy','').trim());btn.textContent='Copied!';setTimeout(()=>btn.textContent='Copy',1200)};
      b.appendChild(btn);
    }
  });
  renderSidebar(); saveProgress(id);
  if(window.innerWidth<900) document.getElementById('sidebar').classList.remove('open');
  window.scrollTo(0,0);
}
function nextChapter(){ if(activeId < chapters.length) openChapter(activeId+1); }
function toggleTheme(){ const cur = document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'; document.documentElement.setAttribute('data-theme',cur); localStorage.setItem('theme',cur); }
function toggleSidebar(){ document.getElementById('sidebar').classList.toggle('open'); }
window.addEventListener('DOMContentLoaded',()=>{
  const savedTheme = localStorage.getItem('theme')|| (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.setAttribute('data-theme',savedTheme);
  renderSidebar(); renderProgress(); openChapter(1);
  document.getElementById('lab-grid').innerHTML = `
    <div class="card"><strong>Lab 2: S2I First App</strong><div class="code-block"><pre>oc new-app python~https://github.com/sclorg/django-ex</pre></div></div>
    <div class="card"><strong>Lab 7: Operator</strong><div class="code-block"><pre>Install PostgreSQL operator from OperatorHub</pre></div></div>
    <div class="card"><strong>Lab 9: Tekton</strong><div class="code-block"><pre>tkn pipeline start build-and-deploy</pre></div></div>
    <div class="card"><strong>Capstone</strong><p>Django + Postgres Operator + Route TLS + PVC + Pipeline</p></div>
  `;
});
