var ct=Object.defineProperty,ut=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var Fe=(a,e,s)=>e in a?ct(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,Ie=(a,e)=>{for(var s in e||(e={}))dt.call(e,s)&&Fe(a,s,e[s]);if(Ne)for(var s of Ne(e))ft.call(e,s)&&Fe(a,s,e[s]);return a},Pe=(a,e)=>ut(a,mt(e));var Ge=(a,e,s)=>(Fe(a,typeof e!="symbol"?e+"":e,s),s);import{w as Oe,v as ht,S as _e,i as be,s as De,c as gt,e as u,a as D,b as n,d as W,f as B,g as o,l as x,u as pt,h as At,j as vt,t as X,k as le,m as F,r as ke,n as Ee,o as $,p as Ue,q as Ce,x as Ke,y as pe,z as Se,A as ze,B as Ve,C as We,D as Ae,E as Qe,F as je,G as Je,H as Xe,I as wt,J as qe,K as _t}from"./vendor.e9eff00d.js";const bt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(l){if(l.ep)return;l.ep=!0;const i=s(l);fetch(l.href,i)}};bt();function Dt(a={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:t,onRegistered:l,onRegisterError:i}=a;let r;const c=async(f=!0)=>{};return"serviceWorker"in navigator&&(r=new ht("/alarmadroide/sw.js",{scope:"/alarmadroide/",type:"classic"}),r.addEventListener("activated",f=>{f.isUpdate?window.location.reload():t==null||t()}),r.register({immediate:e}).then(f=>{l==null||l(f)}).catch(f=>{i==null||i(f)})),c}function Ct(a={}){const{immediate:e=!0,onNeedRefresh:s,onOfflineReady:t,onRegistered:l,onRegisterError:i}=a,r=Oe(!1),c=Oe(!1),f=Dt({immediate:e,onOfflineReady(){c.set(!0),t==null||t()},onNeedRefresh(){r.set(!0),s==null||s()},onRegistered:l,onRegisterError:i});return{needRefresh:r,offlineReady:c,updateServiceWorker:f}}const K={};K.callbacks=[];K.register=({callback:a,id:e})=>{if(K.callbacks.find(s=>s.id===e))return!1;K.callbacks.push({callback:a,id:e})};K.send=(a,e)=>{const s=K.callbacks.filter(t=>t.id===e);return s.length===0?!1:(s.map(({callback:t})=>{t(a)}),!0)};var yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACFklEQVR4nO3dS07DQBBF0YIlwSDsjMxgyGZB7AAGyUORiZP+2d1VfY/kGUjOu4kCdgRmAAAAAAAAANw5mtmh90ns4GCnxzqUdzP7MbNvM3vpfC5bejazLzs91o/O5/JH4+uIGuFyfB3dIyzHjxrh2vjdI6yNHy3CrfG7RTjeOaHLCJ7fmA92egwpj3XXN+YnM/tMPDGvr4SUZ37XJ1rkCMOPLxEjuBlfIkVwN75EiOB2fPEcwf344jFCmPHFU4Rw44uHCGHHl5EjhB9fRowwzfgyUoTpxpcRIkw7vvSMMP340iMC4y/sGYHxV+wRgfHv2DIC4yfaIgLjZ2oZgfELtYjA+JVqIjB+IyURGL+xnM/ifGd+LeMnynklMP5GWkVg/Aq1ERi/gdIIjN9QbgQ34z/2PoFED+cj93vQQM7P+bd+WUOB0vGJ0EDt+ESo0Gp8IhTgUkRHJRfWRvjISwg1VzWJUKnFJWUiFGp5PZ8Imba4mUKERFveySLCHXvcRiTCij3v4RJhoccNdCKc9fz0wvQRRvjoyLQRRhhfposw0vgyTYQRx5fwEUYeX8JG8DC+hIvgaXwJE8Hj+OI+gufxxW2ECOOLuwiRxhc3ESKOL8NHiDy+DB2BP138/9j9fwq83jkh7+NLyivhrdfJrUWIMr7citBtfFlGiDa+XIvQfXxRhKjjy2WEYcYX/okPAAAAAAAAgHH9AuBaVAf5suGMAAAAAElFTkSuQmCC";function Ht(a){let e,s,t,l,i,r,c,f,y,p,C,A;const v=a[3].default,w=gt(v,a,a[2],null);return{c(){e=u("div"),s=u("div"),t=u("div"),l=u("img"),r=D(),c=u("div"),c.innerHTML='<div class="btn">Guardar</div>',f=D(),y=u("div"),w&&w.c(),n(l,"class","page-header__close-icon"),W(l.src,i=yt)||n(l,"src",i),n(l,"alt","Close Icon"),n(l,"width","24"),n(l,"height","24"),n(t,"class","close"),n(s,"class","page-header__close"),n(c,"class","page-header__action"),n(e,"class","page-header"),n(y,"class","page-content")},m(d,H){B(d,e,H),o(e,s),o(s,t),o(t,l),o(e,r),o(e,c),B(d,f,H),B(d,y,H),w&&w.m(y,null),p=!0,C||(A=[x(l,"click",a[1]),x(c,"click",a[0])],C=!0)},p(d,[H]){w&&w.p&&(!p||H&4)&&pt(w,v,d,d[2],p?vt(v,d[2],H,null):At(d[2]),null)},i(d){p||(X(w,d),p=!0)},o(d){le(w,d),p=!1},d(d){d&&F(e),d&&F(f),d&&F(y),w&&w.d(d),C=!1,ke(A)}}}function Rt(a,e,s){let{$$slots:t={},$$scope:l}=e;const i=()=>{K.send({id:"saveAction",from:"page"},"AlarmPage")},r=()=>{K.send({id:"closePage",from:"page"},"Home")};return a.$$set=c=>{"$$scope"in c&&s(2,l=c.$$scope)},[i,r,l,t]}class Bt extends _e{constructor(e){super();be(this,e,Rt,Ht,De,{})}}const Ze=a=>({year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),day:a.getDay(),hours:a.getHours(),minutes:a.getMinutes(),seconds:a.getSeconds(),timestamp:a.getTime()}),ve=["Domingo","Lunes","Martes","Mi\xE9rcoles","Jueves","Viernes","S\xE1bado"];class ye{constructor({name:e="",days:s=[],hours:t=0,minutes:l=0}){Ge(this,"displayDays",()=>{let e=this.days;return e.length===7?"Todos los d\xEDas":(e=e.map(s=>ve[s]),e.length===1?e[0]:(e=e.map(s=>s.substr(0,2)),e.join(" - ")))});this.name=e||"Sin nombre",this.days=s.length===0?[0,1,2,3,4,5,6]:s,this.hours=t||0,this.minutes=l||0,this.playing=!1,this.disabled=!1}_play(){return this.playing=!0}checkDay(e=[]){const{day:s}=Ze(new Date);let t=this.days;if(e.length&&(t=t.filter(c=>!e.includes(c))),t.length===7)return[null,"everyDay"];const l=t.find(c=>ve[c]===ve[s]);if(l)return[null,ve[l]];let i=t.find(c=>c>s)||t.find(c=>c<s),r=i===s+1?"Tomorrow":ve[i];return[{msg:"An error has been ocurred."},r]}checkTime(){const{hours:e,minutes:s}=Ze(new Date);return this.hours<e?this._play():this.hours===e&&this.minutes<=s?this._play():!1}displayTime(){const e=this.hours<10&&"0"+this.hours||this.hours,s=this.minutes<10&&"0"+this.minutes||this.minutes;return`${e}:${s}`}displayTypeTime(){return this.hours<12?"AM":"PM"}typeTimeState(){let e="";return e=this.hours>=0&&"sunrise"||e,e=this.hours>6&&"day"||e,e=this.hours>19&&"night"||e,e}displayLack(){let e=new Date;e.setHours(this.hours),e.setMinutes(this.minutes);const s=Date.now()-e.getTime(),[t,l]=this.checkDay([new Date().getDay()]);if(t||s<0){if(l==="Tomorrow")return"\xC9sta alarma se activar\xE1 ma\xF1ana.";if(l!=="Tomorrow")return`\xC9sta alarma se activar\xE1 el ${l.toString().toLowerCase()}.`}const i=Ee(e),r=Ee().diff(i,"hour"),c=Ee().diff(i,"minute");return r?`Falta${r<2?"":"n"} ${r} hora${r<2?"":"s"}.`:`Falta${c<2?"":"n"} ${c} minuto${c<2?"":"s"}.`}}class xe extends Error{constructor(e,s={}){super();const{code:t=404,name:l,date:i}=s;Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name=l||"NotFound",this.code=t,this.message=e||"No data found.",this.date=i||Date.now()}}class Le extends Error{constructor(e,s={}){super();const{code:t=400,name:l,date:i}=s;Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name=l||"BadRequest",this.code=t,this.message=e||"Please correct the parameters.",this.date=i||Date.now()}}const ee=a=>{for(const e in a)return!1;return!0};class $e{constructor(e,s){this.name=e,this.schema=s}_getDB(){return JSON.parse(window.localStorage.getItem(this.name))}_setDB(e){return window.localStorage.setItem(this.name,JSON.stringify(e))}_SchemaFromDocument(e){return Array.isArray(e)?e=e.map(s=>new this.schema(s)):e=new this.schema(e),e}_Find(e){const s=this._getDB();if(ee(e)||ee(e.where))return this._SchemaFromDocument(s);const t=Object.entries(e.where);let l=[];return s.find(i=>{let r=!0;t.forEach(c=>{i.hasOwnProperty(c[0])||(r=!1),i[c[0]]!==c[1]&&(r=!1)}),!(e.limit&&e.limit<=l.length)&&r&&l.push(i)}),this._SchemaFromDocument(l)}find(e={}){return this._Find(e)}findOne(e={}){if(ee(e)||ee(e.where))return[new Le,{}];const s=this._Find(Pe(Ie({},e),{limit:1}));return s.length?[null,s[0]||!1]:[new xe,{}]}create(e){const s=this.find();if(s.find(i=>i.name===e.name))return 402;const l=new this.schema(e);return s.push(l),this._setDB(s),l}update(e={}){if(ee(e)||ee(e.where)||ee(e.set))return[new Le,{}];const s=this.find(),t=this.find(e),l=[...t];return t.length?(t.forEach((i,r)=>{const c=s.findIndex(f=>f.name===i.name);Object.keys(e.set).forEach(f=>{i[f]=e.set[f]}),l[r]=new this.schema(i),t[r]={index:c,data:new this.schema(i)}}),t.map(i=>(s[i.index]=i.data,i)),this._setDB(s),[null,l.length===1?l[0]:l]):[new xe,{}]}delete(e={}){if(ee(e)||ee(e.where))return[new Le,{}];const t=this.find().filter(l=>{let i=!0;return Object.keys(e.where).forEach(r=>{l[r]!==e.where[r]&&(i=!1)}),!i});return this._setDB(t),[null,t]}}class et{_createCollectionIfNotExist(e=""){const s=window.localStorage.getItem(e);return!s&&window.localStorage.setItem(e,"[]"),s&&JSON.parse(s)||!1}getSchema(e){if(e==="alarms")return ye}getCollection(e){const s=this._createCollectionIfNotExist(e),t=this.getSchema(e);return s?new $e(e,t):new $e(e,t)}}function tt(a,e,s){const t=a.slice();return t[9]=e[s],t}function st(a,e,s){const t=a.slice();return t[12]=e[s],t}function at(a){let e,s=a[12]+"",t,l,i;return{c(){e=u("option"),t=$(s),e.selected=l=a[0].hours===a[12],e.__value=i=a[12],e.value=e.__value},m(r,c){B(r,e,c),o(e,t)},p(r,c){c&3&&l!==(l=r[0].hours===r[12])&&(e.selected=l)},d(r){r&&F(e)}}}function lt(a){let e,s=a[9]+"",t,l,i;return{c(){e=u("option"),t=$(s),e.selected=l=a[0].minutes===a[9],e.__value=i=a[9],e.value=e.__value},m(r,c){B(r,e,c),o(e,t)},p(r,c){c&3&&l!==(l=r[0].minutes===r[9])&&(e.selected=l)},d(r){r&&F(e)}}}function Ft(a){let e,s,t,l,i,r,c,f,y,p,C,A,v,w,d,H,L,Y=a[1](0,23),I=[];for(let h=0;h<Y.length;h+=1)I[h]=at(st(a,Y,h));let k=a[1](0,59),_=[];for(let h=0;h<k.length;h+=1)_[h]=lt(tt(a,k,h));return{c(){e=u("div"),s=u("div"),t=u("label"),t.textContent="Hora",l=D(),i=u("select");for(let h=0;h<I.length;h+=1)I[h].c();r=D(),c=u("div"),f=u("label"),f.textContent="Minuto",y=D(),p=u("select");for(let h=0;h<_.length;h+=1)_[h].c();C=D(),A=u("div"),v=u("label"),v.textContent="Nombre de la alarma",w=D(),d=u("input"),n(t,"for","alarmHourField"),n(t,"class","form-element__label"),n(i,"id","alarmHourField"),n(i,"class","form-element__field"),a[0].hours===void 0&&Ue(()=>a[2].call(i)),n(s,"class","form-element"),n(f,"for","alarmHourField"),n(f,"class","form-element__label"),n(p,"id","alarmHourField"),n(p,"class","form-element__field"),a[0].minutes===void 0&&Ue(()=>a[3].call(p)),n(c,"class","form-element"),n(e,"class","box"),n(v,"for","alarmNameField"),n(v,"class","form-element__label"),n(d,"id","alarmNameField"),n(d,"class","form-element__field"),n(d,"type","text"),n(d,"placeholder","Nombre de la alarma..."),n(A,"class","form-element")},m(h,E){B(h,e,E),o(e,s),o(s,t),o(s,l),o(s,i);for(let g=0;g<I.length;g+=1)I[g].m(i,null);Ce(i,a[0].hours),o(e,r),o(e,c),o(c,f),o(c,y),o(c,p);for(let g=0;g<_.length;g+=1)_[g].m(p,null);Ce(p,a[0].minutes),B(h,C,E),B(h,A,E),o(A,v),o(A,w),o(A,d),Ke(d,a[0].name),H||(L=[x(i,"change",a[2]),x(p,"change",a[3]),x(d,"input",a[4])],H=!0)},p(h,[E]){if(E&3){Y=h[1](0,23);let g;for(g=0;g<Y.length;g+=1){const j=st(h,Y,g);I[g]?I[g].p(j,E):(I[g]=at(j),I[g].c(),I[g].m(i,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=Y.length}if(E&3&&Ce(i,h[0].hours),E&3){k=h[1](0,59);let g;for(g=0;g<k.length;g+=1){const j=tt(h,k,g);_[g]?_[g].p(j,E):(_[g]=lt(j),_[g].c(),_[g].m(p,null))}for(;g<_.length;g+=1)_[g].d(1);_.length=k.length}E&3&&Ce(p,h[0].minutes),E&3&&d.value!==h[0].name&&Ke(d,h[0].name)},i:pe,o:pe,d(h){h&&F(e),Se(I,h),Se(_,h),h&&F(C),h&&F(A),H=!1,ke(L)}}}function It(a,e,s){let{data:t=new ye}=e;const i=new et().getCollection("alarms");K.register({callback:({id:C,from:A})=>{C==="saveAction"&&A==="page"&&c()},id:"AlarmPage"});const r=(C,A)=>{const v=[],w=d=>{if(d>A)return v;v.push(d);let H=d+1;return w(H)};return w(C),v},c=()=>{const[C,A]=i.update({where:{name:t.name},set:Ie({},t)});s(0,t=A)};ze(async()=>{await Ve()});function f(){t.hours=We(this),s(0,t),s(1,r)}function y(){t.minutes=We(this),s(0,t),s(1,r)}function p(){t.name=this.value,s(0,t),s(1,r)}return a.$$set=C=>{"data"in C&&s(0,t=C.data)},[t,r,f,y,p]}class kt extends _e{constructor(e){super();be(this,e,It,Ft,De,{data:0})}}var Et="data:image/png;base64,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";function St(a){let e,s,t,l,i,r,c=a[0].displayDays()+"",f,y,p,C,A=a[0].displayTime()+"",v,w,d,H=a[0].displayTypeTime()+"",L,Y,I,k,_,h=a[0].name+"",E,g,j,ne,q=(a[0].disabled?"Desactivada.":a[0].displayLack())+"",ie,M,N,te,P,he,G,O,S,oe,ge,U,z,re,ce,se,V;return{c(){e=u("div"),s=u("div"),t=u("div"),l=u("b"),i=D(),r=u("span"),f=$(c),y=D(),p=u("div"),C=u("div"),v=$(A),w=D(),d=u("div"),L=$(H),I=D(),k=u("div"),_=u("span"),E=$(h),g=$(" -"),j=D(),ne=u("span"),ie=$(q),M=D(),N=u("div"),te=u("div"),P=u("img"),G=D(),O=u("div"),S=u("input"),ge=D(),U=u("label"),z=$("Activar/Desactivar Alarma"),n(l,"class","alarm__days-circle"),n(t,"class","alarm__days"),n(C,"class","alarm__format-time"),n(d,"class",Y=`alarm__type-time ${a[0].typeTimeState()}`),n(p,"class","alarm__time"),n(_,"class","alarm__name"),n(ne,"class","alarm__rest"),n(k,"class","alarm__description"),n(s,"class","alarm__information"),W(P.src,he=Et)||n(P,"src",he),n(P,"alt","Edit Clock Icon"),n(P,"width","32"),n(P,"height","32"),n(te,"class","alarm-actions__edit"),n(S,"type","checkbox"),n(S,"id",oe=`switch-${a[0].name}`),n(S,"class","alarm-actions__toggle-input"),n(U,"for",re=`switch-${a[0].name}`),n(U,"class","alarm-actions__toggle-label"),n(O,"class","alarm-actions__toggle"),n(N,"class","alarm-actions"),n(e,"class",ce=`alarm ${a[0].disabled?"alarm--disabled":""}`)},m(Q,J){B(Q,e,J),o(e,s),o(s,t),o(t,l),o(t,i),o(t,r),o(r,f),o(s,y),o(s,p),o(p,C),o(C,v),o(p,w),o(p,d),o(d,L),o(s,I),o(s,k),o(k,_),o(_,E),o(_,g),o(k,j),o(k,ne),o(ne,ie),o(e,M),o(e,N),o(N,te),o(te,P),o(N,G),o(N,O),o(O,S),S.checked=a[1],o(O,ge),o(O,U),o(U,z),se||(V=[x(te,"click",a[3]),x(S,"change",a[2]),x(S,"change",a[4])],se=!0)},p(Q,[J]){J&1&&c!==(c=Q[0].displayDays()+"")&&Ae(f,c),J&1&&A!==(A=Q[0].displayTime()+"")&&Ae(v,A),J&1&&H!==(H=Q[0].displayTypeTime()+"")&&Ae(L,H),J&1&&Y!==(Y=`alarm__type-time ${Q[0].typeTimeState()}`)&&n(d,"class",Y),J&1&&h!==(h=Q[0].name+"")&&Ae(E,h),J&1&&q!==(q=(Q[0].disabled?"Desactivada.":Q[0].displayLack())+"")&&Ae(ie,q),J&1&&oe!==(oe=`switch-${Q[0].name}`)&&n(S,"id",oe),J&2&&(S.checked=Q[1]),J&1&&re!==(re=`switch-${Q[0].name}`)&&n(U,"for",re),J&1&&ce!==(ce=`alarm ${Q[0].disabled?"alarm--disabled":""}`)&&n(e,"class",ce)},i:pe,o:pe,d(Q){Q&&F(e),se=!1,ke(V)}}}function Qt(a,e,s){let t,{alarm:l}=e;const i=f=>s(0,l.disabled=!f.target.checked,l),r=f=>{if([...f.target.classList].find(p=>p.toString().includes("toggle")))return!1;K.send({id:"editPage",from:"Alarm",data:l},"Home")};function c(){t=this.checked,s(1,t),s(0,l)}return a.$$set=f=>{"alarm"in f&&s(0,l=f.alarm)},a.$$.update=()=>{a.$$.dirty&1&&s(1,t=!l.disabled)},[l,t,i,r,c]}class jt extends _e{constructor(e){super();be(this,e,Qt,St,De,{alarm:0})}}var Jt="/alarmadroide/assets/HTML5_logo_and_wordmark.4e599364.svg",Lt="/alarmadroide/assets/CSS3_logo_and_wordmark.a5d03302.svg",Tt="/alarmadroide/assets/Svelte_logo_by_gengns.404fac69.svg",Yt="data:image/png;base64,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",Mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEMklEQVR4nO2byWsUQRSHvxE1CSaC4t0tJBq3qKjoRQ2JggY9KOpRBPEPEBLMf+CG3j2IBgkKntxPahIRdwJKjApGvbmBWRBJnHioTui86u6Z7q6qjKQ/qEPNFO/96k1N1avqasjIyMjImL7kHPmpBbYB9UANsBCYD1R63w8BP4FPQB/QA9wH3jnSZ4XVwFngCzCWsHwGzni2/gtywG7gEck7HVa6gV24G7WxWQ88wXzHZXkMrHPUp6IoB84Do4SLHgBuAa1AM2pOmAfM8so877Nmr81tYDDC3ihwDihz0L9IqoGXBIv8C9wE9pFMaDmwHxW4fIiPF8DSVD1IwWbgR4CoPNABrDDoaxVwLcDXGPAd2GTQV1HsQC1dUkwvarmzRQNqmZR+h4Ami34nsZHgzl8G5jjwXwFcCPA/DGyx7bwafdjngeO2HQfQij43fAOW2HJYjj7h5YEjthwWwVH0IDzD0upwHn3YTcUvL2lB13XGtJP16Ov8RdNOUnAJPU9Ya8p4Dj3D68XNhFcsleirQ7cp47vRh1iDKeMG2Yo+H+w0YVhubDpMGLWETJY60xpcKQzmvc9MIEeVCepQKbjf7qo0Bs8KYzdSCvRjIwCgNlJ+u6fSGJOHGfvSqvNhKwAHhN3+pIZqhaEBzCYYtgJQgZ6qV4c1nhFhaLuodwF/0qpzwG/0JTB01YoKgDyHSz2jOuShqIeeKUYFYJmov04sxz1vRL02rGFUABaL+vvEctwjj9NDd4gzI4zMFfXvMUXEndgKtY9zGiy1yr5MEDUCKkV9KIaAqWZQ1KvCGkYFYFoQFQD5i8sRUcrIX1yOiAmiAvBL1BfEFJErUNK2j0JqlX2ZICoAMoWsiSliKpHL3sewhlEBeCvqJs/5bVMn6n1hDaMC0CPqWxPLcY98NiH7UhQ1TN5QDKJOhk1hczM0TJGboUJ8Fob2GxA4jq0AHCTGdrhQHnBN1A8n1+UMqfFqGmNBR2Kpjph82BgBa9APRlPr7RYG5agoJa5j+FAU1LWU/+FYvBFd5w4ThnOoayl+w32UVmpchdqu+zV2mXSwDv3RWCk9H2hHfzRWb9rJOfQh1mraSQLa0HWdtuGoDHguHOVRj6inimPos/5TYLYth0tRpy0yCC22HEbQht75r+hHecbZQPAVtnbcTIxVwJUA/8Ooi1tOaCL4nlAfdpfIJvTZfnyf0mjRbyCbUHdypJjxZMlUxggqw5NJjn/YbzToKxZLUHdygoTlUQ8qD5BsF1kBHALuEH5R8ikO/vOFKEPdyRkhWOQY6u9yFzgB7AGWo67Lz/bKfO+zvV6be+hbWn8ZQS111mb7JNSj7xtslC7UX6Jk2YnahJjueCeGcntXrERdTugneaf7gZOYu5Wi4erlg2rU4/bxV2YWob8y8wP1ysw74BXwAPjgSF9GRkZGxrTkH+QIINR2eUfKAAAAAElFTkSuQmCC",Nt="/alarmadroide/assets/logo.9ee7130a.png",Pt="/alarmadroide/assets/Jo-Sword.209cc266.png",Gt="/alarmadroide/assets/Beat Your Competition.006e9a22.mp3";function nt(a,e,s){const t=a.slice();return t[11]=e[s],t}function it(a){let e,s;return e=new jt({props:{alarm:a[11]}}),{c(){Qe(e.$$.fragment)},m(t,l){je(e,t,l),s=!0},p:pe,i(t){s||(X(e.$$.fragment,t),s=!0)},o(t){le(e.$$.fragment,t),s=!1},d(t){Je(e,t)}}}function ot(a){let e,s;return e=new kt({props:{data:a[0].data}}),{c(){Qe(e.$$.fragment)},m(t,l){je(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.data=t[0].data),e.$set(i)},i(t){s||(X(e.$$.fragment,t),s=!0)},o(t){le(e.$$.fragment,t),s=!1},d(t){Je(e,t)}}}function Ot(a){let e,s,t=a[0].from==="Alarm"&&ot(a);return{c(){t&&t.c(),e=wt()},m(l,i){t&&t.m(l,i),B(l,e,i),s=!0},p(l,i){l[0].from==="Alarm"?t?(t.p(l,i),i&1&&X(t,1)):(t=ot(l),t.c(),X(t,1),t.m(e.parentNode,e)):t&&(qe(),le(t,1,1,()=>{t=null}),Xe())},i(l){s||(X(t),s=!0)},o(l){le(t),s=!1},d(l){t&&t.d(l),l&&F(e)}}}function Ut(a){let e,s,t,l,i,r,c,f,y,p,C,A,v,w,d,H,L,Y,I,k,_,h,E,g,j,ne,q,ie,M,N,te,P,he,G,O,S,oe,ge,U,z,re,ce,se,V,Q,J,He,de,ue,we,Re,ae,Te,Z,Be,Ye,me=a[4],R=[];for(let m=0;m<me.length;m+=1)R[m]=it(nt(a,me,m));const rt=m=>le(R[m],1,1,()=>{R[m]=null});return ue=new Bt({props:{$$slots:{default:[Ot]},$$scope:{ctx:a}}}),{c(){e=u("header"),s=u("div"),t=u("img"),i=D(),r=u("h3"),r.textContent="Alarmadroide",f=D(),y=u("section"),p=u("h2"),p.textContent="Tus alarmas",C=D(),A=u("div");for(let m=0;m<R.length;m+=1)R[m].c();w=D(),d=u("div"),H=u("div"),L=u("img"),I=D(),k=u("div"),_=u("img"),E=D(),g=u("div"),j=u("img"),ie=D(),M=u("div"),N=u("h3"),N.textContent="Made with \u2665 by Orlando Brice\xF1o (Jo-Sword)",te=D(),P=u("hr"),he=D(),G=u("div"),O=u("div"),S=u("img"),ge=D(),U=u("div"),z=u("img"),ce=D(),se=u("div"),V=u("img"),He=D(),de=u("div"),Qe(ue.$$.fragment),Re=D(),ae=u("audio"),W(t.src,l=Nt)||n(t,"src",l),n(t,"alt","Logo de Alarmadroide"),n(t,"width","48"),n(t,"height","48"),n(r,"class","header__logo-title"),n(s,"class","header__logo"),n(e,"class",c=`header page-transition ${a[0].openTransition?"page-transition--animation":""} ${a[0].open?"page-transition--hidden":""}`),n(A,"class","alarms__container"),n(y,"class",v=`alarms page-transition ${a[0].openTransition?"page-transition--animation":""} ${a[0].open?"page-transition--hidden":""}`),W(L.src,Y=Yt)||n(L,"src",Y),n(L,"alt","Alarms Icon"),n(L,"width","32"),n(L,"height","32"),n(L,"class","menu__button-image"),n(H,"class","menu__button menu__button--active"),W(_.src,h=Mt)||n(_,"src",h),n(_,"alt","Add Icon"),n(_,"width","32"),n(_,"height","32"),n(_,"class","menu__button-image--main"),n(k,"class","menu__button menu__button--main"),W(j.src,ne=Pt)||n(j,"src",ne),n(j,"alt","Add Icon"),n(j,"width","32"),n(j,"height","32"),n(j,"class","menu__button-image menu__button-image--jo-sword"),n(g,"class",q=`menu__button menu__button--jo-sword ${a[1]?"menu__button--displayed":""}`),n(d,"class","menu"),n(N,"class","vendors-information__title"),n(P,"class","vendors-information__hr"),W(S.src,oe=Jt)||n(S,"src",oe),n(S,"alt","HTML Logo"),n(S,"width","32"),n(S,"height","32"),n(O,"class","technology technology--html"),W(z.src,re=Lt)||n(z,"src",re),n(z,"alt","CSS Logo"),n(z,"width","32"),n(z,"height","32"),n(U,"class","technology technology--css"),W(V.src,Q=Tt)||n(V,"src",Q),n(V,"alt","Svelte Logo"),n(V,"width","32"),n(V,"height","32"),n(se,"class","technology technology--svelte"),n(G,"class","technologies"),n(M,"class",J=`vendors-information ${a[1]?"vendors-information--displayed":""}`),n(de,"class",we=`page-container page-transition ${a[0].open?"":"page-transition--animation-inverted"}`),W(ae.src,Te=Gt)||n(ae,"src",Te),ae.autoplay=!0,ae.loop=!0},m(m,b){B(m,e,b),o(e,s),o(s,t),o(s,i),o(s,r),B(m,f,b),B(m,y,b),o(y,p),o(y,C),o(y,A);for(let fe=0;fe<R.length;fe+=1)R[fe].m(A,null);B(m,w,b),B(m,d,b),o(d,H),o(H,L),o(d,I),o(d,k),o(k,_),o(d,E),o(d,g),o(g,j),B(m,ie,b),B(m,M,b),o(M,N),o(M,te),o(M,P),o(M,he),o(M,G),o(G,O),o(O,S),o(G,ge),o(G,U),o(U,z),o(G,ce),o(G,se),o(se,V),B(m,He,b),B(m,de,b),je(ue,de,null),B(m,Re,b),B(m,ae,b),a[5](ae),Z=!0,Be||(Ye=x(g,"click",a[3]),Be=!0)},p(m,[b]){if((!Z||b&1&&c!==(c=`header page-transition ${m[0].openTransition?"page-transition--animation":""} ${m[0].open?"page-transition--hidden":""}`))&&n(e,"class",c),b&16){me=m[4];let T;for(T=0;T<me.length;T+=1){const Me=nt(m,me,T);R[T]?(R[T].p(Me,b),X(R[T],1)):(R[T]=it(Me),R[T].c(),X(R[T],1),R[T].m(A,null))}for(qe(),T=me.length;T<R.length;T+=1)rt(T);Xe()}(!Z||b&1&&v!==(v=`alarms page-transition ${m[0].openTransition?"page-transition--animation":""} ${m[0].open?"page-transition--hidden":""}`))&&n(y,"class",v),(!Z||b&2&&q!==(q=`menu__button menu__button--jo-sword ${m[1]?"menu__button--displayed":""}`))&&n(g,"class",q),(!Z||b&2&&J!==(J=`vendors-information ${m[1]?"vendors-information--displayed":""}`))&&n(M,"class",J);const fe={};b&16385&&(fe.$$scope={dirty:b,ctx:m}),ue.$set(fe),(!Z||b&1&&we!==(we=`page-container page-transition ${m[0].open?"":"page-transition--animation-inverted"}`))&&n(de,"class",we)},i(m){if(!Z){for(let b=0;b<me.length;b+=1)X(R[b]);X(ue.$$.fragment,m),Z=!0}},o(m){R=R.filter(Boolean);for(let b=0;b<R.length;b+=1)le(R[b]);le(ue.$$.fragment,m),Z=!1},d(m){m&&F(e),m&&F(f),m&&F(y),Se(R,m),m&&F(w),m&&F(d),m&&F(ie),m&&F(M),m&&F(He),m&&F(de),Je(ue),m&&F(Re),m&&F(ae),a[5](null),Be=!1,Ye()}}}function Kt(a,e,s){let t={open:!1,openTransition:!1,data:new ye({})};const l=()=>{s(0,t.open=!1,t),s(0,t.data=new ye({}),t),s(0,t.from="",t),setTimeout(()=>{s(0,t.openTransition=!1,t)},100)},i=({from:v,data:w})=>{s(0,t.openTransition=!0,t),s(0,t.data=w,t),s(0,t.from=v,t),setTimeout(()=>{s(0,t.open=!0,t)},300)};K.register({callback:({data:v,id:w,from:d})=>{w==="editPage"?i({from:d,data:v}):w==="closePage"&&l()},id:"Home"});let r=!1;const c=()=>{s(1,r=!r)};let f;const p=new et().getCollection("alarms");p.create({name:"Despertador",hours:4,minutes:30}),p.create({name:"Ejercicios",hours:21,minutes:0,days:[1,2,3,4,5]});let C=p.find();ze(async()=>{await Ve(),s(2,f.volume=0,f)});function A(v){_t[v?"unshift":"push"](()=>{f=v,s(2,f)})}return[t,r,f,c,C,A]}class zt extends _e{constructor(e){super();be(this,e,Kt,Ut,De,{})}}Ct({onRegistered:a=>{console.log(a)}});new zt({target:document.body});
