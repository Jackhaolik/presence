
function saveNote(id,out){localStorage.setItem(id,document.getElementById(id).value);document.getElementById(out).textContent="Enregistré sur cet appareil.";setTimeout(()=>document.getElementById(out).textContent="",2500)}
function saveBundle(){let a=['m2a','m2b','m2c','m2d','m2e'].map(x=>document.getElementById(x).value);localStorage.setItem('presence_bundle',JSON.stringify(a));document.getElementById('bundle').textContent="Observation enregistrée sur cet appareil."}
let timers={};
function timer(clockId,phaseId,seconds,breath=false){
 if(timers[clockId]) return;
 let left=seconds; const el=document.getElementById(clockId), ph=document.getElementById(phaseId);
 const draw=()=>{el.textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0')};
 draw(); ph.textContent=breath?'Inspire / expire doucement':'En cours';
 timers[clockId]=setInterval(()=>{left--;draw();if(left<=0){clearInterval(timers[clockId]);timers[clockId]=null;ph.textContent='Terminé · reste quelques instants en observation'}},1000)
}
let bInt=null;
function breathStart(){if(bInt)return;let n=0,orb=document.getElementById('orb'),t=document.getElementById('breathText');const go=()=>{let inhale=n%2===0;t.textContent=inhale?'Inspire · 5 s':'Expire · 5 s';orb.style.transform=inhale?'scale(2)':'scale(1)';n++};go();bInt=setInterval(go,5000);setTimeout(()=>{clearInterval(bInt);bInt=null;t.textContent='Terminé · observe ta respiration';orb.style.transform='scale(1)'},300000)}
const scanSteps=['Les pieds et les appuis.','Les jambes et le bassin.','Le ventre et la respiration.','La poitrine et les épaules.','Les mains et les bras.','La mâchoire, le visage, les yeux.','Le corps entier, sans chercher à modifier quoi que ce soit.','Fin : ouvre les yeux et note une seule chose observée.'];let si=0;
function scan(){document.getElementById('scanText').textContent=scanSteps[si%scanSteps.length];si++}
