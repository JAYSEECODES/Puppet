(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9013:function(e,t,a){Promise.resolve().then(a.bind(a,6433))},551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let s=a(1609);a(7437),a(2265);let n=s._(a(148));function r(e,t){var a;let s={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let r={...s,...t};return(0,n.default)({...r,modules:null==(a=r.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=a(5592);function n(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return a}},148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let s=a(7437),n=a(2265),r=a(912),c=a(1481);function i(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},l=function(e){let t={...o,...e},a=(0,n.lazy)(()=>t.loader().then(i)),l=t.loading;function d(e){let i=l?(0,s.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,o=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(c.PreloadCss,{moduleIds:t.modules}):null,(0,s.jsx)(a,{...e})]}):(0,s.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(a,{...e})});return(0,s.jsx)(n.Suspense,{fallback:i,children:o})}return d.displayName="LoadableComponent",d}},1481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let s=a(7437),n=a(8512);function r(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,n.getExpectedRequestStore)("next/dynamic css"),r=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,s.jsx)(s.Fragment,{children:r.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},6433:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var s=a(7437),n=a(2265),r=a(551),c=a.n(r),i=a(718),o=a(4624);let l=[{type:"impl",name:"actions__ContractImpl",interface_name:"dojo::contract::interface::IContract"},{type:"interface",name:"dojo::contract::interface::IContract",items:[]},{type:"impl",name:"actions__DeployedContractImpl",interface_name:"dojo::meta::interface::IDeployedResource"},{type:"struct",name:"core::byte_array::ByteArray",members:[{name:"data",type:"core::array::Array::<core::bytes_31::bytes31>"},{name:"pending_word",type:"core::felt252"},{name:"pending_word_len",type:"core::integer::u32"}]},{type:"interface",name:"dojo::meta::interface::IDeployedResource",items:[{type:"function",name:"dojo_name",inputs:[],outputs:[{type:"core::byte_array::ByteArray"}],state_mutability:"view"}]},{type:"impl",name:"ActionsImpl",interface_name:"puppet_vs_gizmo::systems::actions::IActions"},{type:"interface",name:"puppet_vs_gizmo::systems::actions::IActions",items:[{type:"function",name:"create_game",inputs:[{name:"character",type:"core::integer::u8"},{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"join_game",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{type:"function",name:"throw",inputs:[{name:"game_id",type:"core::integer::u32"},{name:"power",type:"core::integer::u8"}],outputs:[],state_mutability:"external"}]},{type:"function",name:"dojo_init",inputs:[],outputs:[],state_mutability:"view"},{type:"impl",name:"WorldProviderImpl",interface_name:"dojo::contract::components::world_provider::IWorldProvider"},{type:"struct",name:"dojo::world::iworld::IWorldDispatcher",members:[{name:"contract_address",type:"core::starknet::contract_address::ContractAddress"}]},{type:"interface",name:"dojo::contract::components::world_provider::IWorldProvider",items:[{type:"function",name:"world_dispatcher",inputs:[],outputs:[{type:"dojo::world::iworld::IWorldDispatcher"}],state_mutability:"view"}]},{type:"impl",name:"UpgradeableImpl",interface_name:"dojo::contract::components::upgradeable::IUpgradeable"},{type:"interface",name:"dojo::contract::components::upgradeable::IUpgradeable",items:[{type:"function",name:"upgrade",inputs:[{name:"new_class_hash",type:"core::starknet::class_hash::ClassHash"}],outputs:[],state_mutability:"external"}]},{type:"constructor",name:"constructor",inputs:[]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"struct",members:[{name:"class_hash",type:"core::starknet::class_hash::ClassHash",kind:"data"}]},{type:"event",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"enum",variants:[{name:"Upgraded",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",kind:"nested"}]},{type:"event",name:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"enum",variants:[]},{type:"event",name:"puppet_vs_gizmo::systems::actions::actions::Event",kind:"enum",variants:[{name:"UpgradeableEvent",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",kind:"nested"},{name:"WorldProviderEvent",type:"dojo::contract::components::world_provider::world_provider_cpt::Event",kind:"nested"}]}];var d={src:"/Puppet//_next/static/media/puppet_preview.82f41b7d.png"},u={src:"/Puppet//_next/static/media/gizmo_preview.1253c5ed.png"},m={src:"/Puppet//_next/static/media/versus.b298df6b.png"},p={src:"/Puppet//_next/static/media/back.33c5057d.png"},h={src:"/Puppet//_next/static/media/small_puppet.9a537536.png"},f={src:"/Puppet//_next/static/media/small_gizmo.c7725c5d.png"},y={src:"/Puppet//_next/static/media/select.be584483.png"},j=a(9767);function g(){return(0,n.useEffect)(()=>{let e=document.createElement("script");return e.src="game.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),(0,s.jsx)("div",{children:(0,s.jsx)("div",{id:"game-container",children:(0,s.jsx)("canvas",{id:"gameCanvas"})})})}c()(()=>a.e(420).then(a.bind(a,9420)),{loadableGenerated:{webpack:()=>[9420]},ssr:!1});var v=()=>{let{data:e,isLoading:t,isError:a}=(0,i.Ov)({blockIdentifier:"latest"}),{connect:r,connectors:c}=(0,i.$4)(),{disconnect:v}=(0,i.qL)(),[x,_]=(0,n.useState)(!0),[b,N]=(0,n.useState)(!1),[E,C]=(0,n.useState)(!1),[P,k]=(0,n.useState)(null),[w,A]=(0,n.useState)(!1),[I,O]=(0,n.useState)(0),[S,T]=(0,n.useState)(0),[R,U]=(0,n.useState)(!1),[M,L]=(0,n.useState)(),[z,D]=(0,n.useState)(!1),G=async()=>{if(K&&W)try{await ep(),D(!0)}catch(e){console.error("Error sending transaction:",e)}},B=async()=>{if(K&&W)try{await eh(),D(!0)}catch(e){console.error("Error sending transaction:",e)}},{address:W}=(0,i.mA)(),{account:F}=(0,i.mA)(),{isLoading:V,isError:Y,error:q,data:H}=(0,i.KQ)({address:W,watch:!0}),J="0x0409f17fbe2145d007c6d18731fa9919e943a60230fe5c2647f702615a49e4f9",[Q,Z]=(0,n.useState)(0),{contract:K}=(0,i.cq)({abi:l,address:J}),X=(0,n.useMemo)(()=>{if(!W||!K)return console.error("Contract or userAddress is undefined"),console.log("Contract:",K),console.log("User Address:",W),[]},[K,W,Q]),{send:$,data:ee,isPending:et}=(0,i.pQ)({calls:X}),{data:ea,status:es,isLoading:en,isError:er,error:ec}=(0,i.VS)({hash:null==ee?void 0:ee.transaction_hash,watch:!0}),ei=(0,n.useMemo)(()=>new o.Gf({nodeUrl:j.env.NEXT_PUBLIC_RPC_URL}),[]),[eo,el]=(0,n.useState)([]),ed=(0,n.useRef)(0),{data:eu}=(0,i.Ov)({refetchInterval:3e3}),em=(0,n.useCallback)(async(e,t)=>{if(!(t<=ed.current))try{let a=ed.current+1,s=await ei.getEvents({address:e.address,from_block:{block_number:a},to_block:{block_number:t},chunk_size:500});s&&s.events&&el(e=>[...e,...s.events]),ed.current=t}catch(e){console.error("Error checking for events:",e)}},[ei]);(0,n.useEffect)(()=>{K&&eu&&em(K,eu)},[K,eu,em]),(0,n.useMemo)(()=>[...eo].reverse().slice(0,5),[eo]),(0,n.useEffect)(()=>{let e=setTimeout(()=>{N(!0),setTimeout(()=>_(!1),1e3)},2e3);return()=>clearTimeout(e)},[]);let ep=(0,n.useCallback)(async()=>{F&&(U(!0),L(void 0),F.execute([{contractAddress:J,entrypoint:"create_game",calldata:[1,4]}]).then(e=>{let{transaction_hash:t}=e;return L(t)}).catch(e=>console.error(e)).finally(()=>U(!1)))},[F]),eh=(0,n.useCallback)(async()=>{F&&(U(!0),L(void 0),F.execute([{contractAddress:J,entrypoint:"join_game",calldata:[4]}]).then(e=>{let{transaction_hash:t}=e;return L(t)}).catch(e=>console.error(e)).finally(()=>U(!1)))},[F]);return(0,s.jsx)("div",{className:"game-screen ".concat("Puppet"===P?"puppet-bg":"Gizmo"===P?"gizmo-bg":""),style:{opacity:b?1:0},children:E?(0,s.jsx)("div",{className:"screen",children:w?(0,s.jsx)(s.Fragment,{children:z?(0,s.jsx)(g,{}):(0,s.jsxs)(s.Fragment,{children:["Puppet"===P&&(0,s.jsxs)("div",{className:"puppet-page",children:[(0,s.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,s.jsxs)("div",{className:"game-container",children:[(0,s.jsx)("div",{className:"back-button",children:(0,s.jsx)("img",{src:p.src,alt:"Back",onClick:()=>A(!1)})}),(0,s.jsxs)("div",{className:"enemy-select-container",children:[(0,s.jsxs)("div",{className:"enemy-selector",children:[(0,s.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,s.jsx)("img",{src:h.src,alt:"Puppet"}),(0,s.jsx)("h3",{children:"PUPPET"}),(0,s.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,s.jsxs)("div",{className:"victims-container",children:[(0,s.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,s.jsxs)("div",{className:"victim-selector",children:[(0,s.jsx)("button",{className:"create-button",onClick:G,children:"CREATE GAME"}),(0,s.jsx)("button",{className:"join-button",onClick:B,children:"JOIN GAME"})]})]})]})]})]}),"Gizmo"===P&&(0,s.jsxs)("div",{className:"gizmo-page",children:[(0,s.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,s.jsxs)("div",{className:"game-container",children:[(0,s.jsx)("div",{className:"back-button",children:(0,s.jsx)("img",{src:p.src,alt:"Back",onClick:()=>A(!1)})}),(0,s.jsxs)("div",{className:"enemy-select-container",children:[(0,s.jsxs)("div",{className:"enemy-selector",children:[(0,s.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,s.jsx)("img",{src:f.src,alt:"Gizmo"}),(0,s.jsx)("h3",{children:"GIZMO"}),(0,s.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,s.jsxs)("div",{className:"victims-container",children:[(0,s.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,s.jsxs)("div",{className:"victim-selector",children:[(0,s.jsx)("button",{className:"create-button",onClick:G,children:"CREATE GAME"}),(0,s.jsx)("button",{className:"join-button",onClick:B,children:"JOIN GAME"})]})]})]})]})]})]})}):(0,s.jsxs)("div",{className:"character-select-screen",children:[(0,s.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,s.jsxs)("div",{className:"game-container",children:[(0,s.jsx)("div",{className:"back-button",children:(0,s.jsx)("img",{src:p.src,alt:"Back",onClick:()=>C(!1)})}),(0,s.jsxs)("div",{className:"character-select-container",children:[(0,s.jsxs)("div",{id:"puppet-selector",className:"character-selector",onClick:()=>{k("Puppet"),A(!0)},children:[(0,s.jsx)("img",{src:h.src,alt:"Puppet"}),(0,s.jsx)("h3",{children:"PUPPET"}),(0,s.jsx)("p",{className:"character-description",children:"55 (67%)"})]}),(0,s.jsxs)("div",{id:"gizmo-selector",className:"character-selector",onClick:()=>{k("Gizmo"),A(!0)},children:[(0,s.jsx)("img",{src:f.src,alt:"Gizmo"}),(0,s.jsx)("h3",{children:"GIZMO"}),(0,s.jsx)("p",{className:"character-description",children:"55 (67%)"})]})]}),(0,s.jsx)("div",{className:"select-container",children:(0,s.jsx)("img",{className:"select-svg",src:y.src,alt:"Select"})})]})]})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"character left-character",children:[(0,s.jsx)("div",{className:"character-name",children:"Puppet"}),(0,s.jsx)("img",{src:d.src,className:"App-left-character",alt:"Left Character"})]}),(0,s.jsxs)("div",{className:"vs-container",children:[(0,s.jsx)("img",{src:m.src,className:"App-vs",alt:"VS"}),(0,s.jsxs)("div",{className:"play-button-container",children:[(0,s.jsx)("button",{className:"start-game-button-text",onClick:()=>{W?(alert("Wallet Address: ".concat(W)),C(!0)):alert("Please connect your wallet")},children:"START GAME"}),c.map((e,t)=>(0,s.jsx)("button",{className:"play-button",onClick:()=>r({connector:e}),children:W?"CONNECTED":"CONNECT"},t))]})]}),(0,s.jsxs)("div",{className:"character right-character",children:[(0,s.jsx)("div",{className:"character-name",children:"Gizmo"}),(0,s.jsx)("img",{src:u.src,className:"App-right-character",alt:"Right Character"})]})]})})}}},function(e){e.O(0,[255,125,357,971,23,744],function(){return e(e.s=9013)}),_N_E=e.O()}]);