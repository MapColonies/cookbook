"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(r),u=o,g=l["".concat(s,".").concat(u)]||l[u]||d[u]||a;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"dem-getting-started",slug:"dem-getting-started",title:"Getting started",tags:["guide","DEM","DTM","DSM","terrain","getting-started"]},i=void 0,c={unversionedId:"MapColonies/DEM/Guides/dem-getting-started",id:"MapColonies/DEM/Guides/dem-getting-started",title:"Getting started",description:"Step by step guide",source:"@site/docs/MapColonies/DEM/Guides/DEM_getting_started.md",sourceDirName:"MapColonies/DEM/Guides",slug:"/MapColonies/DEM/Guides/dem-getting-started",permalink:"/developer-portal/pr-preview/pr-98/docs/MapColonies/DEM/Guides/dem-getting-started",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Guides/DEM_getting_started.md",tags:[{label:"guide",permalink:"/developer-portal/pr-preview/pr-98/docs/tags/guide"},{label:"DEM",permalink:"/developer-portal/pr-preview/pr-98/docs/tags/dem"},{label:"DTM",permalink:"/developer-portal/pr-preview/pr-98/docs/tags/dtm"},{label:"DSM",permalink:"/developer-portal/pr-preview/pr-98/docs/tags/dsm"},{label:"terrain",permalink:"/developer-portal/pr-preview/pr-98/docs/tags/terrain"},{label:"getting-started",permalink:"/developer-portal/pr-preview/pr-98/docs/tags/getting-started"}],version:"current",frontMatter:{id:"dem-getting-started",slug:"dem-getting-started",title:"Getting started",tags:["guide","DEM","DTM","DSM","terrain","getting-started"]},sidebar:"gettingStartedSidebar",previous:{title:"Enable Hardware Accelaration",permalink:"/developer-portal/pr-preview/pr-98/docs/MapColonies/3D/Guides/HardwareAcceleration"}},s={},p=[{value:"Step by step guide",id:"step-by-step-guide",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Query CSW catalog (Step 1)",id:"query-csw-catalog-step-1",level:2},{value:"Get DEM metadata (Step 2)",id:"get-dem-metadata-step-2",level:2},{value:"Get terrain provider URI (Step 2.1, optional)",id:"get-terrain-provider-uri-step-21-optional",level:2},{value:"Using catalog data (Step 3)",id:"using-catalog-data-step-3",level:2},{value:"Construct Client (Step 3.1)",id:"construct-client-step-31",level:2},{value:"Cesium",id:"cesium",level:3}],m={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step by step guide"),(0,o.kt)("p",null,"The following guide will help you understand, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Step-by-step"))," the best practices of how to work with the Map Colonies ",(0,o.kt)("strong",{parentName:"p"},"DEM")," Catalog and how to consume mapping products in a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"dynamic way"))," (materials might be changed or added)"),(0,o.kt)("h2",{id:"flow-diagram"},"Flow diagram"),(0,o.kt)("mermaid",{value:"flowchart LR\n    subgraph  Prerequisite\n      direction LR\n      a1[Define filter]\n      a2[Get Auth Token]\n    end\n\n    a1 -- filter --\x3e B[STEP 1<br/> Query CSW catalog]\n    a2 -- token --\x3e B\n    subgraph  Metadata drill-down\n      direction LR\n      c1[STEP 2<br/>Get DEM metadata]\n      c2[STEP 2.1 optional<br/>Get terrain provider URI]\n    end\n    B -- xml --\x3e c1\n    B -- xml --\x3e c2\n    c1 -. <i>IN DEVELOPMENT</i> <br/>metadata<br/>of available for <b>export</b> data .-> E[STEP 3<br/>Your system]\n    c2 -- terrain_URI --\x3e D[STEP 3.1<br/>Cesium]\n\n    linkStyle 4 color:green,stroke:#f4cccc,stroke-width:5px %% Arrow "}),(0,o.kt)("h2",{id:"query-csw-catalog-step-1"},"Query CSW catalog (Step 1)"),(0,o.kt)("p",null,"Query ",(0,o.kt)("strong",{parentName:"p"},"DEM CSW catalog")," service to find item(s) according to desired filter ",(0,o.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/examples/ogc-csw-examples"},"example are here")),(0,o.kt)("p",null,"Filter should be based on ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/DEM/Services/catalog/catalog-profile-v1"},"DEM profile")),(0,o.kt)("p",null,"Example query based on ",(0,o.kt)("inlineCode",{parentName:"p"},"mc:classification")," profile field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="GetRecords Request"',title:'"GetRecords','Request"':!0},'POST Request\n\nurl:\n\'<DEM-CATALOG-SERVICE_URL>/csw\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords outputFormat="application/xml"  outputSchema="http://schema.mapcolonies.com/dem" resultType="results" service="CSW" version="2.0.2" startPosition="1" maxRecords="200" xmlns:mc="http://schema.mapcolonies.com/dem" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n        <csw:Constraint version="1.1.0">\n            <ogc:Filter>\n                <ogc:And>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:classification</ogc:PropertyName>\n                        <ogc:Literal>5</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:productType</ogc:PropertyName>\n                        <ogc:Literal>DTM</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                </ogc:And>\n            </ogc:Filter>\n        </csw:Constraint>\n    </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"You will get GetRecords XML Response with product ",(0,o.kt)("strong",{parentName:"p"},"metadata"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Response example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Search Results Example"',title:'"Search',Results:!0,'Example"':!0},'    <?xml version="1.0" encoding="UTF-8"?>\n    <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:mc="http://schema.mapcolonies.com/dem" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n    <csw:SearchStatus timestamp="2022-03-27T06:45:54Z" />\n    <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="2" nextRecord="0" recordSchema="http://schema.mapcolonies.com/dem" elementSet="full">\n        <mc:MCDEMRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>5</mc:classification>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[31.2603,33.4345],[31.2603,34.4888],[32.3353,34.4888],[32.3353,33.4345],[31.2603,33.4345]]]}</mc:footprint>\n            <mc:geographicArea>\u05d9\u05e9\u05e8\u05d0\u05dc</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>\n            <mc:links scheme="WMTS_LAYER" name="" description="">http://dem-server/15211-65da-4523-9d6f-08016ad51b0d....</mc:links>\n            <mc:producerName>DAVID</mc:producerName>\n            <mc:productBBox>31.2603,33.4345,32.3353,34.4888</mc:productBBox>\n            <mc:productId>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:productId>\n            <mc:productName>\u05de\u05d5\u05d3\u05dc \u05e4\u05e8\u05d9\u05d6</mc:productName>\n            <mc:productType>DTM</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod>photogrammetric</mc:productionMethod>\n            <mc:productionSystem>P-30</mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>\u05e6\u05e4\u05d5\u05df</mc:region>\n            <mc:sensors>sensor1</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4567</mc:SRS>\n            <mc:SRSName>WGS24GEO</mc:SRSName>\n            <mc:type>RECORD_DEM</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>33.4345 31.2603</ows:LowerCorner>\n                <ows:UpperCorner>34.4888 32.3353</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MCDEMRecord>\n        <mc:MCDEMRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>5</mc:classification>\n            <mc:creationDateUTC>2022-06-15</mc:creationDateUTC>\n            <mc:description>srtm100</mc:description>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[35.2670012825,32.5856881598],[35.2670012825,32.6300363309],[35.3105702702,32.6300363309],[35.3105702702,32.5856881598],[35.2670012825,32.5856881598]]]}</mc:footprint>\n            <mc:geographicArea>North</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>11111111-1111-1111-1111-111111111111</mc:id>\n            <mc:links scheme="TERRAIN_QMESH" name="" description="">http://terrain-server.com/terrains/srtm100</mc:links>\n            <mc:producerName>MIKI</mc:producerName>\n            <mc:productBBox>35.2670012825,32.5856881598,35.3105702702,32.6300363309</mc:productBBox>\n            <mc:productId>11111111-1111-1111-1111-111111111111</mc:productId>\n            <mc:productName>srtm100</mc:productName>\n            <mc:productType>DTM</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod></mc:productionMethod>\n            <mc:productionSystem></mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>Israel</mc:region>\n            <mc:sensors>UNDEFINED</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15</mc:imagingTimeBeginUTC>\n            <mc:SRS>4326</mc:SRS>\n            <mc:SRSName>WGS84GEO</mc:SRSName>\n            <mc:type>RECORD_DEM</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>32.5856881598 35.2670012825</ows:LowerCorner>\n                <ows:UpperCorner>32.6300363309 35.3105702702</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MCDEMRecord>\n    </csw:SearchResults>\n    </csw:GetRecordsResponse>\n'))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Authentication must be integrated in order to communicate with Catalog services."),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"See the principles ",(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"here")))),(0,o.kt)("h2",{id:"get-dem-metadata-step-2"},"Get DEM metadata (Step 2)"),(0,o.kt)("p",null,"In the Response, look for desired data according to profile definition."),(0,o.kt)("h2",{id:"get-terrain-provider-uri-step-21-optional"},"Get terrain provider URI (Step 2.1, optional)"),(0,o.kt)("p",null,"In the Response, look for"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Extract link for terrain provider"',title:'"Extract',link:!0,for:!0,terrain:!0,'provider"':!0},'<mc:links scheme="TERRAIN_QMESH" name="srtm100">\n  http://terrain-server.com/terrains/srtm100\n</mc:links>\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"You should extract the ",(0,o.kt)("inlineCode",{parentName:"strong"},"<mc:links>")," ",(0,o.kt)("u",null,"element")," value as TERRAIN_URL variable, which is a terrain provider consumption URL for the following steps."))),(0,o.kt)("h2",{id:"using-catalog-data-step-3"},"Using catalog data (Step 3)"),(0,o.kt)("p",null,"In the future, you'll be able to export catalog data( elevation raw data in TIFF format ) after filtering."),(0,o.kt)("h2",{id:"construct-client-step-31"},"Construct Client (Step 3.1)"),(0,o.kt)("p",null,"Now, after you got all product metadata that you need by querying our Catalog, lets actually use it in your client application."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Below examples are based on ",(0,o.kt)("inlineCode",{parentName:"strong"},"Pseudo code"),", you will have to adapt it in your own application to make it work."))),(0,o.kt)("h3",{id:"cesium"},"Cesium"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"The minimum required version for cesium is v84."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// **Optional** add to Cesium terrain provider in order to clamp 3d models to the ground or investigate terrain \nviewer.terrainProvider = new Cesium.TerrainProvider({\n  url: new Cesium.Resource({\n    url: "<TERRAIN_URL>",\n    queryParameters: {\n      "token": "<token>",\n    },\n  }),\n});\n...\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<TERRAIN_URL>")," with the URL link that you got from ",(0,o.kt)("strong",{parentName:"p"},"Step 2.1 (optional)"),"."),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<token>")," with the token you have."))}d.isMDXComponent=!0}}]);