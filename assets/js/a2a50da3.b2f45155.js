"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||n;return r?i.createElement(h,o(o({ref:t},d),{},{components:r})):i.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var i=r(7462),a=(r(7294),r(3905));const n={sidebar_position:5},o="Certificate Lifecycle",c={unversionedId:"learn/uci/certificate-lifecycle",id:"learn/uci/certificate-lifecycle",title:"Certificate Lifecycle",description:"Production",source:"@site/docs/learn/uci/certificate-lifecycle.md",sourceDirName:"learn/uci",slug:"/learn/uci/certificate-lifecycle",permalink:"/learn/uci/certificate-lifecycle",draft:!1,editUrl:"https://github.com/toposware/docs/edit/master/docs/learn/uci/certificate-lifecycle.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1682609526,formattedLastUpdatedAt:"Apr 27, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"State Transitions Validity",permalink:"/learn/uci/state-transitions-validity"},next:{title:"Overview",permalink:"/learn/tce/overview"}},l={},s=[{value:"Production",id:"production",level:2},{value:"Propagation to the TCE",id:"propagation-to-the-tce",level:2},{value:"Validation and Broadcast",id:"validation-and-broadcast",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"certificate-lifecycle"},"Certificate Lifecycle"),(0,a.kt)("h2",{id:"production"},"Production"),(0,a.kt)("p",null,"Topos does not enforce any rules as to how often and when subnets should submit their certificates, and as such leaves the definition of the triggers responsible for certificate production at the discretion of subnet developers."),(0,a.kt)("p",null,"Producing a certificate comes down to creating and submitting a data structure that complies with the UCI, i.e., is authenticated and proves the validity of the included state transition."),(0,a.kt)("h2",{id:"propagation-to-the-tce"},"Propagation to the TCE"),(0,a.kt)("p",null,"When a subnet wants to submit a new certificate, it needs to propagate it to the rest of the Topos ecosystem. To that end, certain subnet participants, e.g., subnet validators, are also participating in the ",(0,a.kt)("a",{parentName:"p",href:"/learn/tce/overview"},"TCE")," network, allowing them to collectively create, authenticate, and broadcast ",(0,a.kt)("b",null,"certificate messages")," that encapsulate certificates."),(0,a.kt)("p",null,"The role of these specific subnet participants is to create, threshold sign, and broadcast certificate messages to the TCE network."),(0,a.kt)("h2",{id:"validation-and-broadcast"},"Validation and Broadcast"),(0,a.kt)("p",null,"Certificates are verified to be both intrinsically and extrinsically valid:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They are ",(0,a.kt)("strong",{parentName:"li"},"intrinsically")," valid if they are well formed, if their included zkSTARK proof is valid."),(0,a.kt)("li",{parentName:"ul"},"They are ",(0,a.kt)("strong",{parentName:"li"},"extrinsically")," valid if their dependencies are valid, i.e., are part of the history of their respective subnets (read more ",(0,a.kt)("a",{parentName:"li",href:"/learn/tce/wcprb"},"here"),").")),(0,a.kt)("p",null,"This validation is performed by an honest TCE node before it broadcasts the certificate message, and by all honest TCE nodes before they deliver it."),(0,a.kt)("p",null,"The broadcast is performed via the ",(0,a.kt)("a",{parentName:"p",href:"/learn/tce/wcprb"},"Weak Causally Probabilistic Reliable Broadcast primitive")," implemented by all TCE nodes."))}u.isMDXComponent=!0}}]);