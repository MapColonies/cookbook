"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4884],{37936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(74848),s=n(28453),a=n(11470),i=n(19365);n(70845);const o={id:"raster-getting-started",slug:"raster-getting-started",title:"Getting started",tags:["guide","getting-started","raster","cesium","openlayers","leaflet"]},l=void 0,c={id:"MapColonies/Raster/Guides/raster-getting-started",title:"Getting started",description:"Developer Guide step-by-step",source:"@site/docs/MapColonies/Raster/Guides/raster-getting-started.mdx",sourceDirName:"MapColonies/Raster/Guides",slug:"/MapColonies/Raster/Guides/raster-getting-started",permalink:"/developer-portal/pr-preview/pr-138/docs/MapColonies/Raster/Guides/raster-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/Guides/raster-getting-started.mdx",tags:[{inline:!0,label:"guide",permalink:"/developer-portal/pr-preview/pr-138/docs/tags/guide"},{inline:!0,label:"getting-started",permalink:"/developer-portal/pr-preview/pr-138/docs/tags/getting-started"},{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-138/docs/tags/raster"},{inline:!0,label:"cesium",permalink:"/developer-portal/pr-preview/pr-138/docs/tags/cesium"},{inline:!0,label:"openlayers",permalink:"/developer-portal/pr-preview/pr-138/docs/tags/openlayers"},{inline:!0,label:"leaflet",permalink:"/developer-portal/pr-preview/pr-138/docs/tags/leaflet"}],version:"current",frontMatter:{id:"raster-getting-started",slug:"raster-getting-started",title:"Getting started",tags:["guide","getting-started","raster","cesium","openlayers","leaflet"]},sidebar:"gettingStartedSidebar",next:{title:"Raster Export",permalink:"/developer-portal/pr-preview/pr-138/docs/MapColonies/Raster/Guides/raster-export-guide"}},d={},p=[{value:"Developer Guide step-by-step",id:"developer-guide-step-by-step",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Query Catalog Service (Step 1)",id:"step-1",level:2},{value:"Extract product Bounding Box (Step 2)",id:"step-2",level:2},{value:"Get layer URI (Step 3)",id:"step-3",level:2},{value:"Get Layer Capabilities (Step 4)",id:"step-4",level:2},{value:"Construct Client side layer (Step 5)",id:"step-5",level:2},{value:"OpenLayers (6.x)",id:"openlayers-6x",level:3},{value:"Leaflet (1.x)",id:"leaflet-1x",level:3},{value:"Enrich Layer data (Step 6)",id:"step-6",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"developer-guide-step-by-step",children:"Developer Guide step-by-step"}),"\n",(0,r.jsxs)(t.p,{children:["The following guide will help you understand, ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Step-by-step"})})," the best practices of how to work with the Map Colonies Catalog and how to consume mapping products in ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"dynamic way"})})," (materials might be changed or added)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," In order to get the layer details (Product_ID, region, etc.) you have the following options:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open map-colonies catalog application and locate the required layer"}),"\n",(0,r.jsxs)(t.li,{children:["Query all records via CSW GetRecords operation and search it in the result response - ",(0,r.jsx)(t.a,{href:"/docs/ogc/protocols/ogc-csw/ogc-csw-examples#query-by-field-value",children:"Query Examples Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"flow-diagram",children:"Flow diagram"}),"\n",(0,r.jsx)(t.p,{children:"The following flow will show you one of our main use-case's"}),"\n",(0,r.jsx)(t.mermaid,{value:"flowchart LR\n    subgraph CSW\n      direction LR\n      b1[STEP 1 <br/> Query CSW catalog] --\x3e b2[STEP 2<br/> Extract BBOX]\n      b1 --\x3e b3[STEP 3<br/>Get layer URI]\n    end\n\n    subgraph  Prerequisite\n      direction LR\n      a1[Get Product_ID]\n      a2[Get Auth Token]\n    end\n\n    a1 -- product_id --\x3e b1\n    a2 -- token --\x3e D\n    a2 -- token --\x3e b1\n    b3  -- layer_identifier --\x3e C[STEP 4<br/> Get Layer Capabilities]\n    b2 -- BBOX --\x3e D[STEP 5<br/> Cesium/OL]\n    C -- layer_params --\x3e D"}),"\n",(0,r.jsx)(t.h2,{id:"step-1",children:"Query Catalog Service (Step 1)"}),"\n",(0,r.jsxs)(t.p,{children:["Query ",(0,r.jsx)(t.strong,{children:"RASTER CSW catalog"})," service to find item(s) according to desired filter ",(0,r.jsx)(t.a,{href:"/docs/ogc/protocols/ogc-csw/ogc-csw-examples",children:"example are here"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Pay attention to set the following parameter 'outputSchema=\"",(0,r.jsx)(t.a,{href:"http://schema.mapcolonies.com/raster",children:"http://schema.mapcolonies.com/raster"}),"\"' in order to get full catalog data"]})}),"\n",(0,r.jsx)(t.p,{children:"There are a few ways to acquire the productId, for example:"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(i.A,{value:"SpecificLayer",label:"Specific Layer",children:[(0,r.jsx)(t.p,{children:"To fetch a specific layer you need to aquire 2 properties values:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"productType"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"productId"}),"\nTo get unique product when you already have the ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"productType"})})," and ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"productId"})})," you can use the following query (both can be coppied from our catalog app, for example for ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Best Orthophoto"})})," use the following)"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'POST Request\n\nurl:\n\'<RASTER-CATALOG-SERVICE_URL>/csw\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1" outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <And>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productType</PropertyName>\n            <Literal>OrthophotoBest</Literal>\n          </PropertyIsEqualTo>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productId</PropertyName>\n            <Literal>ORTHOPHOTO_MOSAIC_BASE</Literal>\n          </PropertyIsEqualTo>\n        </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})})]}),(0,r.jsxs)(i.A,{value:"fetchAll",label:"Fetch All Layers (Pagination)",children:[(0,r.jsx)(t.p,{children:"You can enquire all raster products, use maxRecords and startPosition for pagination:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'POST Request\n\nurl:\n\'<RASTER-CATALOG-SERVICE_URL>/csw\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsEqualTo>\n          <PropertyName>mc:type</PropertyName>\n          <Literal>RECORD_RASTER</Literal>\n        </PropertyIsEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'})})]})]}),"\n",(0,r.jsxs)(t.p,{children:["You will get GetRecords XML Response with product ",(0,r.jsx)(t.strong,{children:"metadata"}),"."]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",metastring:'title="GetRecords Response"',children:'  <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n  \x3c!-- pycsw 2.7.dev0 --\x3e\n  <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/raster" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n      <csw:SearchStatus timestamp="2022-02-15T15:08:58Z"/>\n      <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="1" nextRecord="2" recordSchema="http://schema.mapcolonies.com/raster" elementSet="full">\n          <mc:MCRasterRecord>\n              <mc:classification>4</mc:classification>\n              <mc:creationDateUTC>2022-02-13T13:04:23Z</mc:creationDateUTC>\n              <mc:description>World Wide 2020</mc:description>\n              <mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>\n              <mc:minHorizontalAccuracyCE90>3</mc:minHorizontalAccuracyCE90>\n              <mc:id>3b3164a7-280d-4392-a82f-d60a76e69092</mc:id>\n              <mc:ingestionDate>2022-02-13T13:04:23Z</mc:ingestionDate>\n              <mc:insertDate>2022-02-13T13:04:41Z</mc:insertDate>\n              <mc:mimeType>image/jpeg</mc:mimeType>\n              <mc:links scheme="WMS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities\'</mc:links>\n              <mc:links scheme="WMS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wms\'</mc:links>\n              <mc:links scheme="WMTS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts/1.0.0/WMTSCapabilities.xml\'</mc:links>\n              <mc:links scheme="WMTS_KVP" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'</mc:links>\n              <mc:links scheme="WMTS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts\'</mc:links>\n              <mc:maxResolutionMeter>0.1</mc:maxResolutionMeter>\n              <mc:producerName>IDFMU</mc:producerName>\n              <mc:productBBox>-180,-90,180,90</mc:productBBox>\n              <mc:productId>ORTHOPHOTO_MOSAIC_BASE</mc:productId>\n              <mc:productName>\u05d0\u05d5\u05e8\u05ea\u05d5\u05e4\u05d5\u05d8\u05d5 \u05de\u05ea\u05e2\u05d3\u05db\u05df</mc:productName>\n              <mc:productType>OrthophotoBest</mc:productType>\n              <mc:productVersion>1.0</mc:productVersion>\n              <mc:region>World</mc:region>\n              <mc:maxResolutionDeg>0.000171661376953125</mc:maxResolutionDeg>\n              <mc:sensors>UNDEFINED</mc:sensors>\n              <mc:imagingTimeEndUTC>2020-05-21</mc:imagingTimeEndUTC>\n              <mc:imagingTimeBeginUTC>2020-05-21</mc:imagingTimeBeginUTC>\n              <mc:SRS>4326</mc:SRS>\n              <mc:SRSName>WGS84GEO</mc:SRSName>\n              <mc:transparency>OPAQUE</mc:transparency>\n              <mc:type>RECORD_RASTER</mc:type>\n              <mc:updateDateUTC>2022-02-13T13:03:07Z</mc:updateDateUTC>\n              <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                  <ows:LowerCorner>-180.0 90.0</ows:LowerCorner>\n                  <ows:UpperCorner>180.0 90.0</ows:UpperCorner>\n              </ows:BoundingBox>\n          </mc:MCRasterRecord>\n      </csw:SearchResults>\n  </csw:GetRecordsResponse>\n'})})]}),"\n",(0,r.jsx)(t.h2,{id:"step-2",children:"Extract product Bounding Box (Step 2)"}),"\n",(0,r.jsxs)(t.p,{children:["Now you want to find LAYER product BBOX (aka \u2018extent\u2019) from the metadata response of the product.\nIn the Response, look for ",(0,r.jsx)(t.code,{children:"<ows:BoundingBox></ows:BoundingBox>"})," element."]}),"\n",(0,r.jsxs)(t.p,{children:["Another way to find the product extent:\nIn the Response, look for ",(0,r.jsx)(t.code,{children:"<mc:footprint></mc:footprint>"})," element.\nIn the example above - response XML file looks like this:\n",(0,r.jsx)(t.code,{children:'<mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>'}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Use any tool (CesiumJS, turfJS, etc..) to convert the footprint(GeoJSON) into a bounding box."}),"\n",(0,r.jsx)(t.p,{children:"For example using CesiumJS and turfJS"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="Generate layer footprint"',children:"import bbox from '@turf/bbox';\nimport { Rectangle } from 'cesium';\nimport { LayerRasterRecord } from '../models';\n\nexport const generateLayerRectangle = (layer: LayerRasterRecord): Rectangle => {\n  return Rectangle.fromDegrees(...bbox(layer.footprint));\n};\n\n"})}),"\n",(0,r.jsx)(t.p,{children:"After you\u2019ve got your product bounding box lets move to the next step\u2026"}),"\n",(0,r.jsx)(t.h2,{id:"step-3",children:"Get layer URI (Step 3)"}),"\n",(0,r.jsx)(t.p,{children:"In the Response, look for"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"WMTS (wmts capabilities) And WMTS_BASE (base wmts link exists also for those who prefer to use them)"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<mc:links scheme="WMTS" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/1.0.0/WMTSCapabilities.xml\'\n</mc:links>\n<mc:links scheme="WMTS_KVP" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'\n</mc:links>\n<mc:links scheme="WMTS_BASE" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/wmts\'\n</mc:links>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You need to save ",(0,r.jsx)(t.code,{children:"[desired_layer_identifier]"})," value for later use."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["You also may save ",(0,r.jsx)(t.code,{children:"<mc:links>"})," ",(0,r.jsx)("u",{children:"element"})," value, which is a layer consumption URL."]})})}),"\n",(0,r.jsx)(t.h2,{id:"step-4",children:"Get Layer Capabilities (Step 4)"}),"\n",(0,r.jsxs)(t.p,{children:["Now, you need to fetch Raster's MapServer specified Layer metadata by sending ",(0,r.jsx)(t.strong,{children:"GetCapabilities"})," request.\nFirst - find the correct ",(0,r.jsx)(t.strong,{children:"GetCapabilities URL"}),". Best way to achieve it is by looking for ",(0,r.jsx)(t.code,{children:'scheme="WMTS"'})," property in the response of ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"#step-3",children:"Step 3"})})," and extract the GetCapabilities URL off it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<mc:links scheme="WMTS" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/1.0.0/WMTSCapabilities.xml\'\n</mc:links>\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OR"})," you can use wmts KVP capabilities"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",metastring:'title="Link for WMTS in KVP Format"',children:'<mc:links scheme="WMTS_KVP" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'\n</mc:links>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Make a GET request to this link. The response contains the details of ",(0,r.jsx)(t.strong,{children:"all"})," available layers in following format."]}),"\n",(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:n(24288).A,style:{display:"block",marginLeft:"auto",marginRight:"auto"}})}),"\n",(0,r.jsxs)(t.p,{children:["In the Response, look for LAYER where ",(0,r.jsx)(t.code,{children:"<ows:Identifier>"})," has saved ",(0,r.jsx)(t.a,{href:"#step-3",children:"previously"})," ",(0,r.jsx)(t.code,{children:"[desired_layer_identifier]"})]}),"\n",(0,r.jsxs)(t.p,{children:["You can read more about ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"GetCapabilities"})})," OGC format ",(0,r.jsx)(t.a,{href:"http://docs.opengeospatial.org/is/13-082r2/13-082r2.html",children:"here"})," \ud83c\udf10"]}),"\n",(0,r.jsxs)(t.p,{children:["You need to ",(0,r.jsx)(t.strong,{children:"save"})," the following values in order to consume the layer later on ",(0,r.jsx)(t.a,{href:"#step-5",children:"Step 5"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:["Alternative to \xa0 ",(0,r.jsx)(t.a,{href:"#step-3",children:"Step 3"})," way to get layer consumption URL"]}),"\n",(0,r.jsx)(t.code,{children:"<Layer/>"})," element include an exact WMTS URL template inside the child ",(0,r.jsx)(t.code,{children:"<ResourceURL/>"})," element. So, you can use it as well"]})}),"\n",(0,r.jsx)(t.h2,{id:"step-5",children:"Construct Client side layer (Step 5)"}),"\n",(0,r.jsx)(t.p,{children:"Now, after you got all product metadata that you need by querying our Catalog and MapProxy capabilities, lets actually use it in order to display it in real map viewer / application (clients)."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Below examples are based on ",(0,r.jsx)(t.code,{children:"Pseudo code"}),", you will have to adapt it in your own application to make it work."]})})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Important:"})," only ",(0,r.jsx)(t.strong,{children:"query parameter"})," ",(0,r.jsx)(t.code,{children:"token"})," is currently supported"]})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Cesium",label:"Cesium",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"...\n...\n...\n\nconst catalogLayer = new Cesium.WebMapTileServiceImageryProvider({\n      url : '<LAYER_WMTS_URL>',                         // from Step_3 or Step_4\n      /*********************************************************************************/\n      /********     WHEN AUTH IS REQUIRED                                       ********/\n      /*********************************************************************************/\n      // url:new Cesium.Resource({\n      //  url: '<LAYER_WMTS_URL>',                      // from Step_3 or Step_4\n      //  headers: { 'X-API-KEY': RASTER_TOKEN },       // received RASTER auth token\n      //  queryParameters: { 'token': RASTER_TOKEN },   // received RASTER auth token -\n      //}),\n      layer : '[desired_layer_identifier]',             // from Step_3\n      style : '<LAYER_STYLE>',                          // from Step_4\n      format : '<LAYER_FORMAT>',                        // from Step_4\n      tileMatrixSetID : '<LAYER_TILE_MATRIX_SET_ID>',   // from Step_4\n      /*********************************************************************************/\n      /********     TILING SCHEME SHOULD BE 2 x 1                                ********/\n      /*********************************************************************************/\n      tilingScheme: new Cesium.GeographicTilingScheme(),\n      /*********************************************************************************/\n      /********     EXTENT SHOULD BE AS MUCH AS CLOSE TO LAYER ORIGIN FOOTPRINT ********/\n      /*********************************************************************************/\n      rectangle : <LAYER_EXTENT>,                       // from Step_2\n    });\n\nmap.addLayer(catalogLayer);\n...\n...\n...\n"})})}),(0,r.jsxs)(i.A,{value:"OpenLayers (v6.x)",label:"OpenLayers (v6.x)",children:[(0,r.jsx)(t.h3,{id:"openlayers-6x",children:"OpenLayers (6.x)"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"...\n...\n...\n    const parser = new WMTSCapabilities();\n    const capabilitiesResponse = await fetch('CapabilitiesURL');              // from Step_4\n    const capabilitiesText = await capabilitiesResponse.text();\n    const parserResult = parser.read(capabilitiesText);\n    const layerOptions = optionsFromCapabilities(parserResult, {\n      layer: '[desired_layer_identifier]'                                     // from Step_3\n    });\n    const layer = new TileLayer({ source: new WMTS(layerOptions), extent });  // from Step_2\n\n    map.addLayer(layer);\n...\n...\n...\n"})})]}),(0,r.jsx)(i.A,{value:"Leaflet",label:"Leaflet (v1.x)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'  import L from "leaflet";\n    ...\n    ...\n    ...\n    //urlTemplate example: https://maps/api/raster/v1/wmts/test-orthophoto/{TileMatrixSet}/{TileMatrix}{TileCol}/{TileRow}.jpeg\n    const parser = (urlTemplate) => {\n      return wmtsUrl\n    .replace("{TileMatrixSet}", \'<LAYER_TILE_MATRIX_SET_ID>\')         // from Step_4\n    .replace("{TileMatrix}", "{z}")\n    .replace("{TileRow}", "{y}")\n    .replace("{TileCol}", "{x}");\n    }\n\n    const bounds = L.latLngBounds([\n      [extent[1], extent[0]],                                         // from Step_2\n      [extent[3], extent[2]],                                         // from Step_2\n    ]);\n\n    const urlTemplate = \'<LAYER_WMTS_URL>\'                            // from Step_3 or Step_4\n    const parsedUrl = parser(urlTemplate)\n\n    const map = L.map("map", { crs: L.CRS.EPSG4326 }).setView([0, 0], 0);\n                                                                      //in case of queryParameter authentication:\n    const layer = L.tileLayer(parsedUrl + \'?token=${TOKEN}\',{   // received RASTER auth token\n      id : \'<desired_layer_identifier>\',                              // from Step_3\n      bounds\n    })\n\n    map.addLayer(layer);\n    ...\n    ...\n    ...\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Replace all ",(0,r.jsx)(t.code,{children:"<>"})," place holders with the real values that we got from all previous steps:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["url - should be replaced by the URL that you got from ",(0,r.jsx)(t.a,{href:"#step-3",children:"Step 3"})," or ",(0,r.jsx)(t.a,{href:"#step-4",children:"Step 4"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"layer - should be replaced with layer Product ID."}),"\n",(0,r.jsxs)(t.li,{children:["style - should be replaced with the value that you got from ",(0,r.jsx)(t.a,{href:"#step-4",children:"Step 4"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["format - should be replaced with the value that you got from ",(0,r.jsx)(t.a,{href:"#step-4",children:"Step 4"})]}),"\n",(0,r.jsxs)(t.li,{children:["tileMatrixSetID - how can you get it? from Response from ",(0,r.jsx)(t.a,{href:"#step-4",children:"Step 4"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"tilingScheme"}),"\n",(0,r.jsxs)(t.li,{children:["rectangle - value should be the BBOX (extent that you got from ",(0,r.jsx)(t.a,{href:"#step-2",children:"Step 2"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Note - ",(0,r.jsx)(t.strong,{children:"extent"})," taken from step 2 - where bbox is calculated."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"leaflet-1x",children:"Leaflet (1.x)"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"headers api key"})," see the following link: ",(0,r.jsx)(t.a,{href:"https://github.com/PaulLeCam/react-leaflet/issues/852#issuecomment-1495774676",children:"https://github.com/PaulLeCam/react-leaflet/issues/852#issuecomment-1495774676"})]})}),"\n",(0,r.jsx)(t.h2,{id:"step-6",children:"Enrich Layer data (Step 6)"}),"\n",(0,r.jsx)(t.p,{children:"In order to present catalog items in your system you can use following fields:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.strong,{children:["mc",":productName"]})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.strong,{children:["mc",":description"]})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"..."})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"rest"})," ",(0,r.jsx)(t.a,{href:"/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1",children:"Raster profile definition"})]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),s=n(18215),a=n(23104),i=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function p(e){var t;return(null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,p]=h({queryString:n,groupId:s}),[x,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,a]),tabValues:a}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function R(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:p,onClick:d,...a,className:(0,s.A)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function S(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=x(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,y.jsx)(R,{...t,...e}),(0,y.jsx)(S,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,y.jsx)(w,{...e,children:p(e.children)},String(t))}},70845:(e,t,n)=>{n(96540),n(44586),n(74848)},24288:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/getcapabilities_response-251ff908d616aa3d2bc16405231f8106.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);