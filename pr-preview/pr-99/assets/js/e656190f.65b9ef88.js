"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[1623],{9580:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(74848),s=n(28453),o=n(11470),a=n(19365);n(70845);const i={id:"raster-export-guide",slug:"raster-export-guide",title:"Export Guide",tags:["guide","export","raster"]},c=void 0,l={id:"MapColonies/Raster/Guides/raster-export-guide",title:"Export Guide",description:"Export Guide step-by-step",source:"@site/docs/MapColonies/Raster/Guides/raster-export.mdx",sourceDirName:"MapColonies/Raster/Guides",slug:"/MapColonies/Raster/Guides/raster-export-guide",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/Raster/Guides/raster-export-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/Guides/raster-export.mdx",tags:[{inline:!0,label:"guide",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/guide"},{inline:!0,label:"export",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/export"},{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/raster"}],version:"current",frontMatter:{id:"raster-export-guide",slug:"raster-export-guide",title:"Export Guide",tags:["guide","export","raster"]},sidebar:"gettingStartedSidebar",previous:{title:"Raster",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/Raster/Guides/raster-getting-started"},next:{title:"Getting Started",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/3D/Guides/3d-getting-started"}},d={},p=[{value:"Export Guide step-by-step",id:"export-guide-step-by-step",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Query Catalog Service (Step 1)",id:"query-catalog-service-step-1",level:2},{value:"Use Export Service (Step 2)",id:"use-export-service-step-2",level:2},{value:"Wait for callback (Step 3)",id:"wait-for-callback-step-3",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"export-guide-step-by-step",children:"Export Guide step-by-step"}),"\n",(0,t.jsxs)(r.p,{children:["The following guide will help you understand, ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"Step-by-step"})})," the best practices of how to work with the Map Colonies Export Sevice and how to export Mapping data to offline consumers in ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"GPKG"})})," format"]}),"\n",(0,t.jsxs)(r.p,{children:["Export service Reference is ",(0,t.jsx)(r.a,{href:"/docs/MapColonies/Raster/services/raster-export",children:"here"})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," In order to get the layer id (mc",":id",") you have the following options:"]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Open map-colonies catalog application and locate the required layer"}),"\n"]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{src:n(12691).A,style:{display:"block",marginLeft:"auto",marginRight:"auto"}})}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Query all records via CSW GetRecords operation and search it in the result response"}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/ogc/protocols/examples/ogc-csw-examples",children:"Query Examples"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"flow-diagram",children:"Flow diagram"}),"\n",(0,t.jsx)(r.p,{children:"The following flow will show you one of our main use-case's"}),"\n",(0,t.jsx)(r.mermaid,{value:"flowchart LR\n    subgraph CSW\n      direction LR\n      b1[STEP 1 <br/> Query CSW catalog]\n      b1 --\x3e b3[STEP 3<br/>Get layer id - mc:id]\n    end\n\n    subgraph  Prerequisite\n      direction LR\n      a1[Get Product_ID]\n      a2[Get Auth Token]\n    end\n\n    a1 -- product_id --\x3e b1\n    a2 -- token --\x3e b1"}),"\n",(0,t.jsx)(r.h2,{id:"query-catalog-service-step-1",children:"Query Catalog Service (Step 1)"}),"\n",(0,t.jsxs)(r.p,{children:["Query ",(0,t.jsx)(r.strong,{children:"RASTER CSW catalog"})," service to find item(s) according to desired filter ",(0,t.jsx)(r.a,{href:"/docs/ogc/protocols/examples/ogc-csw-examples",children:"example are here"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["Pay attention to set the following parameter 'outputSchema=\"",(0,t.jsx)(r.a,{href:"http://schema.mapcolonies.com/raster",children:"http://schema.mapcolonies.com/raster"}),"\"' in order to get full catalog data"]})}),"\n",(0,t.jsx)(r.p,{children:"There are a few ways to acquire the productId, for example:"}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(a.A,{value:"SpecificLayer",label:"Specific Layer",children:[(0,t.jsx)(r.p,{children:"To fetch a specific layer you need to aquire 2 properties values:"}),(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"productType"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"productId"}),"\nTo get unique product when you already have the ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"productType"})})," and ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"productId"})})," you can use the following query (both can be coppied from our catalog app, for example for ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"Best Orthophoto"})})," use the following)"]}),"\n"]}),(0,t.jsx)(r.p,{children:"POST Request"}),(0,t.jsxs)(r.p,{children:["url:\n",(0,t.jsx)(r.code,{children:"'<RASTER-CATALOG-SERVICE_URL>/csw'"})]}),(0,t.jsx)(r.p,{children:"body (XML):"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1" outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <And>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productType</PropertyName>\n            <Literal>OrthophotoBest</Literal>\n          </PropertyIsEqualTo>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productId</PropertyName>\n            <Literal>ORTHOPHOTO_MOSAIC_BASE</Literal>\n          </PropertyIsEqualTo>\n        </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})})]}),(0,t.jsxs)(a.A,{value:"fetchAll",label:"Fetch All Layers (Pagination)",children:[(0,t.jsx)(r.p,{children:"You can enquire all raster products, use maxRecords and startPosition for pagination:"}),(0,t.jsx)(r.p,{children:"POST Request"}),(0,t.jsxs)(r.p,{children:["url:\n",(0,t.jsx)(r.code,{children:"'<RASTER-CATALOG-SERVICE_URL>/csw'"})]}),(0,t.jsx)(r.p,{children:"body (XML):"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsEqualTo>\n          <PropertyName>mc:type</PropertyName>\n          <Literal>RECORD_RASTER</Literal>\n        </PropertyIsEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})})]})]}),"\n",(0,t.jsxs)(r.p,{children:["You will get GetRecords XML Response with product ",(0,t.jsx)(r.strong,{children:"metadata"}),"."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",metastring:'title="GetRecords Response"',children:'  <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n  \x3c!-- pycsw 2.7.dev0 --\x3e\n  <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/raster" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n      <csw:SearchStatus timestamp="2022-02-15T15:08:58Z"/>\n      <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="1" nextRecord="2" recordSchema="http://schema.mapcolonies.com/raster" elementSet="full">\n          <mc:MCRasterRecord>\n              <mc:classification>4</mc:classification>\n              <mc:creationDateUTC>2022-02-13T13:04:23Z</mc:creationDateUTC>\n              <mc:description>World Wide 2020</mc:description>\n              <mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>\n              <mc:minHorizontalAccuracyCE90>3</mc:minHorizontalAccuracyCE90>\n              <mc:id>3b3164a7-280d-4392-a82f-d60a76e69092</mc:id>\n              <mc:ingestionDate>2022-02-13T13:04:23Z</mc:ingestionDate>\n              <mc:insertDate>2022-02-13T13:04:41Z</mc:insertDate>\n              <mc:mimeType>image/jpeg</mc:mimeType>\n              <mc:links scheme="WMS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities\'</mc:links>\n              <mc:links scheme="WMS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wms\'</mc:links>\n              <mc:links scheme="WMTS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts/1.0.0/WMTSCapabilities.xml\'</mc:links>\n              <mc:links scheme="WMTS_KVP" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'</mc:links>\n              <mc:links scheme="WMTS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts\'</mc:links>\n              <mc:maxResolutionMeter>0.1</mc:maxResolutionMeter>\n              <mc:producerName>IDFMU</mc:producerName>\n              <mc:productBBox>-180,-90,180,90</mc:productBBox>\n              <mc:productId>ORTHOPHOTO_MOSAIC_BASE</mc:productId>\n              <mc:productName>\u05d0\u05d5\u05e8\u05ea\u05d5\u05e4\u05d5\u05d8\u05d5 \u05de\u05ea\u05e2\u05d3\u05db\u05df</mc:productName>\n              <mc:productType>OrthophotoBest</mc:productType>\n              <mc:productVersion>1.0</mc:productVersion>\n              <mc:region>World</mc:region>\n              <mc:maxResolutionDeg>0.000171661376953125</mc:maxResolutionDeg>\n              <mc:sensors>UNDEFINED</mc:sensors>\n              <mc:imagingTimeEndUTC>2020-05-21</mc:imagingTimeEndUTC>\n              <mc:imagingTimeBeginUTC>2020-05-21</mc:imagingTimeBeginUTC>\n              <mc:SRS>4326</mc:SRS>\n              <mc:SRSName>WGS84GEO</mc:SRSName>\n              <mc:transparency>OPAQUE</mc:transparency>\n              <mc:type>RECORD_RASTER</mc:type>\n              <mc:updateDateUTC>2022-02-13T13:03:07Z</mc:updateDateUTC>\n              <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                  <ows:LowerCorner>-180.0 90.0</ows:LowerCorner>\n                  <ows:UpperCorner>180.0 90.0</ows:UpperCorner>\n              </ows:BoundingBox>\n          </mc:MCRasterRecord>\n      </csw:SearchResults>\n  </csw:GetRecordsResponse>\n'})})]}),"\n",(0,t.jsx)(r.h2,{id:"use-export-service-step-2",children:"Use Export Service (Step 2)"}),"\n",(0,t.jsx)(r.p,{children:"Now you need to make an export request for the desired layer."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/MapColonies/Raster/services/raster-export",children:"Service Reference"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/MapColonies/raster/services/export/api",children:"Service API"})}),"\n",(0,t.jsx)(r.p,{children:"POST Request"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "maxResolutionDeg": 0.0439453125,\n          "minResolutionDeg": 0.17578125\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                34.82836896556114,\n                32.03918441418732\n              ],\n              [\n                34.81210152170695,\n                32.03918441418732\n              ],\n              [\n                34.81210152170695,\n                32.02539369969462\n              ],\n              [\n                34.82836896556114,\n                32.02539369969462\n              ],\n              [\n                34.82836896556114,\n                32.03918441418732\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "export example",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"wait-for-callback-step-3",children:"Wait for callback (Step 3)"}),"\n",(0,t.jsxs)(r.p,{children:['Listen on "webhook url" that you provided for the response via the artifacts download url as explained in ',(0,t.jsx)(r.a,{href:"/docs/MapColonies/Raster/services/raster-export",children:"Service Reference"}),"\n... ","\ud83d\ude04"," enjoy"]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var t=n(18215);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>b});var t=n(96540),s=n(18215),o=n(23104),a=n(56347),i=n(205),c=n(57485),l=n(31682),d=n(70679);function p(e){var r;return(null==(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function m(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,o=u(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[l,p]=h({queryString:n,groupId:s}),[x,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,d.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),f=(()=>{const e=l??x;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const r=e.currentTarget,n=c.indexOf(r),s=i[n].value;s!==t&&(l(r),a(s))},p=e=>{var r;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}null==(r=n)||r.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:p,onClick:d,...o,className:(0,s.A)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function R(e){let{lazy:r,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=x(e);return(0,w.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,w.jsx)(v,{...r,...e}),(0,w.jsx)(R,{...r,...e})]})}function b(e){const r=(0,g.A)();return(0,w.jsx)(y,{...e,children:p(e.children)},String(r))}},70845:(e,r,n)=>{n(96540),n(44586),n(74848)},12691:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/Id_catalog-ec6cfde509e173647f6ddc5b1f4752f6.png"},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);