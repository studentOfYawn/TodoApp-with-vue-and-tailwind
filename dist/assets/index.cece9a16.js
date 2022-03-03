import{o as d,c as i,w as u,v as m,a as n,b as f,t as p,F as h,r as k,d as y,n as x,e as v}from"./vendor.41598ef1.js";const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};g();var b=(r,o)=>{const l=r.__vccOpts||r;for(const[a,e]of o)l[a]=e;return l};let w=0;const _={data(){return{count:0,newTask:"",showCompleted:!1,tasks:[]}},computed:{filterTasks(){return this.showCompleted?this.tasks:this.tasks.filter(r=>!r.done)}},methods:{addTask(){this.newTask?this.tasks.push({id:w++,text:this.newTask,done:!1}):this.tasks,this.newTask=""},removeTask(r){this.tasks=this.tasks.filter(o=>o!==r)}}},T={class:"w-96 bg-slate-700 mx-auto rounded-md p-5 grid content-center font-Nova"},C=n("h1",{class:"text-white font-bold text-3xl m-3 text-center"},"myTODO App",-1),O={class:"h-52 overflow-y-scroll"},L=["onUpdate:modelValue"],N={class:"ml-auto"},A=["onClick"];function V(r,o,l,a,e,t){return d(),i("div",T,[C,u(n("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>e.newTask=s),onKeyup:o[1]||(o[1]=f((...s)=>t.addTask&&t.addTask(...s),["enter"])),placeholder:"New Task",class:"outline-none rounded-sm my-1 px-1 text-sky-700 text-center bg-slate-300"},null,544),[[m,e.newTask]]),n("button",{onClick:o[2]||(o[2]=(...s)=>t.addTask&&t.addTask(...s)),class:"bg-sky-300 my-1 rounded-sm active:bg-sky-400 text-slate-700 outline-none"},"add task"),n("button",{onClick:o[3]||(o[3]=s=>e.showCompleted=!e.showCompleted),class:"bg-sky-200 my-1 rounded-sm active:bg-sky-300 text-slate-700 outline-none"},p(e.showCompleted?"hide completed":"show completed"),1),n("div",O,[n("ul",null,[(d(!0),i(h,null,k(t.filterTasks,s=>(d(),i("li",{key:s.id,class:"text-sky-300 text-xl m-3 flex justify-start"},[n("span",null,[u(n("input",{type:"checkbox","onUpdate:modelValue":c=>s.done=c,title:"finish",class:"appearance-none h-4 w-4 border-2 border-sky-300 rounded-sm checked:bg-green-600 checked:border-green-400 hover:cursor-pointer outline-none"},null,8,L),[[y,s.done]])]),n("span",{class:x([{done:s.done},"mx-2"])},p(s.text),3),n("span",N,[n("button",{onClick:c=>t.removeTask(s),class:"px-1 rounded-lg text-md bg-slate-500 hover:bg-red-300 text-slate-700 outline-none"},"remove",8,A)])]))),128))])])])}var B=b(_,[["render",V]]);v(B).mount("#app");
