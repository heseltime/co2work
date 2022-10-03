import{u as W,w as F,r as K,o as R,a as q,b as w,c as a,d as x,e as V,f as u,g as n,t as z,h as m,i as d,S as N,p as E,j as O,k as L,R as P,l as j,F as C,m as g,P as G,$ as v,n as D,q as b,v as k,s as A,x as J,y as Q,z as M,A as B,B as H,C as X,D as Y,E as ee,G as te,H as ne,I as se,J as ie,K as oe,L as le,M as re,N as ae,O as ce,Q as de,T as ue}from"./vendor.f97ba738.js";const pe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}};pe();var me="/assets/footprint-01.163281d2.svg";const he={async setup(s){let t,l;const r=W(),{data:e}=([t,l]=F(()=>r.get("cdn/stories/header",{version:"draft"})),t=await t,l(),t),i=K(null);return i.value=e.story,R(()=>{q(i.value.id,c=>i.value=c)}),(c,_)=>{const y=w("Feature");return i.value.content.component?(a(),x(y,{key:i.value.content._uid,blok:i.value.content},null,8,["blok"])):V("",!0)}}};var I=(s,t)=>{const l=s.__vccOpts||s;for(const[r,e]of t)l[r]=e;return l};const _e=s=>(E("data-v-04c987d6"),s=s(),O(),s),ge={class:"greetings"},ve={class:"green"},fe=_e(()=>n("div",null,"Loading...",-1)),ye={props:{msg:{type:String,required:!0}},setup(s){return(t,l)=>(a(),u("div",ge,[n("h1",ve,z(s.msg),1),n("h3",null,[(a(),x(N,null,{default:m(()=>[d(he)]),fallback:m(()=>[fe]),_:1}))])]))}};var ze=I(ye,[["__scopeId","data-v-04c987d6"]]);const be=n("img",{alt:"co2work calculator",class:"logo",src:me,width:"98",height:"150"},null,-1),Se={class:"wrapper"},Ie=g("Der Rechner"),we=g("Mehr zum Thema"),Ce={setup(s){return(t,l)=>(a(),u(C,null,[n("header",null,[be,n("div",Se,[d(ze,{msg:"co2work calculator"}),n("nav",null,[d(L(P),{to:"/"},{default:m(()=>[Ie]),_:1}),d(L(P),{to:"/about"},{default:m(()=>[we]),_:1})])])]),d(L(j))],64))}},ke="modulepreload",T={},Me="/",xe=function(t,l){return!l||l.length===0?t():Promise.all(l.map(r=>{if(r=`${Me}${r}`,r in T)return;T[r]=!0;const e=r.endsWith(".css"),i=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":ke,e||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),e)return new Promise((_,y)=>{c.addEventListener("load",_),c.addEventListener("error",y)})})).then(()=>t())};const Ae={components:{Slider:G},data(){return{addresses:[],originAddressSuggestions:[],originStreetInput:"",originCityInput:"",originZipInput:"",originAddressSelected:{},destinationAddressSuggestions:[],destinationStreetInput:"",destinationCityInput:"",destinationZipInput:"",destinationAddressSelected:{},originDestinationHaversineDistance:0,percentageDriving:20,percentageElectric:20,percentagePublic:20,percentageBiking:20,percentageWalking:20,percentages:[20,20,20,20,20],percentagesFromProfile:!1}},methods:{getOriginSuggestionList(s,t,l){this.destinationAddressSuggestions=[];var r="7166-631A-5394-4C03-9106-0A93-C433-2613",e="/1.0/address/find?country=at&zip="+t+"&city="+l+"&street-address="+s+"&street-number=&offset=1&limit=100",i="/api";e=i+e,this.axios.get(e,{auth:{username:r,password:""},withCredentials:!1}).then(c=>this.originAddressSuggestions=c.data.addresses.filter((_,y,h)=>y===h.findIndex(S=>S.street===_.street)).slice(0,5)).catch(c=>console.log(c.message))},getDestinationSuggestionList(s,t,l){this.originAddressSuggestions=[];var r="7166-631A-5394-4C03-9106-0A93-C433-2613",e="/1.0/address/find?country=at&zip="+t+"&city="+l+"&street-address="+s+"&street-number=&offset=1&limit=100",i="/api";e=i+e,this.axios.get(e,{auth:{username:r,password:""},withCredentials:!1}).then(c=>this.destinationAddressSuggestions=c.data.addresses.filter((_,y,h)=>y===h.findIndex(S=>S.street===_.street)).slice(0,5)).catch(c=>console.log(c.message))},selectOrigin(s){this.originAddressSelected=s,console.log(this.originAddressSelected),this.originStreetInput=s.street,this.originCityInput=s.city,this.originZipInput=s.postalCode,this.originAddressSuggestions=[]},selectDestination(s){this.destinationAddressSelected=s,console.log(this.destinationAddressSelected),this.destinationStreetInput=s.street,this.destinationCityInput=s.city,this.destinationZipInput=s.postalCode,this.destinationAddressSuggestions=[]},deg2rad(s){return s*(Math.PI/180)},calculateDistance(){console.log("calculating distance ...");var s=this.originAddressSelected.latitude,t=this.originAddressSelected.longitude,l=this.destinationAddressSelected.latitude,r=this.destinationAddressSelected.longitude,e=6371,i=this.deg2rad(l-s),c=this.deg2rad(r-t),_=Math.sin(i/2)*Math.sin(i/2)+Math.cos(this.deg2rad(s))*Math.cos(this.deg2rad(l))*Math.sin(c/2)*Math.sin(c/2),y=2*Math.atan2(Math.sqrt(_),Math.sqrt(1-_)),h=e*y;console.log(h),this.originDestinationHaversineDistance=h},sum(s){return s.reduce((t,l)=>t+l,0)},sliderManager(s){var t=this.sum(this.percentages);if(t>100){var l=Math.ceil((t-100)/4);console.log(l);for(let r=0;r<this.percentages.length;r++)r!==s&&(this.percentages[r]=this.percentages[r]-l)}else{var l=Math.floor((100-t)/4);console.log(l);for(let e=0;e<this.percentages.length;e++)e!==s&&(this.percentages[e]=this.percentages[e]+l)}this.percentagesFromProfile=!1},setProfile(s){this.percentages=s,this.percentagesFromProfile=!0}},mounted(){var s=v(".first"),t=v(".second");v("input");var l=v(".name");v(".more");var r=v(".yourname");v(".reset");var e=v(".container");s.on("click",function(i){v(this).text("...").delay(200).queue(function(){e.addClass("center slider-two-active").removeClass("full slider-one-active")}),i.preventDefault()}),s.click(),t.on("click",function(i){v("input[name='mode']:checked").val()&&v("input[name='days']:checked").val()&&v("input[name='condition']:checked").val()?v(this).text("...").delay(200).queue(function(){e.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active"),l=l.val(),l==""?r.html("Anonymous!"):r.html(l+"!")}):(t.html("Eingaben erorderlich"),t.addClass("button-response")),i.preventDefault()})}},f=s=>(E("data-v-72bea040"),s=s(),O(),s),Ve=g("Der co2work "),Le=f(()=>n("span",{class:"green"},"CO2-Emissionen-Ersparnis",-1)),De=g(" Rechner:"),He=g(" Lass Dir den CO2 Fu\xDFabdruck f\xFCr deinen Arbeitsweg berechnen und ermittle Einsparungspotentiale. "),Ee={class:"container slider-one-active"},Oe=f(()=>n("div",{class:"steps"},[n("div",{class:"step step-one"},[n("div",{class:"liner"}),n("span",null,"Strecke")]),n("div",{class:"step step-two"},[n("div",{class:"liner"}),n("span",null,"Parameter")]),n("div",{class:"step step-three"},[n("div",{class:"liner"}),n("span",null,"Ergebnis")])],-1)),Pe=f(()=>n("div",{class:"line"},[n("div",{class:"dot-move"}),n("div",{class:"dot zero"}),n("div",{class:"dot center"}),n("div",{class:"dot full"})],-1)),Be={class:"slider-ctr"},Te={class:"slider"},$e={class:"slider-form slider-one"},Ze=f(()=>n("h2",null,"Erster Schritt: Deine Strecke",-1)),Ue=f(()=>n("h4",null,"Wohnort",-1)),We={class:"dropdown"},Fe={key:0,class:"dropdown-ul"},Ke=["onClick"],Re={class:"light"},qe=f(()=>n("h4",null,"Arbeitsort",-1)),Ne={class:"dropdown"},je={key:0,class:"dropdown-ul"},Ge=["onClick"],Je={class:"light"},Qe={class:"slider-form slider-two"},Xe=f(()=>n("h4",null,"Verkehrs-Profil",-1)),Ye={class:"label-ctr"},et={class:"radio"},tt={class:"fa-icon-container emot"},nt={class:"radio"},st=f(()=>n("input",{type:"radio",value:"happy",name:"mode"},null,-1)),it={class:"fa-icon-container emot"},ot={class:"radio"},lt=f(()=>n("input",{type:"radio",value:"happy",name:"mode"},null,-1)),rt={class:"fa-icon-container emot"},at=f(()=>n("h4",null,"Individuelle Einstellung",-1)),ct={class:"label-ctr"},dt={class:"slider-item slider-Driving"},ut={class:"slider-item slider-Electric"},pt={class:"slider-item slider-Public"},mt={class:"slider-item slider-Biking"},ht={class:"slider-item slider-Walking"},_t=f(()=>n("button",{class:"second next"},"Ergebnis ermitteln",-1)),gt=f(()=>n("div",{class:"slider-form slider-three"},[n("h2"),n("h3",null,"Vielen Dank f\xFCr Deine Eingaben! "),n("h2",null,[n("span",{class:"green"},"Ergebnis")])],-1)),vt=g("Teilen"),ft=g(" Teile dein Ergebnis (nachdem Du deine Eingaben gemacht hast) um auf diese Initiative aufmerksam zu machen! "),yt=g("Am Laufenden Bleiben"),zt=g(" Am Besten den Newsletter abonnieren um die wichtigsten Updates direkt zu erhalten. ");function bt(s,t,l,r,e,i){const c=w("DocumentationIcon"),_=w("WelcomeItem"),y=w("ToolingIcon"),h=w("font-awesome-icon"),S=w("Slider"),$=w("CommunityIcon"),Z=w("SupportIcon");return a(),u(C,null,[d(_,null,{icon:m(()=>[d(c)]),heading:m(()=>[Ve,Le,De]),default:m(()=>[He]),_:1}),d(_,null,{icon:m(()=>[d(y)]),heading:m(()=>[]),default:m(()=>[n("div",Ee,[Oe,Pe,n("div",Be,[n("div",Te,[n("form",$e,[Ze,Ue,n("label",{class:D(["input inputOrigin",{inputSelectionOk:e.originAddressSelected.longitude}])},[b(n("input",{type:"text",class:"originStreet",name:"originStreet",placeholder:"Stra\xDFe","onUpdate:modelValue":t[0]||(t[0]=o=>e.originStreetInput=o),onKeyup:t[1]||(t[1]=o=>i.getOriginSuggestionList(e.originStreetInput,e.originZipInput,e.originCityInput))},null,544),[[k,e.originStreetInput]]),b(n("input",{type:"text",class:"originZip inputSecondary",name:"originZip",placeholder:"Postleitzahl","onUpdate:modelValue":t[2]||(t[2]=o=>e.originZipInput=o),onKeyup:t[3]||(t[3]=o=>i.getOriginSuggestionList(e.originStreetInput,e.originZipInput,e.originCityInput))},null,544),[[k,e.originZipInput]]),b(n("input",{type:"text",class:"originCity inputSecondary",name:"originCity",placeholder:"Wohnort","onUpdate:modelValue":t[4]||(t[4]=o=>e.originCityInput=o),onKeyup:t[5]||(t[5]=o=>i.getOriginSuggestionList(e.originStreetInput,e.originZipInput,e.originCityInput))},null,544),[[k,e.originCityInput]])],2),n("div",We,[e.originAddressSuggestions.length?(a(),u("div",Fe,[(a(!0),u(C,null,A(e.originAddressSuggestions,o=>(a(),u("div",{key:o.street,class:"dropdown-li"},[n("a",{href:"#",onClick:U=>i.selectOrigin(o)},[g(z(o.street)+" ",1),n("span",Re,z(o.postalCode)+" "+z(o.city),1)],8,Ke)]))),128))])):V("",!0)]),qe,n("label",{class:D(["input inputDestination",{inputSelectionOk:e.destinationAddressSelected.longitude}])},[b(n("input",{type:"text",class:"destinationStreet",name:"destinationStreet",placeholder:"Stra\xDFe","onUpdate:modelValue":t[6]||(t[6]=o=>e.destinationStreetInput=o),onKeyup:t[7]||(t[7]=o=>i.getDestinationSuggestionList(e.destinationStreetInput,e.destinationZipInput,e.destinationCityInput))},null,544),[[k,e.destinationStreetInput]]),b(n("input",{type:"text",class:"destinationZip inputSecondary",name:"destinationZip",placeholder:"Postleitzahl","onUpdate:modelValue":t[8]||(t[8]=o=>e.destinationZipInput=o),onKeyup:t[9]||(t[9]=o=>i.getDestinationSuggestionList(e.destinationStreetInput,e.destinationZipInput,e.destinationCityInput))},null,544),[[k,e.destinationZipInput]]),b(n("input",{type:"text",class:"originCity inputSecondary",name:"destinationCity",placeholder:"Wohnort","onUpdate:modelValue":t[10]||(t[10]=o=>e.destinationCityInput=o),onKeyup:t[11]||(t[11]=o=>i.getDestinationSuggestionList(e.destinationStreetInput,e.destinationZipInput,e.destinationCityInput))},null,544),[[k,e.destinationCityInput]])],2),n("div",Ne,[e.destinationAddressSuggestions.length?(a(),u("div",je,[(a(!0),u(C,null,A(e.destinationAddressSuggestions,o=>(a(),u("div",{key:o.street,class:"dropdown-li"},[n("a",{href:"#",onClick:U=>i.selectDestination(o)},[g(z(o.street)+" ",1),n("span",Je,z(o.postalCode)+" "+z(o.city),1)],8,Ge)]))),128))])):V("",!0)]),n("button",{class:"first next",onClick:t[12]||(t[12]=o=>i.calculateDistance())},"Zum zweiten Schritt")]),n("form",Qe,[Xe,n("div",Ye,[n("label",et,[n("input",{type:"radio",value:"happy",name:"mode",onClick:t[13]||(t[13]=o=>i.setProfile([5,5,40,25,25]))}),n("div",tt,[d(h,{icon:"recycle",class:"fa-icon"})])]),n("label",nt,[st,n("div",it,[d(h,{icon:"balance-scale",class:"fa-icon"})])]),n("label",ot,[lt,n("div",rt,[d(h,{icon:"car",class:"fa-icon"})])])]),at,n("div",ct,[n("div",dt,[d(h,{icon:"car",class:"fa-icon"}),d(S,{modelValue:e.percentages[0],"onUpdate:modelValue":t[14]||(t[14]=o=>e.percentages[0]=o),onUpdate:t[15]||(t[15]=o=>i.sliderManager(0)),showTooltip:"drag",class:"sliderBlue"},null,8,["modelValue"])]),n("div",ut,[d(h,{icon:"bolt",class:"fa-icon"}),d(S,{modelValue:e.percentages[1],"onUpdate:modelValue":t[16]||(t[16]=o=>e.percentages[1]=o),onUpdate:t[17]||(t[17]=o=>i.sliderManager(1)),showTooltip:"drag",class:D({sliderBlue:e.percentagesFromProfile})},null,8,["modelValue","class"])]),n("div",pt,[d(h,{icon:"subway",class:"fa-icon"}),d(S,{modelValue:e.percentages[2],"onUpdate:modelValue":t[18]||(t[18]=o=>e.percentages[2]=o),onUpdate:t[19]||(t[19]=o=>i.sliderManager(2)),showTooltip:"drag",class:"sliderBlue"},null,8,["modelValue"])]),n("div",mt,[d(h,{icon:"bicycle",class:"fa-icon"}),d(S,{modelValue:e.percentages[3],"onUpdate:modelValue":t[20]||(t[20]=o=>e.percentages[3]=o),onUpdate:t[21]||(t[21]=o=>i.sliderManager(3)),showTooltip:"drag"},null,8,["modelValue"])]),n("div",ht,[d(h,{icon:"walking",class:"fa-icon"}),d(S,{modelValue:e.percentages[4],"onUpdate:modelValue":t[22]||(t[22]=o=>e.percentages[4]=o),onUpdate:t[23]||(t[23]=o=>i.sliderManager(4)),showTooltip:"drag"},null,8,["modelValue"])])]),_t]),gt])])])]),_:1}),d(_,null,{icon:m(()=>[d($)]),heading:m(()=>[vt]),default:m(()=>[ft]),_:1}),d(_,null,{icon:m(()=>[d(Z)]),heading:m(()=>[yt]),default:m(()=>[zt]),_:1})],64)}var St=I(Ae,[["render",bt],["__scopeId","data-v-72bea040"]]);const It={setup(s){return(t,l)=>(a(),u("main",null,[d(St)]))}},wt=J({history:Q("/"),routes:[{path:"/",name:"home",component:It},{path:"/about",name:"about",component:()=>xe(()=>import("./AboutView.d5b4b52f.js"),["assets/AboutView.d5b4b52f.js","assets/AboutView.ab071ea6.css","assets/vendor.f97ba738.js"])}]}),Ct={class:"flex py-8 mb-6"},kt={props:{blok:Object},setup(s){return(t,l)=>{const r=M("editable");return b((a(),u("div",Ct,[(a(!0),u(C,null,A(s.blok.columns,e=>(a(),u("div",{key:e._uid,class:"flex-auto px-6"},[(a(),x(B(e.component),{blok:e},null,8,["blok"]))]))),128))])),[[r,s.blok]])}}},Mt={class:"px-6"},xt={props:{blok:Object},setup(s){return(t,l)=>{const r=M("editable");return b((a(),u("div",Mt,[n("h1",null,z(s.blok.title),1),(a(!0),u(C,null,A(s.blok.body,e=>(a(),x(B(e.component),{key:e._uid,blok:e},null,8,["blok"]))),128))])),[[r,s.blok]])}}},At={class:"py-8 mb-6 text-5xl font-bold text-center"},Vt={props:{blok:Object},setup(s){return(t,l)=>{const r=M("editable");return b((a(),u("div",At,[g(z(s.blok.headline),1)])),[[r,s.blok]])}}},Lt={class:"py-2"},Dt={class:"text-lg"},Ht={props:{blok:Object},setup(s){return(t,l)=>{const r=M("editable");return b((a(),u("div",Lt,[n("h2",Dt,z(s.blok.name),1)])),[[r,s.blok]])}}};const Et={class:"py-8 mb-6 text-5xl font-bold text-center blurb"},Ot={props:{blok:Object},setup(s){return(t,l)=>{const r=M("editable");return b((a(),u("div",Et,[g(z(s.blok.main),1)])),[[r,s.blok]])}}};var Pt=I(Ot,[["__scopeId","data-v-89c050de"]]);const Bt={},Tt={class:"item"},$t={class:"details"};function Zt(s,t){return a(),u("div",Tt,[n("i",null,[H(s.$slots,"icon",{},void 0,!0)]),n("div",$t,[n("h3",null,[H(s.$slots,"heading",{},void 0,!0)]),H(s.$slots,"default",{},void 0,!0)])])}var Ut=I(Bt,[["render",Zt],["__scopeId","data-v-7a6fe88e"]]);const Wt={},Ft={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Kt=n("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Rt=[Kt];function qt(s,t){return a(),u("svg",Ft,Rt)}var Nt=I(Wt,[["render",qt]]);const jt={},Gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Jt=n("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Qt=[Jt];function Xt(s,t){return a(),u("svg",Gt,Qt)}var Yt=I(jt,[["render",Xt]]);const en={},tn={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},nn=n("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),sn=[nn];function on(s,t){return a(),u("svg",tn,sn)}var ln=I(en,[["render",on]]);const rn={},an={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},cn=n("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),dn=[cn];function un(s,t){return a(),u("svg",an,dn)}var pn=I(rn,[["render",un]]);const mn={},hn={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},_n=n("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),gn=[_n];function vn(s,t){return a(),u("svg",hn,gn)}var fn=I(mn,[["render",vn]]);const p=X(Ce);p.use(Y,ee);p.use(wt);p.use(te,{accessToken:"w8rK2TgoeXLqxD377Se8fAtt",use:[ne]});se.add(ie,oe,le,re,ae,ce,de);p.component("font-awesome-icon",ue);p.config.productionTip=!1;p.component("Grid",kt);p.component("Page",xt);p.component("Teaser",Vt);p.component("Feature",Ht);p.component("Blurb",Pt);p.component("WelcomeItem",Ut);p.component("DocumentationIcon",Nt);p.component("ToolingIcon",Yt);p.component("EcosystemIcon",ln);p.component("CommunityIcon",pn);p.component("SupportIcon",fn);p.mount("#app");
