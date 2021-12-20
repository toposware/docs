"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,b=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,o(o({ref:t},l),{},{components:r})):n.createElement(b,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3046:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],c={sidebar_position:3},u="Subnet Registration",s={unversionedId:"learn/uci/subnet-registration",id:"learn/uci/subnet-registration",title:"Subnet Registration",description:"Subnets ready to participate in the Topos ecosystem first need to register with the TCE.",source:"@site/docs/learn/uci/subnet-registration.md",sourceDirName:"learn/uci",slug:"/learn/uci/subnet-registration",permalink:"/learn/uci/subnet-registration",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Certificate",permalink:"/learn/uci/certificate"},next:{title:"Authentication",permalink:"/learn/uci/authentication"}},l=[],p={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subnet-registration"},"Subnet Registration"),(0,a.kt)("p",null,"Subnets ready to participate in the Topos ecosystem first need to ",(0,a.kt)("strong",{parentName:"p"},"register")," with the ",(0,a.kt)("a",{parentName:"p",href:"/learn/tce/trb"},"TCE"),"."),(0,a.kt)("p",null,"The registration process consists in submitting a ",(0,a.kt)("strong",{parentName:"p"},"registration certificate")," that is different from regular certificates in that it contains specific data for declaring the new subnet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The subnet's ",(0,a.kt)("strong",{parentName:"li"},"initial state"),", i.e., the first state commitment the subnet participants intend to build from when certifying their future state transitions."),(0,a.kt)("li",{parentName:"ul"},"The subnet's ",(0,a.kt)("strong",{parentName:"li"},"signature public key")," to authenticate the certificate and guarantee its integrity.")))}f.isMDXComponent=!0}}]);