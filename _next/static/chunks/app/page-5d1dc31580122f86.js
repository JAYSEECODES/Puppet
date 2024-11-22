(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9013:function(e,t,a){Promise.resolve().then(a.bind(a,6433))},551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=a(1609);a(7437),a(2265);let n=r._(a(148));function s(e,t){var a;let r={loading:e=>{let{error:t,isLoading:a,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let s={...r,...t};return(0,n.default)({...s,modules:null==(a=s.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let r=a(5592);function n(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return a}},148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=a(7437),n=a(2265),s=a(912),c=a(1481);function l(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},o=function(e){let t={...i,...e},a=(0,n.lazy)(()=>t.loader().then(l)),o=t.loading;function d(e){let l=o?(0,r.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(c.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(a,{...e})]}):(0,r.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(a,{...e})});return(0,r.jsx)(n.Suspense,{fallback:l,children:i})}return d.displayName="LoadableComponent",d}},1481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return s}});let r=a(7437),n=a(8512);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,n.getExpectedRequestStore)("next/dynamic css"),s=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));s.push(...t)}}return 0===s.length?null:(0,r.jsx)(r.Fragment,{children:s.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},6433:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var r=a(7437),n=a(2265),s=a(551),c=a.n(s),l=a(718),i=a(4624);let o=[{type:"impl",name:"HelloStarknetImpl",interface_name:"workshop_frontend::IHelloStarknet"},{type:"struct",name:"core::integer::u256",members:[{name:"low",type:"core::integer::u128"},{name:"high",type:"core::integer::u128"}]},{type:"interface",name:"workshop_frontend::IHelloStarknet",items:[{type:"function",name:"increase_balance",inputs:[{name:"amount",type:"core::integer::u256"}],outputs:[],state_mutability:"external"},{type:"function",name:"get_balance",inputs:[],outputs:[{type:"core::integer::u256"}],state_mutability:"view"},{type:"function",name:"reset_balance",inputs:[],outputs:[],state_mutability:"external"}]},{type:"event",name:"workshop_frontend::HelloStarknet::BalanceIncreased",kind:"struct",members:[{name:"sender",type:"core::starknet::contract_address::ContractAddress",kind:"key"},{name:"amount",type:"core::integer::u256",kind:"data"},{name:"new_balance",type:"core::integer::u256",kind:"data"}]},{type:"event",name:"workshop_frontend::HelloStarknet::Event",kind:"enum",variants:[{name:"BalanceIncreased",type:"workshop_frontend::HelloStarknet::BalanceIncreased",kind:"nested"}]}];var d={src:"/Puppet//_next/static/media/puppet_preview.82f41b7d.png"},u={src:"/Puppet//_next/static/media/gizmo_preview.1253c5ed.png"},p={src:"/Puppet//_next/static/media/versus.b298df6b.png"},m={src:"/Puppet//_next/static/media/back.33c5057d.png"},f={src:"/Puppet//_next/static/media/small_puppet.9a537536.png"},h={src:"/Puppet//_next/static/media/small_gizmo.c7725c5d.png"},b={src:"/Puppet//_next/static/media/select.be584483.png"},g=a(9767);c()(()=>a.e(420).then(a.bind(a,9420)),{loadableGenerated:{webpack:()=>[9420]},ssr:!1});var _=()=>{let{data:e,isLoading:t,isError:a}=(0,l.Ov)({blockIdentifier:"latest"}),{address:s}=(0,l.mA)(),{isLoading:c,isError:_,error:x,data:y}=(0,l.KQ)({address:s,watch:!0}),v="0x1c758616421a10f9df071a5d985c72e3907cf98d553204cf8dee354647c736",{data:j,refetch:k,isError:N,isLoading:P,error:w}=(0,l.uT)({functionName:"get_balance",args:[],abi:o,address:v,watch:!0,refetchInterval:1e3}),[E,C]=(0,n.useState)(0),{contract:S}=(0,l.cq)({abi:o,address:v}),O=(0,n.useMemo)(()=>{if(!s||!S)return[];let e=E||0;return[S.populate("increase_balance",[e])]},[S,s,E]),{send:I,data:M,isPending:T}=(0,l.pQ)({calls:O}),{data:L,status:A,isLoading:R,isError:B,error:z}=(0,l.VS)({hash:null==M?void 0:M.transaction_hash,watch:!0}),G=(0,n.useMemo)(()=>{if(S)try{return S.populate("reset_balance")}catch(e){console.error("Error populating reset_balance call:",e);return}},[S]),{send:U,isPending:H,data:D}=(0,l.pQ)({calls:G?[G]:[]}),q=(0,n.useMemo)(()=>new i.Gf({nodeUrl:g.env.NEXT_PUBLIC_RPC_URL}),[]),[F,Q]=(0,n.useState)([]),V=(0,n.useRef)(0),{data:W}=(0,l.Ov)({refetchInterval:3e3}),K=(0,n.useCallback)(async(e,t)=>{if(!(t<=V.current))try{let a=V.current+1,r=await q.getEvents({address:e.address,from_block:{block_number:a},to_block:{block_number:t},chunk_size:500});r&&r.events&&Q(e=>[...e,...r.events]),V.current=t}catch(e){console.error("Error checking for events:",e)}},[q]);(0,n.useEffect)(()=>{S&&W&&K(S,W)},[S,W,K]),(0,n.useMemo)(()=>[...F].reverse().slice(0,5),[F]);let{connect:X,connectors:Y}=(0,l.$4)(),{disconnect:Z}=(0,l.qL)(),{address:$}=(0,l.mA)(),[J,ee]=(0,n.useState)(!0),[et,ea]=(0,n.useState)(!1),[er,en]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{ea(!0),setTimeout(()=>ee(!1),1e3)},2e3);return()=>clearTimeout(e)},[]),(0,r.jsx)("div",{className:"game-screen",style:{opacity:et?1:0},children:er?(0,r.jsxs)("div",{className:"screen",children:[(0,r.jsx)("div",{className:"rotate-message",children:"PLEASE TURN YOUR DEVICE INTO LANDSCAPE MODE."}),(0,r.jsxs)("div",{className:"game-container",children:[(0,r.jsx)("div",{className:"back-button",children:(0,r.jsx)("img",{src:m.src,alt:"Back"})}),(0,r.jsxs)("div",{className:"character-select-container",children:[(0,r.jsxs)("div",{id:"puppet-selector",className:"character-selector",children:[(0,r.jsx)("img",{src:f.src,alt:"Puppet"}),(0,r.jsx)("h3",{children:"PUPPET"}),(0,r.jsx)("p",{className:"character-description",children:"55 (67%)"})]}),(0,r.jsxs)("div",{id:"gizmo-selector",className:"character-selector",children:[(0,r.jsx)("img",{src:h.src,alt:"Gizmo"}),(0,r.jsx)("h3",{children:"GIZMO"}),(0,r.jsx)("p",{className:"character-description",children:"55 (67%)"})]})]}),(0,r.jsx)("div",{className:"select-container",children:(0,r.jsx)("img",{className:"select-svg",src:b.src,alt:"Select"})})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"character left-character",children:[(0,r.jsx)("div",{className:"character-name",children:"Puppet"}),(0,r.jsx)("img",{src:d.src,className:"App-left-character",alt:"Left Character"})]}),(0,r.jsxs)("div",{className:"vs-container",children:[(0,r.jsx)("img",{src:p.src,className:"App-vs",alt:"VS"}),(0,r.jsxs)("div",{className:"play-button-container",children:[(0,r.jsx)("button",{className:"start-game-button-text",onClick:()=>{$?(alert("Wallet Address: ".concat($)),en(!0)):alert("Please connect your wallet")},children:"START GAME"}),Y.map((e,t)=>(0,r.jsx)("button",{className:"play-button",onClick:()=>X({connector:e}),children:$?"CONNECTED":"CONNECT"},t))]})]}),(0,r.jsxs)("div",{className:"character right-character",children:[(0,r.jsx)("div",{className:"character-name",children:"Gizmo"}),(0,r.jsx)("img",{src:u.src,className:"App-right-character",alt:"Right Character"})]})]})})}}},function(e){e.O(0,[255,125,357,971,23,744],function(){return e(e.s=9013)}),_N_E=e.O()}]);