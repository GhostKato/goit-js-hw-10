import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */import{i as r}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",m);const n=(e,o)=>new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i(e):t(e)},e)});function m(e){e.preventDefault();const o=s.elements.delay.value,i=s.elements.state.value;n(o,i).then(t=>{r.success({message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{r.error({message:`❌ Rejected promise in ${t}ms`,position:"topRight"})}).finally(()=>{s.reset()})}
//# sourceMappingURL=commonHelpers2.js.map
