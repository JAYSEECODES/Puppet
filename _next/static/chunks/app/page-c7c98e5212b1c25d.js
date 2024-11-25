(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8095:function(e,t,a){Promise.resolve().then(a.bind(a,7739))},7739:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var s=a(5320),c=a(8978),n=a(1473),r=a(5452),i=a(8439);let o=[{name:"actions__ContractImpl",type:"impl",interface_name:"dojo::contract::interface::IContract"},{name:"dojo::contract::interface::IContract",type:"interface",items:[]},{name:"actions__DeployedContractImpl",type:"impl",interface_name:"dojo::meta::interface::IDeployedResource"},{name:"core::byte_array::ByteArray",type:"struct",members:[{name:"data",type:"core::array::Array::<core::bytes_31::bytes31>"},{name:"pending_word",type:"core::felt252"},{name:"pending_word_len",type:"core::integer::u32"}]},{name:"dojo::meta::interface::IDeployedResource",type:"interface",items:[{name:"dojo_name",type:"function",inputs:[],outputs:[{type:"core::byte_array::ByteArray"}],state_mutability:"view"}]},{name:"ActionsImpl",type:"impl",interface_name:"puppet_vs_gizmo::systems::actions::IActions"},{name:"puppet_vs_gizmo::systems::actions::IActions",type:"interface",items:[{name:"create_game",type:"function",inputs:[{name:"character",type:"core::integer::u8"},{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{name:"join_game",type:"function",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[],state_mutability:"external"},{name:"throw",type:"function",inputs:[{name:"game_id",type:"core::integer::u32"},{name:"power",type:"core::integer::u8"}],outputs:[],state_mutability:"external"},{name:"player_health",type:"function",inputs:[{name:"address",type:"core::starknet::contract_address::ContractAddress"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{name:"game_winner",type:"function",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::integer::u8"}],state_mutability:"external"},{name:"get_first_player",type:"function",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{name:"get_second_player",type:"function",inputs:[{name:"game_id",type:"core::integer::u32"}],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"}]},{name:"dojo_init",type:"function",inputs:[],outputs:[],state_mutability:"view"},{name:"WorldProviderImpl",type:"impl",interface_name:"dojo::contract::components::world_provider::IWorldProvider"},{name:"dojo::world::iworld::IWorldDispatcher",type:"struct",members:[{name:"contract_address",type:"core::starknet::contract_address::ContractAddress"}]},{name:"dojo::contract::components::world_provider::IWorldProvider",type:"interface",items:[{name:"world_dispatcher",type:"function",inputs:[],outputs:[{type:"dojo::world::iworld::IWorldDispatcher"}],state_mutability:"view"}]},{name:"UpgradeableImpl",type:"impl",interface_name:"dojo::contract::components::upgradeable::IUpgradeable"},{name:"dojo::contract::components::upgradeable::IUpgradeable",type:"interface",items:[{name:"upgrade",type:"function",inputs:[{name:"new_class_hash",type:"core::starknet::class_hash::ClassHash"}],outputs:[],state_mutability:"external"}]},{name:"constructor",type:"constructor",inputs:[]},{kind:"struct",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",type:"event",members:[{kind:"data",name:"class_hash",type:"core::starknet::class_hash::ClassHash"}]},{kind:"enum",name:"dojo::contract::components::upgradeable::upgradeable_cpt::Event",type:"event",variants:[{kind:"nested",name:"Upgraded",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded"}]},{kind:"enum",name:"dojo::contract::components::world_provider::world_provider_cpt::Event",type:"event",variants:[]},{kind:"enum",name:"puppet_vs_gizmo::systems::actions::actions::Event",type:"event",variants:[{kind:"nested",name:"UpgradeableEvent",type:"dojo::contract::components::upgradeable::upgradeable_cpt::Event"},{kind:"nested",name:"WorldProviderEvent",type:"dojo::contract::components::world_provider::world_provider_cpt::Event"}]}];var l=a(8571),d={src:"/Puppet//_next/static/media/puppet_preview.82f41b7d.png"},m={src:"/Puppet//_next/static/media/gizmo_preview.1253c5ed.png"},p={src:"/Puppet//_next/static/media/versus.b298df6b.png"},u={src:"/Puppet//_next/static/media/back.33c5057d.png"},h={src:"/Puppet//_next/static/media/small_puppet.9a537536.png"},y={src:"/Puppet//_next/static/media/small_gizmo.c7725c5d.png"},g={src:"/Puppet//_next/static/media/select.be584483.png"},_=a(9767);function v(){return(0,s.jsx)("div",{children:(0,s.jsx)("div",{id:"game-container"})})}(0,n.default)(()=>a.e(959).then(a.bind(a,2959)),{loadableGenerated:{webpack:()=>[2959]},ssr:!1});var x=()=>{let{data:e,isLoading:t,isError:a}=(0,r.Ov)({blockIdentifier:"latest"}),{connect:n,connectors:x}=(0,r.$4)(),{disconnect:j}=(0,r.qL)(),[b,N]=(0,c.useState)(!0),[f,E]=(0,c.useState)(!1),[k,C]=(0,c.useState)(!1),[A,w]=(0,c.useState)(null),[P,I]=(0,c.useState)(!1),[S,O]=(0,c.useState)(0),[T,U]=(0,c.useState)(0),[R,z]=(0,c.useState)(!1),[G,D]=(0,c.useState)(),[L,M]=(0,c.useState)(!1),W=async()=>{if(X&&V)try{await eh(),M(!0)}catch(e){console.error("Error sending transaction:",e)}},B=async()=>{if(X&&V)try{await ev(),M(!0)}catch(e){console.error("Error sending transaction:",e)}},{address:V}=(0,r.mA)(),{account:Y}=(0,r.mA)(),{isLoading:F,isError:q,error:H,data:J}=(0,r.KQ)({address:V,watch:!0}),Q="0x0409f17fbe2145d007c6d18731fa9919e943a60230fe5c2647f702615a49e4f9",[Z,K]=(0,c.useState)(0),{contract:X}=(0,r.cq)({abi:o,address:Q}),$=(0,c.useMemo)(()=>{if(!V||!X)return console.error("Contract or userAddress is undefined"),console.log("Contract:",X),console.log("User Address:",V),[]},[X,V,Z]),{send:ee,data:et,isPending:ea}=(0,r.pQ)({calls:$}),{data:es,status:ec,isLoading:en,isError:er,error:ei}=(0,r.VS)({hash:null==et?void 0:et.transaction_hash,watch:!0}),eo=(0,c.useMemo)(()=>new i.Gf({nodeUrl:_.env.NEXT_PUBLIC_RPC_URL}),[]),[el,ed]=(0,c.useState)([]),em=(0,c.useRef)(0),{data:ep}=(0,r.Ov)({refetchInterval:3e3}),eu=(0,c.useCallback)(async(e,t)=>{if(!(t<=em.current))try{let a=em.current+1,s=await eo.getEvents({address:e.address,from_block:{block_number:a},to_block:{block_number:t},chunk_size:500});s&&s.events&&ed(e=>[...e,...s.events]),em.current=t}catch(e){console.error("Error checking for events:",e)}},[eo]);(0,c.useEffect)(()=>{X&&ep&&eu(X,ep)},[X,ep,eu]),(0,c.useMemo)(()=>[...el].reverse().slice(0,5),[el]),(0,c.useEffect)(()=>{let e=setTimeout(()=>{E(!0),setTimeout(()=>N(!1),1e3)},2e3);return()=>clearTimeout(e)},[]);let eh=(0,c.useCallback)(async()=>{Y&&(z(!0),D(void 0),Y.execute([{contractAddress:Q,entrypoint:"create_game",calldata:[1,4]}]).then(e=>{let{transaction_hash:t}=e;return D(t)}).catch(e=>console.error(e)).finally(()=>z(!1)))},[Y]),ey=(e,t)=>({contractName:"actions",entrypoint:e,calldata:t}),eg=async e=>{let t={};try{let a=new l.eT;await a.call("puppet_vs_gizmo",e),console.log("call ".concat(e.contractName,"::").concat(e.entrypoint,"(").concat(e.calldata.length,") success:"),t)}catch(t){console.warn("call ".concat(e.contractName,"::").concat(e.entrypoint,"(").concat(e.calldata.length,") exception:"),t)}finally{}return t},e_=async e=>await eg(ey("game_winner",[e])),ev=(0,c.useCallback)(async()=>{Y&&(z(!0),D(void 0),Y.execute([{contractAddress:Q,entrypoint:"join_game",calldata:[4]}]).then(e=>{let{transaction_hash:t}=e;return D(t)}).catch(e=>console.error(e)).finally(()=>z(!1)))},[Y]);return(0,s.jsx)("div",{className:"game-screen ".concat("Puppet"===A?"puppet-bg":"Gizmo"===A?"gizmo-bg":""),style:{opacity:f?1:0},children:k?(0,s.jsx)("div",{className:"screen",children:P?(0,s.jsx)(s.Fragment,{children:L?(0,s.jsx)(v,{}):(0,s.jsxs)(s.Fragment,{children:["Puppet"===A&&(0,s.jsxs)("div",{className:"puppet-page",children:[(0,s.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,s.jsxs)("div",{className:"game-container",children:[(0,s.jsx)("div",{className:"back-button",children:(0,s.jsx)("img",{src:u.src,alt:"Back",onClick:()=>I(!1)})}),(0,s.jsxs)("div",{className:"enemy-select-container",children:[(0,s.jsxs)("div",{className:"enemy-selector",children:[(0,s.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,s.jsx)("img",{src:h.src,alt:"Puppet"}),(0,s.jsx)("h3",{children:"PUPPET"}),(0,s.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,s.jsxs)("div",{className:"victims-container",children:[(0,s.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,s.jsxs)("div",{className:"victim-selector",children:[(0,s.jsx)("button",{className:"create-button",onClick:W,children:"CREATE GAME"}),(0,s.jsx)("button",{className:"join-button",onClick:B,children:"JOIN GAME"})]})]})]})]})]}),"Gizmo"===A&&(0,s.jsxs)("div",{className:"gizmo-page",children:[(0,s.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,s.jsxs)("div",{className:"game-container",children:[(0,s.jsx)("div",{className:"back-button",children:(0,s.jsx)("img",{src:u.src,alt:"Back",onClick:()=>I(!1)})}),(0,s.jsxs)("div",{className:"enemy-select-container",children:[(0,s.jsxs)("div",{className:"enemy-selector",children:[(0,s.jsx)("h4",{className:"player-text",id:"player-text",children:"Player"}),(0,s.jsx)("img",{src:y.src,alt:"Gizmo"}),(0,s.jsx)("h3",{children:"GIZMO"}),(0,s.jsx)("p",{className:"player-description",children:"55 (67%)"})]}),(0,s.jsxs)("div",{className:"victims-container",children:[(0,s.jsx)("h2",{children:"SELECT YOUR ACTION"}),(0,s.jsxs)("div",{className:"victim-selector",children:[(0,s.jsx)("button",{className:"create-button",onClick:W,children:"CREATE GAME"}),(0,s.jsx)("button",{className:"join-button",onClick:B,children:"JOIN GAME"}),(0,s.jsx)("button",{className:"game-check-button",onClick:()=>console.log(e_?e_.toString():"No game data available"),children:"Check Game Status"})]})]})]})]})]})]})}):(0,s.jsxs)("div",{className:"character-select-screen",children:[(0,s.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,s.jsxs)("div",{className:"game-container",children:[(0,s.jsx)("div",{className:"back-button",children:(0,s.jsx)("img",{src:u.src,alt:"Back",onClick:()=>C(!1)})}),(0,s.jsxs)("div",{className:"character-select-container",children:[(0,s.jsxs)("div",{id:"puppet-selector",className:"character-selector",onClick:()=>{w("Puppet"),I(!0)},children:[(0,s.jsx)("img",{src:h.src,alt:"Puppet"}),(0,s.jsx)("h3",{children:"PUPPET"}),(0,s.jsx)("p",{className:"character-description",children:"55 (67%)"})]}),(0,s.jsxs)("div",{id:"gizmo-selector",className:"character-selector",onClick:()=>{w("Gizmo"),I(!0)},children:[(0,s.jsx)("img",{src:y.src,alt:"Gizmo"}),(0,s.jsx)("h3",{children:"GIZMO"}),(0,s.jsx)("p",{className:"character-description",children:"55 (67%)"})]})]}),(0,s.jsx)("div",{className:"select-container",children:(0,s.jsx)("img",{className:"select-svg",src:g.src,alt:"Select"})})]})]})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"character left-character",children:[(0,s.jsx)("div",{className:"character-name",children:"Puppet"}),(0,s.jsx)("img",{src:d.src,className:"App-left-character",alt:"Left Character"})]}),(0,s.jsxs)("div",{className:"vs-container",children:[(0,s.jsx)("img",{src:p.src,className:"App-vs",alt:"VS"}),(0,s.jsxs)("div",{className:"play-button-container",children:[(0,s.jsx)("button",{className:"start-game-button-text",onClick:()=>{V?(alert("Wallet Address: ".concat(V)),C(!0)):alert("Please connect your wallet")},children:"START GAME"}),x.map((e,t)=>(0,s.jsx)("button",{className:"play-button",onClick:()=>n({connector:e}),children:V?"CONNECTED":"CONNECT"},t))]})]}),(0,s.jsxs)("div",{className:"character right-character",children:[(0,s.jsx)("div",{className:"character-name",children:"Gizmo"}),(0,s.jsx)("img",{src:m.src,className:"App-right-character",alt:"Right Character"})]})]})})}}},function(e){e.O(0,[541,652,62,775,274,936,744],function(){return e(e.s=8095)}),_N_E=e.O()}]);