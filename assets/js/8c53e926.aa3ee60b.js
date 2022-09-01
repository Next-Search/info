"use strict";(self.webpackChunknext_info=self.webpackChunknext_info||[]).push([[291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={},i="Advanced Features",s={unversionedId:"how-we-make-search-better/advanced-features",id:"how-we-make-search-better/advanced-features",title:"Advanced Features",description:'We believe in simple, intuitive user interfaces. When someone visits Phoebe they should be able to utilize it productively instantly. This is the "Apple" way.',source:"@site/docs/how-we-make-search-better/20-advanced-features.md",sourceDirName:"how-we-make-search-better",slug:"/how-we-make-search-better/advanced-features",permalink:"/docs/how-we-make-search-better/advanced-features",draft:!1,editUrl:"https://github.com/Next-Search/next-search.github.io/blob/main/docs/how-we-make-search-better/20-advanced-features.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local First",permalink:"/docs/how-we-make-search-better/local-first"},next:{title:"The Trust Network",permalink:"/docs/how-we-make-search-better/the-trust-network"}},l={},u=[],c={toc:u};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"advanced-features"},"Advanced Features"),(0,n.kt)("p",null,"We believe in simple, intuitive user interfaces. When someone visits ",(0,n.kt)("em",{parentName:"p"},"Phoebe"),' they should be able to utilize it productively instantly. This is the "Apple" way.'),(0,n.kt)("p",null,'But we also believe in providing visitors with power, if they want it. This is the "Android" way.'),(0,n.kt)("p",null,'We hope to seamlessly combine the two. For individuals looking to perform basic searches it should "just work." But for those who need more, we will provide more.'),(0,n.kt)("p",null,"Right now most search engines are simple and intuitive to use for the basics but lack robust tools for advanced users."),(0,n.kt)("p",null,"We believe individuals should be able to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Create a "just these sites" list to query that is named and saved across sessions. No need to re-enter desired sites every time one queries.'),(0,n.kt)("li",{parentName:"ol"},'Create a "not these sites" list similar to "just these sites."'),(0,n.kt)("li",{parentName:"ol"},"Remove sites from their search results that are not useful to them ","(","with the option to report the site as low value",")","."),(0,n.kt)("li",{parentName:"ol"},"Reorganize search results to reflect the value the results hold for the individual user."),(0,n.kt)("li",{parentName:"ol"},"Add specific sites to their personal list of preferred results for queries."),(0,n.kt)("li",{parentName:"ol"},'Choose whether they want the results to include listings they have viewed previously or whether the results should only contain "new to them" results.'),(0,n.kt)("li",{parentName:"ol"},"Assign ranking values to the results of others - e.g., if johndoe publicly shares their search data on ",(0,n.kt)("em",{parentName:"li"},"Phoebe")," another individual ","(","e.g. janedoe",")",' should be able to "link to" ',"(","without needing to grant trust",")"," that johndoe's data and have their results altered based on this johndoe's rankings."),(0,n.kt)("li",{parentName:"ol"},'The ability to add custom tags to organize search results for future retrieval. For example, someone might find an article on Mongo they find particularly useful. The article may also provide useful information on React, asynchronous JS, and WebAssembly. They may choose to tag this result with any/all of those topics. In addition, they might tag it with more personal terms such as "best-read" or "recommend-this" or "for-beginners" etc.')),(0,n.kt)("p",null,"What other advanced functionality would you like to see?"))}h.isMDXComponent=!0}}]);