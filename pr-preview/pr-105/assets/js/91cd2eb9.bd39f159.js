"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[8037],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={id:"vector-query-service",slug:"query",title:"Query \ud83d\udd0e",description:"Search, Filter and Aggregate vector layers",tags:["vector","API","wfs","ogc","layers"]},s="Query Service \ud83d\udd0e",o={unversionedId:"MapColonies/vector/Services/vector-query-service",id:"MapColonies/vector/Services/vector-query-service",title:"Query \ud83d\udd0e",description:"Search, Filter and Aggregate vector layers",source:"@site/docs/MapColonies/vector/Services/query_service.md",sourceDirName:"MapColonies/vector/Services",slug:"/MapColonies/vector/Services/query",permalink:"/developer-portal/pr-preview/pr-105/docs/MapColonies/vector/Services/query",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/query_service.md",tags:[{label:"vector",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/vector"},{label:"API",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/api"},{label:"wfs",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/wfs"},{label:"ogc",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/ogc"},{label:"layers",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/layers"}],version:"current",frontMatter:{id:"vector-query-service",slug:"query",title:"Query \ud83d\udd0e",description:"Search, Filter and Aggregate vector layers",tags:["vector","API","wfs","ogc","layers"]},sidebar:"docSidebar",previous:{title:"Nominatim \ud83c\udf0d",permalink:"/developer-portal/pr-preview/pr-105/docs/MapColonies/vector/Services/nominatim_service"},next:{title:"Replication \ud83d\udce6",permalink:"/developer-portal/pr-preview/pr-105/docs/MapColonies/vector/Services/replication/info"}},l={},p=[{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"query-service-"},"Query Service \ud83d\udd0e"),(0,i.kt)("p",null,"The vector query service uses the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-wfs"},"WFS")," protocol which is a READ-ONLY Web Feature Service.\nit provides facilities for searching and retrieving feature data with the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetCapabilities"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DescribeFeatureType")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetFeature")," operations all other operations are invalid.\nFor the full capabilities provided by the service see ",(0,i.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-wfs#getcapabilities"},"GetCapabilities")),(0,i.kt)("p",null,"WFS partitions the queryable data into feature types each feature type has its own attributes describing the structure of the data itself.\nFor the description of a feature type see ",(0,i.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-wfs#describefeaturetype"},"DescribeFeatureType")),(0,i.kt)("p",null,"Finally, Features can be retrieved with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-wfs#getfeature"},"GetFeature")," operation. the request returns a collection of geographic feature instances filtered according to a criteria set by the requesting client."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"WFS protocol partitions the queryable features into different feature types, each feature type consists of a schema describing the feature. the feature type is queryable by its schema, each feature type has a default coordinate reference system and the bounding box which containis all features of this type, those are also possible parameters for querying."),(0,i.kt)("p",null,"Let's see an example using all three operations with different filters, the following chart describes our work flow"),(0,i.kt)("mermaid",{value:"flowchart LR\nA{Get Auth Token} --\x3e|token| B[GetCapabillities]\n    subgraph WFS\n      direction LR\n        B --\x3e|FeatureTypeList| C{Select Feature}\n        C --\x3e|feature| D[DescribeFeatureType]\n        D --\x3e|schema| E{Build Your Filter}\n        E --\x3e|filter| F[GetFeature]\n        F --\x3eG((filtered features))\n    end"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"to get an auth token ",(0,i.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"see this")),(0,i.kt)("br",null))),(0,i.kt)("p",null,"To list all the available feature types use the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," operation and look for the ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureTypeList")," section."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Response"',title:'"Response"'},'<FeatureTypeList>\n    <FeatureType xmlns:vector="vector">\n        <Name>vector:buildings</Name>\n        <Title>buildings</Title>\n        <Abstract/>\n        <ows:Keywords>\n            <ows:Keyword>features</ows:Keyword>\n            <ows:Keyword>buildings</ows:Keyword>\n        </ows:Keywords>\n        <DefaultCRS>urn:ogc:def:crs:EPSG::4326</DefaultCRS>\n        <ows:WGS84BoundingBox>\n            <ows:LowerCorner>34.21269226074219 29.4852237701416</ows:LowerCorner>\n            <ows:UpperCorner>35.87874221801758 33.35012435913086</ows:UpperCorner>\n        </ows:WGS84BoundingBox>\n    </FeatureType>\n    ...\n<FeatureTypeList>\n'))),(0,i.kt)("p",null,"We got a ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureTypeList")," consisting of the different ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureTypes")," under the WFS service. one of them is the ",(0,i.kt)("inlineCode",{parentName:"p"},"vector:buildings")," ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureType")," where vector is the namespace and the buildings is the unique ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureType")," name under the vector namespace. it is possible to query the FeatureType by its full name ",(0,i.kt)("inlineCode",{parentName:"p"},"vector:buildings")," or short unique name ",(0,i.kt)("inlineCode",{parentName:"p"},"buildings"),".\nThe default coordinate reference system and the containing features bounding box are also presented."),(0,i.kt)("p",null,"If you would like to view the schema of the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildings")," ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureType"),", we could invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"DescribeFeatureType")," request with ",(0,i.kt)("inlineCode",{parentName:"p"},"typeName")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"buildings")),(0,i.kt)("p",null,"For convenience we'll add outputFormat parameter as ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," to each of our requests for a json formatted response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<VECTOR_QUERY_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=DescribeFeatureType&\n    typeName=buildings&\n    outputFormat=application/json\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response in JSON"',title:'"Response',in:!0,'JSON"':!0},'{\n    "elementFormDefault": "qualified",\n    "targetNamespace": "vector",\n    "targetPrefix": "vector",\n    "featureTypes": [\n        {\n            "typeName": "buildings",\n            "properties": [\n                {\n                    "name": "osm_id",\n                    "maxOccurs": 1,\n                    "minOccurs": 1,\n                    "nillable": false,\n                    "type": "xsd:int",\n                    "localType": "int"\n                },\n                {\n                    "name": "id",\n                    "maxOccurs": 1,\n                    "minOccurs": 1,\n                    "nillable": false,\n                    "type": "xsd:int",\n                    "localType": "int"\n                },\n                {\n                    "name": "geom",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "gml:Polygon",\n                    "localType": "Polygon"\n                },\n                {\n                    "name": "relative_feature_height",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:number",\n                    "localType": "number"\n                },\n                {\n                    "name": "all_entity_names",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:string",\n                    "localType": "string"\n                },\n                {\n                    "name": "building_type",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:string",\n                    "localType": "string"\n                },\n                {\n                    "name": "entity",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:string",\n                    "localType": "string"\n                },\n                {\n                    "name": "sensitivity",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:string",\n                    "localType": "string"\n                },\n                {\n                    "name": "entity_id",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:string",\n                    "localType": "string"\n                },\n                {\n                    "name": "is_sensitive",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:boolean",\n                    "localType": "boolean"\n                },\n                {\n                    "name": "date",\n                    "maxOccurs": 1,\n                    "minOccurs": 0,\n                    "nillable": true,\n                    "type": "xsd:date-time",\n                    "localType": "date-time"\n                }\n            ]\n        }\n    ]\n}\n'))),(0,i.kt)("p",null,"The response is the XSD (in xml response) describing the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildings")," ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureType"),"."),(0,i.kt)("p",null,"This is a description of a building feature, it contains these properties, each property has its own type, nillable flag value and min\\max occurs - these describing the requireness of the property and possible repeatness."),(0,i.kt)("p",null,"Now that we hold the structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildings")," FeatureType we're able to query building features by a set of parameters using the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetFeature")," operation, let's see some examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"let's retrieve a specific building by its ",(0,i.kt)("inlineCode",{parentName:"li"},"featureId"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"featureId")," is unique thus the response will be at most of one single existing building feature. the buildings ",(0,i.kt)("inlineCode",{parentName:"li"},"FeatureType")," FeatureId is the ",(0,i.kt)("inlineCode",{parentName:"li"},"entityId")," property, notice that this property is non nillable and has a ",(0,i.kt)("inlineCode",{parentName:"li"},"minOccurs")," of 1.")),(0,i.kt)("p",null,"due to ",(0,i.kt)("inlineCode",{parentName:"p"},"enitityId")," containing '{' and '}' at the beginning and the end of the string we need to encode those to '%7B' and '%7D' respectively"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<VECTOR_QUERY_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=buildings&\n    featureId={entityId}&\n    outputFormat=application/json\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response in GeoJSON"',title:'"Response',in:!0,'GeoJSON"':!0},'{\n    "type": "FeatureCollection",\n    "features": [\n        {\n            "type": "Feature",\n            "id": "buildings.{aafe0435-426a-4a4a-926e-f799be96cace}",\n            "geometry": {\n                "type": "Polygon",\n                "coordinates": [\n                    [\n                        [\n                            34.9127511,\n                            29.4993255\n                        ],\n                        [\n                            34.9127592,\n                            29.4992901\n                        ],\n                        [\n                            34.9128039,\n                            29.4992777\n                        ],\n                        [\n                            34.9128446,\n                            29.4993051\n                        ],\n                        [\n                            34.9128273,\n                            29.4993493\n                        ],\n                        [\n                            34.9127785,\n                            29.4993538\n                        ],\n                        [\n                            34.9127511,\n                            29.4993255\n                        ]\n                    ]\n                ]\n            },\n            "geometry_name": "geom",\n            "properties": {\n                "osm_id": 807070935,\n                "id": 1,\n                "relative_feature_height": null,\n                "all_entity_names": null,\n                "building_type": "yes",\n                "entity": null,\n                "sensitivity": "\u05e8\u05d2\u05d9\u05e9",\n                "entity_id": "{aafe0435-426a-4a4a-926e-f799be96cace}",\n                "is_sensitive": true,\n                "date": "2022-07-26T11:16:02Z"\n            },\n            "bbox": [\n                34.9127511,\n                29.4992777,\n                34.9128446,\n                29.4993538\n            ]\n        }\n    ],\n    "totalFeatures": 1,\n    "numberMatched": 1,\n    "numberReturned": 1,\n    "timeStamp": "2022-07-27T07:44:58.341Z",\n    "crs": {\n        "type": "name",\n        "properties": {\n            "name": "urn:ogc:def:crs:EPSG::4326"\n        }\n    },\n    "bbox": [\n        34.9127511,\n        29.4992777,\n        34.9128446,\n        29.4993538\n    ]\n}\n'))),(0,i.kt)("p",null,"Other than the feature itself we also retrieve additional metadata such as the containing bounding box of each feature and the whole response, total number of features of the selected ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureType"),", number matched the given parameters criteria and number returned by the invoked request."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"To get at most the top 3 building features sorted by some property such as ",(0,i.kt)("inlineCode",{parentName:"li"},"relative_feature_height")," we can invoke the following request,\nthe default sort is in ",(0,i.kt)("strong",{parentName:"li"},"ascending")," order, to specify order append +A or +D to the ",(0,i.kt)("inlineCode",{parentName:"li"},"sortBy")," parameter")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<VECTOR_QUERY_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=buildings&\n    count=2&\n    sortBy=relative_feature_height+D&\n    outputFormat=application/json\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "FeatureCollection",\n  "features": [\n    {\n      "type": "Feature",\n      "id": "buildings.{ff4ba732-247c-45c5-b5fe-4a957118c950}",\n      "geometry": {\n        "type": "Polygon",\n        "coordinates": [\n          [\n            [\n              34.9110353,\n              29.4985325\n            ],\n            [\n              34.9110624,\n              29.4984171\n            ],\n            [\n              34.9111355,\n              29.4985567\n            ],\n            [\n              34.9110353,\n              29.4985325\n            ]\n          ]\n        ]\n      },\n      "geometry_name": "geom",\n      "properties": {\n        "osm_id": 115082118,\n        "id": 2,\n        "relative_feature_height": 20.1,\n        "all_entity_names": null,\n        "building_type": "yes",\n        "entity": null,\n        "sensitivity": "\u05e8\u05d2\u05d9\u05e9",\n        "entity_id": "{ff4ba732-247c-45c5-b5fe-4a957118c950}",\n        "is_sensitive": true,\n        "date": "2022-07-26T11:14:18Z"\n      },\n      "bbox": [\n        34.9110353,\n        29.4984171,\n        34.9112991,\n        29.4985942\n      ]\n    },\n    {\n      "type": "Feature",\n      "id": "buildings.{aafe0435-426a-4a4a-926e-f799be96cace}",\n      "geometry": {\n        "type": "Polygon",\n        "coordinates": [\n          [\n            [\n              34.9127511,\n              29.4993255\n            ],\n            [\n              34.9127592,\n              29.4992901\n            ],\n            [\n              34.9127785,\n              29.4993538\n            ],\n            [\n              34.9127511,\n              29.4993255\n            ]\n          ]\n        ]\n      },\n      "geometry_name": "geom",\n      "properties": {\n        "osm_id": 807070935,\n        "id": 1,\n        "relative_feature_height": 3,\n        "all_entity_names": null,\n        "building_type": "yes",\n        "entity": null,\n        "sensitivity": "\u05e8\u05d2\u05d9\u05e9",\n        "entity_id": "{aafe0435-426a-4a4a-926e-f799be96cace}",\n        "is_sensitive": true,\n        "date": "2022-07-26T11:16:02Z"\n      },\n      "bbox": [\n        34.9127511,\n        29.4992777,\n        34.9128446,\n        29.4993538\n      ]\n    }\n  ],\n  "totalFeatures": 773014,\n  "numberMatched": 773014,\n  "numberReturned": 2,\n  "timeStamp": "2022-07-27T07:58:17.787Z",\n  "crs": {\n    "type": "name",\n    "properties": {\n      "name": "urn:ogc:def:crs:EPSG::4326"\n    }\n  },\n  "bbox": [\n    34.9110353,\n    29.4984171,\n    34.9128446,\n    29.4993538\n  ]\n}\n'))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The following GET request will look for all the building features contained or partially contained by the specified bounding box in the specified coordinate reference system (",(0,i.kt)("inlineCode",{parentName:"li"},"EPSG:4326"),") the coordinate system is optional part of the bbox parameter, if not specified the default CRS value of the FeatureType will be used (described in the GetCapabilities operation)\nThe retrieved features will be encoded in the specified ",(0,i.kt)("inlineCode",{parentName:"li"},"srsName")," coordinate system, in our case also ",(0,i.kt)("inlineCode",{parentName:"li"},"EPSG:4326"),".")),(0,i.kt)("p",null,"For simplicity we'll limit the result to only ",(0,i.kt)("strong",{parentName:"p"},"2")," features with the ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<VECTOR_QUERY_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=buildings&\n    bbox=31.995,34.718,32.046,34.787,urn:ogc:def:crs:EPSG::4326&\n    srsName=urn:ogc:def:crs:EPSG::4326&\n    count=2&\n    outputFormat=application/json\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "FeatureCollection",\n    "features": [\n        {\n            "type": "Feature",\n            "id": "buildings.{798ed395-8e62-480f-b4fe-dbf7026633f8}",\n            "geometry": {\n                "type": "Polygon",\n                "coordinates": [\n                    [\n                        [\n                            34.7735756,\n                            31.9986023\n                        ],\n                        [\n                            34.7737984,\n                            31.9983632\n                        ],\n                        [\n                            34.7740616,\n                            31.9985396\n                        ],\n                        [\n                            34.7738387,\n                            31.9987787\n                        ],\n                        [\n                            34.7735756,\n                            31.9986023\n                        ]\n                    ]\n                ]\n            },\n            "geometry_name": "geom",\n            "properties": {\n                "osm_id": 331438436,\n                "id": 98591,\n                "relative_feature_height": 11,\n                "all_entity_names": null,\n                "building_type": "yes",\n                "entity": null,\n                "sensitivity": "\u05e8\u05d2\u05d9\u05e9",\n                "entity_id": "{798ed395-8e62-480f-b4fe-dbf7026633f8}",\n                "is_sensitive": true,\n                "date": "2022-07-26T11:14:26Z"\n            },\n            "bbox": [\n                34.7735756,\n                31.9983632,\n                34.7740616,\n                31.9987787\n            ]\n        },\n        {\n            "type": "Feature",\n            "id": "buildings.{3e0eff0c-45e5-4001-aaf9-a38a55faa543}",\n            "geometry": {\n                "type": "Polygon",\n                "coordinates": [\n                    [\n                        [\n                            34.7738667,\n                            31.9983535\n                        ],\n                        [\n                            34.7741028,\n                            31.9981003\n                        ],\n                        [\n                            34.7743303,\n                            31.9982528\n                        ],\n                        [\n                            34.7740943,\n                            31.998506\n                        ],\n                        [\n                            34.7738667,\n                            31.9983535\n                        ]\n                    ]\n                ]\n            },\n            "geometry_name": "geom",\n            "properties": {\n                "osm_id": 331438504,\n                "id": 98592,\n                "relative_feature_height": null,\n                "all_entity_names": null,\n                "building_type": "yes",\n                "entity": null,\n                "sensitivity": "\u05dc\u05dc\u05d0 \u05d4\u05ea\u05d9\u05d9\u05d7\u05e1\u05d5\u05ea",\n                "entity_id": "{3e0eff0c-45e5-4001-aaf9-a38a55faa543}",\n                "is_sensitive": false,\n                "date": "2022-07-26T11:14:26Z"\n            },\n            "bbox": [\n                34.7738667,\n                31.9981003,\n                34.7743303,\n                31.998506\n            ]\n        }\n    ],\n    "totalFeatures": 11198,\n    "numberMatched": 11198,\n    "numberReturned": 2,\n    "timeStamp": "2022-07-27T08:27:45.596Z",\n    "crs": {\n        "type": "name",\n        "properties": {\n            "name": "urn:ogc:def:crs:EPSG::4326"\n        }\n    },\n    "bbox": [\n        34.7735756,\n        31.9981003,\n        34.7743303,\n        31.9987787\n    ]\n}\n'))),(0,i.kt)("p",null,"For more complex criterias such as a set of multiple parameters or geographical intersections we should invoke a POST GetFetures request consisting the filter as a XML body."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"let's look for all the building features that intersect in a polygon, one of the properties of a building feature is it's geom describing the building geography, we'll look by it by setting it as the request ",(0,i.kt)("inlineCode",{parentName:"li"},"ValueReference"),". We can specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"srsName")," which is the coordinate reference system of the returned features in our case ",(0,i.kt)("inlineCode",{parentName:"li"},"EPSG:4326"),".\nthe polygon is a list of latitude-longitude pair coordinates.")),(0,i.kt)("p",null,"We'll invoke a POST GetFeature request with the following body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:sf="http://www.openplans.org/spearfish" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" service="WFS" version="2.0.0" count="2" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd" outputFormat="application/json">\n    <wfs:Query typeNames="vector:buildings2">\n        <fes:Filter>\n            <fes:Intersects>\n                <fes:ValueReference>geom</fes:ValueReference>\n                <gml:Polygon gml:id="polygon.1" srsName="http://www.opengis.net/gml/srs/epsg.xml#4326">\n                    <gml:exterior>\n                        <gml:LinearRing>\n                            <gml:posList>\n                                34.746 32.0546 34.758 32.087 34.7985 32.086 32.053 34.792 34.746 32.0546\n                            </gml:posList>\n                        </gml:LinearRing>\n                    </gml:exterior>\n                </gml:Polygon>\n            </fes:Intersects>\n        </fes:Filter>\n    </wfs:Query>\n</wfs:GetFeature>\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "FeatureCollection",\n    "features": [\n        {\n            "type": "Feature",\n            "id": "buildings.{de560e14-0055-4ca0-8b35-5cfa75cd85c7}",\n            "geometry": {\n                "type": "Polygon",\n                "coordinates": [\n                    [\n                        [\n                            34.7924709,\n                            32.087685\n                        ],\n                        [\n                            34.7925809,\n                            32.0876495\n                        ],\n                        [\n                            34.7926377,\n                            32.0877757\n                        ],\n                        [\n                            34.7925276,\n                            32.0878112\n                        ],\n                        [\n                            34.7924709,\n                            32.087685\n                        ]\n                    ]\n                ]\n            },\n            "geometry_name": "geom",\n            "properties": {\n                "osm_id": 149367040,\n                "id": 515817,\n                "relative_feature_height": 45,\n                "all_entity_names": null,\n                "building_type": "yes",\n                "entity": null,\n                "sensitivity": "\u05dc\u05dc\u05d0 \u05d4\u05ea\u05d9\u05d9\u05d7\u05e1\u05d5\u05ea",\n                "entity_id": "{de560e14-0055-4ca0-8b35-5cfa75cd85c7}",\n                "is_sensitive": false,\n                "date": "2022-07-26T11:14:18Z"\n            },\n            "bbox": [\n                34.7924709,\n                32.0876495,\n                34.7926377,\n                32.0878112\n            ]\n        },\n        {\n            "type": "Feature",\n            "id": "buildings.{538d6ffb-35cd-4034-97b6-7b8ebefab8f1}",\n            "geometry": {\n                "type": "Polygon",\n                "coordinates": [\n                    [\n                        [\n                            34.7927799,\n                            32.0876342\n                        ],\n                        [\n                            34.7928929,\n                            32.0876309\n                        ],\n                        [\n                            34.7929,\n                            32.0878021\n                        ],\n                        [\n                            34.792787,\n                            32.0878055\n                        ],\n                        [\n                            34.7927799,\n                            32.0876342\n                        ]\n                    ]\n                ]\n            },\n            "geometry_name": "geom",\n            "properties": {\n                "osm_id": 149367207,\n                "id": 515818,\n                "relative_feature_height": 3,\n                "all_entity_names": null,\n                "building_type": "yes",\n                "entity": null,\n                "sensitivity": "\u05e8\u05d2\u05d9\u05e9",\n                "entity_id": "{538d6ffb-35cd-4034-97b6-7b8ebefab8f1}",\n                "is_sensitive": true,\n                "date": "2022-07-26T11:14:18Z"\n            },\n            "bbox": [\n                34.7927799,\n                32.0876309,\n                34.7929,\n                32.0878055\n            ]\n        }\n    ],\n    "totalFeatures": 2070,\n    "numberMatched": 2070,\n    "numberReturned": 2,\n    "timeStamp": "2022-07-27T08:39:00.630Z",\n    "crs": {\n        "type": "name",\n        "properties": {\n            "name": "urn:ogc:def:crs:EPSG::4326"\n        }\n    },\n    "bbox": [\n        34.7924709,\n        32.0876309,\n        34.7929,\n        32.0878112\n    ]\n}\n'))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"if we'd like to filter buildings by a set of multiple parameters we'll achieve that by a ",(0,i.kt)("inlineCode",{parentName:"li"},"GetFeature")," ",(0,i.kt)("strong",{parentName:"li"},"POST")," request.\nSay we would like to retrieve only the buildings who's ",(0,i.kt)("inlineCode",{parentName:"li"},"relative_feature_height")," is greater than ",(0,i.kt)("strong",{parentName:"li"},"10")," and their ",(0,i.kt)("inlineCode",{parentName:"li"},"is_sensitive")," flag is ",(0,i.kt)("strong",{parentName:"li"},"falsy"),".")),(0,i.kt)("p",null,"We'll invoke a request with the following body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",2:!0,className:"language-xml",metastring:'title="Query with 2 filters"',title:'"Query',with:!0,'filters"':!0},'<wfs:GetFeature service="WFS" version="2.0.0" xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd" count="2" outputFormat="application/json">\n    <wfs:Query typeNames="vector:buildings">\n        <fes:Filter>\n            <And>\n            <fes:PropertyIsGreaterThan>\n               <fes:ValueReference>relative_feature_height</fes:ValueReference>\n               <fes:Literal>10</fes:Literal>\n            </fes:PropertyIsGreaterThan>\n            <fes:PropertyIsEqualTo>\n               <fes:ValueReference>is_sensitive</fes:ValueReference>\n               <fes:Literal>false</fes:Literal>\n            </fes:PropertyIsEqualTo>\n            </And>\n        </fes:Filter>\n    </wfs:Query>\n</wfs:GetFeature>\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Reponse in GeoJSON"',title:'"Reponse',in:!0,'GeoJSON"':!0},'{\n    "type": "FeatureCollection",\n    "features": [\n        {\n            "type": "Feature",\n            "id": "buildings.{6544d0de-37f2-4cb7-8122-07153d659624}",\n            "geometry": {\n                "type": "Polygon",\n                "coordinates": [\n                    [\n                        [\n                            34.3178082,\n                            31.2941689\n                        ],\n                        [\n                            34.3178674,\n                            31.294039\n                        ],\n                        [\n                            34.3180002,\n                            31.2940832\n                        ],\n                        [\n                            34.317941,\n                            31.2942131\n                        ],\n                        [\n                            34.3178082,\n                            31.2941689\n                        ]\n                    ]\n                ]\n            },\n            "geometry_name": "geom",\n            "properties": {\n                "osm_id": 306816301,\n                "id": 345546,\n                "relative_feature_height": 11.5,\n                "all_entity_names": null,\n                "building_type": "yes",\n                "entity": null,\n                "sensitivity": "\u05dc\u05dc\u05d0 \u05d4\u05ea\u05d9\u05d9\u05d7\u05e1\u05d5\u05ea",\n                "entity_id": "{6544d0de-37f2-4cb7-8122-07153d659624}",\n                "is_sensitive": false,\n                "date": "2022-07-26T11:14:25Z"\n            },\n            "bbox": [\n                34.3178082,\n                31.294039,\n                34.3180002,\n                31.2942131\n            ]\n        },\n        {\n            "type": "Feature",\n            "id": "buildings.{2d2a3a5f-eae9-4806-b68d-7e346c3cdfa8}",\n            "geometry": {\n                "type": "Polygon",\n                "coordinates": [\n                    [\n                        [\n                            34.3178424,\n                            31.2935296\n                        ],\n                        [\n                            34.317868,\n                            31.2934804\n                        ],\n                        [\n                            34.3179474,\n                            31.2935106\n                        ],\n                        [\n                            34.3179218,\n                            31.2935598\n                        ],\n                        [\n                            34.3178424,\n                            31.2935296\n                        ]\n                    ]\n                ]\n            },\n            "geometry_name": "geom",\n            "properties": {\n                "osm_id": 306815931,\n                "id": 345547,\n                "relative_feature_height": 33.612,\n                "all_entity_names": null,\n                "building_type": "yes",\n                "entity": null,\n                "sensitivity": "\u05dc\u05dc\u05d0 \u05d4\u05ea\u05d9\u05d9\u05d7\u05e1\u05d5\u05ea",\n                "entity_id": "{2d2a3a5f-eae9-4806-b68d-7e346c3cdfa8}",\n                "is_sensitive": false,\n                "date": "2022-07-26T11:14:25Z"\n            },\n            "bbox": [\n                34.3178424,\n                31.2934804,\n                34.3179474,\n                31.2935598\n            ]\n        }\n    ],\n    "totalFeatures": 385759,\n    "numberMatched": 385759,\n    "numberReturned": 2,\n    "timeStamp": "2022-07-27T09:42:24.943Z",\n    "crs": {\n        "type": "name",\n        "properties": {\n            "name": "urn:ogc:def:crs:EPSG::4326"\n        }\n    },\n    "bbox": [\n        34.3178082,\n        31.2934804,\n        34.3180002,\n        31.2942131\n    ]\n}\n'))))}d.isMDXComponent=!0}}]);