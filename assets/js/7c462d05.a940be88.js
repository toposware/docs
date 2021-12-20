"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9024:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},c="General overview",l={unversionedId:"general-overview",id:"general-overview",title:"General overview",description:"Topos is an open protocol of interoperable subnets (blockchains or legacy systems) that makes no compromises on their privacy. Typical trust assumptions and sharing of internal state are replaced by cryptographic proofs that allow for frictionless cross-subnet communication. With a fast and unlimitedly scalable transmission layer, the protocol is built for efficiency and resilience, and aims at bridging all blockchains and legacy systems in a seamless way.",source:"@site/docs/general-overview.md",sourceDirName:".",slug:"/general-overview",permalink:"/general-overview",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Overview",permalink:"/learn/subnets/overview"}},p=[{value:"Unified Certification Interface",id:"unified-certification-interface",children:[],level:2},{value:"Transmission Control Engine",id:"transmission-control-engine",children:[],level:2},{value:"DevKits",id:"devkits",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general-overview"},"General overview"),(0,a.kt)("p",null,"Topos is an open protocol of ",(0,a.kt)("strong",{parentName:"p"},"interoperable")," ",(0,a.kt)("a",{parentName:"p",href:"/learn/subnets/overview"},"subnets")," (blockchains or legacy systems) that makes no compromises on their ",(0,a.kt)("strong",{parentName:"p"},"privacy"),". Typical trust assumptions and sharing of internal state are replaced by cryptographic proofs that allow for frictionless cross-subnet communication. With a fast and unlimitedly scalable transmission layer, the protocol is built for efficiency and resilience, and aims at bridging all blockchains and legacy systems in a seamless way."),(0,a.kt)("p",null,"Joining the open Topos ecosystem, i.e., becoming a subnet, boils down to implementing the ",(0,a.kt)("strong",{parentName:"p"},"Unified Certification Interface")," (or using an existing implementation) and interacting with the ",(0,a.kt)("strong",{parentName:"p"},"Transmission Control Engine")," to start exchanging cross-subnet messages with the rest of the protocol participants."),(0,a.kt)("h2",{id:"unified-certification-interface"},"Unified Certification Interface"),(0,a.kt)("p",null,"The protocol remains agnostic as to the internal structure of a subnet by means of the ",(0,a.kt)("a",{parentName:"p",href:"/learn/uci/overview"},"Unified Certification Interface"),", a shared interface implemented by all subnets to communicate in a standardized manner."),(0,a.kt)("p",null,"Specifications laid down by the UCI detail the requirements for subnets to exchange messages with each other: state transitions validity must be proven, and messages must be authenticated."),(0,a.kt)("p",null,"A message exchanged between subnets takes the form of a ",(0,a.kt)("a",{parentName:"p",href:"/learn/uci/overview#certificate"},"certificate"),", a data structure that complies with the UCI, i.e., is correctly constructed, is signed with a valid signature, and contains a valid state transition."),(0,a.kt)("h2",{id:"transmission-control-engine"},"Transmission Control Engine"),(0,a.kt)("p",null,"Global consistency of messages exchanged between various ",(0,a.kt)("strong",{parentName:"p"},"public")," and ",(0,a.kt)("strong",{parentName:"p"},"private")," subnets is not ensured by consensus but by a ",(0,a.kt)("strong",{parentName:"p"},"reliable broadcast primitive")," executed by the ",(0,a.kt)("a",{parentName:"p",href:"/learn/tce/overview"},"Transmission Control Engine"),". This is in clear contrast with other multi-chain projects which typically rely on a consensus layer to enforce total ordering of cross-chain messages."),(0,a.kt)("p",null,"The Transmission Control Engine is supported by a network of auxiliary nodes (",(0,a.kt)("a",{parentName:"p",href:"/learn/tce/tce-nodes"},"TCE nodes"),") that receive certificates submitted by subnets to safely propagate and deliver them to all relevant subnets."),(0,a.kt)("h2",{id:"devkits"},"DevKits"),(0,a.kt)("p",null,"Built as extensions of blockchain and legacy system frameworks, ",(0,a.kt)("a",{parentName:"p",href:"/build/overview#devkits"},"DevKits")," allow new systems to be built from scratch with the desired platform (e.g. Substrate). With the specifications defined in the UCI, developers can implement them as new DevKits or use existing DevKits to start building subnets and interact with the Topos ecosystem right away."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"DevKits integrate ",(0,a.kt)("strong",{parentName:"p"},"TCE clients")," that allow subnets to interact with the TCE network."))))}m.isMDXComponent=!0}}]);