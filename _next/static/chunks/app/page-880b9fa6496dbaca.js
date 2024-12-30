(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8095:function(e,t,a){Promise.resolve().then(a.bind(a,8886))},7568:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let n=a(4981);a(5320),a(8978);let s=n._(a(6080));function r(e,t){var a;let n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let r={...n,...t};return(0,s.default)({...r,modules:null==(a=r.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7208:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=a(8165);function s(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return a}},6080:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=a(5320),s=a(8978),r=a(7208),i=a(7893);function o(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},l=function(e){let t={...c,...e},a=(0,s.lazy)(()=>t.loader().then(o)),l=t.loading;function u(e){let o=l?(0,n.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,c=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(i.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(a,{...e})]}):(0,n.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(a,{...e})});return(0,n.jsx)(s.Suspense,{fallback:o,children:c})}return u.displayName="LoadableComponent",u}},7893:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let n=a(5320),s=a(6334);function r(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,s.getExpectedRequestStore)("next/dynamic css"),r=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,n.jsx)(n.Fragment,{children:r.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},8886:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(5320),s=a(8978),r=a(7568),i=a.n(r),o=a(5452),c=a(8439);let l=[{type:"impl",name:"actions__ContractImpl",interface_name:"dojo::contract::interface::IContract"},{type:"interface",name:"dojo::contract::interface::IContract",items:[]},{type:"impl",name:"actions__DeployedContractImpl",interface_name:"dojo::meta::interface::IDeployedResource"},{type:"struct",name:"core::byte_array::ByteArray",members:[{name:"data",type:"core::array::Array::<core::bytes_31::bytes31>"},{name:"pending_word",type:"core::felt252"},{name:"pending_word_len",type:"core::integer::u32"}]},{type:"interface",name:"dojo::meta::interface::IDeployedResource",items:[{type:"function",name:"dojo_name",inputs:[],outputs:[{type:"core::byte_array::ByteArray"}],state_mutability:"view"}]},{type:"impl",name:"ActionsImpl",interface_name:"puppet_vs_gizmo::systems::actions::IActions"},{type:"interface",name:"puppet_vs_gizmo::systems::actions::IActions",items:[{type:"function",name:"create_game",inputs:[{name:"character",type:"core::integer::u8"},{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"join_game",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"throw",inputs:[{name:"game_id",type:"core::integer::u32"},{name:"power",type:"core::integer::u8"}],outputs:[],state_mutability:"external"},{type:"function",name:"player_health",inputs:[{name:"address",type:"core::starknet::contract_address::ContractAddress"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{type:"function",name:"game_winner",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{type:"function",name:"get_first_player",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{type:"function",name:"get_second_player",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{type:"function",name:"get_game_turn",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"}]},{type:"function",name:"dojo_init",inputs:[],outputs:[],state_mutability:"view"},{type:"impl",name:"WorldProviderImpl",interface_name:"dojo::contract::components::world_provider::IWorldProvider"},{type:"struct",name:"dojo::world::iworld::IWorldDispatcher",members:[{name:"contract_address",type:"core::starknet::contract_address::ContractAddress"}]},{type:"interface",name:"dojo::contract::components::world_provider::IWorldProvider",items:[{type:"function",name:"world_dispatcher",inputs:[],outputs:[{type:"dojo::world::iworld::IWorldDispatcher"}],state_mutability:"view"}]},{type:"impl",name:"UpgradeableImpl",interface_name:"dojo::contract::components::upgradeable::IUpgradeable"},{type:"interface",name:"dojo::contract::components::upgradeable::IUpgradeable",items:[{type:"function",name:"upgrade",inputs:[{name:"new_class_hash",type:"core::starknet::class_hash::ClassHash"}],outputs:[],state_mutability:"external"}]},{type:"constructor",name:"constructor",inputs:[]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"struct",members:[{name:"class_hash",type:"core::starknet::class_hash::ClassHash",kind:"data"}]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"enum",variants:[{name:"Upgraded",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"nested"}]},{type:"event",name:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"enum",variants:[]},{type:"event",name:"puppet_vs_gizmo::systems::actions::actions::Event",kind:"enum",variants:[{name:"UpgradeableEvent",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"nested"},{name:"WorldProviderEvent",type:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"nested"}]}];var u={src:"/Puppet//_next/static/media/back.33c5057d.png"},d={src:"/Puppet//_next/static/media/small_puppet.9a537536.png"},p={src:"/Puppet//_next/static/media/small_gizmo.c7725c5d.png"},m={src:"/Puppet//_next/static/media/select.be584483.png"},g=a(9767);function h(e){let{player1Hp:t,player2Hp:a,throwStone:r,gameId:i,getGameTurn:o,getFirstPlayer:c,getSecondPlayer:l,getPlayerHealth:u,userAddress:d,isPlayer1:p}=e;return(0,s.useEffect)(()=>{let e=!1,n=!1,s=!1,c=0,l="none",m="none",g=380,h="none",f=0,y=0,v=null,b=document.querySelector(".potion-img-puppet"),_=document.querySelector(".potion-img-gizmo");function x(){b&&_&&b instanceof HTMLImageElement&&_ instanceof HTMLImageElement&&t&&a&&(100==t?b.src="https://klanfontan.github.io/heal_full.png":t>60?b.src="https://klanfontan.github.io/heal_almost_full.png":t>10?b.src="https://klanfontan.github.io/heal.png":t<=10&&(b.src="https://klanfontan.github.io/heal_low.png"),100==a?_.src="https://klanfontan.github.io/heal_full.png":a>60?_.src="https://klanfontan.github.io/heal_almost_full.png":a>10?_.src="https://klanfontan.github.io/heal.png":a<=10&&(_.src="https://klanfontan.github.io/heal_low.png"))}function j(){return Math.floor(7*Math.random())-3}function w(){if("puppet"==l){let e=document.querySelector(".puppet-stars");e&&e instanceof HTMLImageElement&&(e.style.opacity="0")}else{let e=document.querySelector(".gizmo-stars");e&&e instanceof HTMLImageElement&&(e.style.opacity="0")}}function N(){let e=document.querySelector(".wind-img");if(e&&e instanceof HTMLImageElement){if("puppet"==l)switch(y){case 0:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_0.png";break;case 1:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_1.png";break;case 2:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_2.png";break;case 3:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_3.png";break;case -1:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_minus_1.png";break;case -2:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_minus_2.png";break;case -3:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_minus_3.png"}else switch(y){case 0:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_0.png";break;case 1:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_minus_1.png";break;case 2:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_minus_2.png";break;case 3:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_minus_3.png";break;case -1:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_1.png";break;case -2:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_2.png";break;case -3:e.src="https://klanfontan.github.io/game/Puppet-main/gamecode/wind_plus_3.png"}}}setTimeout(()=>{!function(){let e=document.querySelector(".preloader-video");e&&e instanceof HTMLVideoElement&&(e.style.opacity="0",setTimeout(()=>{e.remove()},1e3))}()},2200),y=j(),N(),x(),o(i).then(e=>{if(1==(v=e)?(m="gizmo",console.log("Current Player: ",l="puppet")):2==v&&(m="puppet",console.log("Current Player: ",l="gizmo")),p){console.log(h="puppet");let e=0,n=0;E&&P&&(t&&(f=t,e=t>=10?t/15*61.5:0),a&&(f=a,n=a>=10?a/15*61.5:0),2===v?(s=!0,T()):s=!1,E.style.width="".concat(e,"px"),P.style.width="".concat(n,"px"))}else{console.log(h="gizmo");let e=0,n=0;E&&P&&(t&&(f=t,e=t>=10?t/15*61.5:0),a&&(f=a,n=a>=10?a/15*61.5:0),1===v?(s=!0,T()):s=!1,E.style.width="".concat(e,"px"),P.style.width="".concat(n,"px"))}});let k=null,E=null,P=null;function S(){("puppet"!=h||1!==v||n)&&("gizmo"!=h||2!==v||n)||(e=!0,c=0,function t(){if(e){c+=1;let e=g+10;"puppet"==l?(document.querySelector(".player-svg-puppet"),k=document.querySelector(".purple-puppet")):(document.querySelector(".player-svg-gizmo"),k=document.querySelector(".purple-gizmo")),k&&(k.style.strokeDashoffset=e.toString(),k.style.transition="stroke-dashoffset 0.1s ease",g=e),c<10&&setTimeout(t,100)}}())}function C(){e&&(e=!1,(k="puppet"==l?document.querySelector(".purple-puppet"):document.querySelector(".purple-gizmo"))&&(k.style.strokeDashoffset="380",g=380),c>10&&(c=10),I(m,l,c),L(),y=j(),N(),x())}async function T(){setTimeout(async()=>{let e=await o(i);if(console.log("Current Chain Turn: ",e),s&&d&&(p&&1===e||!p&&2===e)){let e=await u(d);console.log("New User Health: ",e),f>(null!=e?e:0)?(console.log("User Health: ",f=null!=e?e:f),I(m,l,6+y)):I(m,l,(.5>Math.random()?Math.floor(4*Math.random()):9+Math.floor(2*Math.random()))+y),L(),y=j(),N(),x()}else T()},13e3)}function I(e,t,a){let s=document.querySelector(".coconut-wrapper"),o=document.querySelector(".player-".concat(t," .player-img")),c=document.createElement("div");c.id="coconut",c.className="coconut-".concat(t),s&&s.appendChild(c),console.log(a),o&&o instanceof HTMLImageElement&&(o.src="https://klanfontan.github.io/game/Puppet-main/gamecode/".concat(t,".gif")),a>=6+y&&a<=7+y?(s&&s.classList.add("animate-coconut-".concat(t)),h==t&&r(i,1),setTimeout(()=>{!function(){if("puppet"==m){let e=document.querySelector(".puppet-stars");e&&e instanceof HTMLImageElement&&(e.style.opacity="1",setTimeout(()=>w(),3e3))}else{let e=document.querySelector(".gizmo-stars");e&&e instanceof HTMLImageElement&&(e.style.opacity="1",setTimeout(()=>w(),3e3))}}()},1500),function(e){let t=document.querySelector(".health-bar-".concat(e," .health-bar-inner"));if(t&&t instanceof HTMLElement){let a=parseFloat(getComputedStyle(t).width),s=document.querySelector(".player-".concat(e," .player-img")),r=document.querySelector(".player-svg-puppet"),i=document.querySelector(".player-svg-gizmo");a>61.5?t.style.width="".concat(a-61.5,"px"):(t.style.width="0px",n=!0,s&&s instanceof HTMLImageElement&&(s.src="https://klanfontan.github.io/game/Puppet-main/gamecode/".concat(e,"_dead.gif"),s.style.paddingTop="75px"),r&&r instanceof SVGSVGElement&&r.classList.add("hidden"),i&&i instanceof SVGSVGElement&&i.classList.add("hidden")),t.style.transition="width 0.5s ease"}}(e)):a>=8+y?(s&&s.classList.add("animate-coconut-overthrow-".concat(t)),h==t&&r(i,0)):a<=1+y?(s&&s.classList.add("animate-coconut-barricade-".concat(t)),h==t&&r(i,0)):a<=5+y&&(s&&s.classList.add("animate-coconut-underthrow-".concat(t)),h==t&&r(i,0)),setTimeout(()=>{o&&o instanceof HTMLImageElement&&(o.src="https://klanfontan.github.io/assets/".concat(t,"_frames/frame_00.png"))},300),setTimeout(()=>{s&&(s.removeChild(c),s.classList.remove("animate-coconut-".concat(t),"animate-coconut-overthrow-".concat(t),"animate-coconut-underthrow-".concat(t),"animate-coconut-barricade-".concat(t)))},750)}function L(){if(!n){let e=document.querySelector(".player-svg-".concat(l));e&&e.classList.add("hidden"),m="puppet"===m?"gizmo":"puppet",v=1===v?2:1,(l="puppet"===l?"gizmo":"puppet")==h?s=!1:(s=!0,T());let t=document.querySelector(".player-svg-".concat(l));t&&t.classList.remove("hidden")}}E=document.querySelector(".health-bar-puppet .health-bar-inner"),P=document.querySelector(".health-bar-gizmo .health-bar-inner"),!n&&(k="puppet"===l?document.querySelector(".purple-puppet"):document.querySelector(".purple-gizmo"))&&k instanceof HTMLElement&&k.classList.add("hidden"),/Mobi|Android/i.test(navigator.userAgent)?(document.addEventListener("touchstart",S),document.addEventListener("touchend",C)):(document.addEventListener("mousedown",S),document.addEventListener("mouseup",C)),document.addEventListener("contextmenu",function(e){e.preventDefault()},!1)},[]),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"preloader-container",children:(0,n.jsx)("video",{className:"preloader-video",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/intro.mp4",autoPlay:!0,muted:!0,playsInline:!0})}),(0,n.jsxs)("div",{className:"game-board",children:[(0,n.jsxs)("div",{className:"bars-container",children:[(0,n.jsxs)("div",{className:"puppet-bar",children:[(0,n.jsx)("div",{className:"potion left-potion",children:(0,n.jsx)("img",{className:"potion-img-puppet",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/potion.png",alt:"potion"})}),(0,n.jsxs)("div",{className:"health-container",children:[(0,n.jsxs)("div",{className:"nickname-container",children:[(0,n.jsx)("div",{className:"tag",children:"Puppet"}),(0,n.jsx)("div",{className:"nickname",children:"Black Mirror Designer"})]}),(0,n.jsx)("div",{className:"health-bar health-bar-puppet",children:(0,n.jsx)("div",{className:"health-bar-inner"})})]}),(0,n.jsx)("div",{className:"avatar avatar-puppet",children:(0,n.jsx)("img",{className:"avatar-img",src:"https://klanfontan.github.io/img/square_puppet.png",alt:"avatar"})})]}),(0,n.jsx)("div",{className:"versus-container",children:(0,n.jsx)("img",{className:"versus-img",src:"https://klanfontan.github.io/img/versus.svg",alt:"versus"})}),(0,n.jsxs)("div",{className:"gizmo-bar",children:[(0,n.jsx)("div",{className:"avatar avatar-gizmo",children:(0,n.jsx)("img",{className:"avatar-img",src:"https://klanfontan.github.io/img/square_gizmo.png",alt:"avatar"})}),(0,n.jsxs)("div",{className:"health-container health-container-gizmo",children:[(0,n.jsxs)("div",{className:"nickname-container nickname-container-gizmo",children:[(0,n.jsx)("div",{className:"nickname",children:"Bulbhead"}),(0,n.jsx)("div",{className:"tag tag-gizmo",children:"Gizmo"})]}),(0,n.jsx)("div",{className:"health-bar health-bar-gizmo gizmo-health-bar-reverse",children:(0,n.jsx)("div",{className:"health-bar-inner"})})]}),(0,n.jsx)("div",{className:"potion right-potion",children:(0,n.jsx)("img",{className:"potion-img-gizmo",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/potion.png",alt:"potion"})})]})]}),(0,n.jsx)("div",{className:"wind-container",children:(0,n.jsx)("img",{className:"wind-img",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/wind.png",alt:"wind"})}),(0,n.jsxs)("div",{className:"players-container",children:[(0,n.jsxs)("div",{className:"player player-puppet",children:[(0,n.jsx)("img",{className:"puppet-stars",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/Stars_Puppet.gif",alt:"stars"}),(0,n.jsx)("img",{className:"player-img",src:"https://klanfontan.github.io/assets/puppet_frames/frame_00.png",alt:"avatar"}),(0,n.jsxs)("svg",{className:"player-svg-puppet",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",children:[(0,n.jsx)("path",{className:"grey",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none"}}),(0,n.jsx)("path",{className:"purple-puppet",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none",strokeDashoffset:380}})]})]}),(0,n.jsxs)("div",{className:"player player-gizmo",children:[(0,n.jsx)("img",{className:"gizmo-stars",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/Stars_Gizmo.gif",alt:"stars"}),(0,n.jsx)("img",{className:"player-img",src:"https://klanfontan.github.io/assets/gizmo_frames/frame_00.png",alt:"avatar"}),(0,n.jsxs)("svg",{className:"player-svg-gizmo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",children:[(0,n.jsx)("path",{className:"grey",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none"}}),(0,n.jsx)("path",{className:"purple-gizmo",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none",strokeDashoffset:380}})]})]})]}),(0,n.jsx)("div",{className:"coconut-wrapper"})]})]})}i()(()=>a.e(959).then(a.bind(a,2959)),{loadableGenerated:{webpack:()=>[2959]},ssr:!1});var f=()=>{let{data:e,isLoading:t,isError:a}=(0,o.Ov)({blockIdentifier:"latest"}),{connect:r,connectors:i}=(0,o.$4)(),{disconnect:f}=(0,o.qL)(),[y,v]=(0,s.useState)(!0),[b,_]=(0,s.useState)(!1),[x,j]=(0,s.useState)(!0),[w,N]=(0,s.useState)(!1),[k,E]=(0,s.useState)(null),[P,S]=(0,s.useState)(!1),[C,T]=(0,s.useState)("CREATE GAME"),[I,L]=(0,s.useState)(0),[z,M]=(0,s.useState)(1),[A,O]=(0,s.useState)(!1),[q,G]=(0,s.useState)(),[U,D]=(0,s.useState)(!1),[R,H]=(0,s.useState)(null),[B,F]=(0,s.useState)(null),[V,W]=(0,s.useState)(null),[Y,X]=(0,s.useState)(null),J=async()=>{if(er&&Q)try{if(await eP(I)!=Q&&await eE(I)==Q||await eE(I)!=Q&&await eP(I)==Q){D(!0);return}if(await ew(I))for(;;){let e=await eE(I),t=await eP(I);if(e&&t){if(e!=t&&await ek(e)===100&&await ek(t)===100)await new Promise(e=>setTimeout(e,1e3));else{setTimeout(async()=>{if(Q&&I){if(t===Q){let t=await ek(Q),a=e?await ek(e):null;H(a),F(t)}else{let e=await ek(Q),a=t?await ek(t):null;H(e),F(a)}}W(!1),D(!0)},6e3);break}}}}catch(e){console.error("Error sending transaction:",e)}},{address:Q}=(0,o.mA)(),{account:Z}=(0,o.mA)(),{isLoading:K,isError:$,error:ee,data:et}=(0,o.KQ)({address:Q,watch:!0}),ea="0x0409f17fbe2145d007c6d18731fa9919e943a60230fe5c2647f702615a49e4f9",[en,es]=(0,s.useState)(0),{contract:er}=(0,o.cq)({abi:l,address:ea}),ei=(0,s.useMemo)(()=>{if(!Q||!er)return console.error("Contract or userAddress is undefined"),console.log("Contract:",er),console.log("User Address:",Q),[]},[er,Q,en]),{send:eo,data:ec,isPending:el}=(0,o.pQ)({calls:ei}),{data:eu,status:ed,isLoading:ep,isError:em,error:eg}=(0,o.VS)({hash:null==ec?void 0:ec.transaction_hash,watch:!0}),eh=(0,s.useMemo)(()=>new c.Gf({nodeUrl:g.env.NEXT_PUBLIC_RPC_URL}),[]),[ef,ey]=(0,s.useState)([]),ev=(0,s.useRef)(0),{data:eb}=(0,o.Ov)({refetchInterval:3e3}),e_=(0,s.useCallback)(async(e,t)=>{if(!(t<=ev.current))try{let a=ev.current+1,n=await eh.getEvents({address:e.address,from_block:{block_number:a},to_block:{block_number:t},chunk_size:500});n&&n.events&&ey(e=>[...e,...n.events]),ev.current=t}catch(e){console.error("Error checking for events:",e)}},[eh]);(0,s.useEffect)(()=>{er&&eb&&e_(er,eb)},[er,eb,e_]),(0,s.useMemo)(()=>[...ef].reverse().slice(0,5),[ef]),(0,s.useEffect)(()=>{document.title="Puppet vs Gizmo"},[]),(0,s.useEffect)(()=>{(async()=>{if(Q&&I){let e=await eP(I),t=await eE(I);if(e===Q){let e=await ek(Q);H(t?await ek(t):null),F(e)}else{let t=await ek(Q),a=e?await ek(e):null;H(t),F(a)}}})()},[Q,I]),(0,s.useEffect)(()=>{(async()=>{Q&&I&&(await eE(I)==Q?W(!0):W(!1))})()},[Q,I]);let ex=async()=>{if(er&&Q){T("Waiting for Opponent");try{if("Puppet"===k?M(1):"Gizmo"===k&&M(2),await ej(z,I))for(;;){let e=await eE(I),t=await eP(I);if(e&&t){if(e!=t&&await ek(e)==100&&await ek(t)==100)await new Promise(e=>setTimeout(e,1e3));else{setTimeout(async()=>{H(100),F(100),W(!0),D(!0)},6e3);break}}}}catch(e){console.error("Error sending transaction:",e)}}},ej=(0,s.useCallback)(async(e,t)=>{if(!Z)return!1;O(!0),G(void 0);try{let{transaction_hash:a}=await Z.execute([{contractAddress:ea,entrypoint:"create_game",calldata:[e,t]}]);return G(a),!0}catch(e){return console.error(e),!1}finally{O(!1)}},[Z]),ew=(0,s.useCallback)(async e=>{if(!Z)return!1;O(!0),G(void 0);try{let{transaction_hash:t}=await Z.execute([{contractAddress:ea,entrypoint:"join_game",calldata:[e]}]);return G(t),!0}catch(e){return console.error(e),!1}finally{O(!1)}},[Z]),eN=(0,s.useCallback)(async(e,t)=>{if(!Z)return!1;O(!0),G(void 0);try{let{transaction_hash:a}=await Z.execute([{contractAddress:ea,entrypoint:"throw",calldata:[e,t]}]);return G(a),!0}catch(e){return console.error(e),!1}finally{O(!1)}},[Z]);(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),G(void 0);try{let t=await Z.callContract({contractAddress:ea,entrypoint:"game_winner",calldata:[e]});return console.log("Game winner:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling game_winner:",e),null}finally{O(!1)}},[Z]);let ek=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),G(void 0);try{let t=await Z.callContract({contractAddress:ea,entrypoint:"player_health",calldata:[e]});return console.log("Player health:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling player_health:",e),null}finally{O(!1)}},[Z]),eE=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),G(void 0);try{let t=await Z.callContract({contractAddress:ea,entrypoint:"get_first_player",calldata:[e]});return console.log("First player:",t),t[0]}catch(e){return console.error("Error calling get_first_player:",e),null}finally{O(!1)}},[Z]),eP=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),G(void 0);try{let t=await Z.callContract({contractAddress:ea,entrypoint:"get_second_player",calldata:[e]});return console.log("Second player:",t),t[0]}catch(e){return console.error("Error calling get_second_player:",e),null}finally{O(!1)}},[Z]),eS=(0,s.useCallback)(async e=>{if(!Z)return null;O(!0),G(void 0);try{let t=await Z.callContract({contractAddress:ea,entrypoint:"get_game_turn",calldata:[e]});return console.log("Game turn:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling get_game_turn:",e),null}finally{O(!1)}},[Z]);return(0,s.useEffect)(()=>{let e=setTimeout(()=>{_(!0)},2e3);return()=>clearTimeout(e)},[]),(0,s.useEffect)(()=>{let e=setTimeout(()=>{j(!1)},3e3);return()=>clearTimeout(e)},[]),(0,n.jsx)("div",{className:"game-screen ".concat("Puppet"===k?"puppet-bg":"Gizmo"===k?"gizmo-bg":""),style:{opacity:1},children:w?(0,n.jsx)("div",{className:"screen",children:P?(0,n.jsx)(n.Fragment,{children:U?(0,n.jsx)(h,{player1Hp:R,player2Hp:B,throwStone:eN,gameId:I,getGameTurn:eS,getFirstPlayer:eE,getSecondPlayer:eP,getPlayerHealth:ek,userAddress:null!=Q?Q:null,isPlayer1:null!=V&&V}):(0,n.jsxs)(n.Fragment,{children:["Puppet"===k&&(0,n.jsxs)("div",{className:"puppet-page",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:u.src,alt:"Back",onClick:()=>S(!1)})}),(0,n.jsxs)("div",{className:"enemy-select-container",children:[(0,n.jsxs)("div",{className:"enemy-selector",children:[(0,n.jsx)("h4",{className:"player-text",id:"player-text",children:Y}),(0,n.jsx)("img",{src:d.src,alt:"Puppet"}),(0,n.jsx)("h3",{children:"PUPPET"}),(0,n.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{className:"victims-container",children:[(0,n.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,n.jsxs)("div",{className:"victim-selector",children:[(0,n.jsx)("button",{className:"create-button",onClick:ex,children:C}),(0,n.jsxs)("div",{className:"game-id-input",children:[(0,n.jsx)("input",{className:"game-id-input-field",type:"number",value:I,onChange:e=>L(parseInt(e.target.value))}),(0,n.jsx)("button",{className:"join-button",onClick:J,children:"JOIN GAME"})]})]})]})]})]})]}),"Gizmo"===k&&(0,n.jsxs)("div",{className:"gizmo-page",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:u.src,alt:"Back",onClick:()=>S(!1)})}),(0,n.jsxs)("div",{className:"enemy-select-container",children:[(0,n.jsxs)("div",{className:"enemy-selector",children:[(0,n.jsx)("h4",{className:"player-text",id:"player-text",children:Y}),(0,n.jsx)("img",{src:p.src,alt:"Gizmo"}),(0,n.jsx)("h3",{children:"GIZMO"}),(0,n.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{className:"victims-container",children:[(0,n.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,n.jsxs)("div",{className:"victim-selector",children:[(0,n.jsx)("button",{className:"create-button",onClick:ex,children:C}),(0,n.jsxs)("div",{className:"game-id-input",children:[(0,n.jsx)("input",{className:"game-id-input-field",type:"number",value:I,onChange:e=>L(parseInt(e.target.value))}),(0,n.jsx)("button",{className:"join-button",onClick:J,children:"JOIN GAME"})]})]})]})]})]})]})]})}):(0,n.jsxs)("div",{className:"character-select-screen",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:u.src,alt:"Back",onClick:()=>N(!1)})}),(0,n.jsxs)("div",{className:"character-select-container",children:[(0,n.jsxs)("div",{id:"puppet-selector",className:"character-selector",onClick:()=>{E("Puppet"),S(!0)},children:[(0,n.jsx)("img",{src:d.src,alt:"Puppet"}),(0,n.jsx)("h3",{children:"PUPPET"}),(0,n.jsx)("p",{className:"character-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{id:"gizmo-selector",className:"character-selector",onClick:()=>{E("Gizmo"),S(!0)},children:[(0,n.jsx)("img",{src:p.src,alt:"Gizmo"}),(0,n.jsx)("h3",{children:"GIZMO"}),(0,n.jsx)("p",{className:"character-description",children:"55 (67%)"})]})]}),(0,n.jsx)("div",{className:"select-container",children:(0,n.jsx)("img",{className:"select-svg",src:m.src,alt:"Select"})})]})]})}):(0,n.jsxs)(n.Fragment,{children:[x&&(0,n.jsx)("div",{className:"preloader-container ".concat(b?"fade-out-preloader":""),children:(0,n.jsxs)("div",{className:"preloader-inner-container",children:[(0,n.jsxs)("div",{className:"preloader-logos-container",children:[(0,n.jsx)("img",{src:"https://klanfontan.github.io/game/Puppet-main/gamecode/LogoBmd.svg",alt:"BMD"}),(0,n.jsx)("img",{src:"https://klanfontan.github.io/game/Puppet-main/gamecode/LogoRealms.svg",alt:"Realms.world"})]}),(0,n.jsx)("div",{className:"preloader-text",children:"v.0.1 from 11 Dec 2024"})]})}),(0,n.jsx)("div",{className:"new-game-container",children:(0,n.jsxs)("div",{className:"new-game-inner-container",children:[(0,n.jsx)("img",{className:"new-game-preview",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/GamePreview.png",alt:"Preview"}),(0,n.jsxs)("div",{className:"new-game-buttons",children:[(0,n.jsxs)("div",{className:"new-game-sound-button-container",children:[(0,n.jsx)("img",{className:"new-game-sound-button-image",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/SoundOn.png",alt:"SFX"}),(0,n.jsx)("button",{className:"new-game-sound-button",children:"SOUND ON"})]}),i.map((e,t)=>(0,n.jsx)("button",{className:"connect-button",onClick:async()=>{let t=i[0];await r({connector:e}),Q&&setTimeout(()=>{var e;N(!0),null===(e=t.username())||void 0===e||e.then(e=>X(e))},500)},children:Q?"START GAME":"CONNECT"},t))]})]})})]})})}}},function(e){e.O(0,[541,652,412,274,936,744],function(){return e(e.s=8095)}),_N_E=e.O()}]);