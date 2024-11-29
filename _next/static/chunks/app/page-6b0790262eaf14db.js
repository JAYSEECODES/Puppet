(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8095:function(e,t,a){Promise.resolve().then(a.bind(a,2522))},7568:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let n=a(4981);a(5320),a(8978);let s=n._(a(6080));function r(e,t){var a;let n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let r={...n,...t};return(0,s.default)({...r,modules:null==(a=r.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7208:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=a(8165);function s(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return a}},6080:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=a(5320),s=a(8978),r=a(7208),i=a(7893);function o(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},a=(0,s.lazy)(()=>t.loader().then(o)),c=t.loading;function p(e){let o=c?(0,n.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(i.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(a,{...e})]}):(0,n.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(a,{...e})});return(0,n.jsx)(s.Suspense,{fallback:o,children:l})}return p.displayName="LoadableComponent",p}},7893:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let n=a(5320),s=a(6334);function r(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,s.getExpectedRequestStore)("next/dynamic css"),r=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,n.jsx)(n.Fragment,{children:r.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},2522:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(5320),s=a(8978),r=a(7568),i=a.n(r),o=a(5452),l=a(8439);let c=[{type:"impl",name:"actions__ContractImpl",interface_name:"dojo::contract::interface::IContract"},{type:"interface",name:"dojo::contract::interface::IContract",items:[]},{type:"impl",name:"actions__DeployedContractImpl",interface_name:"dojo::meta::interface::IDeployedResource"},{type:"struct",name:"core::byte_array::ByteArray",members:[{name:"data",type:"core::array::Array::<core::bytes_31::bytes31>"},{name:"pending_word",type:"core::felt252"},{name:"pending_word_len",type:"core::integer::u32"}]},{type:"interface",name:"dojo::meta::interface::IDeployedResource",items:[{type:"function",name:"dojo_name",inputs:[],outputs:[{type:"core::byte_array::ByteArray"}],state_mutability:"view"}]},{type:"impl",name:"ActionsImpl",interface_name:"puppet_vs_gizmo::systems::actions::IActions"},{type:"interface",name:"puppet_vs_gizmo::systems::actions::IActions",items:[{type:"function",name:"create_game",inputs:[{name:"character",type:"core::integer::u8"},{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"join_game",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"throw",inputs:[{name:"game_id",type:"core::integer::u32"},{name:"power",type:"core::integer::u8"}],outputs:[],state_mutability:"external"},{type:"function",name:"player_health",inputs:[{name:"address",type:"core::starknet::contract_address::ContractAddress"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{type:"function",name:"game_winner",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{type:"function",name:"get_first_player",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{type:"function",name:"get_second_player",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{type:"function",name:"get_game_turn",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"}]},{type:"function",name:"dojo_init",inputs:[],outputs:[],state_mutability:"view"},{type:"impl",name:"WorldProviderImpl",interface_name:"dojo::contract::components::world_provider::IWorldProvider"},{type:"struct",name:"dojo::world::iworld::IWorldDispatcher",members:[{name:"contract_address",type:"core::starknet::contract_address::ContractAddress"}]},{type:"interface",name:"dojo::contract::components::world_provider::IWorldProvider",items:[{type:"function",name:"world_dispatcher",inputs:[],outputs:[{type:"dojo::world::iworld::IWorldDispatcher"}],state_mutability:"view"}]},{type:"impl",name:"UpgradeableImpl",interface_name:"dojo::contract::components::upgradeable::IUpgradeable"},{type:"interface",name:"dojo::contract::components::upgradeable::IUpgradeable",items:[{type:"function",name:"upgrade",inputs:[{name:"new_class_hash",type:"core::starknet::class_hash::ClassHash"}],outputs:[],state_mutability:"external"}]},{type:"constructor",name:"constructor",inputs:[]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"struct",members:[{name:"class_hash",type:"core::starknet::class_hash::ClassHash",kind:"data"}]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"enum",variants:[{name:"Upgraded",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"nested"}]},{type:"event",name:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"enum",variants:[]},{type:"event",name:"puppet_vs_gizmo::systems::actions::actions::Event",kind:"enum",variants:[{name:"UpgradeableEvent",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"nested"},{name:"WorldProviderEvent",type:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"nested"}]}];var p={src:"/Puppet//_next/static/media/puppet_preview.82f41b7d.png"},h={src:"/Puppet//_next/static/media/gizmo_preview.1253c5ed.png"},u={src:"/Puppet//_next/static/media/versus.b298df6b.png"},d={src:"/Puppet//_next/static/media/back.33c5057d.png"},m={src:"/Puppet//_next/static/media/small_puppet.9a537536.png"},f={src:"/Puppet//_next/static/media/small_gizmo.c7725c5d.png"},g={src:"/Puppet//_next/static/media/select.be584483.png"},_=a(9767);function y(e){let{player1Hp:t,player2Hp:a,throwStone:r,gameId:i,getGameTurn:o,getFirstPlayer:l,getSecondPlayer:c,getPlayerHealth:p,userAddress:h,isPlayer1:u}=e;return(0,s.useEffect)(()=>{let e;let n=document.getElementById("gameCanvas"),s=null==n?void 0:n.getContext("2d",{alpha:!1});n.width=1280,n.height=522;let d={x:15,y:n.height-350,width:256,height:316,hitboxHeight:316/6,hp:t,maxHp:100},m={x:n.width-290,y:n.height-350,width:256,height:316,hitboxHeight:316/6,hp:a,maxHp:100},f=performance.now(),g=!1;(async()=>{e=await o(i)})();let _=!0,y=null,b=!1,w=0,x={x:543,y:315,width:187.5,height:180},k=["https://klanfontan.github.io/assets/puppet_frames_death/frame_00.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_01.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_02.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_03.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_04.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_05.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_06.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_07.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_08.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_09.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_10.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_11.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_12.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_13.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_14.png","https://klanfontan.github.io/assets/puppet_frames_death/frame_15.png"],v=["https://klanfontan.github.io/assets/gizmo_frames_death/frame_00.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_01.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_02.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_03.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_04.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_05.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_06.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_07.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_08.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_09.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_10.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_11.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_12.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_13.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_14.png","https://klanfontan.github.io/assets/gizmo_frames_death/frame_15.png"],j=[],P=[],E=new Image;E.src="https://klanfontan.github.io/game/Puppet-main/gamecode/background.png";let C=new Image;C.src="https://klanfontan.github.io/game/Puppet-main/gamecode/emptyHpBar.png";let N=new Image;N.src="https://klanfontan.github.io/assets/puppet_frames/frame_00.png";let I=new Image;I.src="https://klanfontan.github.io/assets/gizmo_frames/frame_00.png";let A=new Image;A.src="https://klanfontan.github.io/game/Puppet-main/gamecode/backButton.png";let F={x:50,y:55,width:125,height:45},S=new Image;S.src="https://klanfontan.github.io/img/versus.svg";let z=new Image;z.src="https://klanfontan.github.io/img/square_gizmo.png";let T=new Image;T.src="https://klanfontan.github.io/img/square_puppet.png";let O="Gizmo",M=d.hp,R=m.hp,L=!1,B=!1,D=0,G=0;function U(){G=12*Math.random()-6}function Y(e,t,a,n,r){s&&(s.beginPath(),s.moveTo(e,t),s.lineTo(e+a,t-r/2),s.lineTo(e+a,t+r/2),s.closePath(),s.fill(),"#FFFFFF"!==s.fillStyle&&(s.lineWidth=2,s.strokeStyle="#FFFFFF",s.stroke()))}let X=document.createElement("canvas"),H=X.getContext("2d");function q(){s&&s.drawImage(X,0,0)}X.width=n.width,X.height=n.height;let W=0,V=0,Z=0,J=0;function Q(e){let t=!el&&(e===d&&L||e===m&&B),a=Date.now()-D;if(t&&a<500){if(!s)return;s.globalAlpha=Math.floor(a/100)%2==0?.5:1}else{if(e===d&&(L=!1),e===m&&(B=!1),!s)return;s.globalAlpha=1}e===d?s.drawImage(N,e.x,e.y,e.width,e.height):s.drawImage(I,e.x,e.y,e.width,e.height);let n=performance.now();if(n-e_>50&&(eg=(eg+1)%ef.length,e_=n),e===d){if(Z>0){let e=n-Z;e<1e3?W=1-e/1e3:(W=0,Z=0)}s.globalAlpha=W}else{if(J>0){let e=n-J;e<1e3?V=1-e/1e3:(V=0,J=0)}s.globalAlpha=V}let r=e.x+(e.width-125)/2,i=e.y-31.25+60;s.drawImage(ef[eg],r,i,125,125),s.globalAlpha=1}function K(){let e=n.width-350-150;if(!s)return;s.fillStyle="white",s.font="28px Fortnite",s.textAlign="right",s.shadowColor="rgba(100, 13, 13, 1)",s.shadowOffsetX=0,s.shadowOffsetY=4,s.fillText(O,460,45),s.shadowOffsetX=0,s.shadowOffsetY=0,s.fillStyle="rgba(232, 44, 64, 1)";let t=n.width/2-s.measureText(O).width-260;$(t,29,70,30,5),s.fillStyle="white",s.font="18px Fortnite",s.textAlign="center",s.shadowColor="rgba(0, 0, 0, 0.1)",s.shadowOffsetX=0,s.shadowOffsetY=3,s.fillText("PUPPET",t+35,46),s.shadowOffsetX=0,s.shadowOffsetY=0,null!==M&&null!==d.hp&&M>d.hp&&(M-=.5)<d.hp&&(M=d.hp),s.fillStyle="white",$(150,70,350,12,6),s.fillStyle="red",null!==M&&M>0&&$(152,72,M/d.maxHp*346,8,4),s.fillStyle="white",s.font="28px Fortnite",s.textAlign="left",s.shadowColor="rgba(100, 13, 13, 1)",s.shadowOffsetX=0,s.shadowOffsetY=4,s.fillText(O,n.width-460,45),s.shadowOffsetX=0,s.shadowOffsetY=0,s.fillStyle="rgba(137, 223, 111, 1)";let a=s.measureText(O).width,r=n.width/2+a+190;$(r,29,70,30,5),s.fillStyle="white",s.font="18px Fortnite",s.textAlign="center",s.shadowColor="rgba(0, 0, 0, 0.1)",s.shadowOffsetX=0,s.shadowOffsetY=3,s.fillText("GIZMO",r+35,46),s.shadowOffsetX=0,s.shadowOffsetY=0,null!==R&&null!==m.hp&&R>m.hp&&(R-=.5)<m.hp&&(R=m.hp),s.fillStyle="white",$(e,70,350,12,6),s.fillStyle="red",null!==R&&R>0&&$(e+2+346*(1-R/m.maxHp),72,R/m.maxHp*346,8,4)}function $(e,t,a,n,r){s&&(s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+a-r,t),s.quadraticCurveTo(e+a,t,e+a,t+r),s.lineTo(e+a,t+n-r),s.quadraticCurveTo(e+a,t+n,e+a-r,t+n),s.lineTo(e+r,t+n),s.quadraticCurveTo(e,t+n,e,t+n-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath(),s.fill())}function ee(){e=1===e?2:1,_=!0,U(),2===e&&eo()}n.addEventListener("mousedown",t=>{_&&!y&&(u?1===e:2===e)&&(b=!0,ey=!0)}),n.addEventListener("mouseup",t=>{b&&_&&(u?1===e:2===e)&&(b=!1,ey=!1,er())});let et=["https://klanfontan.github.io/assets/puppet_frames/frame_00.png","https://klanfontan.github.io/assets/puppet_frames/frame_01.png","https://klanfontan.github.io/assets/puppet_frames/frame_02.png","https://klanfontan.github.io/assets/puppet_frames/frame_03.png","https://klanfontan.github.io/assets/puppet_frames/frame_04.png","https://klanfontan.github.io/assets/puppet_frames/frame_05.png","https://klanfontan.github.io/assets/puppet_frames/frame_06.png","https://klanfontan.github.io/assets/puppet_frames/frame_07.png","https://klanfontan.github.io/assets/puppet_frames/frame_08.png","https://klanfontan.github.io/assets/puppet_frames/frame_09.png","https://klanfontan.github.io/assets/puppet_frames/frame_10.png","https://klanfontan.github.io/assets/puppet_frames/frame_11.png"],ea=["https://klanfontan.github.io/assets/gizmo_frames/frame_00.png","https://klanfontan.github.io/assets/gizmo_frames/frame_01.png","https://klanfontan.github.io/assets/gizmo_frames/frame_02.png","https://klanfontan.github.io/assets/gizmo_frames/frame_03.png","https://klanfontan.github.io/assets/gizmo_frames/frame_04.png","https://klanfontan.github.io/assets/gizmo_frames/frame_05.png","https://klanfontan.github.io/assets/gizmo_frames/frame_06.png","https://klanfontan.github.io/assets/gizmo_frames/frame_07.png","https://klanfontan.github.io/assets/gizmo_frames/frame_08.png","https://klanfontan.github.io/assets/gizmo_frames/frame_09.png","https://klanfontan.github.io/assets/gizmo_frames/frame_10.png","https://klanfontan.github.io/assets/gizmo_frames/frame_11.png"],en=0;function es(e){return Promise.all(e.map(e=>new Promise((t,a)=>{let n=new Image;n.src=e,n.onload=t,n.onerror=a})))}function er(){let t;let a=.5*G,n=3.2+w;1===e?(t=ei(et,N,"https://klanfontan.github.io/assets/puppet_frames/frame_00.png"),y={x:d.x+d.width-210,y:d.y+d.height/2+20,speedX:n+a,speedY:-(1.5*n)}):(t=ei(ea,I,"https://klanfontan.github.io/assets/gizmo_frames/frame_00.png"),y={x:m.x+210,y:m.y+m.height/2+20,speedX:-n+a,speedY:-(1.5*n)}),w=0,_=!1,setTimeout(()=>{t()},350)}function ei(e,t,a){en=0;let n=performance.now(),s=!0;return requestAnimationFrame(function a(r){s&&(r-n>=25&&(t.src=e[en],en=(en+1)%e.length,n=r),requestAnimationFrame(a))}),function(){s=!1,t.src=a}}async function eo(){let e=await o(i);if(1===e&&await l(i)===h||2===e&&await c(i)===h){let e=await p(null!=h?h:"");h&&null!==e&&null!==d.hp&&e<d.hp?(ey=!0,setTimeout(()=>{ey=!1,er(),y&&(y.x=d.x+d.width/2,y.y=d.y+d.height/2,eh())},800*Math.random()+400)):setTimeout(()=>{eo()},1e3)}else setTimeout(()=>{eo()},1e3)}Promise.all([es(et),es(ea)]).then(()=>{ep()}).catch(e=>{console.error("Ошибка загрузки кадров:",e)});let el=!1,ec=!0;function ep(){if(ec)return;let t=performance.now(),a=(t-f)/1e3;if(f=t,s){let t,r,i,o,l;s.clearRect(0,0,n.width,n.height),q(),ey&&w<8&&_&&(w+=6*a),y&&(y.x+=y.speedX*a*100,y.y+=y.speedY*a*100,y.speedY+=.17*a*100,(y.x>n.width||y.x<0||y.y>n.height)&&(y=null,ee())),eh(),s.globalAlpha=1,Q(d),Q(m),y&&y&&s&&(s.fillStyle="gray",s.beginPath(),s.arc(y.x,y.y,10,0,2*Math.PI),s.fill()),(el||g)&&(ej=Math.max(0,ej-.05)),s.globalAlpha=ej,K(),ev.forEach((e,t)=>{if(!e.used){if(1===t)s&&(s.save(),s.translate(e.x+e.width/2,e.y+e.height/2),s.scale(-1,1),s.drawImage(ek,-e.width/2,-e.height/2,e.width,e.height),s.restore());else{if(!s)return;s.drawImage(ek,e.x,e.y,e.width,e.height)}}}),function(){let e=(n.width-200)/2;if(!s)return;s.shadowColor="#03043E",s.shadowOffsetX=0,s.shadowOffsetY=4,s.shadowBlur=0,s.fillStyle="#B3B4FE",s.fillRect(e,125,200,40),s.shadowColor="transparent",s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowBlur=0;let t=Math.max(-6,Math.min(6,G));s.fillStyle="#FFFFFF",s.fillRect(e+100,125,t/6*100,40),s.fillStyle="#0003FA",s.font="28px Fortnite",s.textAlign="center",s.fillText("Wind",n.width/2,146),s.fillStyle=t<0?"#FFFFFF":"#B3B4FE",Y(e-20-35,145,40,0,20),s.fillStyle=t>0?"#FFFFFF":"#B3B4FE",Y(e+200+20+35,145,-40,0,20)}(),ex(s),el||ew(s),_&&s&&(1===e?(t=d.x+d.width/1.55,r=d.y+150,o=(i=5*Math.PI/4+Math.PI-Math.PI/6)-w/8*(l=.85*Math.PI)):(t=m.x+m.width/2.5,r=m.y+150,o=(i=3*Math.PI/4+Math.PI/6)+w/8*(l=.85*Math.PI)),s.beginPath(),s.strokeStyle="rgba(255, 255, 255, 0.3)",s.lineWidth=30,s.arc(t,r,125,i,i+(1===e?-l:l),1===e),s.stroke(),ey&&(s.beginPath(),s.strokeStyle="white",s.lineWidth=30,s.arc(t,r,125,i,o,1===e),s.stroke())),s.globalAlpha=1,el&&null===y||requestAnimationFrame(ep)}}function eh(){if(y){var t,a,o,l,c,p,h,f;if(y.x>=x.x&&y.x<=x.x+x.width&&y.y>=x.y&&y.y<=x.y+x.height||(t=y.x,a=y.y,o=x.x,l=x.y,c=x.x+x.width/2,p=x.y-80,h=x.x+x.width,.1>Math.abs(Math.abs((c-o)*((f=x.y)-l)-(h-o)*(p-l))/2-(Math.abs((o-t)*(p-a)-(c-t)*(l-a))/2+Math.abs((c-t)*(f-a)-(h-t)*(p-a))/2+Math.abs((h-t)*(l-a)-(o-t)*(f-a))/2)))){y=null,ee();return}let _=1===e?m:d,b=_.y+(_.height-_.hitboxHeight)/2,w=Math.max(_.x,Math.min(y.x,_.x+_.width)),k=Math.max(b,Math.min(y.y,b+_.hitboxHeight));if(10>=Math.sqrt((y.x-w)**2+(y.y-k)**2)){if((!u&&_===d||u&&_===m)&&(r(i,1),null!==_.hp&&(_.hp-=15)),null!==_.hp&&_.hp<=0&&(_.hp=0,_.height=_.height/1.5,_.y=n.height-_.height-34),y=null,_===m?(B=!0,J=performance.now()):(L=!0,Z=performance.now()),D=Date.now(),0!==_.hp||g)ee();else{el=!0,g=!0;let t=1===e?"Puppet":"Gizmo",a=1===e?2:1;if(L=!1,B=!1,!s)return;s.globalAlpha=1,cancelAnimationFrame(ep),function(e,t){console.log("Starting death animation for player",e);let a=0,r=0,i=1===e?j:P;if(0===i.length){console.error("No death animation frames loaded!"),t&&t();return}!function o(){if(a>=i.length){if(++r<6){a=0,requestAnimationFrame(()=>setTimeout(o,25));return}console.log("Animation complete after",6,"plays"),t&&t();return}(1===e?N:I).src=i[a].src,s&&(s.clearRect(0,0,n.width,n.height),q(),Q(d),Q(m),K(),a++,requestAnimationFrame(()=>setTimeout(o,25)))}()}(a,()=>{setTimeout(()=>{(function(e){el=!0;let t="Puppet"===e?"#E82C40":"#89DF6F",a=0,r=10,i=Date.now();eu=!0,function o(){let l=Math.min((Date.now()-i)/2e3,1),c=l<.5?2*l*l:-1+(4-2*l)*l;a=c,r=10+38*c,s&&(s.clearRect(0,0,n.width,n.height),s.fillStyle="rgba(".concat(parseInt(t.slice(1,3),16),", ").concat(parseInt(t.slice(3,5),16),", ").concat(parseInt(t.slice(5,7),16),", ").concat(a,")"),s.fillRect(0,0,n.width,n.height),s.fillStyle="rgba(255, 255, 255, ".concat(a,")"),s.font="".concat(r,"px Fortnite"),s.textAlign="center",s.textBaseline="middle",s.fillText("Game Over! ".concat(e," wins!"),n.width/2,n.height/2),eu&&(s.globalAlpha=a,s.drawImage(A,F.x,F.y,F.width,F.height),s.globalAlpha=1),l<1&&requestAnimationFrame(o))}()})(t)},0)})}}else(!u&&_===d||u&&_===m)&&r(i,0)}}let eu=!1,ed=3,em=["https://klanfontan.github.io/assets/gizmo_stars/frame_00.png","https://klanfontan.github.io/assets/gizmo_stars/frame_01.png","https://klanfontan.github.io/assets/gizmo_stars/frame_02.png","https://klanfontan.github.io/assets/gizmo_stars/frame_03.png","https://klanfontan.github.io/assets/gizmo_stars/frame_04.png","https://klanfontan.github.io/assets/gizmo_stars/frame_05.png","https://klanfontan.github.io/assets/gizmo_stars/frame_06.png","https://klanfontan.github.io/assets/gizmo_stars/frame_07.png","https://klanfontan.github.io/assets/gizmo_stars/frame_08.png","https://klanfontan.github.io/assets/gizmo_stars/frame_09.png","https://klanfontan.github.io/assets/gizmo_stars/frame_10.png"],ef=[],eg=0,e_=0;Promise.all([new Promise(e=>E.onload=e),new Promise(e=>C.onload=e),new Promise(e=>N.onload=e),new Promise(e=>I.onload=e)]).then(()=>{(function(){let e=0,t=k.length+v.length;function a(){e++,console.log("Loaded ".concat(e,"/").concat(t," death frames"))}k.forEach(e=>{let t=new Image;t.onload=a,t.src=e,j.push(t)}),v.forEach(e=>{let t=new Image;t.onload=a,t.src=e,P.push(t)})})(),em.forEach(e=>{let t=new Image;t.src=e,ef.push(t)}),H&&(H&&H.drawImage(E,0,0,n.width,n.height),ex(H),ew(H)),U(),function e(){s&&(s.clearRect(0,0,n.width,n.height),s.fillStyle="rgba(232, 44, 64, 1)",s.fillRect(0,0,n.width,n.height),s.fillStyle="white",s.font="100px Fortnite",s.textAlign="center",s.textBaseline="middle",s.fillText(ed.toString(),n.width/2,n.height/2),ed>1?(ed--,setTimeout(e,1e3)):setTimeout(()=>{ed=3,ec=!1,ep()},1e3))}()}),n.addEventListener("click",t=>{if(eu){let a=n.getBoundingClientRect(),s=t.clientX-a.left,r=t.clientY-a.top;s>=F.x&&s<=F.x+F.width&&r>=F.y&&r<=F.y+F.height&&(d.hp=d.maxHp,m.hp=m.maxHp,e=1,_=!0,y=null,w=0,el=!1,g=!1,ep(),eu=!1)}});let ey=!1;function eb(e,t){let a=n.getBoundingClientRect();return e>=a.left&&e<=a.right&&t>=a.top&&t<=a.bottom}function ew(e){let t=n.width/2;e.drawImage(S,t-37.5,30,75,63)}function ex(e){let t=n.width/2+100-30,a=n.width/2-100-65;e.drawImage(z,t,10,100,100),e.drawImage(T,a,10,100,100)}n.addEventListener("touchstart",t=>{let a=t.changedTouches[0],s=a.clientX,r=a.clientY;if(eu&&(n.getBoundingClientRect(),s>=F.x&&s<=F.x+F.width&&r>=F.y&&r<=F.y+F.height)){window.location.href="../../../index.html";return}let i=!1;if(ev.forEach((e,t)=>{if(!e.used&&s>=e.x&&s<=e.x+e.width&&r>=e.y&&r<=e.y+e.height){i=!0;return}}),!i&&eb(s,r)){if(t.preventDefault(),1!==e)return;!_||y||1!==e||(ey=!0)}}),n.addEventListener("touchend",t=>{let a=t.changedTouches[0];if(eb(a.clientX,a.clientY)){if(t.preventDefault(),1!==e)return;ey&&(ey=!1,er())}}),n.addEventListener("touchmove",e=>{e.preventDefault()}),new FontFace("Fortnite","url(https://klanfontan.github.io/game/Puppet-main/gamecode/frt.otf)").load().then(function(e){document.fonts.add(e),s&&(s.font="48px Fortnite")}).catch(function(e){console.error("Ошибка загрузки шрифта:",e)});let ek=new Image;ek.src="https://klanfontan.github.io/game/Puppet-main/gamecode/potion.png";let ev=[{x:65,y:35,width:50,height:70,used:!1},{x:n.width-115,y:35,width:50,height:70,used:!1}];n.addEventListener("click",e=>{e.preventDefault();let t=n.getBoundingClientRect(),a=e.clientX-t.left,s=e.clientY-t.top;ev.forEach((e,t)=>{!e.used&&a>=e.x&&a<=e.x+e.width&&s>=e.y&&(e.y,e.height)})});let ej=1},[]),(0,n.jsx)("canvas",{id:"gameCanvas",width:"1280",height:"522"})}i()(()=>a.e(959).then(a.bind(a,2959)),{loadableGenerated:{webpack:()=>[2959]},ssr:!1});var b=()=>{let{data:e,isLoading:t,isError:a}=(0,o.Ov)({blockIdentifier:"latest"}),{connect:r,connectors:i}=(0,o.$4)(),{disconnect:b}=(0,o.qL)(),[w,x]=(0,s.useState)(!0),[k,v]=(0,s.useState)(!1),[j,P]=(0,s.useState)(!1),[E,C]=(0,s.useState)(null),[N,I]=(0,s.useState)(!1),[A,F]=(0,s.useState)(0),[S,z]=(0,s.useState)(0),[T,O]=(0,s.useState)(!1),[M,R]=(0,s.useState)(),[L,B]=(0,s.useState)(!1),[D,G]=(0,s.useState)(null),[U,Y]=(0,s.useState)(null),[X,H]=(0,s.useState)(null),q=async()=>{if(en&&V)try{"Puppet"===E?z(1):z(2),F(Math.floor(4294967296*Math.random())),await eb(S,A)&&B(!0)}catch(e){console.error("Error sending transaction:",e)}},W=async()=>{if(en&&V)try{if(await ej(A)!=V&&await ev(A)==V||await ev(A)!=V&&await ej(A)==V){B(!0);return}await ew(A)&&B(!0)}catch(e){console.error("Error sending transaction:",e)}},{address:V}=(0,o.mA)(),{account:Z}=(0,o.mA)(),{isLoading:J,isError:Q,error:K,data:$}=(0,o.KQ)({address:V,watch:!0}),ee="0x0409f17fbe2145d007c6d18731fa9919e943a60230fe5c2647f702615a49e4f9",[et,ea]=(0,s.useState)(0),{contract:en}=(0,o.cq)({abi:c,address:ee}),es=(0,s.useMemo)(()=>{if(!V||!en)return console.error("Contract or userAddress is undefined"),console.log("Contract:",en),console.log("User Address:",V),[]},[en,V,et]),{send:er,data:ei,isPending:eo}=(0,o.pQ)({calls:es}),{data:el,status:ec,isLoading:ep,isError:eh,error:eu}=(0,o.VS)({hash:null==ei?void 0:ei.transaction_hash,watch:!0}),ed=(0,s.useMemo)(()=>new l.Gf({nodeUrl:_.env.NEXT_PUBLIC_RPC_URL}),[]),[em,ef]=(0,s.useState)([]),eg=(0,s.useRef)(0),{data:e_}=(0,o.Ov)({refetchInterval:3e3}),ey=(0,s.useCallback)(async(e,t)=>{if(!(t<=eg.current))try{let a=eg.current+1,n=await ed.getEvents({address:e.address,from_block:{block_number:a},to_block:{block_number:t},chunk_size:500});n&&n.events&&ef(e=>[...e,...n.events]),eg.current=t}catch(e){console.error("Error checking for events:",e)}},[ed]);(0,s.useEffect)(()=>{en&&e_&&ey(en,e_)},[en,e_,ey]),(0,s.useMemo)(()=>[...em].reverse().slice(0,5),[em]),(0,s.useEffect)(()=>{let e=setTimeout(()=>{v(!0),setTimeout(()=>x(!1),1e3)},2e3);return()=>clearTimeout(e)},[]),(0,s.useEffect)(()=>{(async()=>{if(V&&A){let e=await ek(V),t=await ej(A),a=t?await ek(t):null;G(e),Y(a)}})()},[V,A]),(0,s.useEffect)(()=>{(async()=>{V&&A&&H(await ej(A)!==V)})()},[V,A]);let eb=(0,s.useCallback)(async(e,t)=>{if(!Z)return!1;O(!0),R(void 0);try{let{transaction_hash:a}=await Z.execute([{contractAddress:ee,entrypoint:"create_game",calldata:[e,t]}]);return R(a),!0}catch(e){return console.error(e),!1}finally{O(!1)}},[Z]),ew=(0,s.useCallback)(async e=>{if(!Z)return!1;O(!0),R(void 0);try{let{transaction_hash:t}=await Z.execute([{contractAddress:ee,entrypoint:"join_game",calldata:[e]}]);return R(t),!0}catch(e){return console.error(e),!1}finally{O(!1)}},[Z]),ex=(0,s.useCallback)(async(e,t)=>{if(!Z)return!1;O(!0),R(void 0);try{let{transaction_hash:a}=await Z.execute([{contractAddress:ee,entrypoint:"throw",calldata:[e,t]}]);return R(a),!0}catch(e){return console.error(e),!1}finally{O(!1)}},[Z]);(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),R(void 0);try{let t=await Z.callContract({contractAddress:ee,entrypoint:"game_winner",calldata:[e]});return console.log("Game winner:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling game_winner:",e),null}finally{O(!1)}},[Z]);let ek=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),R(void 0);try{let t=await Z.callContract({contractAddress:ee,entrypoint:"player_health",calldata:[e]});return console.log("Player health:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling player_health:",e),null}finally{O(!1)}},[Z]),ev=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),R(void 0);try{let t=await Z.callContract({contractAddress:ee,entrypoint:"get_first_player",calldata:[e]});return console.log("First player:",t),t[0]}catch(e){return console.error("Error calling get_first_player:",e),null}finally{O(!1)}},[Z]),ej=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),R(void 0);try{let t=await Z.callContract({contractAddress:ee,entrypoint:"get_second_player",calldata:[e]});return console.log("Second player:",t),t[0]}catch(e){return console.error("Error calling get_second_player:",e),null}finally{O(!1)}},[Z]),eP=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),R(void 0);try{let t=await Z.callContract({contractAddress:ee,entrypoint:"get_game_turn",calldata:[e]});return console.log("Game turn:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling get_game_turn:",e),null}finally{O(!1)}},[Z]);return(0,n.jsx)("div",{className:"game-screen ".concat("Puppet"===E?"puppet-bg":"Gizmo"===E?"gizmo-bg":""),style:{opacity:k?1:0},children:j?(0,n.jsx)("div",{className:"screen",children:N?(0,n.jsx)(n.Fragment,{children:L?(0,n.jsx)(y,{player1Hp:D,player2Hp:U,throwStone:ex,gameId:A,getGameTurn:eP,getFirstPlayer:ev,getSecondPlayer:ej,getPlayerHealth:ek,userAddress:null!=V?V:null,isPlayer1:null!=X&&X}):(0,n.jsxs)(n.Fragment,{children:["Puppet"===E&&(0,n.jsxs)("div",{className:"puppet-page",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:d.src,alt:"Back",onClick:()=>I(!1)})}),(0,n.jsxs)("div",{className:"enemy-select-container",children:[(0,n.jsxs)("div",{className:"enemy-selector",children:[(0,n.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,n.jsx)("img",{src:m.src,alt:"Puppet"}),(0,n.jsx)("h3",{children:"PUPPET"}),(0,n.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{className:"victims-container",children:[(0,n.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,n.jsxs)("div",{className:"victim-selector",children:[(0,n.jsx)("button",{className:"create-button",onClick:q,children:"CREATE GAME"}),(0,n.jsxs)("div",{className:"game-id-input",children:[(0,n.jsx)("input",{className:"game-id-input-field",type:"number",value:A,onChange:e=>F(parseInt(e.target.value))}),(0,n.jsx)("button",{className:"join-button",onClick:W,children:"JOIN GAME"})]})]})]})]})]})]}),"Gizmo"===E&&(0,n.jsxs)("div",{className:"gizmo-page",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:d.src,alt:"Back",onClick:()=>I(!1)})}),(0,n.jsxs)("div",{className:"enemy-select-container",children:[(0,n.jsxs)("div",{className:"enemy-selector",children:[(0,n.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,n.jsx)("img",{src:f.src,alt:"Gizmo"}),(0,n.jsx)("h3",{children:"GIZMO"}),(0,n.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{className:"victims-container",children:[(0,n.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,n.jsxs)("div",{className:"victim-selector",children:[(0,n.jsx)("button",{className:"create-button",onClick:q,children:"CREATE GAME"}),(0,n.jsxs)("div",{className:"game-id-input",children:[(0,n.jsx)("input",{className:"game-id-input-field",type:"number",value:A,onChange:e=>F(parseInt(e.target.value))}),(0,n.jsx)("button",{className:"join-button",onClick:W,children:"JOIN GAME"})]})]})]})]})]})]})]})}):(0,n.jsxs)("div",{className:"character-select-screen",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:d.src,alt:"Back",onClick:()=>P(!1)})}),(0,n.jsxs)("div",{className:"character-select-container",children:[(0,n.jsxs)("div",{id:"puppet-selector",className:"character-selector",onClick:()=>{C("Puppet"),I(!0)},children:[(0,n.jsx)("img",{src:m.src,alt:"Puppet"}),(0,n.jsx)("h3",{children:"PUPPET"}),(0,n.jsx)("p",{className:"character-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{id:"gizmo-selector",className:"character-selector",onClick:()=>{C("Gizmo"),I(!0)},children:[(0,n.jsx)("img",{src:f.src,alt:"Gizmo"}),(0,n.jsx)("h3",{children:"GIZMO"}),(0,n.jsx)("p",{className:"character-description",children:"55 (67%)"})]})]}),(0,n.jsx)("div",{className:"select-container",children:(0,n.jsx)("img",{className:"select-svg",src:g.src,alt:"Select"})})]})]})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"character left-character",children:[(0,n.jsx)("div",{className:"character-name",children:"Puppet"}),(0,n.jsx)("img",{src:p.src,className:"App-left-character",alt:"Left Character"})]}),(0,n.jsxs)("div",{className:"vs-container",children:[(0,n.jsx)("img",{src:u.src,className:"App-vs",alt:"VS"}),(0,n.jsxs)("div",{className:"play-button-container",children:[(0,n.jsx)("button",{className:"start-game-button-text",onClick:()=>{V?(alert("Wallet Address: ".concat(V)),P(!0)):alert("Please connect your wallet")},children:"START GAME"}),i.map((e,t)=>(0,n.jsx)("button",{className:"play-button",onClick:()=>r({connector:e}),children:V?"CONNECTED":"CONNECT"},t))]})]}),(0,n.jsxs)("div",{className:"character right-character",children:[(0,n.jsx)("div",{className:"character-name",children:"Gizmo"}),(0,n.jsx)("img",{src:h.src,className:"App-right-character",alt:"Right Character"})]})]})})}}},function(e){e.O(0,[541,652,412,274,936,744],function(){return e(e.s=8095)}),_N_E=e.O()}]);