"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[5078],{97743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var o=n(74848),a=n(28453);const s={sidebar_position:6,id:"osm-nominatim-faq",slug:"osm-nominatim-faq",title:"FAQ",tags:["osm","faq","API","nominatim"]},r="Frequently Asked Questions",i={id:"MapColonies/openstreetmap/nominatim/osm-nominatim-faq",title:"FAQ",description:"API Results",source:"@site/docs/MapColonies/openstreetmap/nominatim/faq.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/osm-nominatim-faq",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/openstreetmap/nominatim/osm-nominatim-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/faq.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/osm"},{inline:!0,label:"faq",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/faq"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/api"},{inline:!0,label:"nominatim",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/nominatim"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"osm-nominatim-faq",slug:"osm-nominatim-faq",title:"FAQ",tags:["osm","faq","API","nominatim"]},sidebar:"docSidebar",previous:{title:"Special Phrases",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/openstreetmap/nominatim/Osm-special-phrases"},next:{title:"Valhalla APIs",permalink:"/developer-portal/pr-preview/pr-99/docs/category/valhalla-apis"}},l={},h=[{value:"API Results",id:"api-results",level:2},{value:"1. The address of my search results contains far-away places that don&#39;t belong there.",id:"1-the-address-of-my-search-results-contains-far-away-places-that-dont-belong-there",level:4},{value:"2. When doing reverse search, the address details have parts that don&#39;t contain the point I was looking up.",id:"2-when-doing-reverse-search-the-address-details-have-parts-that-dont-contain-the-point-i-was-looking-up",level:4},{value:"3. I get different counties/states/countries when I change the zoom parameter in the reverse query. How is that possible?",id:"3-i-get-different-countiesstatescountries-when-i-change-the-zoom-parameter-in-the-reverse-query-how-is-that-possible",level:4},{value:"4. Can you return the continent?",id:"4-can-you-return-the-continent",level:4}];function d(e){const t={em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"})}),"\n",(0,o.jsx)(t.h2,{id:"api-results",children:"API Results"}),"\n",(0,o.jsx)(t.h4,{id:"1-the-address-of-my-search-results-contains-far-away-places-that-dont-belong-there",children:"1. The address of my search results contains far-away places that don't belong there."}),"\n",(0,o.jsx)(t.p,{children:"Nominatim computes the address from two sources in the OpenStreetMap data:\nfrom administrative boundaries and from place nodes. Boundaries are the more\nuseful source. They precisely describe an area. So it is very clear for\nNominatim if a point belongs to an area or not. Place nodes are more complicated.\nThese are only points without any precise extent. So Nominatim has to take a\nguess and assume that an address belongs to the closest place node it can find.\nIn an ideal world, Nominatim would not need the place nodes but there are\nmany places on earth where there are no precise boundaries available for\nall parts that make up an address. This is in particular true for the more\nlocal address parts, like villages and suburbs. Therefore it is not possible\nto completely dismiss place nodes. And sometimes they sneak in where they\ndon't belong."}),"\n",(0,o.jsxs)(t.p,{children:["As a OpenStreetMap mapper, you can improve the situation in two ways: if you\nsee a place node for which already an administrative area exists, then you\nshould ",(0,o.jsx)(t.em,{children:"link"})," the two by adding the node with a 'label' role to the boundary\nrelation. If there is no administrative area, you can add the approximate\nextent of the place and tag it place=\"something\" as well."]}),"\n",(0,o.jsx)(t.h4,{id:"2-when-doing-reverse-search-the-address-details-have-parts-that-dont-contain-the-point-i-was-looking-up",children:"2. When doing reverse search, the address details have parts that don't contain the point I was looking up."}),"\n",(0,o.jsx)(t.p,{children:"There is a common misconception how the reverse API call works in Nominatim.\nReverse does not give you the address of the point you asked for. Reverse\nreturns the closest object to the point you asked for and then returns the\naddress of that object. Now, if you are close to a border, then the closest\nobject may be across that border. When Nominatim then returns the address,\nit contains the county/state/country across the border."}),"\n",(0,o.jsx)(t.h4,{id:"3-i-get-different-countiesstatescountries-when-i-change-the-zoom-parameter-in-the-reverse-query-how-is-that-possible",children:"3. I get different counties/states/countries when I change the zoom parameter in the reverse query. How is that possible?"}),"\n",(0,o.jsx)(t.p,{children:"This is basically the same problem as in the previous answer.\nThe zoom level influences at which search rank Nominatim starts looking\nfor the closest object. So the closest house number maybe on one side of the\nborder while the closest street is on the other. As the address details contain\nthe address of the closest object found, you might sometimes get one result,\nsometimes the other for the closest point."}),"\n",(0,o.jsx)(t.h4,{id:"4-can-you-return-the-continent",children:"4. Can you return the continent?"}),"\n",(0,o.jsx)(t.p,{children:"Nominatim assigns each map feature one country. Those outside any administrative\nboundaries are assigned a special no-country. Continents or other super-national\nadministrations (e.g. European Union, NATO, Custom unions) are not supported."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);