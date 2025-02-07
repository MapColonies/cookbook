"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3653],{37365:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=r(74848),t=r(28453);const o={id:"ogc-csw-examples",slug:"ogc-csw-examples",tags:["csw","example","raster","3D","dem"]},l="Query Examples",c={id:"ogc/protocols/ogc-csw/ogc-csw-examples",title:"Query Examples",description:"The following section will help you understand how to interface with our Catalog.",source:"@site/docs/ogc/protocols/ogc-csw/ogc-csw-query-examples.md",sourceDirName:"ogc/protocols/ogc-csw",slug:"/ogc/protocols/ogc-csw/ogc-csw-examples",permalink:"/developer-portal/pr-preview/pr-144/docs/ogc/protocols/ogc-csw/ogc-csw-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-csw/ogc-csw-query-examples.md",tags:[{inline:!0,label:"csw",permalink:"/developer-portal/pr-preview/pr-144/docs/tags/csw"},{inline:!0,label:"example",permalink:"/developer-portal/pr-preview/pr-144/docs/tags/example"},{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-144/docs/tags/raster"},{inline:!0,label:"3D",permalink:"/developer-portal/pr-preview/pr-144/docs/tags/3-d"},{inline:!0,label:"dem",permalink:"/developer-portal/pr-preview/pr-144/docs/tags/dem"}],version:"current",frontMatter:{id:"ogc-csw-examples",slug:"ogc-csw-examples",tags:["csw","example","raster","3D","dem"]},sidebar:"ogcSidebar",previous:{title:"Available catalogs",permalink:"/developer-portal/pr-preview/pr-144/docs/ogc/protocols/ogc-csw/csw-available-catalogs"},next:{title:"WCS - Web Coverage Service",permalink:"/developer-portal/pr-preview/pr-144/docs/ogc/protocols/ogc-wcs"}},i={},a=[{value:"GetCapabilities",id:"getcapabilities",level:2},{value:"Query by <em><strong>IsEqualTo</strong></em> value",id:"query-by-isequalto-value",level:2},{value:"Query by field value",id:"query-by-field-value",level:2},{value:"Query by field <em><strong>like</strong></em> value",id:"query-by-field-like-value",level:2},{value:"Number of records",id:"number-of-records",level:2},{value:"Query by <em><strong>Greater Or Equal</strong></em>",id:"query-by-greater-or-equal",level:2},{value:"\u2139\ufe0f ingestionDate = the date field that records will be filtered by.",id:"information_source-ingestiondate--the-date-field-that-records-will-be-filtered-by",level:4},{value:"Query by <em><strong>Less or Equal</strong></em>",id:"query-by-less-or-equal",level:2},{value:"Query by <em><strong>multi</strong></em> fields",id:"query-by-multi-fields",level:2},{value:"Query by <em><strong>BBOX</strong></em>",id:"query-by-bbox",level:2},{value:"Query by <em><strong>BBOX</strong></em> and <em><strong>region</strong></em>",id:"query-by-bbox-and-region",level:2},{value:"Query by <em><strong>productType</strong></em>, <em><strong>ingestionDate</strong></em> and <em><strong>maxResolutionDeg</strong></em> ordered by <em><strong>DESC ingestionDate</strong></em>",id:"query-by-producttype-ingestiondate-and-maxresolutiondeg-ordered-by-desc-ingestiondate",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"query-examples",children:"Query Examples"})}),"\n",(0,s.jsx)(n.p,{children:"The following section will help you understand how to interface with our Catalog."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:['Below examples will include "',(0,s.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),'" as host url\nDo not forget to change the url to our real host url']})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"[SUB-SYSTEM-TYPENAME]:"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"mc:MCRasterRecord"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"mc:MC3DRecord"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"mc:MCDEMRecord"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"[SUB-SYSTEM-MAIN-NAMESPACE]:"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"http://schema.mapcolonies.com/raster"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"http://schema.mapcolonies.com/3d"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"http://schema.mapcolonies.com/dem"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getcapabilities",children:"GetCapabilities"}),"\n",(0,s.jsx)(n.p,{children:'How to Get server metadata with "GetCapabilities" request'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET request\n\nhttp://localhost:8080/csw?request=GetCapabilities&service=CSW\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-isequalto-value",children:["Query by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"IsEqualTo"})})," value"]}),"\n",(0,s.jsxs)(n.p,{children:["How to query the catalog by ",(0,s.jsx)(n.strong,{children:"specific property"})," and his ",(0,s.jsx)(n.strong,{children:"value"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'POST request\n\nUrl:\nhttp://localhost:8080/csw\n\nContent-Type\napplication/xml\n\nRequest body:\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsEqualTo matchCase="true">\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productId</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>MAS_6_ORT</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n        </PropertyIsEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Above example declare a query for ",(0,s.jsx)(n.code,{children:"mc:productId"})," field in catalog and response with the full metadata of ",(0,s.jsx)(n.code,{children:"MAS_6_ORT match"})," result."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"maxRecords"})," attribute in ",(0,s.jsx)(n.code,{children:"<csw:GetRecords></csw:GetRecords>"}),'element is equals to "1" means response will contain only 1 result.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"startPosition"}),"  will display records from all result start from the first one to the ",(0,s.jsx)(n.code,{children:"maxRecords"})," value\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(1 to 1 in example)"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"query-by-field-value",children:"Query by field value"}),"\n",(0,s.jsxs)(n.p,{children:["How to query the catalog by ",(0,s.jsx)(n.strong,{children:"specific property"})," and his ",(0,s.jsx)(n.strong,{children:"value"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'POST request\n\nUrl:\nhttp://localhost:8080/csw\n\nContent-Type\napplication/xml\n\nRequest body:\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productId</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>MAS_6_ORT</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n        </PropertyIsLike>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Above example declare a query for ",(0,s.jsx)(n.code,{children:"mc:productId"})," field in catalog and response with the full metadata of ",(0,s.jsx)(n.code,{children:"MAS_6_ORT match"})," result."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"maxRecords"})," attribute in ",(0,s.jsx)(n.code,{children:"<csw:GetRecords></csw:GetRecords>"}),'element is equals to "1" means response will contain only 1 result.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"startPosition"}),"  will display records from all result start from the first one to the ",(0,s.jsx)(n.code,{children:"maxRecords"})," value\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(1 to 1 in example)"})}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-field-like-value",children:["Query by field ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"like"})})," value"]}),"\n",(0,s.jsxs)(n.p,{children:["How to query the catalog by specific property to be like ",(0,s.jsx)(n.strong,{children:"wild-card"})," value"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'POST request\n\nUrl:\nhttp://localhost:8080/csw\n\nContent-Type\napplication/xml\n\nRequest body:\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="5"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productId</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>%MAS_6_ORT%</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n        </PropertyIsLike>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["pay attention for the ",(0,s.jsx)(n.code,{children:"%MAS_6_ORT%"})," in ",(0,s.jsx)(n.code,{children:"<Literal></Literal>"})," element, ",(0,s.jsx)(n.strong,{children:'now contains "%" after and before the value'}),","]}),"\n",(0,s.jsxs)(n.p,{children:["means CSW will look for every record that contains ",(0,s.jsx)(n.code,{children:"MAS_6_ORT"})," value in ",(0,s.jsx)(n.code,{children:"mc:productId"})," profile field"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"maxRecords"}),' equals to "5" means response will contain up to 5 results.']}),"\n",(0,s.jsx)(n.h2,{id:"number-of-records",children:"Number of records"}),"\n",(0,s.jsx)(n.p,{children:"Get up to 5 records contains desired product version"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="5"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:productVersion</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>4.0</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n        </PropertyIsLike>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["another familiar example based on previous examples, just in that case we can see\n",(0,s.jsx)(n.code,{children:"<PropertyName></PropertyName>"})," element contains ",(0,s.jsx)(n.code,{children:"mc:productVersion"})," means we query catalog records by their product version."]}),"\n",(0,s.jsxs)(n.p,{children:["in this specific example we will get up to 5 records that includes ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"productVersion"})})," of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"4.0"})}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-greater-or-equal",children:["Query by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Greater Or Equal"})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.h4,{id:"information_source-ingestiondate--the-date-field-that-records-will-be-filtered-by",children:["\u2139\ufe0f"," ingestionDate = the date field that records will be filtered by."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsGreaterThanOrEqualTo>\n\n          \x3c!-- ****** INSERT PROFILE FIELD NAME START ********************** --\x3e\n          <PropertyName>mc:ingestionDate</PropertyName>\n          \x3c!-- ****** INSERT PROFILE FIELD NAME END ********************** --\x3e\n\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE START ********************** --\x3e\n          <Literal>2020-09-03T00:00:01Z</Literal>\n          \x3c!-- ****** INSERT PROFILE FIELD VALUE END ********************** --\x3e\n\n        </PropertyIsGreaterThanOrEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Response will contain up to 10 records (",(0,s.jsx)(n.code,{children:'maxRecords="10"'}),") that their ",(0,s.jsx)(n.strong,{children:"ingestion date"})," is Greater or Equal ",(0,s.jsx)(n.strong,{children:"2020-09-03T00:00:01Z"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<PropertyIsGreaterThanOrEqualTo></<PropertyIsGreaterThanOrEqualTo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"to the record ingestion date in catalog."}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-less-or-equal",children:["Query by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Less or Equal"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsLessThanOrEqualTo>\n          <PropertyName>mc:ingestionDate</PropertyName>\n          <Literal>2022-09-03T00:00:01Z</Literal>\n        </PropertyIsLessThanOrEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:['Response will contain up to 10 records (maxRecords="10") that their ',(0,s.jsx)(n.strong,{children:"ingestion date"})," is Less or Equal ",(0,s.jsx)(n.strong,{children:"2022-09-03T00:00:01Z"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<PropertyIsLessThanOrEqualTo></<PropertyIsLessThanOrEqualTo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"to the record ingestion date in catalog."}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-multi-fields",children:["Query by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"multi"})})," fields"]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"<And></And>"})})," element to includes 2 or more conditions for Query catalog by multi fields:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n      <And>\n        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n          <PropertyName>mc:productVersion</PropertyName>\n          <Literal>4.0</Literal>\n        </PropertyIsLike>\n        <PropertyIsLessThanOrEqualTo>\n          <PropertyName>mc:ingestionDate</PropertyName>\n          <Literal>2022-09-03T00:00:01Z</Literal>\n        </PropertyIsLessThanOrEqualTo>\n      </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:['Response will contain up to 10 records (maxRecords="10") that includes product version ',(0,s.jsx)(n.code,{children:'"4.0"'})," and their ingestion date is Less than the desired date ",(0,s.jsx)(n.strong,{children:"2022-09-03T00:00:01Z"})," ."]}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-bbox",children:["Query by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"BBOX"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <BBOX>\n          <PropertyName>ows:BoundingBox</PropertyName>\n            <gml:Envelope xmlns:gml="http://www.opengis.net/gml">\n                <gml:lowerCorner>-180 -90</gml:lowerCorner>\n                <gml:upperCorner>180 90</gml:upperCorner>\n            </gml:Envelope>\n          </BBOX>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Response will contain up to 10 records ('maxRecords=\"10\"')  that their ",(0,s.jsx)(n.strong,{children:"BBOX"})," includes in the desired extent (in example:  -180, -190, 180, 90)"]}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-bbox-and-region",children:["Query by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"BBOX"})})," and ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"region"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"\noutputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >\n  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n      <And>\n          <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\">\n            <PropertyName>mc:region</PropertyName>\n            <Literal>%\u05d9\u05e8\u05d3\u05df%</Literal>\n          </PropertyIsLike>\n        <BBOX>\n          <PropertyName>ows:BoundingBox</PropertyName>\n            <gml:Envelope xmlns:gml="http://www.opengis.net/gml">\n                <gml:lowerCorner>-180 -90</gml:lowerCorner>\n                <gml:upperCorner>180 90</gml:upperCorner>\n            </gml:Envelope>\n          </BBOX>\n      </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Response will contain up to 10 records ('maxRecords=\"10\"') that their ",(0,s.jsx)(n.strong,{children:"BBOX includes in the desired extent and their region is contains the word \u201c\u05d9\u05e8\u05d3\u05df\u201d"}),"  (",(0,s.jsx)(n.code,{children:"<Literal>%\u05d9\u05e8\u05d3\u05df%</Literal>"}),")"]}),"\n",(0,s.jsxs)(n.h2,{id:"query-by-producttype-ingestiondate-and-maxresolutiondeg-ordered-by-desc-ingestiondate",children:["Query by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"productType"})}),", ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ingestionDate"})})," and ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"maxResolutionDeg"})})," ordered by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"DESC ingestionDate"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" service="CSW" maxRecords="100"  startPosition="1" outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <And>\n            <PropertyIsEqualTo>\n                <PropertyName>mc:productType</PropertyName>\n                <Literal>Orthophoto</Literal>\n            </PropertyIsEqualTo>\n             <PropertyIsGreaterThan>\n                <PropertyName>mc:ingestionDate</PropertyName>\n                <Literal>2023-10-15T00:00:01Z</Literal>\n             </PropertyIsGreaterThan>\n             <PropertyIsLessThanOrEqualTo>\n                <PropertyName>mc:maxResolutionDeg</PropertyName>\n                <Literal>5.36441E-06</Literal>\n             </PropertyIsLessThanOrEqualTo>\n        </And>\n      </Filter>\n    </csw:Constraint>\n    <ogc:SortBy>\n        <ogc:SortProperty>\n            <ogc:PropertyName>mc:ingestionDate</ogc:PropertyName>\n            <ogc:SortOrder>DESC</ogc:SortOrder>\n        </ogc:SortProperty>\n    </ogc:SortBy>\n  </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Response will contain up to 100 records ('maxRecords=\"100\"') that their ",(0,s.jsx)(n.strong,{children:"productType"})," is ",(0,s.jsx)(n.strong,{children:"'Orthophoto'"}),", ",(0,s.jsx)(n.strong,{children:"maxResolutionDeg"})," is less than ",(0,s.jsx)(n.strong,{children:"'5.36441E-06'"})," ordered by ",(0,s.jsx)(n.strong,{children:"DESC ingestionDate"})," after ",(0,s.jsx)(n.strong,{children:"'2023-10-15T00:00:01Z'"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(96540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);