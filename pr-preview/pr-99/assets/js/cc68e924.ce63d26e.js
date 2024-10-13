"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[5015],{70879:(e,c,o)=>{o.r(c),o.d(c,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>m});var n=o(74848),r=o(28453);const t={id:"3d-catalog-service",slug:"3d-catalog",title:"3D Catalog \ud83d\uddc3\ufe0f",tags:["3D","catalog","smart-reality","csw","API","qmesh","quantaized-mesh"]},s="Catalog Service \ud83d\uddc3\ufe0f",i={id:"MapColonies/3D/services/catalog/3d-catalog-service",title:"3D Catalog \ud83d\uddc3\ufe0f",description:"Catalog Service for the Web (CSW) is a standard for exposing a catalog of geospatial records in XML on the Internet (over HTTP). The catalog is made up of records that describe geospatial data, geospatial services (e.g. WMTS), and related resources.",source:"@site/docs/MapColonies/3D/services/catalog/README.md",sourceDirName:"MapColonies/3D/services/catalog",slug:"/MapColonies/3D/services/catalog/3d-catalog",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/3D/services/catalog/3d-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/services/catalog/README.md",tags:[{inline:!0,label:"3D",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/3-d"},{inline:!0,label:"catalog",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/catalog"},{inline:!0,label:"smart-reality",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/smart-reality"},{inline:!0,label:"csw",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/csw"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/api"},{inline:!0,label:"qmesh",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/qmesh"},{inline:!0,label:"quantaized-mesh",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/quantaized-mesh"}],version:"current",frontMatter:{id:"3d-catalog-service",slug:"3d-catalog",title:"3D Catalog \ud83d\uddc3\ufe0f",tags:["3D","catalog","smart-reality","csw","API","qmesh","quantaized-mesh"]},sidebar:"docSidebar",previous:{title:"3D Model Viewer \ud83c\udf0d",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/3D/services/3dViewer/3d-viewer"},next:{title:"Profile v1",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/3D/services/catalog/catalog-profile-v1"}},a={},m=[];function d(e){const c={a:"a",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:o}=c;return o||function(e,c){throw new Error("Expected "+(c?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.header,{children:(0,n.jsx)(c.h1,{id:"catalog-service-\ufe0f",children:"Catalog Service \ud83d\uddc3\ufe0f"})}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.a,{href:"/docs/ogc/protocols/ogc-csw/ogc-csw",children:"Catalog Service for the Web (CSW)"})," is a standard for exposing a catalog of geospatial records in XML on the Internet (over HTTP). The catalog is made up of records that describe geospatial data, geospatial services (e.g. ",(0,n.jsx)(c.a,{href:"/docs/ogc/protocols/ogc-wmts",children:"WMTS"}),"), and related resources."]}),"\n",(0,n.jsxs)(c.table,{children:[(0,n.jsx)(c.thead,{children:(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.th,{children:(0,n.jsx)(c.strong,{children:"Request"})}),(0,n.jsx)(c.th,{children:(0,n.jsx)(c.strong,{children:"HTTP method binding(s)"})})]})}),(0,n.jsxs)(c.tbody,{children:[(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:"GetCapabilities"}),(0,n.jsx)(c.td,{children:"GET (KVP) / POST (XML) / SOAP"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:"DescribeRecord"}),(0,n.jsx)(c.td,{children:"GET (KVP) / POST (XML) / SOAP"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:"GetRecords"}),(0,n.jsx)(c.td,{children:"GET (KVP) / POST (XML) / SOAP"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:"GetRecordById"}),(0,n.jsx)(c.td,{children:"GET (KVP) / POST (XML) / SOAP"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:"GetRepositoryItem"}),(0,n.jsx)(c.td,{children:"GET (KVP)"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:"GetDomain"}),(0,n.jsx)(c.td,{children:"GET (KVP) / POST (XML) / SOAP"})]})]})]}),"\n",(0,n.jsx)(c.p,{children:(0,n.jsx)(c.strong,{children:(0,n.jsx)(c.em,{children:"Retrieve the records"})})}),"\n",(0,n.jsx)(c.p,{children:"In order to retrieve the records, You need to send a post request with XML describing the specific records you want."}),"\n",(0,n.jsx)(c.p,{children:"Of course, you have to add the authentication stage in order to get answer."}),"\n",(0,n.jsxs)(c.p,{children:["For more details, see: ",(0,n.jsx)(c.a,{href:"/docs/MapColonies/authentication",children:"Authentication"})]}),"\n",(0,n.jsx)(c.p,{children:"An example of a post request's body:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-xml",metastring:'title="Get all records with classification equal to 7"',children:'<csw:GetRecords\nmaxRecords="10"\noutputFormat="application/xml"\noutputSchema="http://schema.mapcolonies.com/3d"\nresultType="results"\nservice="CSW"\nversion="2.0.2"\nstartPosition="1"\nxmlns:mc="http://schema.mapcolonies.com/3d"\nxmlns:csw="http://www.opengis.net/cat/csw/2.0.2"\nxmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n        <csw:Constraint version="1.1.0">\n            <ogc:Filter>\n                <ogc:PropertyIsEqualTo>\n                    <ogc:PropertyName>mc:classification</ogc:PropertyName>\n                    <ogc:Literal>7</ogc:Literal>\n                </ogc:PropertyIsEqualTo>\n            </ogc:Filter>\n        </csw:Constraint>\n    </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,n.jsx)(c.p,{children:"After sending the request, you will get a response with all the records matched to the filter query. For example:"}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-xml",metastring:'title="3D Records Response"',children:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/3d" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n    <csw:SearchStatus timestamp="2022-06-16T07:12:25Z"/>\n    <csw:SearchResults numberOfRecordsMatched="3" numberOfRecordsReturned="3" nextRecord="0" recordSchema="http://schema.mapcolonies.com/3d" elementSet="full">\n        <mc:MC3DRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>5</mc:classification>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[31.2603,33.4345],[31.2603,34.4888],[32.3353,34.4888],[32.3353,33.4345],[31.2603,33.4345]]]}</mc:footprint>\n            <mc:geographicArea>\u05d9\u05e9\u05e8\u05d0\u05dc</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>\n            <mc:links scheme="3D_LAYER" name="" description="">http://model-server-3d/path/to/file/tileset.json</mc:links>\n            <mc:producerName>TZAHAL</mc:producerName>\n            <mc:productBBox>31.2603,33.4345,32.3353,34.4888</mc:productBBox>\n            <mc:productId>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:productId>\n            <mc:productName>\u05de\u05d5\u05d3\u05dc \u05e4\u05e8\u05d9\u05d6</mc:productName>\n            <mc:productType>3DPhotoRealistic</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod>photogrammetric</mc:productionMethod>\n            <mc:productionSystem>P-30</mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>\u05e6\u05e4\u05d5\u05df</mc:region>\n            <mc:sensors>sensor1</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4567</mc:SRS>\n            <mc:SRSName>WGS24GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>33.4345 31.2603</ows:LowerCorner>\n                <ows:UpperCorner>34.4888 32.3353</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n        <mc:MC3DRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>7</mc:classification>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[32.2603,34.4345],[32.2603,35.4888],[33.3353,35.4888],[33.3353,34.4345],[32.2603,34.4345]]]}</mc:footprint>\n            <mc:geographicArea>\u05d9\u05e9\u05e8\u05d0\u05dc</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>\n            <mc:links scheme="3D_LAYER" name="" description="">http://model-server-3d/path/to/file/tileset.json</mc:links>\n            <mc:producerName>TZAHAL</mc:producerName>\n            <mc:productBBox>32.2603,34.4345,33.3353,35.4888</mc:productBBox>\n            <mc:productId>c2bb5433ee-6081-4e69-918c-287f48ea244d</mc:productId>\n            <mc:productName>\u05de\u05d5\u05d3\u05dc \u05e1\u05d9\u05e0\u05d9</mc:productName>\n            <mc:productType>3DPhotoRealistic</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod>photogrammetric</mc:productionMethod>\n            <mc:productionSystem>P-80</mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>\u05d3\u05e8\u05d5\u05dd \u05de\u05d6\u05e8\u05d7</mc:region>\n            <mc:sensors>sensor2</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4567</mc:SRS>\n            <mc:SRSName>WGS24GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>34.4345 32.2603</ows:LowerCorner>\n                <ows:UpperCorner>35.4888 33.3353</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n        <mc:MC3DRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>7</mc:classification>\n            <mc:creationDateUTC>2022-06-15</mc:creationDateUTC>\n            <mc:description>srtm100</mc:description>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[11,22],[11,33],[44,33],[44,22],[11,22]]]}</mc:footprint>\n            <mc:geographicArea>North</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>11111111-1111-1111-1111-111111111111</mc:id>\n            <mc:links scheme="3DTiles" name="" description="">http://model-server-3d/path/to/file/tileset.json</mc:links>\n            <mc:producerName>aa</mc:producerName>\n            <mc:productBBox>11,22,44,33</mc:productBBox>\n            <mc:productId>11111111-1111-1111-1111-111111111111</mc:productId>\n            <mc:productName>aaa</mc:productName>\n            <mc:productType>type</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod></mc:productionMethod>\n            <mc:productionSystem></mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>region</mc:region>\n            <mc:sensors>aa</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15</mc:imagingTimeBeginUTC>\n            <mc:SRS>23</mc:SRS>\n            <mc:SRSName>1234</mc:SRSName>\n            <mc:type>revorsd</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:23" dimensions="2">\n                <ows:LowerCorner>22 11</ows:LowerCorner>\n                <ows:UpperCorner>33 44</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n    </csw:SearchResults>\n</csw:GetRecordsResponse>\n'})})]}),"\n",(0,n.jsx)(c.p,{children:"You can see in the response how much records returned, from which schema and etc..."}),"\n",(0,n.jsx)(c.p,{children:"In addition, you can also see all the metadata of the matched records."}),"\n",(0,n.jsxs)(c.p,{children:["In each record, you can find an element called ",(0,n.jsx)(c.code,{children:"<mc:links>"}),"."]}),"\n",(0,n.jsx)(c.p,{children:"This link is a layer consumption URL."})]})}function l(e={}){const{wrapper:c}={...(0,r.R)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,c,o)=>{o.d(c,{R:()=>s,x:()=>i});var n=o(96540);const r={},t=n.createContext(r);function s(e){const c=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(t.Provider,{value:c},e.children)}}}]);