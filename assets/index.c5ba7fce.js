import{r as u,d as y,c as $,o as C,a as d,b as h,e as k,u as L,f as O,g as p,h as T,i as _,F as D,j as S,k as A,l as B}from"./vendor.ec847885.js";const F=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};F();const N="modulepreload",g={},I="/drawing/",W=function(r,n){return!n||n.length===0?r():Promise.all(n.map(o=>{if(o=`${I}${o}`,o in g)return;g[o]=!0;const t=o.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":N,t||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),t)return new Promise((f,l)=>{a.addEventListener("load",f),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r())};function q(e,r,n){e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(n.x,n.y),e.stroke()}function w(e){return{x:e.start.x+e.length*Math.cos(e.theta),y:e.start.y+e.length*Math.sin(e.theta)}}function H(e,r){q(e,r.start,w(r))}let v=u(0);function x(e){requestAnimationFrame(()=>{v.value+=1,v.value%3===0&&e(),x(e)})}const R={"w-full":"","h-full":"",flex:"","justify-center":"","items-center":""},V=y({setup(e){const r=u(),n=$(()=>r.value.getContext("2d")),o=u(600),t=u(600),s=u({start:{x:o.value/2,y:t.value},length:Math.random()*10+20,theta:-Math.PI/2,width:Math.random()+1}),a=[];function f(){n.value.strokeStyle="rgba(169, 169, 169, 0.8)",n.value.lineWidth=s.value.width,l(s.value)}function l(i,c=0){const m=w(i);H(n.value,i),(c<4||Math.random()<.5)&&a.push(()=>l({start:m,length:i.length+(Math.random()*10-5),theta:i.theta-.3*Math.random(),width:i.width},c+1)),(c<4||Math.random()<.5)&&a.push(()=>l({start:m,length:i.length+(Math.random()*10-5),theta:i.theta+.3*Math.random(),width:i.width},c+1))}function P(){const i=[...a];a.length=0,i.forEach(c=>c())}return x(P),C(()=>{f()}),(i,c)=>(d(),h("div",R,[k("canvas",{ref_key:"el",ref:r,width:"600",height:"600",border:""},null,512)]))}}),j=[{name:"all",path:"/:all(.*)*",component:()=>W(()=>import("./_...all_.d5d5332c.js"),["assets/_...all_.d5d5332c.js","assets/_...all_.5b579b93.css","assets/vendor.ec847885.js"]),props:!0},{name:"index",path:"/",component:V,props:!0}],M=L(),K=O(M),U={"top-4":"","right-4":"","position-fixed":""},z={key:0,"i-carbon-moon":""},G={key:1,"i-carbon-sun":""},J=y({setup(e){return(r,n)=>(d(),h("div",U,[k("button",{class:"icon-btn !outline-none",onClick:n[0]||(n[0]=o=>p(K)())},[p(M)?(d(),h("div",z)):(d(),h("div",G))])]))}});var Q=(e,r)=>{const n=e.__vccOpts||e;for(const[o,t]of r)n[o]=t;return n};const X={};function Y(e,r){const n=T("router-view"),o=J;return d(),h(D,null,[_(n),_(o)],64)}var Z=Q(X,[["render",Y]]);const E=S(Z),b=A({history:B("/drawing/"),routes:j});E.use(b);E.mount("#app");export{Q as _};