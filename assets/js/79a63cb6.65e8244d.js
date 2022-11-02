"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[343],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4853:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(3117),s=n(102),o=(n(7294),n(3905)),a=["components"],i={sidebar_position:4},c="Cross-Subnet Messages",l={unversionedId:"learn/subnets/cross-subnet-messages",id:"learn/subnets/cross-subnet-messages",title:"Cross-Subnet Messages",description:"Definition",source:"@site/docs/learn/subnets/cross-subnet-messages.md",sourceDirName:"learn/subnets",slug:"/learn/subnets/cross-subnet-messages",permalink:"/learn/subnets/cross-subnet-messages",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Topos Subnet",permalink:"/learn/subnets/topos-subnet"},next:{title:"Overview",permalink:"/learn/zkVM/overview"}},u=[{value:"Definition",id:"definition",children:[],level:2},{value:"Topos Cross-Subnet Messaging Protocol",id:"topos-cross-subnet-messaging-protocol",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-subnet-messages"},"Cross-Subnet Messages"),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"cross-subnet message")," represents a request from a user on a subnet to execute a transaction in a remote subnet. In practice, it consists in a transaction on the sending subnet that is part of a state transition whose validity is ensured by the ",(0,o.kt)("a",{parentName:"p",href:"/learn/uci/overview"},"UCI"),", which is settled on the ",(0,o.kt)("a",{parentName:"p",href:"/learn/tce/overview"},"TCE"),", and delivered to the receiving subnet."),(0,o.kt)("p",null,"Topos allows for interoperability between subnets via the following transmission flow of cross-subnet messages:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/transmission-flow.jpg",width:"90%",style:{margin:"2rem 0"}})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Validity and Authentication")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Thanks to the validity and authentication properties guaranteed by the UCI and the consistent delivery ensured by the TCE, the receiving subnet can trustlessly and securely interpret the cross-subnet message and execute the request transaction locally."))),(0,o.kt)("p",null,"While subnets are free to implement any specific cross-subnet messaging protocols built on top the ",(0,o.kt)("a",{parentName:"p",href:"/learn/uci/overview"},"UCI")," and the ",(0,o.kt)("a",{parentName:"p",href:"/learn/tce/overview"},"TCE"),", we propose the ",(0,o.kt)("strong",{parentName:"p"},"Topos Cross-Subnet Messaging Protocol"),"."),(0,o.kt)("h2",{id:"topos-cross-subnet-messaging-protocol"},"Topos Cross-Subnet Messaging Protocol"),(0,o.kt)("p",null,"The requesting user calls a dedicated protocol-level smart contract, the ",(0,o.kt)("strong",{parentName:"p"},"Topos Core contract"),", on the sending subnet. Once proven to be part of a verified state transition of the sending subnet, the call is executed on the receiving subnet."),(0,o.kt)("p",null,"The Topos Core contract function to call on the sending subnet depends on the type of message requested:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Asset transfer"),": An asset is burnt/locked on the sending subnet and equivalently minted on the receiving one.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"transferAsset(\n    subnet_id: Identifier of the receiving subnet,\n    asset_id: Identifier of the transferred asset,\n    recipient_addr: Recipient\u2019s address on the receiving subnet,\n    amount: Amount to be transferred\n)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arbitrary contract call"),": A contract on the receiving subnet is called from the sending subnet.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"callArbitraryContract(\n    subnet_id: Identifier of the receiving subnet,\n    contract_addr: Address of the smart contract,\n    func_name: Name of the function to call,\n    func_args: Arguments to pass to the function call\n)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Topos Cross-Subnet Messaging Protocol is ",(0,o.kt)("strong",{parentName:"p"},"under active development"),". More information will be available soon!"))))}d.isMDXComponent=!0}}]);