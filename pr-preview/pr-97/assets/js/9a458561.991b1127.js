"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[8826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return n?o.createElement(u,s(s({ref:t},c),{},{components:n})):o.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:6,id:"osm-nominatim-faq",slug:"osm-nominatim-faq",title:"FAQ",tags:["osm","faq","API","nominatim"]},s="Frequently Asked Questions",i={unversionedId:"MapColonies/openstreetmap/nominatim/osm-nominatim-faq",id:"MapColonies/openstreetmap/nominatim/osm-nominatim-faq",title:"FAQ",description:"API Results",source:"@site/docs/MapColonies/openstreetmap/nominatim/faq.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/osm-nominatim-faq",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/openstreetmap/nominatim/osm-nominatim-faq",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/faq.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/osm"},{label:"faq",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/faq"},{label:"API",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/api"},{label:"nominatim",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/nominatim"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"osm-nominatim-faq",slug:"osm-nominatim-faq",title:"FAQ",tags:["osm","faq","API","nominatim"]},sidebar:"docSidebar",previous:{title:"Special Phrases",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/openstreetmap/nominatim/Osm-special-phrases"},next:{title:"Valhalla APIs",permalink:"/developer-portal/pr-preview/pr-97/docs/category/valhalla-apis"}},l={},p=[{value:"API Results",id:"api-results",level:2},{value:"1. The address of my search results contains far-away places that don&#39;t belong there.",id:"1-the-address-of-my-search-results-contains-far-away-places-that-dont-belong-there",level:4},{value:"2. When doing reverse search, the address details have parts that don&#39;t contain the point I was looking up.",id:"2-when-doing-reverse-search-the-address-details-have-parts-that-dont-contain-the-point-i-was-looking-up",level:4},{value:"3. I get different counties/states/countries when I change the zoom parameter in the reverse query. How is that possible?",id:"3-i-get-different-countiesstatescountries-when-i-change-the-zoom-parameter-in-the-reverse-query-how-is-that-possible",level:4},{value:"4. Can you return the continent?",id:"4-can-you-return-the-continent",level:4}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h2",{id:"api-results"},"API Results"),(0,a.kt)("h4",{id:"1-the-address-of-my-search-results-contains-far-away-places-that-dont-belong-there"},"1. The address of my search results contains far-away places that don't belong there."),(0,a.kt)("p",null,"Nominatim computes the address from two sources in the OpenStreetMap data:\nfrom administrative boundaries and from place nodes. Boundaries are the more\nuseful source. They precisely describe an area. So it is very clear for\nNominatim if a point belongs to an area or not. Place nodes are more complicated.\nThese are only points without any precise extent. So Nominatim has to take a\nguess and assume that an address belongs to the closest place node it can find.\nIn an ideal world, Nominatim would not need the place nodes but there are\nmany places on earth where there are no precise boundaries available for\nall parts that make up an address. This is in particular true for the more\nlocal address parts, like villages and suburbs. Therefore it is not possible\nto completely dismiss place nodes. And sometimes they sneak in where they\ndon't belong."),(0,a.kt)("p",null,"As a OpenStreetMap mapper, you can improve the situation in two ways: if you\nsee a place node for which already an administrative area exists, then you\nshould ",(0,a.kt)("em",{parentName:"p"},"link")," the two by adding the node with a 'label' role to the boundary\nrelation. If there is no administrative area, you can add the approximate\nextent of the place and tag it place=\"something\" as well."),(0,a.kt)("h4",{id:"2-when-doing-reverse-search-the-address-details-have-parts-that-dont-contain-the-point-i-was-looking-up"},"2. When doing reverse search, the address details have parts that don't contain the point I was looking up."),(0,a.kt)("p",null,"There is a common misconception how the reverse API call works in Nominatim.\nReverse does not give you the address of the point you asked for. Reverse\nreturns the closest object to the point you asked for and then returns the\naddress of that object. Now, if you are close to a border, then the closest\nobject may be across that border. When Nominatim then returns the address,\nit contains the county/state/country across the border."),(0,a.kt)("h4",{id:"3-i-get-different-countiesstatescountries-when-i-change-the-zoom-parameter-in-the-reverse-query-how-is-that-possible"},"3. I get different counties/states/countries when I change the zoom parameter in the reverse query. How is that possible?"),(0,a.kt)("p",null,"This is basically the same problem as in the previous answer.\nThe zoom level influences at which search rank Nominatim starts looking\nfor the closest object. So the closest house number maybe on one side of the\nborder while the closest street is on the other. As the address details contain\nthe address of the closest object found, you might sometimes get one result,\nsometimes the other for the closest point."),(0,a.kt)("h4",{id:"4-can-you-return-the-continent"},"4. Can you return the continent?"),(0,a.kt)("p",null,"Nominatim assigns each map feature one country. Those outside any administrative\nboundaries are assigned a special no-country. Continents or other super-national\nadministrations (e.g. European Union, NATO, Custom unions) are not supported."))}m.isMDXComponent=!0}}]);