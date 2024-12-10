(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8095:function(e,t,a){Promise.resolve().then(a.bind(a,2522))},7568:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let n=a(4981);a(5320),a(8978);let s=n._(a(6080));function r(e,t){var a;let n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let r={...n,...t};return(0,s.default)({...r,modules:null==(a=r.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7208:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=a(8165);function s(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return a}},6080:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=a(5320),s=a(8978),r=a(7208),c=a(7893);function l(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},o=function(e){let t={...i,...e},a=(0,s.lazy)(()=>t.loader().then(l)),o=t.loading;function d(e){let l=o?(0,n.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(c.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(a,{...e})]}):(0,n.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(a,{...e})});return(0,n.jsx)(s.Suspense,{fallback:l,children:i})}return d.displayName="LoadableComponent",d}},7893:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let n=a(5320),s=a(6334);function r(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,s.getExpectedRequestStore)("next/dynamic css"),r=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,n.jsx)(n.Fragment,{children:r.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},2522:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var n=a(5320),s=a(8978),r=a(7568),c=a.n(r),l=a(5452),i=a(8439);let o=[{type:"impl",name:"actions__ContractImpl",interface_name:"dojo::contract::interface::IContract"},{type:"interface",name:"dojo::contract::interface::IContract",items:[]},{type:"impl",name:"actions__DeployedContractImpl",interface_name:"dojo::meta::interface::IDeployedResource"},{type:"struct",name:"core::byte_array::ByteArray",members:[{name:"data",type:"core::array::Array::<core::bytes_31::bytes31>"},{name:"pending_word",type:"core::felt252"},{name:"pending_word_len",type:"core::integer::u32"}]},{type:"interface",name:"dojo::meta::interface::IDeployedResource",items:[{type:"function",name:"dojo_name",inputs:[],outputs:[{type:"core::byte_array::ByteArray"}],state_mutability:"view"}]},{type:"impl",name:"ActionsImpl",interface_name:"puppet_vs_gizmo::systems::actions::IActions"},{type:"interface",name:"puppet_vs_gizmo::systems::actions::IActions",items:[{type:"function",name:"create_game",inputs:[{name:"character",type:"core::integer::u8"},{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"join_game",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"throw",inputs:[{name:"game_id",type:"core::integer::u32"},{name:"power",type:"core::integer::u8"}],outputs:[],state_mutability:"external"},{type:"function",name:"player_health",inputs:[{name:"address",type:"core::starknet::contract_address::ContractAddress"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{type:"function",name:"game_winner",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{type:"function",name:"get_first_player",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{type:"function",name:"get_second_player",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{type:"function",name:"get_game_turn",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"}]},{type:"function",name:"dojo_init",inputs:[],outputs:[],state_mutability:"view"},{type:"impl",name:"WorldProviderImpl",interface_name:"dojo::contract::components::world_provider::IWorldProvider"},{type:"struct",name:"dojo::world::iworld::IWorldDispatcher",members:[{name:"contract_address",type:"core::starknet::contract_address::ContractAddress"}]},{type:"interface",name:"dojo::contract::components::world_provider::IWorldProvider",items:[{type:"function",name:"world_dispatcher",inputs:[],outputs:[{type:"dojo::world::iworld::IWorldDispatcher"}],state_mutability:"view"}]},{type:"impl",name:"UpgradeableImpl",interface_name:"dojo::contract::components::upgradeable::IUpgradeable"},{type:"interface",name:"dojo::contract::components::upgradeable::IUpgradeable",items:[{type:"function",name:"upgrade",inputs:[{name:"new_class_hash",type:"core::starknet::class_hash::ClassHash"}],outputs:[],state_mutability:"external"}]},{type:"constructor",name:"constructor",inputs:[]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"struct",members:[{name:"class_hash",type:"core::starknet::class_hash::ClassHash",kind:"data"}]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"enum",variants:[{name:"Upgraded",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"nested"}]},{type:"event",name:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"enum",variants:[]},{type:"event",name:"puppet_vs_gizmo::systems::actions::actions::Event",kind:"enum",variants:[{name:"UpgradeableEvent",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"nested"},{name:"WorldProviderEvent",type:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"nested"}]}];var d={src:"/Puppet//_next/static/media/puppet_preview.82f41b7d.png"},u={src:"/Puppet//_next/static/media/gizmo_preview.1253c5ed.png"},m={src:"/Puppet//_next/static/media/versus.b298df6b.png"},p={src:"/Puppet//_next/static/media/back.33c5057d.png"},g={src:"/Puppet//_next/static/media/small_puppet.9a537536.png"},h={src:"/Puppet//_next/static/media/small_gizmo.c7725c5d.png"},y={src:"/Puppet//_next/static/media/select.be584483.png"},f=a(9767);function v(e){let{player1Hp:t,player2Hp:a,throwStone:r,gameId:c,getGameTurn:l,getFirstPlayer:i,getSecondPlayer:o,getPlayerHealth:d,userAddress:u,isPlayer1:m}=e;return(0,s.useEffect)(()=>{let e=!1,t=!1,a=0,n="puppet",s="gizmo",r=380,c=document.querySelector(".player-svg-".concat(s));if(c){let e=c.querySelector(".purple");e&&e instanceof HTMLElement&&e.classList.add("hidden")}function l(){t||(e=!0,a=0,function t(){if(e){if(a+=1,"puppet"===n?document.querySelector(".player-svg-puppet"):document.querySelector(".player-svg-gizmo"),c){let e=c.querySelector(".purple"),t=380+10*a;e&&e instanceof HTMLElement&&(e.style.transition="stroke-dashoffset 0.1s ease",r=t,e.style.strokeDashoffset=r.toString())}a<10&&setTimeout(t,100)}}())}function i(){if(e){e=!1;let r=document.querySelector(".player-svg-".concat(n));if(r){let e=r.querySelector(".purple");e&&e instanceof HTMLElement&&(e.style.strokeDashoffset="380")}a>10&&(a=10),function(e,a,n){let s=document.querySelector(".coconut-wrapper"),r=document.querySelector(".player-".concat(a," .player-img")),c=document.createElement("div");c.id="coconut",c.className="coconut-".concat(a),s&&s.appendChild(c),console.log(n),r&&r instanceof HTMLImageElement&&(r.src="https://klanfontan.github.io/game/Puppet-main/gamecode/".concat(a,".gif")),n>=5&&n<=8?(s&&s.classList.add("animate-coconut-".concat(a)),function(e){let a=document.querySelector(".health-bar-".concat(e," .health-bar-inner"));if(a&&a instanceof HTMLElement){let n=parseFloat(getComputedStyle(a).width),s=document.querySelector(".player-".concat(e," .player-img")),r=document.querySelector(".player-svg-puppet"),c=document.querySelector(".player-svg-gizmo");n>61.5?a.style.width="".concat(n-61.5,"px"):(a.style.width="0px",t=!0,s&&s instanceof HTMLImageElement&&(s.src="https://klanfontan.github.io/game/Puppet-main/gamecode/".concat(e,"_dead.gif")),r&&r instanceof SVGSVGElement&&r.classList.add("hidden"),c&&c instanceof SVGSVGElement&&c.classList.add("hidden")),a.style.transition="width 0.5s ease"}}(e)):n>=9?s&&s.classList.add("animate-coconut-overthrow-".concat(a)):n<=1?s&&s.classList.add("animate-coconut-barricade-".concat(a)):n<=4&&s&&s.classList.add("animate-coconut-underthrow-".concat(a)),setTimeout(()=>{r&&r instanceof HTMLImageElement&&(r.src="https://klanfontan.github.io/assets/".concat(a,"_frames/frame_00.png"))},300),setTimeout(()=>{s&&(s.removeChild(c),s.classList.remove("animate-coconut-".concat(a),"animate-coconut-overthrow-".concat(a),"animate-coconut-underthrow-".concat(a),"animate-coconut-barricade-".concat(a)))},750)}(s,n,a),function(){if(!t){let e=document.querySelector(".player-svg-".concat(n));e&&e.classList.add("hidden"),n="puppet"===n?"gizmo":"puppet",s="puppet"===s?"gizmo":"puppet";let t=document.querySelector(".player-svg-".concat(n));t&&t.classList.remove("hidden")}}()}}/Mobi|Android/i.test(navigator.userAgent)?(document.addEventListener("touchstart",l),document.addEventListener("touchend",i)):(document.addEventListener("mousedown",l),document.addEventListener("mouseup",i)),document.addEventListener("contextmenu",function(e){e.preventDefault()},!1)},[]),(0,n.jsx)("div",{className:"game-container",children:(0,n.jsxs)("div",{className:"game-board",children:[(0,n.jsxs)("div",{className:"bars-container",children:[(0,n.jsxs)("div",{className:"puppet-bar",children:[(0,n.jsx)("div",{className:"potion left-potion",children:(0,n.jsx)("img",{className:"potion-img",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/potion.png",alt:"potion"})}),(0,n.jsxs)("div",{className:"health-container",children:[(0,n.jsxs)("div",{className:"nickname-container",children:[(0,n.jsx)("div",{className:"tag",children:"Puppet"}),(0,n.jsx)("div",{className:"nickname",children:"Black Mirror Designer"})]}),(0,n.jsx)("div",{className:"health-bar health-bar-puppet",children:(0,n.jsx)("div",{className:"health-bar-inner"})})]}),(0,n.jsx)("div",{className:"avatar avatar-puppet",children:(0,n.jsx)("img",{className:"avatar-img",src:"https://klanfontan.github.io/img/square_puppet.png",alt:"avatar"})})]}),(0,n.jsx)("div",{className:"versus-container",children:(0,n.jsx)("img",{className:"versus-img",src:"https://klanfontan.github.io/img/versus.svg",alt:"versus"})}),(0,n.jsxs)("div",{className:"gizmo-bar",children:[(0,n.jsx)("div",{className:"avatar avatar-gizmo",children:(0,n.jsx)("img",{className:"avatar-img",src:"https://klanfontan.github.io/img/square_gizmo.png",alt:"avatar"})}),(0,n.jsxs)("div",{className:"health-container health-container-gizmo",children:[(0,n.jsxs)("div",{className:"nickname-container nickname-container-gizmo",children:[(0,n.jsx)("div",{className:"nickname",children:"Bulbhead"}),(0,n.jsx)("div",{className:"tag tag-gizmo",children:"Gizmo"})]}),(0,n.jsx)("div",{className:"health-bar health-bar-gizmo gizmo-health-bar-reverse",children:(0,n.jsx)("div",{className:"health-bar-inner"})})]}),(0,n.jsx)("div",{className:"potion right-potion",children:(0,n.jsx)("img",{className:"potion-img",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/potion.png",alt:"potion"})})]})]}),(0,n.jsx)("div",{className:"wind-container",children:(0,n.jsx)("img",{className:"wind-img",src:"https://klanfontan.github.io/game/Puppet-main/gamecode/wind.png",alt:"wind"})}),(0,n.jsxs)("div",{className:"players-container",children:[(0,n.jsxs)("div",{className:"player player-puppet",children:[(0,n.jsx)("img",{className:"player-img",src:"https://klanfontan.github.io/assets/puppet_frames/frame_00.png",alt:"avatar"}),(0,n.jsxs)("svg",{className:"player-svg-puppet",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",children:[(0,n.jsx)("path",{className:"grey",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none"}}),(0,n.jsx)("path",{className:"purple",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none",strokeDashoffset:380}})]})]}),(0,n.jsxs)("div",{className:"player player-gizmo",children:[(0,n.jsx)("img",{className:"player-img",src:"https://klanfontan.github.io/assets/gizmo_frames/frame_00.png",alt:"avatar"}),(0,n.jsxs)("svg",{className:"player-svg-gizmo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",children:[(0,n.jsx)("path",{className:"grey",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none"}}),(0,n.jsx)("path",{className:"purple",d:"M10,20   A20,20 0 1,1 40,60",style:{fill:"none",strokeDashoffset:380}})]})]})]}),(0,n.jsx)("div",{className:"coconut-wrapper"})]})})}c()(()=>a.e(959).then(a.bind(a,2959)),{loadableGenerated:{webpack:()=>[2959]},ssr:!1});var x=()=>{let{data:e,isLoading:t,isError:a}=(0,l.Ov)({blockIdentifier:"latest"}),{connect:r,connectors:c}=(0,l.$4)(),{disconnect:x}=(0,l.qL)(),[j,_]=(0,s.useState)(!0),[b,N]=(0,s.useState)(!1),[w,k]=(0,s.useState)(!1),[E,C]=(0,s.useState)(null),[P,S]=(0,s.useState)(!1),[A,L]=(0,s.useState)(0),[I,T]=(0,s.useState)(1),[z,M]=(0,s.useState)(!1),[O,G]=(0,s.useState)(),[D,R]=(0,s.useState)(!1),[U,q]=(0,s.useState)(null),[B,H]=(0,s.useState)(null),[V,F]=(0,s.useState)(null),W=async()=>{if(ea&&Y)try{if(await ew(A)!=Y&&await eN(A)==Y||await eN(A)!=Y&&await ew(A)==Y){R(!0);return}await ej(A)&&R(!0)}catch(e){console.error("Error sending transaction:",e)}},{address:Y}=(0,l.mA)(),{account:X}=(0,l.mA)(),{isLoading:J,isError:Q,error:Z,data:K}=(0,l.KQ)({address:Y,watch:!0}),$="0x0409f17fbe2145d007c6d18731fa9919e943a60230fe5c2647f702615a49e4f9",[ee,et]=(0,s.useState)(0),{contract:ea}=(0,l.cq)({abi:o,address:$}),en=(0,s.useMemo)(()=>{if(!Y||!ea)return console.error("Contract or userAddress is undefined"),console.log("Contract:",ea),console.log("User Address:",Y),[]},[ea,Y,ee]),{send:es,data:er,isPending:ec}=(0,l.pQ)({calls:en}),{data:el,status:ei,isLoading:eo,isError:ed,error:eu}=(0,l.VS)({hash:null==er?void 0:er.transaction_hash,watch:!0}),em=(0,s.useMemo)(()=>new i.Gf({nodeUrl:f.env.NEXT_PUBLIC_RPC_URL}),[]),[ep,eg]=(0,s.useState)([]),eh=(0,s.useRef)(0),{data:ey}=(0,l.Ov)({refetchInterval:3e3}),ef=(0,s.useCallback)(async(e,t)=>{if(!(t<=eh.current))try{let a=eh.current+1,n=await em.getEvents({address:e.address,from_block:{block_number:a},to_block:{block_number:t},chunk_size:500});n&&n.events&&eg(e=>[...e,...n.events]),eh.current=t}catch(e){console.error("Error checking for events:",e)}},[em]);(0,s.useEffect)(()=>{ea&&ey&&ef(ea,ey)},[ea,ey,ef]),(0,s.useMemo)(()=>[...ep].reverse().slice(0,5),[ep]),(0,s.useEffect)(()=>{let e=setTimeout(()=>{N(!0),setTimeout(()=>_(!1),1e3)},2e3);return()=>clearTimeout(e)},[]),(0,s.useEffect)(()=>{(async()=>{if(Y&&A){let e=await ew(A),t=await eN(A);if(e===Y){let e=await eb(Y);q(t?await eb(t):null),H(e)}else{let t=await eb(Y),a=e?await eb(e):null;q(t),H(a)}}})()},[Y,A]),(0,s.useEffect)(()=>{(async()=>{Y&&A&&F(await ew(A)!==Y)})()},[Y,A]);let ev=async()=>{if(ea&&Y)try{"Puppet"===E?T(1):"Gizmo"===E&&T(2),await ex(I,A)&&R(!0)}catch(e){console.error("Error sending transaction:",e)}},ex=(0,s.useCallback)(async(e,t)=>{if(!X)return!1;M(!0),G(void 0);try{let{transaction_hash:a}=await X.execute([{contractAddress:$,entrypoint:"create_game",calldata:[e,t]}]);return G(a),!0}catch(e){return console.error(e),!1}finally{M(!1)}},[X]),ej=(0,s.useCallback)(async e=>{if(!X)return!1;M(!0),G(void 0);try{let{transaction_hash:t}=await X.execute([{contractAddress:$,entrypoint:"join_game",calldata:[e]}]);return G(t),!0}catch(e){return console.error(e),!1}finally{M(!1)}},[X]),e_=(0,s.useCallback)(async(e,t)=>{if(!X)return!1;M(!0),G(void 0);try{let{transaction_hash:a}=await X.execute([{contractAddress:$,entrypoint:"throw",calldata:[e,t]}]);return G(a),!0}catch(e){return console.error(e),!1}finally{M(!1)}},[X]);(0,s.useCallback)(async e=>{if(!X)return null;M(!0),G(void 0);try{let t=await X.callContract({contractAddress:$,entrypoint:"game_winner",calldata:[e]});return console.log("Game winner:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling game_winner:",e),null}finally{M(!1)}},[X]);let eb=(0,s.useCallback)(async e=>{if(!X)return null;M(!0),G(void 0);try{let t=await X.callContract({contractAddress:$,entrypoint:"player_health",calldata:[e]});return console.log("Player health:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling player_health:",e),null}finally{M(!1)}},[X]),eN=(0,s.useCallback)(async e=>{if(!X)return null;M(!0),G(void 0);try{let t=await X.callContract({contractAddress:$,entrypoint:"get_first_player",calldata:[e]});return console.log("First player:",t),t[0]}catch(e){return console.error("Error calling get_first_player:",e),null}finally{M(!1)}},[X]),ew=(0,s.useCallback)(async e=>{if(!X)return null;M(!0),G(void 0);try{let t=await X.callContract({contractAddress:$,entrypoint:"get_second_player",calldata:[e]});return console.log("Second player:",t),t[0]}catch(e){return console.error("Error calling get_second_player:",e),null}finally{M(!1)}},[X]),ek=(0,s.useCallback)(async e=>{if(!X)return null;M(!0),G(void 0);try{let t=await X.callContract({contractAddress:$,entrypoint:"get_game_turn",calldata:[e]});return console.log("Game turn:",Number(t[0])),Number(t[0])}catch(e){return console.error("Error calling get_game_turn:",e),null}finally{M(!1)}},[X]);return(0,n.jsx)("div",{className:"game-screen ".concat("Puppet"===E?"puppet-bg":"Gizmo"===E?"gizmo-bg":""),style:{opacity:b?1:0},children:w?(0,n.jsx)("div",{className:"screen",children:P?(0,n.jsx)(n.Fragment,{children:D?(0,n.jsx)(v,{player1Hp:U,player2Hp:B,throwStone:e_,gameId:A,getGameTurn:ek,getFirstPlayer:eN,getSecondPlayer:ew,getPlayerHealth:eb,userAddress:null!=Y?Y:null,isPlayer1:null!=V&&V}):(0,n.jsxs)(n.Fragment,{children:["Puppet"===E&&(0,n.jsxs)("div",{className:"puppet-page",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:p.src,alt:"Back",onClick:()=>S(!1)})}),(0,n.jsxs)("div",{className:"enemy-select-container",children:[(0,n.jsxs)("div",{className:"enemy-selector",children:[(0,n.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,n.jsx)("img",{src:g.src,alt:"Puppet"}),(0,n.jsx)("h3",{children:"PUPPET"}),(0,n.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{className:"victims-container",children:[(0,n.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,n.jsxs)("div",{className:"victim-selector",children:[(0,n.jsx)("button",{className:"create-button",onClick:ev,children:"CREATE GAME"}),(0,n.jsxs)("div",{className:"game-id-input",children:[(0,n.jsx)("input",{className:"game-id-input-field",type:"number",value:A,onChange:e=>L(parseInt(e.target.value))}),(0,n.jsx)("button",{className:"join-button",onClick:W,children:"JOIN GAME"})]})]})]})]})]})]}),"Gizmo"===E&&(0,n.jsxs)("div",{className:"gizmo-page",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:p.src,alt:"Back",onClick:()=>S(!1)})}),(0,n.jsxs)("div",{className:"enemy-select-container",children:[(0,n.jsxs)("div",{className:"enemy-selector",children:[(0,n.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,n.jsx)("img",{src:h.src,alt:"Gizmo"}),(0,n.jsx)("h3",{children:"GIZMO"}),(0,n.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{className:"victims-container",children:[(0,n.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,n.jsxs)("div",{className:"victim-selector",children:[(0,n.jsx)("button",{className:"create-button",onClick:ev,children:"CREATE GAME"}),(0,n.jsxs)("div",{className:"game-id-input",children:[(0,n.jsx)("input",{className:"game-id-input-field",type:"number",value:A,onChange:e=>L(parseInt(e.target.value))}),(0,n.jsx)("button",{className:"join-button",onClick:W,children:"JOIN GAME"})]})]})]})]})]})]})]})}):(0,n.jsxs)("div",{className:"character-select-screen",children:[(0,n.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,n.jsxs)("div",{className:"game-container",children:[(0,n.jsx)("div",{className:"back-button",children:(0,n.jsx)("img",{src:p.src,alt:"Back",onClick:()=>k(!1)})}),(0,n.jsxs)("div",{className:"character-select-container",children:[(0,n.jsxs)("div",{id:"puppet-selector",className:"character-selector",onClick:()=>{C("Puppet"),S(!0)},children:[(0,n.jsx)("img",{src:g.src,alt:"Puppet"}),(0,n.jsx)("h3",{children:"PUPPET"}),(0,n.jsx)("p",{className:"character-description",children:"55 (67%)"})]}),(0,n.jsxs)("div",{id:"gizmo-selector",className:"character-selector",onClick:()=>{C("Gizmo"),S(!0)},children:[(0,n.jsx)("img",{src:h.src,alt:"Gizmo"}),(0,n.jsx)("h3",{children:"GIZMO"}),(0,n.jsx)("p",{className:"character-description",children:"55 (67%)"})]})]}),(0,n.jsx)("div",{className:"select-container",children:(0,n.jsx)("img",{className:"select-svg",src:y.src,alt:"Select"})})]})]})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"character left-character",children:[(0,n.jsx)("div",{className:"character-name",children:"Puppet"}),(0,n.jsx)("img",{src:d.src,className:"App-left-character",alt:"Left Character"})]}),(0,n.jsxs)("div",{className:"vs-container",children:[(0,n.jsx)("img",{src:m.src,className:"App-vs",alt:"VS"}),(0,n.jsxs)("div",{className:"play-button-container",children:[(0,n.jsx)("button",{className:"start-game-button-text",onClick:()=>{Y?(alert("Wallet Address: ".concat(Y)),k(!0)):alert("Please connect your wallet")},children:"START GAME"}),c.map((e,t)=>(0,n.jsx)("button",{className:"play-button",onClick:()=>r({connector:e}),children:Y?"CONNECTED":"CONNECT"},t))]})]}),(0,n.jsxs)("div",{className:"character right-character",children:[(0,n.jsx)("div",{className:"character-name",children:"Gizmo"}),(0,n.jsx)("img",{src:u.src,className:"App-right-character",alt:"Right Character"})]})]})})}}},function(e){e.O(0,[541,652,412,274,936,744],function(){return e(e.s=8095)}),_N_E=e.O()}]);