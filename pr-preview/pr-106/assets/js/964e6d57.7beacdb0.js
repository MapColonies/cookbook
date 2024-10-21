"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"ogc-csw-examples",slug:"ogc-csw-examples",tags:["csw","example","raster","3D","dem"]},s="Query Examples",l={unversionedId:"ogc/protocols/ogc-csw/ogc-csw-examples",id:"ogc/protocols/ogc-csw/ogc-csw-examples",title:"Query Examples",description:"The following section will help you understand how to interface with our Catalog.",source:"@site/docs/ogc/protocols/ogc-csw/ogc-csw-query-examples.md",sourceDirName:"ogc/protocols/ogc-csw",slug:"/ogc/protocols/ogc-csw/ogc-csw-examples",permalink:"/developer-portal/pr-preview/pr-106/docs/ogc/protocols/ogc-csw/ogc-csw-examples",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-csw/ogc-csw-query-examples.md",tags:[{label:"csw",permalink:"/developer-portal/pr-preview/pr-106/docs/tags/csw"},{label:"example",permalink:"/developer-portal/pr-preview/pr-106/docs/tags/example"},{label:"raster",permalink:"/developer-portal/pr-preview/pr-106/docs/tags/raster"},{label:"3D",permalink:"/developer-portal/pr-preview/pr-106/docs/tags/3-d"},{label:"dem",permalink:"/developer-portal/pr-preview/pr-106/docs/tags/dem"}],version:"current",frontMatter:{id:"ogc-csw-examples",slug:"ogc-csw-examples",tags:["csw","example","raster","3D","dem"]},sidebar:"ogcSidebar",previous:{title:"Available catalogs",permalink:"/developer-portal/pr-preview/pr-106/docs/ogc/protocols/ogc-csw/csw-available-catalogs"},next:{title:"WCS - Web Coverage Service",permalink:"/developer-portal/pr-preview/pr-106/docs/ogc/protocols/ogc-wcs"}},i={},p=[{value:"GetCapabilities",id:"getcapabilities",level:2},{value:"Query by <strong><em>IsEqualTo</em></strong> value",id:"query-by-isequalto-value",level:2},{value:"Query by field value",id:"query-by-field-value",level:2},{value:"Query by field <strong><em>like</em></strong> value",id:"query-by-field-like-value",level:2},{value:"Number of records",id:"number-of-records",level:2},{value:"Query by <strong><em>Greater Or Equal</em></strong>",id:"query-by-greater-or-equal",level:2},{value:"Query by <strong><em>Less or Equal</em></strong>",id:"query-by-less-or-equal",level:2},{value:"Query by <strong><em>multi</em></strong> fields",id:"query-by-multi-fields",level:2},{value:"Query by <strong><em>BBOX</em></strong>",id:"query-by-bbox",level:2},{value:"Query by <strong><em>BBOX</em></strong> and <strong><em>region</em></strong>",id:"query-by-bbox-and-region",level:2},{value:"Query by <strong><em>productType</em></strong>, <strong><em>ingestionDate</em></strong> and <strong><em>maxResolutionDeg</em></strong> ordered by <strong><em>DESC ingestionDate</em></strong>",id:"query-by-producttype-ingestiondate-and-maxresolutiondeg-ordered-by-desc-ingestiondate",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query-examples"},"Query Examples"),(0,o.kt)("p",null,"The following section will help you understand how to interface with our Catalog."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Below examples will include "http://localhost:8080" as host url\nDo not forget to change the url to our real host url')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"[SUB-SYSTEM-TYPENAME]",":"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mc:MCRasterRecord")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mc:MC3DRecord")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mc:MCDEMRecord"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"[SUB-SYSTEM-MAIN-NAMESPACE]",":"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://schema.mapcolonies.com/raster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://schema.mapcolonies.com/3d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://schema.mapcolonies.com/dem"))),(0,o.kt)("h2",{id:"getcapabilities"},"GetCapabilities"),(0,o.kt)("p",null,'How to Get server metadata with "GetCapabilities" request'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET request\n\nhttp://localhost:8080/csw?request=GetCapabilities&service=CSW\n")),(0,o.kt)("h2",{id:"query-by-isequalto-value"},"Query by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"IsEqualTo"))," value"),(0,o.kt)("p",null,"How to query the catalog by ",(0,o.kt)("strong",{parentName:"p"},"specific property")," and his ",(0,o.kt)("strong",{parentName:"p"},"value")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'POST request\n\nUrl:\nhttp://localhost:8080/csw\n\nContent-Type\napplication/xml\n\nRequest body:\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsEqualTo matchCase="true">\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productId</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>MAS_6_ORT</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n        </PropertyIsEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"Above example declare a query for ",(0,o.kt)("inlineCode",{parentName:"p"},"mc:productId")," field in catalog and response with the full metadata of ",(0,o.kt)("inlineCode",{parentName:"p"},"MAS_6_ORT match")," result."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"maxRecords")," attribute in ",(0,o.kt)("inlineCode",{parentName:"p"},"<csw:GetRecords></csw:GetRecords>"),'element is equals to "1" means response will contain only 1 result.'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"startPosition"),"  will display records from all result start from the first one to the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxRecords")," value\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(1 to 1 in example)")),"."),(0,o.kt)("h2",{id:"query-by-field-value"},"Query by field value"),(0,o.kt)("p",null,"How to query the catalog by ",(0,o.kt)("strong",{parentName:"p"},"specific property")," and his ",(0,o.kt)("strong",{parentName:"p"},"value")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'POST request\n\nUrl:\nhttp://localhost:8080/csw\n\nContent-Type\napplication/xml\n\nRequest body:\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productId</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>MAS_6_ORT</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n        </PropertyIsLike>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"Above example declare a query for ",(0,o.kt)("inlineCode",{parentName:"p"},"mc:productId")," field in catalog and response with the full metadata of ",(0,o.kt)("inlineCode",{parentName:"p"},"MAS_6_ORT match")," result."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"maxRecords")," attribute in ",(0,o.kt)("inlineCode",{parentName:"p"},"<csw:GetRecords></csw:GetRecords>"),'element is equals to "1" means response will contain only 1 result.'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"startPosition"),"  will display records from all result start from the first one to the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxRecords")," value\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(1 to 1 in example)")),"."),(0,o.kt)("h2",{id:"query-by-field-like-value"},"Query by field ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"like"))," value"),(0,o.kt)("p",null,"How to query the catalog by specific property to be like ",(0,o.kt)("strong",{parentName:"p"},"wild-card")," value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'POST request\n\nUrl:\nhttp://localhost:8080/csw\n\nContent-Type\napplication/xml\n\nRequest body:\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="5"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productId</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>%MAS_6_ORT%</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n        </PropertyIsLike>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"pay attention for the ",(0,o.kt)("inlineCode",{parentName:"p"},"%MAS_6_ORT%")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Literal></Literal>")," element, ",(0,o.kt)("strong",{parentName:"p"},'now contains "%" after and before the value'),","),(0,o.kt)("p",null,"means CSW will look for every record that contains ",(0,o.kt)("inlineCode",{parentName:"p"},"MAS_6_ORT")," value in ",(0,o.kt)("inlineCode",{parentName:"p"},"mc:productId")," profile field"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"maxRecords"),' equals to "5" means response will contain up to 5 results.'),(0,o.kt)("h2",{id:"number-of-records"},"Number of records"),(0,o.kt)("p",null,"Get up to 5 records contains desired product version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="5"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productVersion</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>4.0</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n        </PropertyIsLike>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"another familiar example based on previous examples, just in that case we can see\n",(0,o.kt)("inlineCode",{parentName:"p"},"<PropertyName></PropertyName>")," element contains ",(0,o.kt)("inlineCode",{parentName:"p"},"mc:productVersion")," means we query catalog records by their product version."),(0,o.kt)("p",null,"in this specific example we will get up to 5 records that includes ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"productVersion"))," of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"4.0")),"."),(0,o.kt)("h2",{id:"query-by-greater-or-equal"},"Query by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"Greater Or Equal"))),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"\u2139\ufe0f-ingestiondate--the-date-field-that-records-will-be-filtered-by"},"\u2139\ufe0f ingestionDate = the date field that records will be filtered by."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsGreaterThanOrEqualTo>\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n      <PropertyName>mc:ingestionDate</PropertyName>\n      \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n      \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n      <Literal>2020-09-03T00:00:01Z</Literal>\n      \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n    </PropertyIsGreaterThanOrEqualTo>\n  </Filter>\n</csw:Constraint>\n")),(0,o.kt)("p",null,"  </csw:Query>\n</csw:GetRecords>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Response will contain up to 10 records (`maxRecords="10"`) that their **ingestion date** is Greater or Equal **2020-09-03T00:00:01Z**\n\n```xml \n<PropertyIsGreaterThanOrEqualTo></<PropertyIsGreaterThanOrEqualTo>\n')),(0,o.kt)("p",null,"to the record ingestion date in catalog."),(0,o.kt)("h2",{id:"query-by-less-or-equal"},"Query by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"Less or Equal"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLessThanOrEqualTo>\n          <PropertyName>mc:ingestionDate</PropertyName>\n          <Literal>2022-09-03T00:00:01Z</Literal>\n        </PropertyIsLessThanOrEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,'Response will contain up to 10 records (maxRecords="10") that their ',(0,o.kt)("strong",{parentName:"p"},"ingestion date")," is Less or Equal ",(0,o.kt)("strong",{parentName:"p"},"2022-09-03T00:00:01Z")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<PropertyIsLessThanOrEqualTo></<PropertyIsLessThanOrEqualTo>\n")),(0,o.kt)("p",null,"to the record ingestion date in catalog."),(0,o.kt)("h2",{id:"query-by-multi-fields"},"Query by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"multi"))," fields"),(0,o.kt)("p",null,"Use ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"<And></And>"))," element to includes 2 or more conditions for Query catalog by multi fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n      <And>\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n          <PropertyName>mc:productVersion</PropertyName>\n          <Literal>4.0</Literal>\n        </PropertyIsLike>\n        <PropertyIsLessThanOrEqualTo>\n          <PropertyName>mc:ingestionDate</PropertyName>\n          <Literal>2022-09-03T00:00:01Z</Literal>\n        </PropertyIsLessThanOrEqualTo>\n      </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,'Response will contain up to 10 records (maxRecords="10") that includes product version ',(0,o.kt)("inlineCode",{parentName:"p"},'"4.0"')," and their ingestion date is Less than the desired date ",(0,o.kt)("strong",{parentName:"p"},"2022-09-03T00:00:01Z")," ."),(0,o.kt)("h2",{id:"query-by-bbox"},"Query by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"BBOX"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <BBOX>\n          <PropertyName>ows:BoundingBox</PropertyName>\n            <gml:Envelope xmlns:gml="http://www.opengis.net/gml">\n                <gml:lowerCorner>-180 -90</gml:lowerCorner>\n                <gml:upperCorner>180 90</gml:upperCorner>\n            </gml:Envelope>\n          </BBOX>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"Response will contain up to 10 records ('maxRecords=\"10\"')  that their ",(0,o.kt)("strong",{parentName:"p"},"BBOX")," includes in the desired extent (in example:  -180, -190, 180, 90)"),(0,o.kt)("h2",{id:"query-by-bbox-and-region"},"Query by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"BBOX"))," and ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"region"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n      <And>\n          <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n            <PropertyName>mc:region</PropertyName>\n            <Literal>%\u05d9\u05e8\u05d3\u05df%</Literal>\n          </PropertyIsLike>\n        <BBOX>\n          <PropertyName>ows:BoundingBox</PropertyName>\n            <gml:Envelope xmlns:gml="http://www.opengis.net/gml">\n                <gml:lowerCorner>-180 -90</gml:lowerCorner>\n                <gml:upperCorner>180 90</gml:upperCorner>\n            </gml:Envelope>\n          </BBOX>\n      </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"Response will contain up to 10 records ('maxRecords=\"10\"') that their ",(0,o.kt)("strong",{parentName:"p"},"BBOX includes in the desired extent and their region is contains the word \u201c\u05d9\u05e8\u05d3\u05df\u201d"),"  (",(0,o.kt)("inlineCode",{parentName:"p"},"<Literal>%\u05d9\u05e8\u05d3\u05df%</Literal>"),")"),(0,o.kt)("h2",{id:"query-by-producttype-ingestiondate-and-maxresolutiondeg-ordered-by-desc-ingestiondate"},"Query by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"productType")),", ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"ingestionDate"))," and ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"maxResolutionDeg"))," ordered by ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"DESC ingestionDate"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" service="CSW" maxRecords="100"  startPosition="1" outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <And>\n            <PropertyIsEqualTo>\n                <PropertyName>mc:productType</PropertyName>\n                <Literal>Orthophoto</Literal>\n            </PropertyIsEqualTo>\n             <PropertyIsGreaterThan>\n                <PropertyName>mc:ingestionDate</PropertyName>\n                <Literal>2023-10-15T00:00:01Z</Literal>\n             </PropertyIsGreaterThan>\n             <PropertyIsLessThanOrEqualTo>\n                <PropertyName>mc:maxResolutionDeg</PropertyName>\n                <Literal>5.36441E-06</Literal>\n             </PropertyIsLessThanOrEqualTo>\n        </And>\n      </Filter>\n    </csw:Constraint>\n    <ogc:SortBy>\n        <ogc:SortProperty>\n            <ogc:PropertyName>mc:ingestionDate</ogc:PropertyName>\n            <ogc:SortOrder>DESC</ogc:SortOrder>\n        </ogc:SortProperty>\n    </ogc:SortBy>\n  </csw:Query>\n</csw:GetRecords>\n')),(0,o.kt)("p",null,"Response will contain up to 100 records ('maxRecords=\"100\"') that their ",(0,o.kt)("strong",{parentName:"p"},"productType")," is ",(0,o.kt)("strong",{parentName:"p"},"'Orthophoto'"),", ",(0,o.kt)("strong",{parentName:"p"},"maxResolutionDeg")," is less than ",(0,o.kt)("strong",{parentName:"p"},"'5.36441E-06'")," ordered by ",(0,o.kt)("strong",{parentName:"p"},"DESC ingestionDate")," after ",(0,o.kt)("strong",{parentName:"p"},"'2023-10-15T00:00:01Z'")))}u.isMDXComponent=!0}}]);