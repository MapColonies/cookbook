"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3223],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},38371:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={id:"3d-model-viewer",slug:"3d-viewer",title:"3D Model Viewer \ud83c\udf0d",tags:["3D"]},i=void 0,l={unversionedId:"MapColonies/3D/services/3dViewer/3d-model-viewer",id:"MapColonies/3D/services/3dViewer/3d-model-viewer",title:"3D Model Viewer \ud83c\udf0d",description:"3D Model Viewer is a tool that loads 3D tiles using cesium. It allows the client to send a request to this tool with model ID's and see the 3D model on the map.",source:"@site/docs/MapColonies/3D/services/3dViewer/README.md",sourceDirName:"MapColonies/3D/services/3dViewer",slug:"/MapColonies/3D/services/3dViewer/3d-viewer",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/3D/services/3dViewer/3d-viewer",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/services/3dViewer/README.md",tags:[{label:"3D",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/3-d"}],version:"current",frontMatter:{id:"3d-model-viewer",slug:"3d-viewer",title:"3D Model Viewer \ud83c\udf0d",tags:["3D"]},sidebar:"docSidebar",previous:{title:"3D Tile Model Server",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/3D/services/3d-tile-server"},next:{title:"3D Catalog \ud83d\uddc3\ufe0f",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/3D/services/catalog/3d-catalog"}},s={},c=[{value:"Flow Diagram \u23ed",id:"flow-diagram-",level:2},{value:"Quering 3D CSW catalog service (STEP \u261d\ud83c\udffc)",id:"quering-3d-csw-catalog-service-step-",level:2},{value:"Extract the desired attributes of the models (Step \u270c\ud83c\udffc)",id:"extract-the-desired-attributes-of-the-models-step-",level:2},{value:"<ins>Useful and recommended attributes to use and display in your UI for the best user experience:</ins>",id:"useful-and-recommended-attributes-to-use-and-display-in-your-ui-for-the-best-user-experience",level:3},{value:"Creating a proper URL request for the tool (Step 3\ufe0f\u20e3 )",id:"creating-a-proper-url-request-for-the-tool-step-3\ufe0f\u20e3-",level:2},{value:'1. model_ids -<font color="red"> mandatory</font>',id:"1-model_ids---mandatory",level:3},{value:'2. token - <font color="red"> mandatory</font>',id:"2-token----mandatory",level:3},{value:"3. position (optional)",id:"3-position-optional",level:3},{value:"4. show_extent (optional)",id:"4-show_extent-optional",level:3},{value:"Congratulations!",id:"congratulations",level:2},{value:"Important Notes:",id:"important-notes",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"3D Model Viewer is a tool that loads 3D tiles using cesium. It allows the client to send a request to this tool with model ID's and see the 3D model on the map."),(0,r.kt)("p",null," The following guide will help you understand, ",(0,r.kt)("strong",{parentName:"p"},"step by step")," the best practices of how to work with the Map Colonies ",(0,r.kt)("strong",{parentName:"p"},"3D Catalog Viewer!")),(0,r.kt)("h2",{id:"flow-diagram-"},"Flow Diagram \u23ed"),(0,r.kt)("mermaid",{value:"flowchart LR\n    A[Get Auth Token]--\x3e|?token| C[STEP 1: Query CSW catalog]\n    B[Define Filter]--\x3e |filter?| C\n    C --\x3e |xml| D[STEP 2: Get Layers Metadata]\n    D --\x3e |layers metadata| E[STEP 3: Make a Tool Request]"}),(0,r.kt)("h2",{id:"quering-3d-csw-catalog-service-step-"},"Quering 3D CSW catalog service (STEP \u261d\ud83c\udffc)"),(0,r.kt)("p",null,"Query ",(0,r.kt)("strong",{parentName:"p"},"3D CSW catalog")," service to find an item(s) according to the desired filter."),(0,r.kt)("p",null,"A good example of a filter request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'POST Request\n\nurl:\n\'<3D-CATALOG-SERVICE_URL>/csw?token=<TOKEN>\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords outputFormat="application/xml"  outputSchema="http://schema.mapcolonies.com/3d" resultType="results" service="CSW" version="2.0.2" startPosition="1" maxRecords="200" xmlns:mc="http://schema.mapcolonies.com/3d" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n        <csw:Constraint version="1.1.0">\n            <ogc:Filter>\n                <ogc:Or>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:classification</ogc:PropertyName>\n                        <ogc:Literal>5</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:productType</ogc:PropertyName>\n                        <ogc:Literal>3DPhotoRealistic</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                </ogc:Or>\n            </ogc:Filter>\n        </csw:Constraint>\n    </csw:Query>\n</csw:GetRecords>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<3D-CATALOG-SERVICE_URL>")," with 3D CSW catalog URL.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," <3D-CATALOG-SERVICE_URL>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<token>")," with with the token you have.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," <token>\n")),(0,r.kt)("p",null,"Of course, you can also send a regular request with no filter. "),(0,r.kt)("p",null,"A good example is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'POST Request\n\nurl:\n\'<3D-CATALOG-SERVICE_URL>/csw?token=<TOKEN>\'\n\nbody (XML):\n<csw:GetRecords \nmaxRecords="10" \noutputFormat="application/xml"\noutputSchema="http://schema.mapcolonies.com/3d" \nresultType="results" \nservice="CSW"\nversion="2.0.2" \nstartPosition="1" \nxmlns:mc="http://schema.mapcolonies.com/3d"\nxmlns:csw="http://www.opengis.net/cat/csw/2.0.2"\nxmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n    </csw:Query>\n</csw:GetRecords>\n')),(0,r.kt)("p",null,"You will get GetRecords XML Response with the products ",(0,r.kt)("strong",{parentName:"p"},"metadata"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"XML Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\x3c!-- pycsw 2.7.dev0 --\x3e\n<csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/3d" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n    <csw:SearchStatus timestamp="2023-10-15T10:49:46Z"/>\n    <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="2" nextRecord="0" recordSchema="http://schema.mapcolonies.com/3d" elementSet="full">\n        <mc:MC3DRecord>\n            <mc:accuracyLE90>8.0</mc:accuracyLE90>\n            <mc:classification>6</mc:classification>\n            <mc:creationDateUTC>1970-01-01</mc:creationDateUTC>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[35.2670012825,32.5856881598],[35.2670012825,32.6300363309],[35.3105702702,32.6300363309],[35.3105702702,32.5856881598],[35.2670012825,32.5856881598]]]}</mc:footprint>\n            <mc:maxHorizontalAccuracyCE90>8.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>53c9e5f6-31d6-47a1-bc11-64e150bcc13b</mc:id>\n            <mc:insertDate>2023-10-11T18:33:18Z</mc:insertDate>\n            <mc:links scheme="3D_LAYER" name="" description="">https://URL-TO-3D-TILE/api/3d/v1/b3dm/model/tileset.json</mc:links>\n            <mc:producerName>IDFMU</mc:producerName>\n            <mc:productBBox>35.2670012825,32.5856881598,35.3105702702,32.6300363309</mc:productBBox>\n            <mc:productId>53c9e5f6-31d6-47a1-bc11-64e150bcc13b</mc:productId>\n            <mc:productName>natik-q2</mc:productName>\n            <mc:productSource>\\\\domtest\\mimi\\archi\\maz\\silver\\libot\\afula-whole</mc:productSource>\n            <mc:productStatus>PUBLISHED</mc:productStatus>\n            <mc:productType>3DPhotoRealistic</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionSystem>i</mc:productionSystem>\n            <mc:productionSystemVersion>uy</mc:productionSystemVersion>\n            <mc:region>kl</mc:region>\n            <mc:sensors>k</mc:sensors>\n            <mc:imagingTimeEndUTC>2023-08-20T12:16:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2023-08-11T18:48:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4326</mc:SRS>\n            <mc:SRSName>WGS84GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <mc:updateDateUTC>2023-10-11T18:33:18Z</mc:updateDateUTC>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>32.5856881598 35.2670012825</ows:LowerCorner>\n                <ows:UpperCorner>32.6300363309 35.3105702702</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n        <mc:MC3DRecord>\n            <mc:accuracyLE90>999.0</mc:accuracyLE90>\n            <mc:classification>6</mc:classification>\n            <mc:creationDateUTC>1970-01-01</mc:creationDateUTC>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[34.8,31.9],[34.8,31.9],[34.82,31.90],[34.81968953570555,31.91211446418133],[34.8809,31.913]]]}</mc:footprint>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>e8a7ee77-1f95-4ac7-ad6e-24aae7859be5</mc:id>\n            <mc:insertDate>2023-10-14T15:05:15Z</mc:insertDate>\n            <mc:links scheme="3D_LAYER" name="" description="">https://URL-TO-3D-TILE/api/3d/v1/b3dm/model/tileset.json</mc:links>\n            <mc:producerName>IDFMU</mc:producerName>\n            <mc:productId>e8a7ee77-1f95-4ac7-ad6e-24aa5</mc:productId>\n            <mc:productName>\u05e8\u05d7\u05d5\u05d1\u05d5\u05ea</mc:productName>\n            <mc:productSource>\\\\domtest\\mimi\\archi\\maz\\silver\\libot\\City</mc:productSource>\n            <mc:productStatus>PUBLISHED</mc:productStatus>\n            <mc:productType>3DPhotoRealistic</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionSystem>123</mc:productionSystem>\n            <mc:productionSystemVersion>123</mc:productionSystemVersion>\n            <mc:region>\u05d9\u05e9\u05e8\u05d0\u05dc</mc:region>\n            <mc:sensors>\u05e1\u05e0\u05e1\u05d5\u05e8</mc:sensors>\n            <mc:imagingTimeEndUTC>2023-10-08T12:14:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2023-10-03T11:09:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4326</mc:SRS>\n            <mc:SRSName>WGS84GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <mc:updateDateUTC>2023-10-14T15:05:15Z</mc:updateDateUTC>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>31.908523874681066 34.81539563385809</ows:LowerCorner>\n                <ows:UpperCorner>31.91211446418133 34.81968953570555</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n    </csw:SearchResults>\n</csw:GetRecordsResponse>\n\n'))),(0,r.kt)("h2",{id:"extract-the-desired-attributes-of-the-models-step-"},"Extract the desired attributes of the models (Step \u270c\ud83c\udffc)"),(0,r.kt)("p",null,"Within the response, locate the ID  attribute of the desired mode, represented as :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<mc:id>MODEL_ID</mc:id>\n")),(0,r.kt)("p",null,"Additionally, the response contains other valuable attributes for your application."),(0,r.kt)("p",null,"In the response, you can find other useful attributes that you can use for your application."),(0,r.kt)("p",null,"You can see here how to build a 3D profile (version 2):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/docs/MapColonies/3D/services/catalog/catalog-profile-v2"},"3D Profile v2")," ")),(0,r.kt)("h3",{id:"useful-and-recommended-attributes-to-use-and-display-in-your-ui-for-the-best-user-experience"},(0,r.kt)("ins",null,"Useful and recommended attributes to use and display in your UI for the best user experience:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ins",null,"product name")," attributes to display the records property."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ins",null,"footprint/product_bbox")," attribute in order to display the footprint of the model."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ins",null,"imagingTimeBeginUTC")," attribute to order the 3D models by their footage creation time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ins",null,"region")," attribute to group 3D models from the same region.")),(0,r.kt)("p",null,"Save the ID's of the models you wish to view as you will need them for the next step."),(0,r.kt)("h2",{id:"creating-a-proper-url-request-for-the-tool-step-3\ufe0f\u20e3-"},"Creating a proper URL request for the tool (Step 3\ufe0f\u20e3 )"),(0,r.kt)("p",null,"With the model ID's in hand, you can now create a request to the tool. "),(0,r.kt)("p",null,"Use the following request template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET Request\n\nurl:\n<CATALOG-VIEWER-URL>?<QUERY-PARAMS>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<3D-CATALOG-SERVICE_URL>")," with 3D CSW catalog URL.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," <3D-CATALOG-SERVICE_URL>\n")),(0,r.kt)("p",null," In ",(0,r.kt)("inlineCode",{parentName:"p"},"<QUERY-PARAMS>"),", you need to add there params:"),(0,r.kt)("h3",{id:"1-model_ids---mandatory"},"1. model_ids -",(0,r.kt)("font",{color:"red"}," mandatory")),(0,r.kt)("p",null," ID's of the desired models obtained from the CSW response."),(0,r.kt)("p",null," The convention is to list them as a comma-separated string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"model_ids=ID1,ID2\n")),(0,r.kt)("p",null," If you only need one model, omit the comma."),(0,r.kt)("h3",{id:"2-token----mandatory"},"2. token - ",(0,r.kt)("font",{color:"red"}," mandatory")),(0,r.kt)("p",null," Simply the token you have."),(0,r.kt)("p",null," This is the convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"token=TOKEN\n")),(0,r.kt)("h3",{id:"3-position-optional"},"3. position (optional)"),(0,r.kt)("p",null," A position if you want the viewer to fly to a specific position instead of the model itself. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is an optional parameter."),"\nthe potion has 3 attributes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"longitude - double number between -180 and 180."),(0,r.kt)("li",{parentName:"ol"},"latitude - double number between -90 and 90."),(0,r.kt)("li",{parentName:"ol"},"height - positive double number between 0 and 22 (represents zoom level).")),(0,r.kt)("p",null,"This is the convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"position=LON,LAT,HEIGHT\n")),(0,r.kt)("h3",{id:"4-show_extent-optional"},"4. show_extent (optional)"),(0,r.kt)("p",null,"A boolean parameter that determines whether a 3D model will display its footprint or not in the viewer. ",(0,r.kt)("strong",{parentName:"p"},"This is an optional parameter!")," "),(0,r.kt)("p",null,"The show_extent parameter can be \u201ctrue\u201d or \u201cfalse\u201d."),(0,r.kt)("p",null,"This is the convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"show_extent=trueshow_extent=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The default value is false!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2139\ufe0f Query params are separated by '&' char. \n\nAn example:\n[http://url?model_ids=id1,id2?token=TOKEN&position=0,0,0&show_extent=true](http://url?model_ids=id1,id2?token=TOKEN&position=0,0,0&show_extent=true) \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here's an example of a well-structured GET request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://url-to-viewer/simple-catalog-viewer?model_ids=MODEL_ID1,MODEL_ID2&token=TOKEN&position=1.5,3,13\n")),(0,r.kt)("h2",{id:"congratulations"},"Congratulations!"),(0,r.kt)("p",null,"You're now ready to view the model within a Cesium-based viewer."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:o(50224).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"}})),(0,r.kt)("h3",{id:"important-notes"},"Important Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'When the "model_ids" query parameter includes multiple models, the viewer will automatically center on the first model listed. If a "position" query parameter is provided, the viewer will prioritize navigating to the specified position.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The viewer seamlessly incorporates a terrain layer, offering a comprehensive portrayal of diverse surface elevations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To customize your experience, you can easily switch between various base maps (Raster layers) using the gear icon located in the upper-right corner of the viewer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inside the viewer, you have the freedom to navigate the 3D space as you desire, providing a dynamic and immersive experience."))))}d.isMDXComponent=!0},50224:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/rehovot-city-530ed57eac51adf7e1ee188bc6796f3f.png"}}]);