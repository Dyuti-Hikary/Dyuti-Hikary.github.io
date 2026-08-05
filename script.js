const header=document.getElementById("header"),menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav"),progress=document.getElementById("progressBar"),topBtn=document.getElementById("scrollTop"),glow=document.getElementById("cursorGlow");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const words=["Future Software Engineer.","Technology Enthusiast.","Leader & Community Volunteer.","Creative Problem Solver."];
let wi=0,ci=0,deleting=false;
function type(){const el=document.getElementById("typing"),word=words[wi];el.textContent=word.slice(0,ci);if(!deleting&&ci<word.length){ci++;setTimeout(type,65)}else if(!deleting){deleting=true;setTimeout(type,1400)}else if(ci>0){ci--;setTimeout(type,35)}else{deleting=false;wi=(wi+1)%words.length;setTimeout(type,350)}}type();
const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
reveals.forEach(x=>observer.observe(x));
const sections=[...document.querySelectorAll("main section")],links=[...document.querySelectorAll("nav a")];
function onScroll(){const y=window.scrollY,doc=document.documentElement,den=doc.scrollHeight-doc.clientHeight;progress.style.width=(den?y/den*100:0)+"%";header.style.boxShadow=y>40?"0 10px 35px rgba(0,0,0,.25)":"none";topBtn.classList.toggle("show",y>550);let current="home";sections.forEach(s=>{if(y>=s.offsetTop-180)current=s.id});links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current))}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
window.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.getElementById("year").textContent=new Date().getFullYear();